# 🔄 Data Analysis Pipeline для HR-исследований

## 📋 Обзор пайплайна

Этот документ описывает пошаговый процесс анализа качественных данных из интервью сотрудников для выявления ключевых тем и инсайтов.

---

## 🗂️ Этап 1: Подготовка данных

### 📁 Входные данные
```
results_to_work_with/
├── Фабрика-Юмашева_Повара_Русский_gg_3_0001.txt
├── Фабрика-Юмашева_Повара_Киргизский_gg_12_0022.txt
├── АУП-Производства_Русский_gg_6_0005.txt
└── ... (всего 186 файлов интервью)
```

### 🏗️ Структура файлов
- **Формат имени**: `{Департамент}_{Язык}_{ID}.txt`
- **Содержание**: Транскрипты интервью в текстовом формате
- **Языки**: Русский, Киргизский, Английский, Французский, Узбекский

---

## 🔍 Этап 2: Первичный анализ (Broad Scope Analysis)

### 🎯 Цель
Выявить основные темы, которые чаще всего упоминаются в интервью

### 🛠️ Инструменты
- **Метод**: Семантический анализ с использованием регулярных выражений
- **Язык**: Python 3
- **Библиотеки**: `re`, `json`, `pathlib`

### 📊 Процесс
```python
# Пример кода для первичного анализа
def broad_scope_analysis(text_files):
    """
    Анализирует все файлы для выявления основных тем
    """
    topics = {}
    for file in text_files:
        content = read_file(file)
        # Применяем широкий набор паттернов для поиска тем
        detected_topics = extract_topics(content)
        update_topic_frequency(topics, detected_topics)
    
    return rank_topics_by_frequency(topics)
```

### 📈 Результат этапа 2
- Список топ-10 тем по частоте упоминаний
- Первичная оценка важности каждой темы
- Базовая статистика по департаментам и языкам

---

## 🎯 Этап 3: Глубокий анализ по темам (Topic-Specific Analysis)

### 🔬 Цель
Детально проанализировать каждую выявленную тему для получения точных метрик

### 📋 Для каждой темы создаем:

#### 🛠️ Специализированный анализатор
```python
def analyze_specific_topic(topic_name, search_patterns):
    """
    Анализирует конкретную тему во всех интервью
    
    Args:
        topic_name: Название темы (например, "Задержки зарплаты")
        search_patterns: Список регулярных выражений для поиска
    
    Returns:
        Детальный анализ с метриками и цитатами
    """
    results = {
        "topic": topic_name,
        "total_files": 0,
        "files_with_mentions": 0,
        "total_mentions": 0,
        "department_breakdown": {},
        "language_breakdown": {},
        "quotes_with_context": []
    }
    
    for file_path in all_interview_files:
        mentions = find_topic_mentions(file_path, search_patterns)
        if mentions:
            update_results(results, file_path, mentions)
    
    return results
```

#### 🔍 Паттерны поиска для каждой темы
```python
# Пример для темы "Задержки зарплаты"
salary_delay_patterns = [
    r'задерж\w*\s+зарплат\w*',
    r'зарплат\w*\s+задерж\w*',
    r'не\s+выплач\w*\s+вовремя',
    r'выплат\w*\s+част\w*',
    # ... дополнительные паттерны
]

# Пример для темы "Условия труда"
work_conditions_patterns = [
    r'условия\s+труда',
    r'рабоч\w*\s+мест\w*',
    r'тяжел\w*\s+работ\w*',
    r'раздевалк\w*',
    # ... дополнительные паттерны
]
```

---

## 📊 Этап 4: Сбор и структурирование результатов

### 🗃️ Выходные файлы для каждой темы
```json
{
  "topic": "Задержки зарплаты",
  "total_files": 186,
  "files_with_mentions": 20,
  "percentage_interviews": 10.8,
  "total_mentions": 32,
  "department_breakdown": {
    "Фабрика Юмашева": 11,
    "Фабрика Щербакова": 8,
    "АУП Производства": 1
  },
  "representative_quotes": [
    {
      "quote": "Задержка зарплаты очень сильно не нравится...",
      "source": "Фабрика-Юмашева_Повара_Русский_gg_3_0003.txt",
      "department": "Фабрика Юмашева - Повара"
    }
  ]
}
```

---

## 🔄 Этап 5: Сравнительный анализ и валидация

### ⚖️ Сравнение с исходными данными
```python
def compare_with_baseline(original_data, analyzed_data):
    """
    Сравнивает результаты нашего анализа с исходными данными
    """
    comparison = []
    for topic in original_data:
        original_percentage = topic['percentage']
        actual_percentage = analyzed_data[topic['name']]['percentage_interviews']
        discrepancy = actual_percentage - original_percentage
        
        comparison.append({
            "topic": topic['name'],
            "original_claim": original_percentage,
            "actual_findings": actual_percentage,
            "discrepancy": discrepancy,
            "status": classify_discrepancy(discrepancy)
        })
    
    return comparison
```

### 📈 Создание итогового рейтинга
- Пересортировка тем по реальной частоте упоминаний
- Выявление наиболее переоцененных и недооцененных тем
- Бизнес-рекомендации на основе данных

---

## 🏗️ Архитектура проекта

```
gurman-insights/
├── results_to_work_with/           # Исходные данные (186 интервью)
├── analysis/                       # Результаты анализа
│   ├── salary_delays_analysis.json
│   ├── work_conditions_analysis.json
│   ├── team_atmosphere_analysis.json
│   ├── management_analysis.json
│   ├── work_processes_analysis.json
│   ├── canteen_analysis.json
│   ├── locker_rooms_sanitary_analysis.json
│   ├── career_development_analysis.json
│   ├── quality_control_fines_analysis.json
│   ├── work_uniform_clothes_analysis.json
│   └── complete_topics_analysis.json
├── scripts/                        # Скрипты анализа
│   ├── analyze_salary_delays.py
│   ├── analyze_work_conditions.py
│   ├── analyze_team_atmosphere.py
│   ├── analyze_management.py
│   ├── analyze_work_processes.py
│   ├── analyze_canteen.py
│   └── analyze_all_remaining.py
└── DATA_ANALYSIS_PIPELINE.md       # Этот документ
```

---

## 🛠️ Технические детали

### 📚 Зависимости
```python
import os
import json
import re
from pathlib import Path
from typing import Dict, List, Tuple
```

### 🔧 Ключевые функции

#### 1. Извлечение метаданных из имени файла
```python
def extract_metadata(filename):
    """
    Извлекает департамент, язык и ID из имени файла
    """
    parts = filename.replace('.txt', '').split('_')
    return {
        'department': parts[0].replace('-', ' '),
        'language': parts[2] if len(parts) > 2 else "Unknown",
        'file_id': parts[-1]
    }
```

#### 2. Поиск упоминаний с контекстом
```python
def find_mentions_with_context(content, patterns, context_size=60):
    """
    Находит упоминания и возвращает их с контекстом
    """
    mentions = []
    for pattern in patterns:
        matches = re.finditer(pattern, content, re.IGNORECASE | re.UNICODE)
        for match in matches:
            start = max(0, match.start() - context_size)
            end = min(len(content), match.end() + context_size)
            context = content[start:end].strip()
            
            mentions.append({
                "pattern": pattern,
                "match": match.group(),
                "context": context,
                "position": match.start()
            })
    return mentions
```

#### 3. Расчет метрик
```python
def calculate_metrics(analysis_results):
    """
    Вычисляет ключевые метрики анализа
    """
    total_files = analysis_results["total_files"]
    files_with_mentions = analysis_results["files_with_mentions"]
    
    percentage = round((files_with_mentions / total_files) * 100, 1)
    
    return {
        "percentage_interviews": percentage,
        "coverage": f"{files_with_mentions}/{total_files}",
        "mention_density": analysis_results["total_mentions"] / files_with_mentions if files_with_mentions > 0 else 0
    }
```

---

## 📊 Ключевые метрики

### 🎯 Основные показатели
- **Процент интервью с упоминаниями**: Доля интервью, где тема упоминается хотя бы раз
- **Общее количество упоминаний**: Сколько раз тема упоминается во всех интервью
- **Плотность упоминаний**: Среднее количество упоминаний на интервью
- **Распределение по департаментам**: В каких подразделениях тема наиболее актуальна
- **Языковое распределение**: На каких языках тема обсуждается чаще

### 📈 Сравнительные метрики
- **Расхождение с исходными данными**: Разница между заявленными и реальными показателями
- **Ранговые изменения**: Как изменилась позиция темы в рейтинге
- **Статус валидации**: Переоценена, недооценена или корректна

---

## 🚀 Применение пайплайна

### 🔄 Для новых проектов:

1. **Подготовка данных**
   - Собрать интервью в текстовом формате
   - Стандартизировать названия файлов
   - Организовать структуру папок

2. **Настройка анализа**
   - Адаптировать паттерны поиска под специфику проекта
   - Определить релевантные темы для анализа
   - Настроить метаданные (департаменты, языки, etc.)

3. **Запуск анализа**
   - Выполнить широкий анализ для выявления тем
   - Запустить детальный анализ по каждой теме
   - Собрать и структурировать результаты

4. **Валидация результатов**
   - Сравнить с исходными гипотезами
   - Проверить репрезентативность цитат
   - Валидировать метрики на выборке

---

## ⚠️ Ограничения и рекомендации

### 🚨 Ограничения
- Анализ основан на ключевых словах и может пропустить контекстуальные упоминания
- Качество результатов зависит от качества транскрипции
- Многоязычность может требовать дополнительной настройки паттернов

### 💡 Рекомендации
- Регулярно валидировать результаты на случайной выборке
- Использовать несколько подходов к анализу для перекрестной проверки
- Документировать все изменения в паттернах поиска
- Сохранять промежуточные результаты для отладки

---

## 📞 Поддержка

Для вопросов по использованию пайплайна или адаптации под новые проекты обращайтесь к команде разработки.

---

*Последнее обновление: 28 сентября 2025*
