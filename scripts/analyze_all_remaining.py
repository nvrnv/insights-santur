#!/usr/bin/env python3
"""
Анализ всех оставшихся тем одновременно для ускорения процесса
"""
import os
import json
import re
from pathlib import Path
from typing import Dict, List, Tuple

def analyze_topic(topic_name, patterns):
    """Универсальная функция анализа темы"""
    results_dir = Path("/Users/nvrnv/gurman-insights/results_to_work_with")
    analysis_results = {
        "topic": topic_name,
        "total_files": 0,
        "files_with_mentions": 0,
        "total_mentions": 0,
        "detailed_mentions": [],
        "department_breakdown": {},
        "language_breakdown": {},
        "quotes_with_context": []
    }
    
    if not results_dir.exists():
        print(f"Директория {results_dir} не найдена")
        return analysis_results
    
    # Обрабатываем все файлы
    for file_path in results_dir.glob("*.txt"):
        analysis_results["total_files"] += 1
        
        # Извлекаем информацию из имени файла
        filename = file_path.name
        parts = filename.replace('.txt', '').split('_')
        
        if len(parts) >= 3:
            department = parts[0].replace('-', ' ')
            language = parts[2] if len(parts) > 2 else "Unknown"
        else:
            department = "Unknown"
            language = "Unknown"
        
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read().lower()
                
            # Ищем упоминания
            file_mentions = []
            for pattern in patterns:
                matches = re.finditer(pattern, content, re.IGNORECASE | re.UNICODE)
                for match in matches:
                    # Получаем контекст (60 символов до и после)
                    start = max(0, match.start() - 60)
                    end = min(len(content), match.end() + 60)
                    context = content[start:end].strip()
                    
                    file_mentions.append({
                        "pattern": pattern,
                        "match": match.group(),
                        "context": context,
                        "position": match.start()
                    })
            
            if file_mentions:
                analysis_results["files_with_mentions"] += 1
                analysis_results["total_mentions"] += len(file_mentions)
                
                # Добавляем в breakdown по департаментам
                if department not in analysis_results["department_breakdown"]:
                    analysis_results["department_breakdown"][department] = 0
                analysis_results["department_breakdown"][department] += 1
                
                # Добавляем в breakdown по языкам
                if language not in analysis_results["language_breakdown"]:
                    analysis_results["language_breakdown"][language] = 0
                analysis_results["language_breakdown"][language] += 1
                
                # Сохраняем детальную информацию
                analysis_results["detailed_mentions"].append({
                    "file": filename,
                    "department": department,
                    "language": language,
                    "mentions_count": len(file_mentions),
                    "mentions": file_mentions[:3]  # Первые 3 упоминания для экономии места
                })
                
                # Добавляем лучшие цитаты (с наибольшим контекстом)
                for mention in file_mentions[:2]:  # Берем первые 2 упоминания из файла
                    analysis_results["quotes_with_context"].append({
                        "quote": mention["context"],
                        "file": filename,
                        "department": department,
                        "language": language
                    })
                    
        except Exception as e:
            print(f"Ошибка при обработке файла {file_path}: {e}")
    
    # Вычисляем процент интервью с упоминаниями
    if analysis_results["total_files"] > 0:
        analysis_results["percentage_interviews"] = round(
            (analysis_results["files_with_mentions"] / analysis_results["total_files"]) * 100, 1
        )
    else:
        analysis_results["percentage_interviews"] = 0
    
    return analysis_results

def main():
    # Определяем все оставшиеся темы и их паттерны
    topics = {
        "Раздевалки и санитарные условия": [
            r'раздевалк\w*',
            r'шкафчик\w*',
            r'туалет\w*',
            r'санитарн\w*',
            r'гигиен\w*',
            r'чистот\w*',
            r'грязн\w*',
            r'убор\w*',
            r'мыт\w*',
            r'душ\w*',
            r'умывальник\w*',
            r'зеркал\w*',
            r'освещени\w*\s+в\s+туалет\w*',
            r'вентиляци\w*\s+в\s+туалет\w*',
            r'тесн\w*\s+раздевалк\w*',
            r'простор\w*\s+раздевалк\w*',
            r'удобн\w*\s+раздевалк\w*',
            r'неудобн\w*\s+раздевалк\w*'
        ],
        "Развитие и карьерный рост": [
            r'развити\w*',
            r'карьер\w*',
            r'рост\w*',
            r'продвижени\w*',
            r'повышени\w*',
            r'обучени\w*',
            r'образовани\w*',
            r'курс\w*',
            r'тренинг\w*',
            r'семинар\w*',
            r'квалификаци\w*',
            r'навык\w*',
            r'умени\w*',
            r'опыт\w*',
            r'стаж\w*',
            r'перспектив\w*',
            r'возможност\w*\s+рост\w*',
            r'планы\s+на\s+будущ\w*',
            r'амбици\w*',
            r'цел\w*\s+в\s+карьер\w*'
        ],
        "Контроль качества и штрафы": [
            r'контрол\w*\s+качеств\w*',
            r'качеств\w*',
            r'штраф\w*',
            r'наказани\w*',
            r'взыскани\w*',
            r'санкци\w*',
            r'проверк\w*',
            r'инспекци\w*',
            r'аудит\w*',
            r'оценк\w*\s+качеств\w*',
            r'стандарт\w*\s+качеств\w*',
            r'требовани\w*\s+к\s+качеств\w*',
            r'брак\w*',
            r'дефект\w*',
            r'ошибк\w*',
            r'нарушени\w*',
            r'несоответстви\w*',
            r'претензи\w*',
            r'жалоб\w*\s+на\s+качеств\w*'
        ],
        "Форма и рабочая одежда": [
            r'форм\w*',
            r'одежд\w*',
            r'униформ\w*',
            r'костюм\w*',
            r'халат\w*',
            r'фартук\w*',
            r'головн\w*\s+убор\w*',
            r'шапочк\w*',
            r'перчатк\w*',
            r'обув\w*',
            r'ботинк\w*',
            r'сапог\w*',
            r'размер\w*\s+одежд\w*',
            r'качеств\w*\s+одежд\w*',
            r'удобн\w*\s+одежд\w*',
            r'неудобн\w*\s+одежд\w*',
            r'стирк\w*',
            r'химчистк\w*',
            r'замен\w*\s+одежд\w*',
            r'выдач\w*\s+одежд\w*'
        ]
    }
    
    # Анализируем все темы
    all_results = {}
    for topic_name, patterns in topics.items():
        print(f"Анализируем тему: {topic_name}")
        results = analyze_topic(topic_name, patterns)
        all_results[topic_name] = results
        
        # Сохраняем результаты в отдельные файлы
        filename = topic_name.lower().replace(' ', '_').replace('и', 'i')
        output_file = f"/Users/nvrnv/gurman-insights/{filename}_analysis.json"
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(results, f, ensure_ascii=False, indent=2)
        
        print(f"  Файлов с упоминаниями: {results['files_with_mentions']}")
        print(f"  Процент интервью: {results['percentage_interviews']}%")
        print(f"  Всего упоминаний: {results['total_mentions']}")
        print(f"  Сохранено в: {output_file}")
        print()
    
    # Сохраняем общий файл со всеми результатами
    summary_file = "/Users/nvrnv/gurman-insights/remaining_topics_summary.json"
    with open(summary_file, 'w', encoding='utf-8') as f:
        json.dump(all_results, f, ensure_ascii=False, indent=2)
    
    print(f"Общий файл сохранен в: {summary_file}")
    
    # Выводим сводку
    print("\n=== СВОДКА ПО ВСЕМ ОСТАВШИМСЯ ТЕМАМ ===")
    for topic_name, results in all_results.items():
        print(f"{topic_name}: {results['percentage_interviews']}% интервью ({results['files_with_mentions']}/{results['total_files']})")

if __name__ == "__main__":
    main()
