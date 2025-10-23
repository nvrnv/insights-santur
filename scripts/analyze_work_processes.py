#!/usr/bin/env python3
"""
Анализ темы "Рабочие процессы и организация" во всех интервью
"""
import os
import json
import re
from pathlib import Path
from typing import Dict, List, Tuple

def analyze_work_processes():
    """
    Промпт для анализа рабочих процессов и организации:
    
    Ищем упоминания о:
    1. Рабочих процессах (процесс, процедуры, технология)
    2. Организации работы (организация, планирование, график)
    3. Эффективности и производительности
    4. Системах и методах работы
    5. Координации между отделами
    6. Оптимизации процессов
    """
    
    # Паттерны для поиска упоминаний о рабочих процессах
    work_processes_patterns = [
        r'процесс\w*',
        r'процедур\w*',
        r'технологи\w*',
        r'организаци\w*\s+работ\w*',
        r'организован\w*',
        r'планировани\w*',
        r'график\w*',
        r'расписани\w*',
        r'смен\w*',
        r'режим\w*\s+работ\w*',
        r'эффективност\w*',
        r'производительност\w*',
        r'систем\w*\s+работ\w*',
        r'метод\w*\s+работ\w*',
        r'координаци\w*',
        r'взаимодействи\w*',
        r'сотрудничеств\w*\s+между',
        r'оптимизаци\w*',
        r'улучшени\w*\s+процесс\w*',
        r'автоматизаци\w*',
        r'стандарт\w*',
        r'регламент\w*',
        r'инструкци\w*',
        r'порядок\w*\s+работ\w*',
        r'последовательност\w*',
        r'алгоритм\w*',
        r'схем\w*\s+работ\w*',
        r'логистик\w*',
        r'поток\w*\s+работ\w*',
        r'цикл\w*\s+производств\w*',
        r'операци\w*',
        r'этап\w*\s+работ\w*',
        r'стади\w*\s+производств\w*'
    ]
    
    results_dir = Path("/Users/nvrnv/gurman-insights/results_to_work_with")
    analysis_results = {
        "topic": "Рабочие процессы и организация",
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
            for pattern in work_processes_patterns:
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
    results = analyze_work_processes()
    
    # Сохраняем результаты в JSON
    output_file = "/Users/nvrnv/gurman-insights/work_processes_analysis.json"
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(results, f, ensure_ascii=False, indent=2)
    
    print(f"Анализ завершен. Результаты сохранены в {output_file}")
    print(f"Всего файлов: {results['total_files']}")
    print(f"Файлов с упоминаниями: {results['files_with_mentions']}")
    print(f"Процент интервью: {results['percentage_interviews']}%")
    print(f"Всего упоминаний: {results['total_mentions']}")
