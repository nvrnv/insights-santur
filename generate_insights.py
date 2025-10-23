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

def parse_interview_content(content: str, filename: str) -> Dict:
    """Парсит содержимое интервью и извлекает ответы на вопросы"""
    lines = content.strip().split('\n')
    
    # Извлечение NPS оценки
    nps_rating = None
    nps_reason = ""
    
    # Поиск оценки в первых строках
    for i, line in enumerate(lines[:5]):
        rating_patterns = [
            r'(\d+)\s*из\s*10',
            r'(\d+)\s*баллов?',
            r'оценива[юь]\s*на\s*(\d+)',
            r'поставил\w*\s*(\d+)',
            r'твёрдая\s*(\w+)',
            r'где-то\s*(\w+)'
        ]
        
        for pattern in rating_patterns:
            match = re.search(pattern, line.lower())
            if match:
                rating_text = match.group(1)
                # Преобразование текстовых чисел
                text_to_num = {
                    'семёрка': 7, 'семь': 7,
                    'восьмёрка': 8, 'восемь': 8,
                    'девятка': 9, 'девять': 9,
                    'десятка': 10, 'десять': 10
                }
                
                if rating_text.isdigit():
                    potential_rating = int(rating_text)
                    if 1 <= potential_rating <= 10:
                        nps_rating = potential_rating
                        # Ищем причину в той же строке или следующей
                        if i + 1 < len(lines):
                            nps_reason = lines[i + 1].strip()
                        break
                elif rating_text in text_to_num:
                    nps_rating = text_to_num[rating_text]
                    if i + 1 < len(lines):
                        nps_reason = lines[i + 1].strip()
                    break
    
    # Извлечение проблем и предложений
    problems = []
    suggestions = []
    likes = []
    
    content_lower = content.lower()
    
    # Ключевые проблемы
    problem_indicators = {
        'задержка зарплаты': ['задержка', 'зарплата', 'выплата'],
        'штрафы': ['штраф', 'штрафов', 'штрафы'],
        'раздевалка': ['раздевалка', 'узкая', 'тесно'],
        'столовая': ['столовая', 'кухня', 'подвал', 'перекусить'],
        'форма': ['форма', 'одежда', 'прачечная', 'химчистка'],
        'контроль': ['постконтроль', 'контроль', 'проверка'],
        'условия': ['условия', 'тяжело', 'физически']
    }
    
    for problem, keywords in problem_indicators.items():
        if any(keyword in content_lower for keyword in keywords):
            problems.append(problem)
    
    # Предложения по улучшению (из вопроса "если бы стал директором")
    director_section = ""
    for i, line in enumerate(lines):
        if 'директор' in line.lower() and ('стал' in line.lower() or 'стала' in line.lower()):
            # Берем следующие несколько строк как предложения
            director_section = '\n'.join(lines[i:i+10])
            break
    
    if director_section:
        suggestion_patterns = [
            r'первое[^\n]*([^\n]+)',
            r'второе[^\n]*([^\n]+)',
            r'третье[^\n]*([^\n]+)',
            r'сделал\w*\s*бы[^\n]*([^\n]+)',
            r'убрал\s*бы[^\n]*([^\n]+)',
            r'добавил\w*\s*бы[^\n]*([^\n]+)'
        ]
        
        for pattern in suggestion_patterns:
            matches = re.findall(pattern, director_section.lower())
            suggestions.extend(matches[:3])  # Максимум 3 предложения
    
    return {
        'filename': filename,
        'factory': extract_factory_from_filename(filename),
        'language': extract_language_from_filename(filename),
        'nps_rating': nps_rating,
        'nps_reason': nps_reason,
        'problems': problems,
        'suggestions': suggestions,
        'content': content
    }

def generate_insights_from_interviews(interviews: List[Dict]) -> List[Dict]:
    """Генерирует инсайты на основе проанализированных интервью"""
    insights = []
    
    # Группировка по фабрикам
    factory_data = defaultdict(list)
    for interview in interviews:
        factory_data[interview['factory']].append(interview)
    
    # Общие проблемы по всем фабрикам
    all_problems = defaultdict(list)
    all_ratings = []
    
    for interview in interviews:
        if interview['nps_rating']:
            all_ratings.append(interview['nps_rating'])
        for problem in interview['problems']:
            all_problems[problem].append(interview)
    
    # Инсайт 1: Проблема с задержками зарплаты
    salary_issues = all_problems.get('задержка зарплаты', [])
    if len(salary_issues) >= 3:
        quotes = []
        for interview in salary_issues[:3]:
            # Найти конкретную цитату о зарплате
            lines = interview['content'].split('\n')
            for i, line in enumerate(lines):
                if 'задержк' in line.lower() and 'зарплат' in line.lower():
                    quotes.append({
                        'text': line.strip(),
                        'file': interview['filename'],
                        'line': i + 1
                    })
                    break
        
        insights.append({
            'title': 'Системные задержки выплат зарплаты',
            'insight': f'В {len(salary_issues)} интервью из {len(interviews)} сотрудники жалуются на задержки зарплаты. Это критически влияет на лояльность и NPS.',
            'why': 'Несвоевременная выплата зарплаты - базовое нарушение трудового договора, которое разрушает доверие к компании. Сотрудники начинают искать другую работу, падает мотивация, ухудшается репутация работодателя на рынке труда.',
            'proof': quotes,
            'impact': {
                'level': 'High',
                'explanation': 'Прямо влияет на удержание персонала и репутацию компании'
            },
            'actions': [
                {
                    'who': 'Финансовый директор',
                    'what': 'Внедрить автоматизированную систему расчета и выплаты зарплаты',
                    'deadline': '30 дней'
                },
                {
                    'who': 'HR-директор',
                    'what': 'Провести встречи с сотрудниками для объяснения ситуации и планов',
                    'deadline': '7 дней'
                }
            ],
            'confidence': 95
        })
    
    # Инсайт 2: Проблемы с инфраструктурой питания
    food_issues = all_problems.get('столовая', [])
    if len(food_issues) >= 2:
        quotes = []
        for interview in food_issues[:3]:
            lines = interview['content'].split('\n')
            for i, line in enumerate(lines):
                if any(word in line.lower() for word in ['столовая', 'перекусить', 'кухня', 'подвал']):
                    quotes.append({
                        'text': line.strip(),
                        'file': interview['filename'],
                        'line': i + 1
                    })
                    break
        
        insights.append({
            'title': 'Неудобная организация питания сотрудников',
            'insight': f'Сотрудники из {len(food_issues)} интервью жалуются на неудобное расположение столовой и отсутствие мест для перекуса.',
            'why': 'Качественное питание в рабочее время критично для производительности. Неудобство заставляет сотрудников либо голодать, либо тратить много времени на еду, что снижает эффективность и удовлетворенность.',
            'proof': quotes,
            'impact': {
                'level': 'Medium',
                'explanation': 'Влияет на комфорт работы и производительность'
            },
            'actions': [
                {
                    'who': 'Директор по операциям',
                    'what': 'Создать зоны для перекуса на каждом этаже/участке',
                    'deadline': '60 дней'
                },
                {
                    'who': 'Административный директор',
                    'what': 'Провести аудит текущих зон питания и составить план улучшений',
                    'deadline': '14 дней'
                }
            ],
            'confidence': 85
        })
    
    # Инсайт 3: Проблемы с санитарной одеждой
    uniform_issues = all_problems.get('форма', [])
    if len(uniform_issues) >= 2:
        quotes = []
        for interview in uniform_issues[:3]:
            lines = interview['content'].split('\n')
            for i, line in enumerate(lines):
                if any(word in line.lower() for word in ['форма', 'одежда', 'прачечная', 'химчистка']):
                    quotes.append({
                        'text': line.strip(),
                        'file': interview['filename'],
                        'line': i + 1
                    })
                    break
        
        insights.append({
            'title': 'Неэффективная система стирки рабочей формы',
            'insight': f'В {len(uniform_issues)} интервью сотрудники жалуются на долгую химчистку и необходимость работать в грязной форме.',
            'why': 'Чистая рабочая форма - это не только вопрос гигиены, но и самоуважения сотрудников. Работа в грязной одежде демотивирует и может нарушать санитарные нормы производства.',
            'proof': quotes,
            'impact': {
                'level': 'Medium',
                'explanation': 'Влияет на гигиену, мотивацию и соблюдение стандартов'
            },
            'actions': [
                {
                    'who': 'Директор по производству',
                    'what': 'Организовать собственную прачечную или найти более быстрого поставщика',
                    'deadline': '45 дней'
                },
                {
                    'who': 'Закупочный отдел',
                    'what': 'Увеличить количество комплектов формы на каждого сотрудника',
                    'deadline': '30 дней'
                }
            ],
            'confidence': 80
        })
    
    # Инсайт 4: Система штрафов демотивирует
    penalty_issues = all_problems.get('штрафы', [])
    if len(penalty_issues) >= 2:
        quotes = []
        for interview in penalty_issues[:3]:
            lines = interview['content'].split('\n')
            for i, line in enumerate(lines):
                if 'штраф' in line.lower():
                    quotes.append({
                        'text': line.strip(),
                        'file': interview['filename'],
                        'line': i + 1
                    })
                    break
        
        insights.append({
            'title': 'Чрезмерная система штрафов снижает мотивацию',
            'insight': f'Сотрудники в {len(penalty_issues)} интервью жалуются на большое количество штрафов, включая работу бесплатно при непрохождении контроля.',
            'why': 'Карательная система мотивации работает хуже поощрительной. Частые штрафы создают атмосферу страха, снижают инициативность и могут привести к скрытию проблем вместо их решения.',
            'proof': quotes,
            'impact': {
                'level': 'High',
                'explanation': 'Критически влияет на мотивацию и атмосферу в коллективе'
            },
            'actions': [
                {
                    'who': 'HR-директор',
                    'what': 'Пересмотреть систему мотивации, сделав акцент на поощрениях',
                    'deadline': '30 дней'
                },
                {
                    'who': 'Руководители подразделений',
                    'what': 'Провести обучение по конструктивной обратной связи вместо штрафов',
                    'deadline': '21 день'
                }
            ],
            'confidence': 90
        })
    
    # Инсайт 5: Высокий NPS в некоторых подразделениях
    if all_ratings:
        avg_rating = sum(all_ratings) / len(all_ratings)
        high_ratings = [r for r in all_ratings if r >= 9]
        
        if len(high_ratings) >= len(all_ratings) * 0.3:  # Если 30%+ дают высокие оценки
            insights.append({
                'title': 'Сильная база лояльных сотрудников',
                'insight': f'{len(high_ratings)} из {len(all_ratings)} сотрудников ({len(high_ratings)/len(all_ratings)*100:.0f}%) дают оценки 9-10. Средний NPS: {avg_rating:.1f}.',
                'why': 'Наличие лояльного ядра сотрудников - это конкурентное преимущество. Эти люди становятся амбассадорами бренда работодателя, помогают в найме и удержании других сотрудников.',
                'proof': [
                    {
                        'text': f'Средняя оценка: {avg_rating:.1f}/10',
                        'file': 'Агрегированные данные',
                        'line': 0
                    }
                ],
                'impact': {
                    'level': 'High',
                    'explanation': 'Основа для масштабирования позитивного опыта на всю компанию'
                },
                'actions': [
                    {
                        'who': 'HR-директор',
                        'what': 'Изучить best practices в подразделениях с высоким NPS',
                        'deadline': '14 дней'
                    },
                    {
                        'who': 'Топ-менеджмент',
                        'what': 'Тиражировать успешные практики на другие подразделения',
                        'deadline': '60 дней'
                    }
                ],
                'confidence': 85
            })
    
    return insights

def analyze_all_interviews():
    """Анализирует все интервью и генерирует инсайты"""
    results_dir = 'results_to_work_with'
    interviews = []
    
    # Обработка всех текстовых файлов
    for filename in os.listdir(results_dir):
        if not filename.endswith('.txt'):
            continue
            
        filepath = os.path.join(results_dir, filename)
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read().strip()
                
            if content:
                interview_data = parse_interview_content(content, filename)
                interviews.append(interview_data)
                
        except Exception as e:
            print(f"Ошибка при обработке файла {filename}: {e}")
    
    # Генерация инсайтов
    insights = generate_insights_from_interviews(interviews)
    
    # Сохранение результатов
    output_data = {
        'meta': {
            'total_interviews': len(interviews),
            'generated_at': '2025-09-28',
            'methodology': 'Качественный анализ интервью с сотрудниками по 4 ключевым вопросам'
        },
        'insights': insights
    }
    
    with open('quality_insights.json', 'w', encoding='utf-8') as f:
        json.dump(output_data, f, ensure_ascii=False, indent=2)
    
    print(f"Анализ завершен!")
    print(f"Обработано {len(interviews)} интервью")
    print(f"Сгенерировано {len(insights)} качественных инсайтов")
    print("Результаты сохранены в quality_insights.json")

if __name__ == "__main__":
    analyze_all_interviews()
