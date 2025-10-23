#!/usr/bin/env python3
"""
Анализ темы "Столовая и питание" во всех интервью
"""
import os
import json
import re
from pathlib import Path
from typing import Dict, List, Tuple

def analyze_canteen():
    """
    Промпт для анализа столовой и питания:
    
    Ищем упоминания о:
    1. Столовой и кафе (столовая, кафе, кухня)
    2. Еде и питании (еда, питание, обед, завтрак, ужин)
    3. Качестве еды (вкусная, невкусная, свежая, несвежая)
    4. Ценах на еду (дорого, дешево, цены)
    5. Разнообразии меню (меню, выбор, ассортимент)
    6. Условиях приема пищи (место для еды, время на обед)
    """
    
    # Паттерны для поиска упоминаний о столовой и питании
    canteen_patterns = [
        r'столов\w*',
        r'кафе\w*',
        r'кухн\w*',
        r'ед\w*',
        r'питани\w*',
        r'обед\w*',
        r'завтрак\w*',
        r'ужин\w*',
        r'перекус\w*',
        r'вкусн\w*',
        r'невкусн\w*',
        r'свеж\w*',
        r'несвеж\w*',
        r'качеств\w*\s+ед\w*',
        r'горяч\w*\s+ед\w*',
        r'холодн\w*\s+ед\w*',
        r'дорог\w*\s+ед\w*',
        r'дешев\w*\s+ед\w*',
        r'цен\w*\s+на\s+ед\w*',
        r'стоимост\w*\s+ед\w*',
        r'меню\w*',
        r'выбор\w*\s+ед\w*',
        r'ассортимент\w*',
        r'разнообрази\w*\s+ед\w*',
        r'мест\w*\s+для\s+ед\w*',
        r'врем\w*\s+на\s+обед\w*',
        r'перерыв\w*\s+на\s+обед\w*',
        r'кормят\w*',
        r'кормлени\w*',
        r'блюд\w*',
        r'порци\w*',
        r'сыт\w*',
        r'голодн\w*',
        r'аппетит\w*'
    ]
    
    results_dir = Path("/Users/nvrnv/gurman-insights/results_to_work_with")
    analysis_results = {
        "topic": "Столовая и питание",
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
            for pattern in canteen_patterns:
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
    results = analyze_canteen()
    
    # Сохраняем результаты в JSON
    output_file = "/Users/nvrnv/gurman-insights/canteen_analysis.json"
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(results, f, ensure_ascii=False, indent=2)
    
    print(f"Анализ завершен. Результаты сохранены в {output_file}")
    print(f"Всего файлов: {results['total_files']}")
    print(f"Файлов с упоминаниями: {results['files_with_mentions']}")
    print(f"Процент интервью: {results['percentage_interviews']}%")
    print(f"Всего упоминаний: {results['total_mentions']}")
