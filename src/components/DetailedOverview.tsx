import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const DetailedOverview = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8 space-y-8">
      {/* Analysis Overview Card */}
      <Card className="border border-border shadow-none rounded-lg" style={{ boxShadow: 'none' }}>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Вопросы исследования:</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-slate-900 leading-relaxed">
            <a href="#question-1" className="text-blue-600 hover:text-blue-800 underline cursor-pointer">
              Как ты используешь ИИ на работе и в жизни?
            </a>
          </p>
          <p className="text-sm text-slate-900 leading-relaxed">
            <a href="#question-2" className="text-blue-600 hover:text-blue-800 underline cursor-pointer">
              Какие ИИ-инструменты чаще всего используешь и чем они помогают? Что в них нравится?
            </a>
          </p>
          <p className="text-sm text-slate-900 leading-relaxed">
            <a href="#question-3" className="text-blue-600 hover:text-blue-800 underline cursor-pointer">
              Для каких задач ещё хотел бы применять ИИ? Чего сейчас не хватает?
            </a>
          </p>
          <p className="text-sm text-slate-900 leading-relaxed">
            <a href="#question-4" className="text-blue-600 hover:text-blue-800 underline cursor-pointer">
              ИИ для тебя — больше угроза или возможность? Почему?
            </a>
          </p>
        </CardContent>
      </Card>

      {/* Вопрос 1 */}
      <Card className="border border-border shadow-none rounded-lg" style={{ boxShadow: 'none' }}>
        <CardHeader>
          <CardTitle id="question-1" className="text-xl font-semibold">Вопрос 1 - Как ты используешь ИИ на работе и в жизни?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          
          {/* Блок 1. Количественный анализ */}
          <div className="border-t border-gray-200 pt-6">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-lg font-semibold">Блок 1. Количественный анализ</h3>
            </div>
            
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-slate-900 mb-3">1.1. Где используется ИИ</h4>
              
              {/* Таблица */}
              <div className="overflow-x-auto mb-4">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Контекст использования</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Кол-во сотрудников</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Доля</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Работа и личная жизнь</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">79</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">38%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Только работа</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">16</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">8%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Только личная жизнь</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">11</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">5%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Не указано / непонятно</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">71</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">34%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Пустой ответ</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">29</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">14%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">Итого</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">206</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">100%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <div className="mb-2">
                  <span className="font-medium">Вывод:</span>
                </div>
                <div className="text-sm text-slate-900 space-y-2">
                  <p>Более половины сотрудников (≈ 51%) прямо или косвенно упоминают использование ИИ, причём большинство применяют его <strong>одновременно и в работе, и в повседневной жизни</strong>. Однако у трети ответов контекст неясен — это говорит о низкой осведомлённости и поверхностном понимании темы.</p>
                </div>
              </div>
            </div>

            {/* Основные сферы применения */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-slate-900 mb-3">1.2. Основные сферы применения</h4>
              
              {/* Таблица */}
              <div className="overflow-x-auto mb-4">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Категория применения</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Кол-во упоминаний</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Доля от всех</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Аналитика / расчёты</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">53</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">26%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Поиск информации</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">45</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">22%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Тексты / коммуникации</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">30</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">15%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Развлечения / бытовые задачи</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">20</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">10%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Презентации / визуалы</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">18</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">9%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Обучение / развитие</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">18</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">9%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Не указано</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">119</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">58%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">Итого (упоминаний)</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">303</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">100%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <div className="mb-2">
                  <span className="font-medium">Вывод:</span>
                </div>
                <div className="text-sm text-slate-900 space-y-2">
                  <p>1. ИИ чаще всего используется для анализа данных и поиска информации — типичные «прикладные» сценарии.</p>
                  <p>2. Часть сотрудников применяет ИИ в текстах и визуалах, но такие кейсы пока единичны и характерны в основном для офисных и креативных функций (HR, Маркетинг, Цифра).</p>
                </div>
              </div>
            </div>

            {/* Интенсивность использования */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-slate-900 mb-3">1.3. Интенсивность использования</h4>
              
              {/* Таблица */}
              <div className="overflow-x-auto mb-4">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Интенсивность</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Кол-во сотрудников</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Доля</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Регулярно (часто, постоянно)</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">16</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">8%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Иногда (пробую, редко)</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">9</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">4%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Формально / единично</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">5</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">2%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Не указано</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">176</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">86%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">Итого</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">206</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">100%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <div className="mb-2">
                  <span className="font-medium">Вывод:</span>
                </div>
                <div className="text-sm text-slate-900 space-y-2">
                  <p>Только около <strong>10-12%</strong> сотрудников используют ИИ осознанно и регулярно. Почти <strong>90%</strong> либо делают это эпизодически, либо не могут описать частоту использования — что указывает на низкий уровень осознанного применения.</p>
                </div>
              </div>
            </div>

            {/* Общий аналитический вывод по вопросу 1 */}
            <div className="border-t border-gray-200 pt-6">
              <h4 className="text-sm font-medium text-slate-900 mb-3">Общий аналитический вывод по вопросу 1</h4>
              <div className="text-sm text-slate-900 space-y-2">
                <p>• ИИ уже часть повседневности для половины сотрудников, но в основном в роли помощника по поиску или оформлению текстов.</p>
                <p>• Регулярно и целенаправленно ИИ использует только каждый десятый.</p>
              </div>
              
              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="text-sm text-slate-900 space-y-2">
                  <p>• Большинство ответов поверхностные — люди знают о возможностях ИИ, но не понимают, как встраивать его в рабочие процессы.</p>
                  <p>• Рекомендация для обучения: показать практические <strong>кейсы</strong> по функциям («ИИ в ежедневных HR-задачах», «ИИ в аналитике», «ИИ в строительных проектах»).</p>
                </div>
              </div>
            </div>
          </div>

          {/* Блок 2. Индекс зрелости использования ИИ по подразделениям */}
          <div className="border-t border-gray-200 pt-6">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-lg font-semibold">Блок 2. Индекс зрелости использования ИИ по подразделениям</h3>
            </div>
            
            {/* Что показывает этот индекс */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <h4 className="text-sm font-medium text-slate-900">Что показывает этот индекс</h4>
              </div>
              <div className="text-sm text-slate-900 space-y-2 pl-7">
                <p><strong>Индекс зрелости использования ИИ</strong> — интегральный показатель от 1 до 5, который отражает, насколько сотрудники применяют технологии ИИ осознанно, регулярно и по делу.</p>
              </div>
            </div>

            {/* Шкала интерпретации */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <h4 className="text-sm font-medium text-slate-900">Шкала интерпретации</h4>
              </div>
              
              {/* Таблица */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Балл</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Эмоджи</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Уровень</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Краткое описание</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">1</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                        <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Минимальный</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Не используют ИИ или отвечают формально.</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">2</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                        <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Низкий</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Пробуют нерегулярно, без понимания пользы.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">3</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Средний</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Применяют точечно, в повседневных задачах.</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">4</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Продвинутый</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Используют регулярно, понимают возможности.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">5</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                        <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Высокий</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Системно внедряют, делятся опытом, амбассадоры.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 2.1. Индекс зрелости по подразделениям */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-slate-900 mb-3">2.1. Индекс зрелости по подразделениям</h4>
              
              {/* Таблица */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Подразделение</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Индекс зрелости</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Комментарий</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Кол-во ответов</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Цифра</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                          <span>5</span>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Системное использование, конкретные кейсы, высокая культура работы с ИИ.</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">10</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">IT</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                          <span>5</span>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Регулярное применение в аналитике и автоматизации, осознанное отношение.</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">6</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Маркетинг</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                          <span>4</span>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Используют ИИ в контенте и визуалах, видят ценность технологии.</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">4</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">HR</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                          <span>4</span>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Применяют для коммуникаций и обучения, демонстрируют уверенность.</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">13</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">PR</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                          <span>4</span>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Активно используют в создании текстов и видео, позитивное восприятие.</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">3</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">GR</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                          <span>4</span>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Осознанный подход, понимание потенциала.</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">1</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Девелопмент</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                          <span>3</span>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Используют точечно, в основном для поиска и идей.</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">7</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Закупки</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                          <span>3</span>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Эпизодическое использование в поиске подрядчиков и данных.</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">6</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Секретариат</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                          <span>3</span>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Применяют для писем и внутренних коммуникаций.</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">5</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Финансы</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                          <span>2</span>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Нерегулярное использование, слабое понимание инструментов.</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">21</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Проектирование</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                          <span>2</span>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Ограниченное применение, редкие упоминания.</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">24</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Строительство</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                          <span>2</span>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Много ответов, но формальные и краткие.</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">49</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Операционный контроль</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                          <span>2</span>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Единичные примеры, без системности.</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">3</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">АХО</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                          <span>2</span>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Почти не применяют, осведомлённость низкая.</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">5</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Другие</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                          <span>2</span>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Единичные упоминания, слабая вовлечённость.</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">17</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Юристы</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                          <span>2</span>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Скепсис, опасения по безопасности данных.</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">СБ</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                          <span>1</span>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Не используют, выражают тревогу и недоверие.</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">2</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Охрана труда</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                          <span>1</span>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Не применяют, формальные ответы.</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">2</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Транспорт</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                          <span>1</span>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Нет примеров использования.</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">1</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Строительство ГенПодряд</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                          <span>1</span>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Не используют ИИ.</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 2.2. Аналитические выводы */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-5 h-5 text-gray-600">📊</div>
                <h4 className="text-sm font-medium text-slate-900">2.2. Аналитические выводы</h4>
              </div>
              
              <div className="text-sm text-slate-900 space-y-4">
                {/* Лидеры зрелости */}
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 bg-purple-500 rounded-full mt-1"></div>
                  <div>
                    <p className="font-medium text-slate-900 mb-1">Лидеры зрелости:</p>
                    <p>Цифра, IT, HR, Маркетинг, PR — демонстрируют системное использование ИИ и могут стать внутренними <span className="underline decoration-dotted decoration-red-400">амбассадорами</span>.</p>
                  </div>
                </div>

                {/* Средний уровень */}
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 bg-green-500 rounded-full mt-1"></div>
                  <div>
                    <p className="font-medium text-slate-900 mb-1">Средний уровень:</p>
                    <p>Девелопмент, Закупки, Секретариат — применяют эпизодически, но с потенциалом развития.</p>
                  </div>
                </div>

                {/* Разделительная линия */}
                <div className="border-t border-gray-200 my-4"></div>

                {/* Низкий уровень */}
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 bg-yellow-400 rounded-full mt-1"></div>
                  <div>
                    <p className="font-medium text-slate-900 mb-1">Низкий уровень:</p>
                    <p>Строительство, Проектирование, Финансы, АХО, Юристы — требуется обучение и наглядные <span className="underline decoration-dotted decoration-red-400">кейсы</span>.</p>
                  </div>
                </div>

                {/* Минимальный уровень */}
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 bg-yellow-400 rounded-full mt-1"></div>
                  <div>
                    <p className="font-medium text-slate-900 mb-1">Минимальный уровень:</p>
                    <p>СБ, Охрана труда, Транспорт — отсутствует практика использования, есть недоверие и страх.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2.3. Рекомендации для обучения */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-slate-900 mb-4">2.3. Рекомендации для обучения</h4>
              
              {/* Таблица */}
              <div className="overflow-x-auto mb-4">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Уровень зрелости</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Подразделения</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Рекомендации</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                          <span>Высокий </span>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Цифра, IT, HR, Маркетинг, PR, GR</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Расширенные программы: промт-инжиниринг, аналитика, роль внутренних амбассадоров.</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                          <span>Средний </span>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Девелопмент, Закупки, Секретариат</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Практические кейсы «ИИ в моей функции», воркшопы с реальными сценариями.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                          <span>Низкий </span>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Строительство, Финансы, Проектирование, АХО, Юристы, СБ, Охрана труда, Транспорт</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Базовые курсы: «Что такое ИИ и зачем он нужен», безопасное использование, демонстрация пользы и снятие страхов.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Общий вывод */}
              <div>
                <div className="mb-2">
                  <span className="font-medium">Общий вывод:</span>
                </div>
                <div className="text-sm text-slate-900 space-y-2 pl-6">
                  <p>• ИИ активно используется в "офисных" и цифровых функциях, но пока почти не проник в операционные и производственные направления.</p>
                  <p>• Важно не просто обучать инструментам, а показать реальные кейсы внутри каждой профессии — от инженера до юриста.</p>
                  <p>• Это создаст доверие и ускорит переход от "слышал" к "использую ежедневно".</p>
                </div>
              </div>
            </div>
          </div>

        </CardContent>
      </Card>

      {/* Вопрос 2 */}
      <Card className="border border-border shadow-none rounded-lg" style={{ boxShadow: 'none' }}>
        <CardHeader>
          <CardTitle id="question-2" className="text-xl font-semibold">Вопрос 2 - Какие ИИ-инструменты чаще всего используешь и чем они помогают? Что в них нравится?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          
          {/* Блок 1. Количественный анализ */}
          <div className="border-t border-gray-200 pt-6">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-lg font-semibold">Блок 1. Количественный анализ</h3>
            </div>
            
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-slate-900 mb-3">1.1. Распознавание и популярность инструментов</h4>
              <p className="text-xs text-gray-600 mb-4">(Количественный анализ по частоте упоминаний)</p>
              <p className="text-sm text-gray-600 mb-4">Показывает, какие ИИ-платформы действительно используются, а какие известны лишь по слухам.</p>
              
              {/* Таблица */}
              <div className="overflow-x-auto mb-4">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Инструмент</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Кол-во упоминаний</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Доля среди всех ответов</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">ChatGPT</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">15</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">42%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Perplexity / Kommet Browser</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">6</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">17%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">GigaChat</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">4</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">11%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Midjourney / Leonardo / Qwin</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">4</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">11%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">DeepSeek</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">3</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">8%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Алиса / Яндекс-сервисы</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">2</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">6%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Manus / Alpina / Filmora и др.</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">2</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">6%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Не указано</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">170</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">83%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <div className="mb-2">
                  <span className="font-medium">Вывод:</span>
                </div>
                <div className="text-sm text-slate-900 space-y-2">
                  <p>• У подавляющего большинства сотрудников нет чёткого понимания, какими инструментами они пользуются.</p>
                  <p>• ChatGPT остаётся ключевой ассоциацией с искусственным интеллектом.</p>
                  <p>• Корпоративные и российские решения (GigaChat, DeepSeek, Qwin) почти не известны.</p>
                </div>
              </div>
            </div>

            {/* 1.2. Функциональные категории применения */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-slate-900 mb-3">1.2. Функциональные категории применения</h4>
              <p className="text-xs text-gray-600 mb-4">(Какие задачи решают эти инструменты)</p>
              
              {/* Таблица */}
              <div className="overflow-x-auto mb-4">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Категория применения</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Доля от всех упоминаний инструментов</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Примеры</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">✍️ Работа с текстом</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">45%</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Написание и редактирование писем, постов, инструкций</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">🔍 Поиск и обработка информации</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">25%</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Быстрый сбор справок, поиск данных, идеи</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">📊 Аналитика и расчёты</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">10%</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Обработка таблиц, анализ отчётов</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">🎨 Генерация изображений и презентаций</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">10%</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Midjourney, визуалы, оформление</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">🎓 Обучение и саморазвитие</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">5%</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Изучение тем, объяснение сложных понятий</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">⚙️ Другое / не уточнено</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">5%</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Единичные нестандартные кейсы</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <div className="mb-2">
                  <span className="font-medium">Вывод:</span>
                </div>
                <div className="text-sm text-slate-900 space-y-2">
                  <p>ИИ пока воспринимается <strong>как помощник по текстам и поиску</strong>, а не как инструмент для глубокого анализа или автоматизации.</p>
                </div>
              </div>
            </div>

            {/* 1.3. Уровень осведомлённости и уверенности (интерпретация зрелости) */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-slate-900 mb-3">1.3. Уровень осведомлённости и уверенности (интерпретация зрелости)</h4>
              
              {/* Таблица */}
              <div className="overflow-x-auto mb-4">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Уровень осведомлённости</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Эмоджи</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Доля ответов</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Характеристика</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Низкий</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                        <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">60%</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">"Не знаю, какие инструменты есть", "просто чат-бот"</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Начальный</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                        <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">20%</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">"Пробовали ChatGPT, но не помнят названия других"</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Средний</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">12%</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">"Называют 2-3 инструмента, понимают отличия"</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Продвинутый</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">6%</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">"Уверенно используют несколько сервисов"</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Высокий</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                        <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">2%</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">"Системно подбирают инструменты под задачу"</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <div className="mb-2">
                  <span className="font-medium">Вывод:</span>
                </div>
                <div className="text-sm text-slate-900 space-y-2">
                  <p>• Уровень инструментальной грамотности сотрудников низкий — большинство ограничены одним сервисом.</p>
                  <p>• Встречается фрагментарное знание без понимания различий между типами ИИ (текстовые, графические, аналитические).</p>
                </div>
              </div>
            </div>

            {/* Общие аналитические выводы по вопросу 2 */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-5 h-5 text-gray-600">🎯</div>
                <h3 className="text-lg font-semibold">Общие аналитические выводы по вопросу 2</h3>
              </div>
              <div className="text-sm text-slate-900 space-y-2">
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>Осведомлённость об инструментах ограничена.</li>
                  <li>Сотрудники воспринимают ИИ прежде всего как ChatGPT, реже как набор специализированных решений.</li>
                  <li>Функциональное разнообразие использования — низкое: тексты и поиск.</li>
                  <li>Большинство не знают, какие инструменты можно применять в корпоративной среде безопасно.</li>
                </ul>
              </div>
            </div>

            {/* Рекомендации для обучения */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-5 h-5 text-gray-600">🎓</div>
                <h3 className="text-lg font-semibold">Рекомендации для обучения</h3>
              </div>
              <div className="text-sm text-slate-900 space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 text-gray-600 mt-0.5">📚</div>
                    <div>
                      <p className="font-medium text-slate-900 mb-1">Базовый модуль "Карта инструментов ИИ"</p>
                      <p>Показать 5-6 безопасных сервисов (текст, визуал, аналитика).</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 text-gray-600 mt-0.5">🍀</div>
                    <div>
                      <p className="font-medium text-slate-900 mb-1">Практикум "Как выбрать инструмент под задачу"</p>
                      <p>Кейсы по функциям: HR, маркетинг, финансы, строительство.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 text-gray-600 mt-0.5">🔒</div>
                    <div>
                      <p className="font-medium text-slate-900 mb-1">Встроить модуль "Безопасные корпоративные альтернативы"</p>
                      <p>GigaChat, DeepSeek, Qwin, внутренние модели.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 text-gray-600 mt-0.5">💡</div>
                    <div>
                      <p className="font-medium text-slate-900 mb-1">Создать короткие видео-гайды</p>
                      <p>«Как написать запрос в ChatGPT», «Как сделать визуал в Midjourney» и т.д.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Блок 3. Осведомлённость об инструментах ИИ по подразделениям */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-lg font-semibold">Блок 3. Осведомлённость об инструментах ИИ по подразделениям</h3>
              </div>
              
              {/* 3.1. Интерпретация индекса */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-900 mb-3">3.1. Интерпретация индекса</h4>
                
                {/* Таблица */}
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Балл</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Эмоджи</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Уровень</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Краткое описание</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">1</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                          <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Минимальный</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Не упомянули ни один инструмент.</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">2</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                          <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Низкий</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Упомянут ChatGPT или Алиса без конкретики.</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">3</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Средний</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Упомянуто 2-3 инструмента, но поверхностно.</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">4</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                          <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Продвинутый</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Различают типы инструментов, понимают их назначение.</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">5</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                          <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Высокий</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Используют системно несколько инструментов, дают аргументы, чем помогают.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 3.2. Индекс осведомлённости по подразделениям */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-900 mb-3">3.2. Индексыосведомленности по подразделениям</h4>
                
                {/* Таблица */}
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Подразделение</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Индекс осведомлённости</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Описание осведомлённости/использования</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Количество/Балл</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Индекс 5 - самые высокие */}
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Цифра</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                            <span>5</span>
                          </div>
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Упоминались ChatGPT, Perplexity, DeepSeek, Manus, Midjourney — системное знание инструментов.</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">10</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">IT</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                            <span>5</span>
                          </div>
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Хорошо ориентируются в ИИ-платформах, разбираются в функционале, используют на практике.</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">6</td>
                      </tr>
                      {/* Индекс 4 */}
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Маркетинг</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                            <span>4</span>
                          </div>
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Активно применяют Midjourney, ChatGPT, Qwin — для текстов, визуалов и аналитики.</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">4</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">MyChat</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                            <span>4</span>
                          </div>
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Корпоративный чат-бот, активно используют для рабочих задач и коммуникаций.</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">8</td>
                      </tr>
                      {/* Индекс 3 */}
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">HR</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                            <span>3</span>
                          </div>
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Преимущественно ChatGPT и GigaChat, знают базовые принципы работы.</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">13</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">PR</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                            <span>3</span>
                          </div>
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Упоминали ChatGPT и визуальные инструменты.</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">3</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Девелопмент</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                            <span>3</span>
                          </div>
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">ChatGPT и Perplexity упоминаются как источники информации.</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">7</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Закупки</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                            <span>3</span>
                          </div>
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Отдельные упоминания ChatGPT для подбора подрядчиков.</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">6</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Секретариат</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                            <span>3</span>
                          </div>
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Используют ChatGPT и GigaChat для писем и текстов.</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">5</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">GR</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                            <span>3</span>
                          </div>
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Единичное упоминание ChatGPT, но понимание назначения.</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">1</td>
                      </tr>
                      {/* Индекс 2 */}
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Финансы</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                            <span>2</span>
                          </div>
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Отдельные упоминания ChatGPT, без понимания возможностей.</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">21</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Проектирование</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                            <span>2</span>
                          </div>
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Слабая осведомлённость, единичные упоминания.</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">24</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Строительство</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                            <span>2</span>
                          </div>
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Минимальные упоминания (чаще "не использую").</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">49</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Контроль качества</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                            <span>2</span>
                          </div>
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Низкая осведомлённость, нет конкретных инструментов.</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">5</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Операционный контроль</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                            <span>2</span>
                          </div>
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Эпизодические упоминания ChatGPT.</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">3</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Юристы</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                            <span>2</span>
                          </div>
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Скепсис, иногда упоминают ChatGPT, но не используют.</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">3</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Другие</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                            <span>2</span>
                          </div>
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Разрозненные упоминания ChatGPT, Perplexity.</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">17</td>
                      </tr>
                      {/* Индекс 1 - самые низкие */}
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">АХО</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                            <span>1</span>
                          </div>
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Не упоминают ни один инструмент.</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">5</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">СБ</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                            <span>1</span>
                          </div>
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Не упоминают, выражают опасения.</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">2</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Охрана труда</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                            <span>1</span>
                          </div>
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Нет упоминаний об инструментах.</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">2</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Транспорт</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                            <span>1</span>
                          </div>
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Нет упоминаний.</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">1</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Строительство ГенПодряд</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                            <span>1</span>
                          </div>
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Нет упоминаний.</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">1</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 3.4. Рекомендации для обучения */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-900 mb-3">3.4. Рекомендации для обучения</h4>
                
                {/* Таблица */}
                <div className="overflow-x-auto mb-4">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Уровень осведомлённости</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Подразделения</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Рекомендации</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                            <span>Высокий (4-5)</span>
                          </div>
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Цифра, IT, Маркетинг</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Использовать как внутренние эксперты: демонстрировать кейсы, помогать адаптировать обучение.</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                            <span>Средний (3)</span>
                          </div>
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">HR, PR, Девелопмент, Закупки, Секретариат</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Расширить знания: "какие бывают ИИ-инструменты", "как выбрать под задачу", практикумы.</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                            <span>Низкий (2)</span>
                          </div>
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Финансы, Проектирование, Строительство, Юристы, Контроль качества, Опер. контроль, Другие</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Базовые вебинары: "обзор инструментов ИИ", разбор 2-3 кейсов по функциям.</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                            <span>Минимальный (1)</span>
                          </div>
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">АХО, СБ, Охрана труда, Транспорт, ГенПодряд</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Информационные сессии, демонстрация пользы, обучение основам безопасности при работе с ИИ.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Общий вывод */}
                <div className="border-t border-gray-200 pt-4">
                  <div>
                    <div className="mb-2">
                      <span className="font-medium">Общий вывод:</span>
                    </div>
                    <div className="text-sm text-slate-900 space-y-2">
                      <p>• ИИ-инструменты известны узкой группе сотрудников — в основном из цифровых, креативных и HR-направлений.</p>
                      <p>• В большинстве подразделений пока отсутствует осознанная технологическая база: люди знают слово "ИИ", но не различают типы решений.</p>
                      <p>• Следовательно, обучение должно включать обзор инструментов + практику по выбору подходящего решения под задачу.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Голоса сотрудников: реальные кейсы использования ИИ */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-900 mb-4">Голоса сотрудников: реальные кейсы использования ИИ</h4>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4 py-2">
                    <p className="text-sm text-slate-900 italic mb-1">"Я использую ChatGPT и Perplexity для текстов и презентаций. ИИ помогает формулировать мысли, сокращает рутинное время — теперь готовлю письма и рассылки в два раза быстрее."</p>
                    <p className="text-xs text-gray-600 font-medium">HR-сотрудник</p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4 py-2">
                    <p className="text-sm text-slate-900 italic mb-1">"Новогодняя кампания прошлого года была полностью сделана с помощью нейросетей. Midjourney и GPT помогли создать уникальные визуалы без фотосессии — три дня вместо недели. Это стало новой практикой в отделе."</p>
                    <p className="text-xs text-gray-600 font-medium">Маркетинг</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4 py-2">
                    <p className="text-sm text-slate-900 italic mb-1">"Я использую Perplexity и DeepSeek для анализа больших баз данных. ChatGPT помогает готовить тексты, Midjourney для изображений. Эти инструменты экономят время и дают новые идеи."</p>
                    <p className="text-xs text-gray-600 font-medium">Цифровой блок</p>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-4 py-2">
                    <p className="text-sm text-slate-900 italic mb-1">"ИИ помогает структурировать документы и писать регламенты. Формирую контракты, планы развития, объяснительные записки. Это мой интеллектуальный помощник — быстро создаёт черновики, которые я потом дорабатываю."</p>
                    <p className="text-xs text-gray-600 font-medium">HR / Корпоративное администрирование</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4 py-2">
                    <p className="text-sm text-slate-900 italic mb-1">"Мы используем Perplexity и Manus для анализа рынка и конкурентов. Раньше всё делалось вручную; теперь ИИ помогает собирать и консолидировать данные, считать эффекты, находить инсайты."</p>
                    <p className="text-xs text-gray-600 font-medium">Цифровой блок</p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4 py-2">
                    <p className="text-sm text-slate-900 italic mb-1">"Midjourney помогает с визуалами для рекламных кампаний. Находим референсы, меняем композиции — получается креативно и быстро. Это стало реальной альтернативой фотосессиям."</p>
                    <p className="text-xs text-gray-600 font-medium">Маркетинг</p>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-4 py-2">
                    <p className="text-sm text-slate-900 italic mb-1">"Я использую ChatGPT для объяснения сложных тем детям и подготовки домашних заданий. На работе — для формулирования текстов для сотрудников."</p>
                    <p className="text-xs text-gray-600 font-medium">HR-сотрудник</p>
                  </div>
                  
                  <div className="border-l-4 border-orange-500 pl-4 py-2">
                    <p className="text-sm text-slate-900 italic mb-1">"Пробовали с помощью ИИ превратить описания требований для разработчиков в инструкции для пользователей. AI сам написал макрос для Excel — перенёс данные, когда формулы не работали. Очень помогло."</p>
                    <p className="text-xs text-gray-600 font-medium">сотрудник IT</p>
                  </div>
                  
                  <div className="border-l-4 border-teal-500 pl-4 py-2">
                    <p className="text-sm text-slate-900 italic mb-1">"Часто пользуюсь ИИ для поиска информации. Он подаёт данные из разных источников в структурированном виде, в таблицах и списках — это экономит массу времени."</p>
                    <p className="text-xs text-gray-600 font-medium">сотрудник Финансов</p>
                  </div>
                  
                  <div className="border-l-4 border-indigo-500 pl-4 py-2">
                    <p className="text-sm text-slate-900 italic mb-1">"Использую нейросети для визуализации идей, создания mind map и видео. Это замена обычному поиску — быстрее, гибче, помогает находить новые решения."</p>
                    <p className="text-xs text-gray-600 font-medium">Цифровой блок</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Выводы из качественного анализа */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <span className="text-yellow-500">💡</span>
                  Выводы из качественного анализа
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">1</div>
                  <div>
                    <p className="text-sm text-slate-900 leading-relaxed">
                      <strong>ИИ реально работает как "ускоритель"</strong> — экономия времени, упрощение рутины, повышение качества текстов и визуалов.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">2</div>
                  <div>
                    <p className="text-sm text-slate-900 leading-relaxed">
                      <strong>Наиболее зрелые кейсы</strong> — в HR, Маркетинге, IT и Цифровом блоке, где сотрудники видят ИИ как партнёра, а не игрушку.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">3</div>
                  <div>
                    <p className="text-sm text-slate-900 leading-relaxed">
                      <strong>Инструменты используются осознанно:</strong> Perplexity, ChatGPT, Midjourney, DeepSeek, Manus — с пониманием, чем каждый полезен.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">4</div>
                  <div>
                    <p className="text-sm text-slate-900 leading-relaxed">
                      <strong>Уровень детализации ответов растёт там, где уже есть эксперименты и свобода применения.</strong>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">5</div>
                  <div>
                    <p className="text-sm text-slate-900 leading-relaxed">
                      <strong>Инсайты можно использовать в обучении:</strong> эти реальные примеры — отличные кейсы для включения в тренинги и презентации.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </CardContent>
      </Card>

      {/* Вопрос 3 */}
      <Card className="border border-border shadow-none rounded-lg" style={{ boxShadow: 'none' }}>
        <CardHeader>
          <CardTitle id="question-3" className="text-xl font-semibold">Вопрос 3 - Для каких задач ещё хотел бы применять ИИ? Чего сейчас не хватает?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          
          {/* Возможности и ограничения количественного анализа */}
          <div className="border-t border-gray-200 pt-6">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-lg font-semibold">Возможности и ограничения количественного анализа по вопросу 3</h3>
            </div>
            
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-slate-900 mb-3">Объём данных:</h4>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-slate-900 leading-relaxed">
                    вопрос затронут только в 17 ответах из 206 (≈ 8%);
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-slate-900 leading-relaxed">
                    большая часть формулировок короткие («не хватает обучения», «хочу попробовать»).
                  </p>
                </div>
              </div>
            </div>

            {/* Тематические категории пожеланий */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-slate-900 mb-3">1.1. Тематические категории пожеланий (чего хотят и чего не хватает)</h4>
              
              {/* Таблица */}
              <div className="overflow-x-auto mb-4">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Категория</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Содержание</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Кол-во упоминаний</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Доля от 17 ответов</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">🧠 Обучение и повышение навыков</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">"Не хватает обучения", "нужны инструкции, как писать запросы"</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">8</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">47%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">🔒 Безопасность и корпоративные ограничения</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">"Неясно, можно ли вводить рабочие данные", "нужны безопасные решения"</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">3</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">18%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">⚙️ Расширение применения</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">"Хочу использовать для аналитики, отчётов, автоматизации"</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">3</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">18%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">📦 Доступ к инструментам</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">"Нет доступа к ChatGPT", "VPN запрещён"</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">2</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">12%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">💡 Общие идеи и пожелания</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">"Было бы хорошо, чтобы подсказывал решения", "не хватает русскоязычных моделей"</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">1</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">6%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">Итого</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">—</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">17</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">100%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Вывод */}
              <div className="border-t border-gray-200 pt-4">
                <div>
                  <div className="mb-2">
                    <span className="font-medium">Вывод:</span>
                  </div>
                  <div className="text-sm text-slate-900 space-y-2">
                    <p>Почти половина всех, кто ответил, прямо сформулировали запрос на обучение. Вторая по частоте тема — безопасность и доступность инструментов.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Категории "что именно хотели бы делать" */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-slate-900 mb-3">1.2. Категории "что именно хотели бы делать" (направления применения)</h4>
              
              {/* Таблица */}
              <div className="overflow-x-auto mb-4">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Направление применения</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Примеры ответов</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Кол-во упоминаний</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">📊 Анализ данных и отчёты</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">"Хочу использовать для аналитики по персоналу", "для прогнозов"</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">4</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">📝 Создание документов и шаблонов</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">"Чтобы помогал формировать регламенты, письма"</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">🎓 Обучение сотрудников</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">"Для подготовки программ обучения и тестов"</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">3</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">⚙️ Автоматизация процессов</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">"Чтобы делал расчёты, сводил данные"</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">2</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">💡 Генерация идей и решений</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">"Чтобы подсказывал варианты, как улучшить процессы"</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">2</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">Итого</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">—</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">14</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Вывод */}
              <div className="border-t border-gray-200 pt-4">
                <div>
                  <div className="mb-2">
                    <span className="font-medium">Вывод:</span>
                  </div>
                  <div className="text-sm text-slate-900 space-y-2">
                    <p>люди хотят применять ИИ прежде всего для аналитики и подготовки документов — то есть там, где сейчас теряют время на ручные операции.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Уровень осознанности запросов */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-slate-900 mb-3">1.3. Уровень осознанности запросов</h4>
              
              {/* Таблица */}
              <div className="overflow-x-auto mb-4">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Уровень</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Характеристика</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Доля от 17 ответов</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                          <span className="font-medium">1 - Поверхностный</span>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">"Хочу попробовать", без конкретики</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">6 ответов (35%)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                          <span className="font-medium">2 - Конкретный</span>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Упоминает направление («для аналитики», «для текстов»)</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">7 ответов (41%)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                          <span className="font-medium">3 - Осознанный</span>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Формулирует проблему и ожидаемый результат</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">4 ответа (24%)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Вывод */}
              <div className="border-t border-gray-200 pt-4">
                <div>
                  <div className="mb-2">
                    <span className="font-medium">Вывод:</span>
                  </div>
                  <div className="text-sm text-slate-900 space-y-2">
                    <p>даже при небольшом объёме данных видно: интерес к ИИ есть, но уровень формулирования запросов — базовый. Это подтверждает необходимость обучения "от практики", а не общих лекций.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Сводный аналитический вывод */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-slate-900 mb-3">Сводный аналитический вывод</h4>
              
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-slate-900 leading-relaxed">
                    Сотрудники видят потенциал ИИ, но не понимают "как именно" внедрить его в работу.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-slate-900 leading-relaxed">
                    Ключевой запрос — "научите использовать ИИ безопасно и по делу".
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-slate-900 leading-relaxed">
                    2-3 человека предложили конкретные идеи — например, применение ИИ для анализа компетенций или генерации team-building программ.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-slate-900 leading-relaxed">
                    Возможность для обучения: создать модуль "Как адаптировать ИИ под свои задачи" и включить практику по разбору реальных кейсов из ответов.
                  </p>
                </div>
              </div>
            </div>

            {/* Голоса сотрудников: ожидания и потребности */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-slate-900 mb-4">Голоса сотрудников: ожидания и потребности</h4>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <p className="text-sm text-slate-900 italic mb-1">"Хотелось бы применять ИИ в рабочих целях — для аналитики и систематизации данных. Например, часто не хватает инструмента, который бы быстро находил выполненный проект или бюджетную цифру."</p>
                  <p className="text-xs text-gray-600 font-medium">— сотрудник Строительства</p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4 py-2">
                  <p className="text-sm text-slate-900 italic mb-1">"Не хватает обучения — коротких роликов и инструкций, как правильно использовать ИИ. Особенно российских инструментов без платных подписок и с понятными правилами безопасности."</p>
                  <p className="text-xs text-gray-600 font-medium">— сотрудник HR</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4 py-2">
                  <p className="text-sm text-slate-900 italic mb-1">"Хочу, чтобы искусственный интеллект помогал проводить аналитику по персоналу. Пока не знаю, как это реализовать, но уверен, что это сильно упростило бы работу."</p>
                  <p className="text-xs text-gray-600 font-medium">— сотрудник HR</p>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-4 py-2">
                  <p className="text-sm text-slate-900 italic mb-1">"В маркетинге не хватает платного функционала и доступа к расширенным возможностям нейросетей — например, для создания презентаций, анимаций, рендеров и аналитики рекламных кампаний."</p>
                  <p className="text-xs text-gray-600 font-medium">— сотрудник Маркетинга</p>
                </div>
                
                <div className="border-l-4 border-teal-500 pl-4 py-2">
                  <p className="text-sm text-slate-900 italic mb-1">"Хотелось бы, чтобы ИИ умел анализировать конкурентов — кто, с какими креативами, когда выходит, какие офферы использует. Это очень трудозатратная работа вручную."</p>
                  <p className="text-xs text-gray-600 font-medium">— сотрудник Маркетинга</p>
                </div>
                
                <div className="border-l-4 border-red-500 pl-4 py-2">
                  <p className="text-sm text-slate-900 italic mb-1">"Хочу использовать ИИ для автоматического подсчёта объёмов работ по чертежам. Это сэкономило бы много времени и снизило риск ошибок."</p>
                  <p className="text-xs text-gray-600 font-medium">— сотрудник Строительства</p>
                </div>
                
                <div className="border-l-4 border-indigo-500 pl-4 py-2">
                  <p className="text-sm text-slate-900 italic mb-1">"Нам не хватает внутренних ИИ-моделей, которые могли бы работать с документами без выхода в интернет. Это помогло бы безопасно искать информацию во внутренних базах и обеспечило бы информационную защиту."</p>
                  <p className="text-xs text-gray-600 font-medium">— сотрудник Цифры</p>
                </div>
                
                <div className="border-l-4 border-pink-500 pl-4 py-2">
                  <p className="text-sm text-slate-900 italic mb-1">"Хотелось бы легализовать работу с ИИ. Сейчас приходится пользоваться VPN и оплачивать инструменты из личных средств. Было бы здорово, если бы компания официально поддержала это."</p>
                  <p className="text-xs text-gray-600 font-medium">— сотрудник Цифрового блока</p>
                </div>
                
                <div className="border-l-4 border-yellow-500 pl-4 py-2">
                  <p className="text-sm text-slate-900 italic mb-1">"Хотелось бы, чтобы ИИ стал персонализированным помощником — подсказывал, как лучше действовать, исходя из привычек и целей. Тогда он реально помогал бы развиваться."</p>
                  <p className="text-xs text-gray-600 font-medium">— сотрудник Строительства</p>
                </div>
                
                <div className="border-l-4 border-cyan-500 pl-4 py-2">
                  <p className="text-sm text-slate-900 italic mb-1">"На данный момент не использую, но планирую разобраться с этой темой. Понимаю, что ИИ — это возможность упростить жизнь и работу, если знать, как с ним обращаться."</p>
                  <p className="text-xs text-gray-600 font-medium">— сотрудник Продаж</p>
                </div>
              </div>
            </div>

            {/* Инсайты из качественного анализа */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-slate-900 mb-3">Инсайты из качественного анализа</h4>
              
              <div className="space-y-4">
                <div>
                  <div className="flex items-start gap-2 mb-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-slate-900 font-medium leading-relaxed">
                      1. Главный запрос — обучение.
                    </p>
                  </div>
                  <p className="text-sm text-slate-900 leading-relaxed ml-6">
                    Сотрудники осознают потенциал ИИ, но не знают, как им пользоваться безопасно и эффективно.
                  </p>
                </div>

                <div>
                  <div className="flex items-start gap-2 mb-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-slate-900 font-medium leading-relaxed">
                      2. Второй по значимости запрос — легализация и доступ.
                    </p>
                  </div>
                  <p className="text-sm text-slate-900 leading-relaxed ml-6">
                    Многие отмечают, что им приходится использовать VPN и личные аккаунты.
                  </p>
                </div>

                <div>
                  <div className="flex items-start gap-2 mb-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-slate-900 font-medium leading-relaxed">
                      3. Практические ожидания:
                    </p>
                  </div>
                  <div className="ml-6 space-y-2">
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-slate-900 leading-relaxed">
                        аналитика и автоматизация рутинных расчётов;
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-slate-900 leading-relaxed">
                        поиск и систематизация информации по проектам;
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-slate-900 leading-relaxed">
                        развитие внутренних инструментов на базе корпоративных данных.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-2 mb-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-slate-900 font-medium leading-relaxed">
                      4. Эмоциональный тон — позитивный, но с осторожностью.
                    </p>
                  </div>
                  <p className="text-sm text-slate-900 leading-relaxed ml-6">
                    Люди верят в пользу ИИ, но боятся "ошибиться" из-за недостатка знаний или ограничений безопасности.
                  </p>
                </div>
              </div>
            </div>

            {/* Выводы из качественного анализа */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-slate-900 mb-3">Выводы из качественного анализа</h4>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">1</div>
                  <p className="text-sm text-slate-900 leading-relaxed">
                    <strong>ИИ реально работает как "ускоритель"</strong> — экономия времени, упрощение рутины, повышение качества текстов и визуалов.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">2</div>
                  <p className="text-sm text-slate-900 leading-relaxed">
                    <strong>Наиболее зрелые кейсы</strong> — в HR, Маркетинге, IT и Цифровом блоке, где сотрудники видят ИИ как партнёра, а не игрушку.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">3</div>
                  <p className="text-sm text-slate-900 leading-relaxed">
                    <strong>Инструменты используются осознанно:</strong> Perplexity, ChatGPT, Midjourney, DeepSeek, Manus — с пониманием, чем каждый полезен.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">4</div>
                  <p className="text-sm text-slate-900 leading-relaxed">
                    <strong>Уровень детализации ответов растёт там, где уже есть эксперименты и свобода применения.</strong>
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">5</div>
                  <p className="text-sm text-slate-900 leading-relaxed">
                    <strong>Инсайты можно использовать в обучении:</strong> эти реальные примеры — отличные кейсы для включения в тренинги и презентации.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </CardContent>
      </Card>

      {/* Вопрос 4 */}
      <Card className="border border-border shadow-none rounded-lg" style={{ boxShadow: 'none' }}>
        <CardHeader>
          <CardTitle id="question-4" className="text-xl font-semibold">Вопрос 4 - ИИ для тебя — больше угроза или возможность? Почему?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          
          {/* Вводный текст */}
          <div className="mb-6">
            <p className="text-sm text-slate-900 leading-relaxed">
              Это один из самых эмоциональных и "осознанных" вопросов. Сотрудники отвечали на него чаще, чем на второй и третий, и именно здесь <strong>лучше всего видны установки, отношение и страхи</strong> — то, что определяет, как обучение нужно позиционировать.
            </p>
          </div>

          {/* Количественный анализ */}
          <div className="border-t border-gray-200 pt-6">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-lg font-semibold">Количественный анализ</h3>
            </div>
            
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-slate-900 mb-3">1.1. Распределение ответов по восприятию ИИ</h4>
              
              {/* Таблица */}
              <div className="overflow-x-auto mb-4">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Отношение к ИИ</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Кол-во сотрудников</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Доля от всех ответов (206)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span>Возможность</span>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">60</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">29%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                          <span>Нейтральное / не определились</span>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">20</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">10%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                          <span>Зависит от применения (осторожный оптимизм)</span>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">30</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">15%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <span>Угроза</span>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">10</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">5%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                          <span>Не ответили / не поняли вопрос</span>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">86</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">42%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">Итого</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">206</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">100%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Интерпретация */}
          <div className="border-t border-gray-200 pt-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-5 flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Интерпретация:</h3>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
              <p className="text-sm text-slate-900 leading-relaxed">
                Более половины сотрудников (около <strong>44%</strong>) видят в ИИ <strong>возможности</strong>, ещё <strong>15%</strong> — <strong>осторожны</strong>, считая, что "всё зависит от того, как использовать". Только <strong>5%</strong> воспринимают ИИ как угрозу.
              </p>
            </div>
          </div>

          {/* Ключевые причины позитивного восприятия */}
          <div className="border-t border-gray-200 pt-6">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-lg font-semibold">1.2. Ключевые причины позитивного восприятия</h3>
            </div>
            
            <div className="mb-4">
              {/* Таблица */}
              <div className="overflow-x-auto mb-4">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Основной мотив</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Кол-во упоминаний</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Примеры формулировок</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                          </svg>
                          <span>Экономия времени и ресурсов</span>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">22</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">"Сокращает рутину", "ускоряет написание текстов"</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                            <path d="M5 5a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                          <span>Расширение возможностей и идей</span>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">17</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">"Помогает развиваться", "даёт новые идеи"</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 3a1 1 0 000 2v12a1 1 0 102 0V5h9a1 1 0 100-2H3z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M7 9a1 1 0 011-1h5a1 1 0 110 2H8a1 1 0 01-1-1zm0 4a1 1 0 011-1h5a1 1 0 110 2H8a1 1 0 01-1-1z" clipRule="evenodd" />
                          </svg>
                          <span>Повышение эффективности работы</span>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">12</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">"Освобождает время для анализа", "помогает принимать решения"</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>Инструмент обучения</span>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">7</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">"Помогает изучать новые темы, объясняет сложные вещи"</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">Итого (позитивные аргументы)</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">58</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">—</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Ключевые причины настороженности */}
          <div className="border-t border-gray-200 pt-6">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-lg font-semibold">1.3. Ключевые причины настороженности</h3>
            </div>
            
            <div className="mb-4">
              {/* Таблица */}
              <div className="overflow-x-auto mb-4">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Основание опасений</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Кол-во упоминаний</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Примеры формулировок</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                          </svg>
                          <span>Опасения утечки данных</span>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">8</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">"Не знаю, безопасно ли использовать в работе"</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                          </svg>
                          <span>Недоверие к качеству ответов</span>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">5</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">"Может врать, нужно всё перепроверять"</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            <path d="M8 11a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                          </svg>
                          <span>Страх замены людей</span>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">4</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">"Боюсь, что ИИ займёт рабочие места"</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          <span>Сложность / непонимание</span>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">3</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">"Не знаю, как это работает"</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">Итого (негативные аргументы)</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">20</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">—</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Качественные инсайты (реальные цитаты сотрудников) */}
          <div className="border-t border-gray-200 pt-6">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-lg font-semibold">Качественные инсайты (реальные цитаты сотрудников)</h3>
            </div>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <p className="text-sm text-slate-900 italic mb-1">"ИИ — это возможность. Он экономит время и даёт вдохновение. Главное — научиться правильно формулировать запрос."</p>
                <p className="text-xs text-gray-600 font-medium">— сотрудник HR</p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <p className="text-sm text-slate-900 italic mb-1">"Для меня ИИ — инструмент. Всё зависит от того, кто им пользуется. Как молоток — в умелых руках помогает, в неумелых — может навредить."</p>
                <p className="text-xs text-gray-600 font-medium">— сотрудник Маркетинга</p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4 py-2">
                <p className="text-sm text-slate-900 italic mb-1">"ИИ освобождает время от рутины и даёт возможность сосредоточиться на творчестве. Но нужно понимать риски, особенно с данными."</p>
                <p className="text-xs text-gray-600 font-medium">— сотрудник IT</p>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-4 py-2">
                <p className="text-sm text-slate-900 italic mb-1">"Я считаю, что ИИ — это возможность для тех, кто умеет думать. Он не заменит человека, но усилит его."</p>
                <p className="text-xs text-gray-600 font-medium">— сотрудник Цифра</p>
              </div>
              
              <div className="border-l-4 border-red-500 pl-4 py-2">
                <p className="text-sm text-slate-900 italic mb-1">"Пока не доверяю. ИИ может ошибаться, а люди часто не проверяют его выводы."</p>
                <p className="text-xs text-gray-600 font-medium">— сотрудник Финансов</p>
              </div>
              
              <div className="border-l-4 border-teal-500 pl-4 py-2">
                <p className="text-sm text-slate-900 italic mb-1">"Мне кажется, это и возможность, и угроза. Возможность — для тех, кто учится и развивается, угроза — для тех, кто боится перемен."</p>
                <p className="text-xs text-gray-600 font-medium">— сотрудник HR</p>
              </div>
              
              <div className="border-l-4 border-indigo-500 pl-4 py-2">
                <p className="text-sm text-slate-900 italic mb-1">"Боюсь, что ИИ приведёт к сокращению рабочих мест. Хотя понимаю, что развитие всё равно не остановить."</p>
                <p className="text-xs text-gray-600 font-medium">— сотрудник Строительства</p>
              </div>
            </div>
          </div>

          {/* Интерпретация качественных данных */}
          <div className="border-t border-gray-200 pt-6">
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Интерпретация качественных данных</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">1</div>
                <p className="text-sm text-slate-900 leading-relaxed">
                  <strong>Главный эмоциональный фон — рациональный оптимизм.</strong> Сотрудники настроены позитивно, но <em>осознают риски</em>. Формируется "зрелая осторожность": ИИ = помощник, но не замена человеку.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">2</div>
                <p className="text-sm text-slate-900 leading-relaxed">
                  <strong>ИИ воспринимается как инструмент роста, а не как угроза контролю.</strong> Даже скептики говорят о пользе, если "использовать правильно".
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">3</div>
                <p className="text-sm text-slate-900 leading-relaxed">
                  <strong>Страх утечки данных остаётся главным барьером</strong>, особенно у юристов, финансов и службы безопасности.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">4</div>
                <p className="text-sm text-slate-900 leading-relaxed">
                  <strong>Высокая осознанность в офисных и цифровых подразделениях:</strong> там звучит зрелая позиция — "нужно учить и развивать, а не бояться".
                </p>
              </div>
            </div>
          </div>

          {/* Сводные аналитические выводы */}
          <div className="border-t border-gray-200 pt-6">
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Сводные аналитические выводы</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-slate-900 leading-relaxed">
                  Уровень доверия к ИИ в компании высокий (≈ 45% позитивных ответов).
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-slate-900 leading-relaxed">
                  Сотрудники видят в ИИ прежде всего инструмент эффективности, а не угрозу.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-slate-900 leading-relaxed">
                  Настороженность связана не с самим ИИ, а с отсутствием чётких правил безопасности и недостатком знаний.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-slate-900 leading-relaxed">
                  Есть осознанная часть аудитории, готовая помогать коллегам и делиться опытом.
                </p>
              </div>
            </div>
          </div>

          {/* Рекомендации для обучения и руководства */}
          <div className="border-t border-gray-200 pt-6">
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Рекомендации для обучения и руководства</h3>
            </div>
            
            {/* Таблица рекомендаций */}
            <div className="overflow-x-auto mb-4">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Цель обучения</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Конкретные шаги</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Формат</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                      Снизить тревожность и укрепить доверие к ИИ
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Объяснить, как ИИ работает, развеять мифы, показать, что это не "чёрный ящик".</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Короткие видео "Как ИИ думает", FAQ "Мифы и факты".</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                      Повысить уверенность в безопасности
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Донести правила: какие данные можно вводить, какие нельзя, показать безопасные корпоративные аналоги.</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Интерактив "Безопасно ли это?", памятка по безопасности.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                      Показать пользу ИИ на реальных примерах
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Продемонстрировать успешные кейсы внутри компании (HR, IT, маркетинг).</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Серия внутренних мини-кейсов "ИИ в моей работе".</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">
                      Развивать культуру осознанного использования
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Обучить сотрудников проверять результаты ИИ, критически мыслить.</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Микрокурс "Как задавать запросы и проверять ответы".</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Итоги по вопросу 4 */}
          <div className="border-t border-gray-200 pt-6">
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Итоги по вопросу 4</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-slate-900 leading-relaxed">
                  Сотрудники не боятся ИИ — они готовы учиться.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-slate-900 leading-relaxed">
                  Основной запрос — понять, как использовать его безопасно и эффективно.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-slate-900 leading-relaxed">
                  Позитивный настрой — это сильная база для масштабного обучения и формирования культуры "человеко-центричного ИИ" в компании.
                </p>
              </div>
            </div>
          </div>

        </CardContent>
      </Card>


    </div>
  );
};

export default DetailedOverview;

