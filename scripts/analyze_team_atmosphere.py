#!/usr/bin/env python3
"""
Анализ темы "Коллектив и атмосфера" во всех интервью
"""
import os
import json
import re
from pathlib import Path
from typing import Dict, List, Tuple

def analyze_team_atmosphere():
    """
    Промпт для анализа коллектива и атмосферы:
    
    Ищем упоминания о:
    1. Коллегах и команде (коллеги, команда, коллектив)
    2. Взаимоотношениях (дружный, сплоченный, помогают)
    3. Атмосфере (атмосфера, настроение, позитивный)
    4. Поддержке и взаимопомощи (поддержка, помощь, объясняют)
    5. Конфликтах или проблемах в коллективе
    6. Общении и коммуникации
    """
    
    # Паттерны для поиска упоминаний о коллективе и атмосфере
    team_patterns = [
        r'коллектив\w*',
        r'коллег\w*',
        r'команд\w*',
        r'атмосфер\w*',
        r'дружн\w*',
        r'сплочен\w*',
        r'позитивн\w*',
        r'помога\w*',
        r'поддерж\w*',
        r'объясня\w*',
        r'общени\w*',
        r'взаимоотношени\w*',
        r'отношени\w*\s+с\s+коллег\w*',
        r'работа\w*\s+в\s+команд\w*',
        r'хорош\w*\s+коллектив\w*',
        r'плох\w*\s+коллектив\w*',
        r'конфликт\w*',
        r'ссор\w*',
        r'непонимани\w*',
        r'сотрудничеств\w*',
        r'взаимопомощ\w*',
        r'поддерживаю\w*',
        r'понимаю\w*',
        r'доверие\w*',
        r'уважени\w*',
        r'дружественн\w*',
        r'приветлив\w*',
        r'отзывчив\w*',
        r'готов\w*\s+помоч\w*',
        r'могут\s+помоч\w*',
        r'подсказ\w*',
        r'научи\w*',
        r'обучаю\w*'
    ]
    
    results_dir = Path("/Users/nvrnv/gurman-insights/results_to_work_with")
    analysis_results = {
        "topic": "Коллектив и атмосфера",
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
            for pattern in team_patterns:
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

if __name__ == "__main__":
    results = analyze_team_atmosphere()
    
    # Сохраняем результаты в JSON
    output_file = "/Users/nvrnv/gurman-insights/team_atmosphere_analysis.json"
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(results, f, ensure_ascii=False, indent=2)
    
    print(f"Анализ завершен. Результаты сохранены в {output_file}")
    print(f"Всего файлов: {results['total_files']}")
    print(f"Файлов с упоминаниями: {results['files_with_mentions']}")
    print(f"Процент интервью: {results['percentage_interviews']}%")
    print(f"Всего упоминаний: {results['total_mentions']}")
