#!/usr/bin/env python3
import os
import json
import re
from collections import defaultdict
from typing import Dict, List, Tuple

def extract_factory_from_filename(filename: str) -> str:
    """Извлекает название фабрики из имени файла"""
    if "АУП-Производства" in filename:
        return "АУП Производства"
    elif "Управляющая-Компания" in filename:
        return "Управляющая Компания"
    elif "Фабрика-Шейнкмана" in filename:
        return "Фабрика Шейнкмана"
    elif "Фабрика-Щербакова" in filename:
        return "Фабрика Щербакова"
    elif "Фабрика-Юмашева" in filename:
        if "Повара" in filename:
            return "Фабрика Юмашева (Повара)"
        elif "Упаковка" in filename:
            return "Фабрика Юмашева (Упаковка)"
        elif "АХО" in filename:
            return "Фабрика Юмашева (АХО)"
        else:
            return "Фабрика Юмашева"
    return "Неизвестно"

def extract_language_from_filename(filename: str) -> str:
    """Извлекает язык из имени файла"""
    if "Русский" in filename:
        return "Русский"
    elif "Киргизский" in filename:
        return "Киргизский"
    elif "Узбекский" in filename:
        return "Узбекский"
    elif "Английский" in filename:
        return "Английский"
    elif "Французский" in filename:
        return "Французский"
    return "Неизвестно"

def analyze_feedback_content(content: str) -> Dict:
    """Анализирует содержимое отзыва и извлекает ключевую информацию"""
    content = content.lower()
    
    # Извлечение оценки (NPS score)
    rating_patterns = [
        r'оценива[юь]\s*на\s*(\d+)',
        r'поставил\w*\s*(\d+)',
        r'(\d+)\s*баллов?',
        r'от\s*одного\s*до\s*десяти[^\d]*(\d+)',
        r'(\d+)\s*из\s*10',
        r'рекомендовать.*?(\d+)',
        r'готов\s+рекомендовать.*?(\d+)'
    ]
    
    rating = None
    for pattern in rating_patterns:
        match = re.search(pattern, content)
        if match:
            potential_rating = int(match.group(1))
            # Валидация: рейтинг должен быть от 1 до 10
            if 1 <= potential_rating <= 10:
                rating = potential_rating
                break
    
    # Определение тональности
    positive_indicators = [
        'нравится', 'хорошо', 'отлично', 'замечательно', 'прекрасно',
        'рекомендую', 'возможности', 'дружный', 'комфортно', 'удобно'
    ]
    
    negative_indicators = [
        'не нравится', 'плохо', 'проблема', 'недостаток', 'минус',
        'бесит', 'раздражает', 'неудобно', 'штраф', 'задержка'
    ]
    
    positive_count = sum(content.count(word) for word in positive_indicators)
    negative_count = sum(content.count(word) for word in negative_indicators)
    
    sentiment = 'нейтральный'
    if positive_count > negative_count + 1:
        sentiment = 'позитивный'
    elif negative_count > positive_count + 1:
        sentiment = 'негативный'
    
    # Извлечение ключевых тем
    themes = {
        'зарплата': ['зарплата', 'оплата', 'деньги', 'выплата'],
        'условия_работы': ['условия', 'рабочее место', 'раздевалка', 'столовая'],
        'коллектив': ['коллектив', 'коллеги', 'команда', 'люди'],
        'руководство': ['директор', 'руководство', 'начальник', 'управление'],
        'процессы': ['работа', 'процесс', 'организация', 'контроль'],
        'развитие': ['рост', 'развитие', 'возможности', 'карьера']
    }
    
    mentioned_themes = []
    for theme, keywords in themes.items():
        if any(keyword in content for keyword in keywords):
            mentioned_themes.append(theme)
    
    return {
        'rating': rating,
        'sentiment': sentiment,
        'themes': mentioned_themes,
        'positive_count': positive_count,
        'negative_count': negative_count,
        'length': len(content.split())
    }

def generate_insights_from_data(factory_data: Dict) -> List[Dict]:
    """Генерирует инсайты на основе анализированных данных"""
    insights = []
    
    for factory, data in factory_data.items():
        if not data['responses']:
            continue
            
        ratings = [r['rating'] for r in data['responses'] if r['rating'] is not None]
        avg_rating = sum(ratings) / len(ratings) if ratings else 0
        total_responses = len(data['responses'])
        
        positive_responses = [r for r in data['responses'] if r['sentiment'] == 'позитивный']
        negative_responses = [r for r in data['responses'] if r['sentiment'] == 'негативный']
        
        # Получаем примеры цитат для обоснования
        def get_sample_quotes(responses, max_quotes=3):
            sample_quotes = []
            for response in responses[:max_quotes]:
                filename = response.get('filename', '')
                if filename:
                    sample_quotes.append(f"Файл: {filename}")
            return sample_quotes
        
        # Инсайт по NPS - только если есть минимум 3 оценки для статистической значимости
        if len(ratings) >= 3:
            if avg_rating < 7:
                sample_files = get_sample_quotes([r for r in data['responses'] if r['rating'] is not None and r['rating'] < 7])
                evidence = f"Прямые жалобы от сотрудников в {len([r for r in data['responses'] if r['rating'] is not None and r['rating'] < 7])} файлах интервью. "
                if sample_files:
                    evidence += f"Примеры: {', '.join(sample_files[:2])}"
                
                insights.append({
                    'type': 'Слабый сигнал',
                    'title': f'Низкий NPS на {factory}',
                    'description': f'Средняя оценка рекомендации: {avg_rating:.1f}/10 (на основе {len(ratings)} оценок)',
                    'impact': 9,
                    'confidence': 8 if len(ratings) >= 10 else 6,
                    'ease': 5,
                    'factory': factory,
                    'business_impact': evidence
                })
            elif avg_rating >= 8:
                high_rating_count = len([r for r in data['responses'] if r['rating'] is not None and r['rating'] >= 8])
                sample_files = get_sample_quotes([r for r in data['responses'] if r['rating'] is not None and r['rating'] >= 8])
                evidence = f"Высокие оценки в {high_rating_count} из {len(ratings)} интервью. "
                if sample_files:
                    evidence += f"Примеры позитивных отзывов: {', '.join(sample_files[:2])}"
                
                insights.append({
                    'type': 'Подтвержденный инсайт',
                    'title': f'Высокая лояльность сотрудников на {factory}',
                    'description': f'Средняя оценка рекомендации: {avg_rating:.1f}/10 (на основе {len(ratings)} оценок)',
                    'impact': 7,
                    'confidence': 9 if len(ratings) >= 10 else 7,
                    'ease': 8,
                    'factory': factory,
                    'business_impact': evidence
                })
        
        # Инсайт по тематикам - только для подразделений с достаточным количеством респондентов
        if total_responses >= 5:
            theme_counts = defaultdict(int)
            for response in data['responses']:
                for theme in response['themes']:
                    theme_counts[theme] += 1
            
            # Анализируем наиболее критичные темы
            critical_themes = []
            for theme_name, count in theme_counts.items():
                percentage = count / total_responses
                if percentage >= 0.4:  # 40% и более упоминаний
                    critical_themes.append((theme_name, count, percentage))
            
            theme_labels = {
                'зарплата': ('проблемы с оплатой труда', 9, 7),  # (название, impact, confidence)
                'условия_работы': ('неудовлетворительные условия работы', 8, 8),
                'коллектив': ('проблемы в коллективе', 6, 7),
                'руководство': ('проблемы с менеджментом', 8, 7),
                'процессы': ('неэффективность рабочих процессов', 7, 8),
                'развитие': ('недостаток возможностей развития', 6, 6)
            }
            
            for theme_name, count, percentage in critical_themes:
                if theme_name in theme_labels:
                    label, impact, confidence = theme_labels[theme_name]
                    insight_type = 'Слабый сигнал' if impact >= 8 else 'Подтвержденный инсайт'
                    
                    # Получаем примеры файлов с этой темой
                    theme_files = []
                    for response in data['responses']:
                        if theme_name in response['themes']:
                            filename = response.get('filename', '')
                            if filename:
                                theme_files.append(filename)
                    
                    evidence = f"Упоминания в {count} из {total_responses} интервью ({percentage:.0%}). "
                    if theme_files:
                        evidence += f"Примеры файлов: {', '.join(theme_files[:3])}"
                    
                    insights.append({
                        'type': insight_type,
                        'title': f'Системная проблема: {label}',
                        'description': f'{count} из {total_responses} респондентов ({percentage:.0%}) упоминают проблемы в этой области',
                        'impact': impact,
                        'confidence': confidence,
                        'ease': 4 if impact >= 8 else 6,
                        'factory': factory,
                        'business_impact': evidence
                    })
        
        # Инсайт по негативным отзывам
        negative_ratio = len(negative_responses) / len(data['responses']) if data['responses'] else 0
        if negative_ratio > 0.4:
            negative_files = get_sample_quotes(negative_responses)
            evidence = f"Негативная тональность в {len(negative_responses)} из {total_responses} интервью ({negative_ratio:.0%}). "
            if negative_files:
                evidence += f"Примеры: {', '.join(negative_files[:3])}"
            
            insights.append({
                'type': 'Слабый сигнал',
                'title': f'Высокая доля негативных отзывов на {factory}',
                'description': f'{negative_ratio:.1%} отзывов имеют негативную тональность',
                'impact': 9,
                'confidence': 8,
                'ease': 4,
                'factory': factory,
                'business_impact': evidence
            })
    
    return insights

def analyze_all_files():
    """Анализирует все файлы в папке results_to_work_with"""
    results_dir = 'results_to_work_with'
    factory_data = defaultdict(lambda: {'responses': [], 'languages': set()})
    
    # Обработка всех текстовых файлов
    for filename in os.listdir(results_dir):
        if not filename.endswith('.txt'):
            continue
            
        factory = extract_factory_from_filename(filename)
        language = extract_language_from_filename(filename)
        
        filepath = os.path.join(results_dir, filename)
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read().strip()
                
            if content:
                analysis = analyze_feedback_content(content)
                analysis['filename'] = filename
                analysis['language'] = language
                
                factory_data[factory]['responses'].append(analysis)
                factory_data[factory]['languages'].add(language)
                
        except Exception as e:
            print(f"Ошибка при обработке файла {filename}: {e}")
    
    # Генерация инсайтов
    insights = generate_insights_from_data(factory_data)
    
    # Подсчет ICE Score
    for insight in insights:
        ice_score = (insight['impact'] + insight['confidence'] + insight['ease']) / 3
        insight['ice_score'] = round(ice_score, 1)
    
    # Сортировка по ICE Score
    insights.sort(key=lambda x: x['ice_score'], reverse=True)
    
    # Сохранение результатов
    output_data = {
        'insights': insights,
        'factory_summary': {
            factory: {
                'total_responses': len(data['responses']),
                'languages': list(data['languages']),
                'avg_rating': round(sum(r['rating'] for r in data['responses'] if r['rating'] is not None) / 
                                 len([r for r in data['responses'] if r['rating'] is not None]), 1) 
                            if [r for r in data['responses'] if r['rating'] is not None] else 0,
                'sentiment_distribution': {
                    'позитивный': len([r for r in data['responses'] if r['sentiment'] == 'позитивный']),
                    'негативный': len([r for r in data['responses'] if r['sentiment'] == 'негативный']),
                    'нейтральный': len([r for r in data['responses'] if r['sentiment'] == 'нейтральный'])
                }
            }
            for factory, data in factory_data.items()
        },
        'generated_at': '2025-09-28'
    }
    
    with open('insights_analysis.json', 'w', encoding='utf-8') as f:
        json.dump(output_data, f, ensure_ascii=False, indent=2)
    
    # Также копируем в public для веб-доступа
    with open('public/insights_analysis.json', 'w', encoding='utf-8') as f:
        json.dump(output_data, f, ensure_ascii=False, indent=2)
    
    print(f"Анализ завершен! Обработано {sum(len(data['responses']) for data in factory_data.values())} отзывов")
    print(f"Сгенерировано {len(insights)} инсайтов")
    print("Результаты сохранены в insights_analysis.json и public/insights_analysis.json")

if __name__ == "__main__":
    analyze_all_files()
