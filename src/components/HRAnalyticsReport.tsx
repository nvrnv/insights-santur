"use client";

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { CheckCircle, XCircle, AlertCircle, Search, TrendingUp, Users, Brain, Database, BarChart3, Target, Clock, DollarSign, MessageSquare, FileText, Settings, Zap, Eye, Award, PieChart as PieChartIcon, MessageCircle, Lightbulb } from 'lucide-react';
import { CitationLink } from '@/components/ui/citation';
import MeetingTemplateCard from './MeetingTemplateCard';
import MeetingDetailsCard from './MeetingDetailsCard';
import HeroSection from './HeroSection';
import TopicCard from './TopicCard';
import DetailedOverview from './DetailedOverview';
import ICEScoreTable, { ICEScoreItem } from '@/components/ui/ice-score-table';
import KeyContradictionsBlock from './KeyContradictionsBlock';

const citations = {
};
const HRAnalyticsReport = () => {
  const [activeTab, setActiveTab] = useState('analysis');
  const [lastClickedButton, setLastClickedButton] = useState<string | null>(null);


  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <div className="max-w-6xl mx-auto px-6 py-8 space-y-8">





            {/* Key Contradictions Block */}
            <KeyContradictionsBlock />

          </div>;
      case 'detailed':
        return <DetailedOverview />;
      case 'analysis':
        return <div className="max-w-6xl mx-auto px-6 py-8 space-y-8">
            {/* Общее summary по компании */}
            <Card className="border border-border shadow-none rounded-lg" style={{ boxShadow: 'none' }}>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">I. Общее summary по компании</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-slate-900 leading-relaxed">
                    В опросе приняли участие 206 сотрудников из 22 подразделений. 70 % дали хотя бы частично осмысленные ответы, но только 18 % — действительно развёрнутые.
                  </p>
                  <p className="text-sm text-slate-900 leading-relaxed">
                    ИИ используется преимущественно точечно, чаще — для текстов и поиска информации. Системное применение встречается в Цифре, IT, HR, Маркетинге и PR.
                  </p>
                  <p className="text-sm text-slate-900 leading-relaxed">
                    Знание инструментов фрагментарное. ChatGPT знают почти все, GigaChat, DeepSeek и другие корпоративные решения — единицы.
                  </p>
                  <p className="text-sm text-slate-900 leading-relaxed">
                    Отношение к ИИ — позитивное. Более 40 % сотрудников видят в нём возможность, менее 10 % — угрозу.
                  </p>
                  <p className="text-sm text-slate-900 leading-relaxed">
                    Главные барьеры: отсутствие обучения, страх утечки данных, ограниченный доступ к сервисам.
                  </p>
                  <p className="text-sm text-slate-900 leading-relaxed">
                    Запрос компании очевиден: обучить сотрудников безопасно и эффективно использовать ИИ в повседневной работе, показать практическую пользу и снять тревожность.
                  </p>
              </CardContent>
            </Card>

            {/* Ключевые инсайты */}
            <Card className="border border-border shadow-none rounded-lg" style={{ boxShadow: 'none' }}>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">II. Ключевые инсайты</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                  <div>
                    <div className="flex items-start gap-2">
                      <div className="w-4 h-4 bg-yellow-400 rounded-full flex-shrink-0 mt-0.5"></div>
                      <p className="text-sm text-slate-900 leading-relaxed">
                        1. ИИ уже часть корпоративной культуры. Люди пользуются им — пусть не всегда осознанно — и видят в этом преимущество.
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-start gap-2">
                      <div className="w-4 h-4 bg-yellow-400 rounded-full flex-shrink-0 mt-0.5"></div>
                      <p className="text-sm text-slate-900 leading-relaxed">
                        2. В компании сформировалось "ядро зрелости" (~15 % сотрудников) — оно активно применяет ИИ и может стать амбассадором изменений.
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-start gap-2">
                      <div className="w-4 h-4 bg-yellow-400 rounded-full flex-shrink-0 mt-0.5"></div>
                      <p className="text-sm text-slate-900 leading-relaxed">
                        3. Сотрудники хотят учиться. Фраза "не хватает обучения" — самая частая в ответах. Люди не просят больше регламентов, они просят объяснений "на пальцах".
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-start gap-2">
                      <div className="w-4 h-4 bg-yellow-400 rounded-full flex-shrink-0 mt-0.5"></div>
                      <p className="text-sm text-slate-900 leading-relaxed">
                        4. Основной страх — не технология, а безопасность. Почти каждый второй сомневается, можно ли вводить рабочие данные.
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-start gap-2">
                      <div className="w-4 h-4 bg-yellow-400 rounded-full flex-shrink-0 mt-0.5"></div>
                      <p className="text-sm text-slate-900 leading-relaxed">
                        5. Опрос показал готовность к действию. Компания находится на стадии осознанного интереса: "понимаем, что нужно, но ждём, когда покажут, как делать правильно".
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

            {/* Реальные кейсы использования ИИ */}
            <Card className="border border-border shadow-none rounded-lg" style={{ boxShadow: 'none' }}>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">II.1. Реальные кейсы использования ИИ от сотрудников</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-slate-900 leading-relaxed mb-4">
                  Ниже представлены конкретные примеры использования искусственного интеллекта сотрудниками различных подразделений компании:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border-l-4 border-blue-500 pl-4 py-3 bg-blue-50 rounded-r-lg">
                    <p className="text-sm text-slate-900 italic mb-2">"Использую ChatGPT, чтобы объяснить сложные темы детям и составлять домашние задания. На работе — чтобы формулировать тексты для сотрудников."</p>
                    <p className="text-xs text-gray-600 font-medium">сотрудник HR</p>
                  </div>
                  
                  <div className="border-l-4 border-orange-500 pl-4 py-3 bg-orange-50 rounded-r-lg">
                    <p className="text-sm text-slate-900 italic mb-2">"Пробовали с помощью ИИ превратить описания требований для разработчиков в инструкции для пользователей. AI сам написал макрос для Excel — перенёс данные, когда формулы не работали. Очень помогло."</p>
                    <p className="text-xs text-gray-600 font-medium">сотрудник IT</p>
                  </div>
                  
                  <div className="border-l-4 border-teal-500 pl-4 py-3 bg-teal-50 rounded-r-lg">
                    <p className="text-sm text-slate-900 italic mb-2">"Часто пользуюсь ИИ для поиска информации. Он подаёт данные из разных источников в структурированном виде, в таблицах и списках — это экономит массу времени."</p>
                    <p className="text-xs text-gray-600 font-medium">сотрудник Финансов</p>
                  </div>
                  
                  <div className="border-l-4 border-indigo-500 pl-4 py-3 bg-indigo-50 rounded-r-lg">
                    <p className="text-sm text-slate-900 italic mb-2">"Использую нейросети для визуализации идей, создания mind map и видео. Это замена обычному поиску — быстрее, гибче, помогает находить новые решения."</p>
                    <p className="text-xs text-gray-600 font-medium">сотрудник Цифра</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Рекомендации и выводы по трём уровням */}
            <Card className="border border-border shadow-none rounded-lg" style={{ boxShadow: 'none' }}>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">III. Рекомендации и выводы по трём уровням</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                
                {/* Для руководства компании */}
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 bg-gray-800 text-white rounded-sm flex items-center justify-center text-sm font-medium">1</div>
                    <h3 className="text-lg font-semibold">Для руководства компании</h3>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                      <span className="font-medium">Цель:</span>
                    </div>
                    <p className="text-sm text-slate-900">задать тон и управленческое направление трансформации.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-medium text-slate-900 mb-3">Что нужно сделать</h4>
                      <ul className="space-y-2 text-sm text-slate-900">
                        <li>• Принять стратегическое решение о внедрении ИИ как корпоративной компетенции.</li>
                        <li>• Создать внутреннюю политику использования ИИ.</li>
                        <li>• Публично поддержать обучение и делиться собственными кейсами.</li>
                        <li>• Определить подразделения-лидеры и назначить "ИИ-амбассадоров".</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-3">Почему это важно</h4>
                      <ul className="space-y-2 text-sm text-slate-900">
                        <li>• Это сигнал сотрудникам, что ИИ — не "мода", а инструмент развития.</li>
                        <li>• Снимает страхи и обеспечивает безопасность данных.</li>
                        <li>• Формирует доверие и культуру открытых изменений.</li>
                        <li>• Это ускорит внедрение и обмен опытом по горизонтали.</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                      <span className="font-medium">Главный вывод для руководства:</span>
                    </div>
                    <div className="text-sm text-slate-900 space-y-2">
                      <p>ИИ перестал быть темой "про IT". Это новая управленческая реальность.</p>
                      <p>Роль лидеров — превратить интерес сотрудников в движение вперёд.</p>
                    </div>
                  </div>
                </div>

                {/* Для HR-директора и HR-функции */}
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 bg-gray-800 text-white rounded-sm flex items-center justify-center text-sm font-medium">2</div>
                    <h3 className="text-lg font-semibold">Для HR-директора и HR-функции</h3>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                      <span className="font-medium">Цель:</span>
                    </div>
                    <p className="text-sm text-slate-900">превратить обучение в инструмент вовлечения и развития культуры ИИ.</p>
                  </div>

                  {/* Таблица */}
                  <div className="mb-6">
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Направление</th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Действие</th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Ожидаемый эффект</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">Диагностика и сегментация</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Разделить сотрудников на 3 уровня зрелости (начальный / средний / продвинутый).</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Обеспечить релевантное обучение по потребностям.</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">Базовое обучение</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Видеоуроки "Что такое ИИ и как им пользоваться безопасно".</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Снять страх и повысить уверенность.</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">Практикумы</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">"ИИ в моей профессии" — кейсы для HR, финансистов, строителей и т.д.</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Перенос фокуса с теории на практику.</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">Коммуникации и поддержка</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Запустить внутренний канал "ИИ-навигация": новости, советы, шаблоны запросов.</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Сделать ИИ частью ежедневной практики.</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">Развитие амбассадоров</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Поддерживать активных пользователей и делиться их примерами.</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Формировать внутреннюю экспертность и сообщество.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                      <span className="font-medium">Главный вывод для HR:</span>
                    </div>
                    <div className="text-sm text-slate-900 space-y-2">
                      <p>ИИ — это не только обучение, это часть культуры развития. HR должен стать "центром уверенности", который помогает сотрудникам не бояться технологий.</p>
                    </div>
                  </div>
                </div>

                {/* Для провайдера обучения */}
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 bg-gray-800 text-white rounded-sm flex items-center justify-center text-sm font-medium">3</div>
                    <h3 className="text-lg font-semibold">Для провайдера обучения</h3>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                      <span className="font-medium">Цель:</span>
                    </div>
                    <p className="text-sm text-slate-900">адаптировать формат обучения под реальный уровень компании.</p>
                  </div>

                  {/* Таблица */}
                  <div className="mb-6">
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Направление</th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Конкретные шаги</th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Формат</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">Адаптировать контент под уровни зрелости</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Начинающим — базовые принципы, продвинутым — промт-инжиниринг и кейсы.</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Модульная структура обучения.</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">Перевести обучение из лекций в практику</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">"Учимся делать вместе": реальные задачи из повседневной работы сотрудников.</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Практикумы, мини-кейсы, лаборатории.</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">Показать безопасность на практике</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Уроки "Что можно вводить в ИИ", "Как обезличивать данные".</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Интерактивные сценарии, симуляции.</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">Интегрировать примеры из ответов сотрудников</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Использовать реальные цитаты и ситуации из опроса.</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Делает обучение ближе и доверительнее.</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">Создать устойчивую систему поддержки</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">FAQ, чат-бот, внутренняя "ИИ-памятка" для сотрудников.</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Закрепляет эффект обучения.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                      <span className="font-medium">Главный вывод для провайдера:</span>
                    </div>
                    <div className="text-sm text-slate-900 space-y-2">
                      <p>Эта компания готова учиться, но не любит теории.</p>
                      <p>Нужна программа "от практики к опыту", а не "от слайда к слайду".</p>
                    </div>
                  </div>
                </div>

              </CardContent>
            </Card>

            {/* Структурированный план действий */}
            <Card className="border border-border shadow-none rounded-lg" style={{ boxShadow: 'none' }}>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">IV. Структурированный план действий (дорожная карта)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Этап</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Основные шаги</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Цель</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">1. Коммуникация и позиционирование</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Объявить стратегию "ИИ как инструмент эффективности", запустить внутреннюю кампанию.</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Сформировать позитивный фон и вовлечённость.</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">2. Разработка политики ИИ</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Совместно HR + IT + Юристы. Утвердить правила безопасного использования.</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Снять страхи и задать рамки.</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">3. Обучение и внедрение</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Запустить многоуровневое обучение (база + практика).</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Повысить уровень зрелости и уверенности.</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">4. Поддержка и сообщество</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Создать канал / комьюнити амбассадоров ИИ.</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Расширить культуру и обмен опытом.</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">5. Повторная диагностика</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Провести повторный опрос.</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Измерить прогресс и скорректировать программу.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Финальный аналитический акцент */}
            <Card className="border border-border shadow-none rounded-lg" style={{ boxShadow: 'none' }}>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">V. Финальный аналитический акцент</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      <span className="font-medium">Обзор:</span>
                    </div>
                    <p className="text-sm text-slate-900 leading-relaxed">
                      ИИ в компании — уже реальность, но пока не практика.
                    </p>
                    <p className="text-sm text-slate-900 leading-relaxed mt-2">
                      Сотрудники видят пользу, но ждут уверенности и разрешения.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                      <span className="font-medium">Цель:</span>
                    </div>
                    <div className="text-sm text-slate-900 leading-relaxed space-y-2">
                      <p>Задача руководства — показать направление,</p>
                      <p>роль HR — превратить обучение в развитие,</p>
                      <p>миссия провайдера — дать сотрудникам инструменты, а не только знания.</p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                      <span className="font-medium text-slate-900">Главный вывод:</span>
                    </div>
                    <div className="text-sm text-slate-900 leading-relaxed">
                      <p>Компания стоит на пороге зрелого взаимодействия с ИИ. При правильной коммуникации и обучении она способна превратить интерес в уверенность, а уверенность — в конкурентное преимущество.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="h-16"></div>
        </div>;
      case 'top10':
        return <div className="max-w-6xl mx-auto px-6 py-8 space-y-8">
            {/* ТОП 10 идей развитию культуры ИИ */}
            <Card className="border border-border shadow-none rounded-lg" style={{ boxShadow: 'none' }}>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">ТОП 10 идей развитию культуры ИИ</CardTitle>
                <p className="text-sm text-slate-600 mt-2">
                  Практические рекомендации для формирования культуры использования искусственного интеллекта в компании
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-800 font-medium">
                    💡 Все идеи адаптированы под текущую зрелость — с минимальными затратами, но сильным эффектом
                  </p>
                </div>

                {/* Идея 1 */}
                <div className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 rounded-r-lg">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">"ИИ-кружки по интересам" — мини-сообщества внутри компании</h3>
                      <p className="text-sm text-slate-700 leading-relaxed mb-3">
                        Создать 3–4 тематических направления:
                      </p>
                      <ul className="text-sm text-slate-700 mb-3 space-y-1">
                        <li>🧠 "Тексты и коммуникации с ИИ" (HR, PR, внутренние коммуникации)</li>
                        <li>🎨 "Графика и визуалы" (маркетинг, бренд, дизайн)</li>
                        <li>📊 "Данные и аналитика" (финансы, девелопмент, Цифра, IT)</li>
                        <li>🏗 "ИИ в инженерии и строительстве"</li>
                      </ul>
                      <p className="text-sm text-slate-700 leading-relaxed mb-3">
                        Каждое сообщество встречается раз в 2 недели, обсуждает находки, делится короткими кейсами "что я попробовал".
                      </p>
                      <div className="text-xs text-blue-600 font-medium">
                        💡 Самый дешёвый и эффективный способ развивать культуру обмена и доверие к ИИ
                      </div>
                    </div>
                  </div>
                </div>

                {/* Идея 2 */}
                <div className="border-l-4 border-green-500 pl-6 py-4 bg-green-50 rounded-r-lg">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">"ИИ-интенсив 3+3 недели"</h3>
                      <p className="text-sm text-slate-700 leading-relaxed mb-3">
                        Короткие циклы обучения с практикой:
                      </p>
                      <ul className="text-sm text-slate-700 mb-3 space-y-1">
                        <li>3 недели изучаем конкретный инструмент (например, ChatGPT, Midjourney, Perplexity)</li>
                        <li>3 недели внедряем его в работу, потом делимся результатами</li>
                        <li>в конце — "мини-демо-день", где лучшие кейсы показываются коллегам</li>
                      </ul>
                      <p className="text-sm text-slate-700 leading-relaxed mb-3">
                        Можно делать по командам, а можно кросс-функционально (HR + маркетинг + IT).
                      </p>
                      <div className="text-xs text-green-600 font-medium">
                        🎯 Формат неформальный, но даёт реальный прирост навыков
                      </div>
                    </div>
                  </div>
                </div>

                {/* Идея 3 */}
                <div className="border-l-4 border-purple-500 pl-6 py-4 bg-purple-50 rounded-r-lg">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">"Пятиминутка ИИ" — микро-обучение каждую неделю</h3>
                      <p className="text-sm text-slate-700 leading-relaxed mb-3">
                        Каждый понедельник или пятницу рассылка/видео/пост "1 приём за 5 минут":
                      </p>
                      <ul className="text-sm text-slate-700 mb-3 space-y-1">
                        <li>📝 "Как составить промт для HR-задачи"</li>
                        <li>📊 "Как попросить ИИ проанализировать таблицу"</li>
                        <li>🎨 "Как улучшить слайд с помощью ИИ"</li>
                      </ul>
                      <div className="text-xs text-purple-600 font-medium">
                        💡 Это удерживает интерес и формирует привычку
                      </div>
                    </div>
                  </div>
                </div>

                {/* Идея 4 */}
                <div className="border-l-4 border-orange-500 pl-6 py-4 bg-orange-50 rounded-r-lg">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">"Битва ИИ и человека" — командная внутренняя игра</h3>
                      <p className="text-sm text-slate-700 leading-relaxed mb-3">
                        Команды соревнуются, кто быстрее решит задачу: человек вручную или человек с помощью ИИ.
                      </p>
                      <p className="text-sm text-slate-700 leading-relaxed mb-3">
                        Примеры: "составь письмо клиенту", "создай креатив для акции", "подготовь 3 идеи для HR-кампании".
                      </p>
                      <p className="text-sm text-slate-700 leading-relaxed mb-3">
                        🏆 Победители получают символические призы (например, "ИИ-мастер месяца").
                      </p>
                      <div className="text-xs text-orange-600 font-medium">
                        🎯 Формат лёгкий, развлекательный, но очень мотивирующий
                      </div>
                    </div>
                  </div>
                </div>

                {/* Идея 5 */}
                <div className="border-l-4 border-teal-500 pl-6 py-4 bg-teal-50 rounded-r-lg">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">5</div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">"ИИ-амбассадоры" и "ИИ-навигаторы"</h3>
                      <p className="text-sm text-slate-700 leading-relaxed mb-3">
                        Выбрать по 1–2 человека из подразделений, кто уже использует ИИ, и дать им роль внутренних наставников:
                      </p>
                      <ul className="text-sm text-slate-700 mb-3 space-y-1">
                        <li>помогать коллегам</li>
                        <li>собирать лайфхаки</li>
                        <li>давать обратную связь HR по потребностям</li>
                      </ul>
                      <div className="text-xs text-teal-600 font-medium">
                        ⚙️ Это создаёт сеть "внутренних экспертов" без формальных позиций
                      </div>
                    </div>
                  </div>
                </div>

                {/* Идея 6 */}
                <div className="border-l-4 border-red-500 pl-6 py-4 bg-red-50 rounded-r-lg">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">6</div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">"ИИ-open talks" — открытые короткие лекции от своих</h3>
                      <p className="text-sm text-slate-700 leading-relaxed mb-3">
                        Каждый месяц — 30-минутная онлайн-встреча "Как мы используем ИИ": один реальный сотрудник показывает свой кейс — без слайдов, без рекламы.
                      </p>
                      <p className="text-sm text-slate-700 leading-relaxed mb-3">
                        🎙 Формат TED-mini внутри компании. 💬 После встречи — открытый чат для вопросов.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Идея 7 */}
                <div className="border-l-4 border-indigo-500 pl-6 py-4 bg-indigo-50 rounded-r-lg">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">7</div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">"ИИ-лаб" — мини-лаборатория пилотов</h3>
                      <p className="text-sm text-slate-700 leading-relaxed mb-3">
                        Раз в квартал собирать по 3–5 инициатив от сотрудников ("Где можно внедрить ИИ в моём отделе").
                      </p>
                      <p className="text-sm text-slate-700 leading-relaxed mb-3">
                        HR и Цифра помогают выбрать 1–2 идеи и поддерживают их на уровне пилота. Через 2 месяца — мини-отчёт и шоу-кейс "что получилось".
                      </p>
                      <div className="text-xs text-indigo-600 font-medium">
                        📊 Это даёт ощущение движения и "настоящих изменений"
                      </div>
                    </div>
                  </div>
                </div>

                {/* Идея 8 */}
                <div className="border-l-4 border-pink-500 pl-6 py-4 bg-pink-50 rounded-r-lg">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">8</div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">"ИИ-дайджест компании"</h3>
                      <p className="text-sm text-slate-700 leading-relaxed mb-3">
                        Раз в месяц HR-коммуникации выпускают короткую рассылку:
                      </p>
                      <ul className="text-sm text-slate-700 mb-3 space-y-1">
                        <li>💡 лучшие примеры из компании</li>
                        <li>🔗 полезные инструменты</li>
                        <li>🎯 промт недели</li>
                        <li>📈 кейс-успеха "как ИИ помог сэкономить время/деньги"</li>
                      </ul>
                      <div className="text-xs text-pink-600 font-medium">
                        🎯 Цель — закрепить эффект обучения и показать, что ИИ реально работает в контексте компании
                      </div>
                    </div>
                  </div>
                </div>

                {/* Идея 9 */}
                <div className="border-l-4 border-yellow-500 pl-6 py-4 bg-yellow-50 rounded-r-lg">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">9</div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">"ИИ-пятница" — свободный формат</h3>
                      <p className="text-sm text-slate-700 leading-relaxed mb-3">
                        Каждую последнюю пятницу месяца сотрудники могут посвятить 1 час экспериментам с ИИ: проверить новый инструмент, придумать промт, автоматизировать рутину.
                      </p>
                      <p className="text-sm text-slate-700 leading-relaxed mb-3">
                        💡 Простое правило: "Потрать час на то, чтобы завтра сэкономить пять."
                      </p>
                      <p className="text-sm text-slate-700 leading-relaxed mb-3">
                        Можно сделать мини-чат "ИИ-пятница", где люди делятся находками.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Идея 10 */}
                <div className="border-l-4 border-gray-500 pl-6 py-4 bg-gray-50 rounded-r-lg">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gray-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">10</div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">"ИИ-мемы и юмор" (внутренняя культура)</h3>
                      <p className="text-sm text-slate-700 leading-relaxed mb-3">
                        Создать лёгкий канал или интранет-рубрику, где сотрудники делятся забавными промтами, ошибками ИИ, шутками.
                      </p>
                      <p className="text-sm text-slate-700 leading-relaxed mb-3">
                        Это снижает тревожность и делает ИИ "своим".
                      </p>
                      <div className="text-xs text-gray-600 font-medium">
                        🎯 Психологический эффект — "ИИ не страшен, он просто инструмент"
                      </div>
                    </div>
                  </div>
                </div>

                {/* Заключение */}
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">🧭 Что это даёт компании</h3>
                  <ul className="space-y-3 text-sm text-slate-700 leading-relaxed">
                    <li>• Формируется живая внутренняя культура ИИ, а не только знание.</li>
                    <li>• Повышается вовлечённость и доверие — через участие, а не обязаловку.</li>
                    <li>• Возникает внутренний поток инициатив, который сам подпитывает изменения.</li>
                    <li>• Обучение становится практикой, а не событием.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            <div className="h-16"></div>
        </div>;
      case 'quantitative':
        return <div className="max-w-6xl mx-auto px-6 py-8 space-y-8">
            {/* Статистика опроса */}
            <Card className="border border-border shadow-none rounded-lg" style={{ boxShadow: 'none' }}>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Статистика опроса</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Показатель</th>
                        <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-slate-900">Значение</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Комментарий</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">Количество участников</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center font-medium">206 сотрудников</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Охвачены 22 подразделения компании.</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">Формат опроса</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">Голосовые ответы (аудио → текст)</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Транскрипция выполнена автоматически, ответы сохранены в виде PDF.</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">Общее количество слов в тексте</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center font-medium">12 003</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Средняя длина одного ответа — ≈ 58 слов.</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">Количество символов (с пробелами)</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center font-medium">80 667</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">В среднем 391 символ на один ответ</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">Общая длительность аудио-записей</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center font-medium">164 минуты</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">В среднем по ≈ 47 секунд на один ответ.</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">Темп речи (фактический)</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center font-medium">≈ 73 слов/мин</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Рассчитан по соотношению слов и реального времени записи.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                {/* Интерпретация */}
                <div className="mt-6">
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-slate-900">Интерпретация</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="text-sm text-slate-900 leading-relaxed">
                      Средняя длина ответа составляет примерно 1 минуту речи. Сотрудники отвечали <strong>спонтанно, но не поверхностно</strong>, что подтверждает естественность формата проведения опроса и позволяет делать выводы о том, что люди выразили свои мысли максимально раскрепощённо.
                    </div>
                    <div className="text-sm text-slate-900 leading-relaxed">
                      Общий объём аудиоматериалов составляет 164 мин (примерно <strong>2 ч 45 мин живого материала</strong>), что является достаточным для проведения как качественного, так и количественного анализа полученных данных.
                    </div>
                    <div className="text-sm text-slate-900 leading-relaxed">
                      Темп речи 73 слова в минуту характерен для неспешного размышления и подтверждает <strong>осознанный характер ответов</strong>, а не попытки быстро отчитаться или "отбыть номер".
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Блок 1. Полнота и вовлечённость ответов сотрудников */}
            <Card className="border border-border shadow-none rounded-lg" style={{ boxShadow: 'none' }}>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Блок 1. Полнота и вовлечённость ответов сотрудников</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* 1.1. Общая структура по числу раскрытых вопросов */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">1.1. Общая структура по числу раскрытых вопросов</h3>
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Количество раскрытых тем в ответе</th>
                          <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-slate-900">Количество сотрудников</th>
                          <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-slate-900">Доля от всех ответов</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">0 (пустой или не по теме)</td>
                          <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center font-medium">61</td>
                          <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">30%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">1 вопрос (минимально)</td>
                          <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center font-medium">78</td>
                          <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">38%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">2 вопроса (умеренно)</td>
                          <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center font-medium">30</td>
                          <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">15%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">3 вопроса (развёрнуто)</td>
                          <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center font-medium">31</td>
                          <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">15%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">4 вопроса (полностью)</td>
                          <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center font-medium">6</td>
                          <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">3%</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-semibold">Итого</td>
                          <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center font-semibold">206</td>
                          <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center font-semibold">100%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="text-sm text-slate-900 leading-relaxed">
                      <strong>Итого:</strong> 37 сотрудников (18%) ответили развёрнуто — на 3-4 вопроса.
                    </div>
                    <div className="text-sm text-slate-900 leading-relaxed">
                      108 человек (52%) дали краткий ответ — на 0-1 вопрос.
                    </div>
                    <div className="text-sm text-slate-900 leading-relaxed">
                      Остальные — средний уровень вовлечённости.
                    </div>
                    <div className="text-sm text-slate-900 leading-relaxed font-medium">
                      <strong>Вывод:</strong> общий интерес к теме ИИ есть, но глубина понимания — ограниченная.
                    </div>
                    <div className="text-sm text-slate-900 leading-relaxed">
                      Большинство участников ограничиваются общими комментариями («не использую», «пробовал, но редко»).
                    </div>
                  </div>
                </div>

                {/* 1.2. Полнота и объём ответов сотрудников */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">1.2. Полнота и объём ответов сотрудников</h3>
                  
                  {/* 1.2.1. Общие показатели по объёму */}
                  <div className="mb-6">
                    <h4 className="text-base font-semibold mb-4">1.2.1. Общие показатели по объёму</h4>
                    <div className="overflow-x-auto mb-4">
                      <table className="w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Показатель</th>
                            <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-slate-900">Значение</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Средняя длина ответа</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center font-medium">55 слов</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Максимум</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center font-medium">631 слово</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="text-sm text-slate-900 leading-relaxed">
                        <strong>Интерпретация:</strong> Большинство сотрудников дали очень короткие ответы (до 20 слов) — это одно-два предложения вроде "не использую" или "пока не пробовал".
                      </div>
                      <div className="text-sm text-slate-900 leading-relaxed">
                        Однако в выборке есть и развёрнутые рассуждения (до 600 слов) — преимущественно от HR, ИТ и проектных команд.
                      </div>
                    </div>
                  </div>

                  {/* 1.2.2. Распределение по объёму ответов */}
                  <div className="mb-6">
                    <h4 className="text-base font-semibold mb-4">1.2.2. Распределение по объёму ответов</h4>
                    <div className="overflow-x-auto mb-4">
                      <table className="w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Категория по длине текста</th>
                            <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-slate-900">Кол-во ответов</th>
                            <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-slate-900">Доля</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Пустой / очень короткий (до 20 слов)</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center font-medium">119</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">58%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Короткий (20-79 слов)</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center font-medium">48</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">23%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Средний (80-199 слов)</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center font-medium">21</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">10%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Развёрнутый (200+ слов)</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center font-medium">18</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">9%</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-semibold">Итого</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center font-semibold">206</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center font-semibold">100%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    
                    <div className="text-sm text-slate-900 leading-relaxed mb-6">
                      То есть почти две трети ответов — односложные, а только около 20% содержат действительно развёрнутые размышления.
                    </div>

                    {/* 1.2.3. Итоговая классификация по вовлечённости */}
                    <h4 className="text-base font-semibold mb-4">1.2.3. Итоговая классификация по вовлечённости (комбинация "объём + содержание")</h4>
                    <div className="overflow-x-auto mb-4">
                      <table className="w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Тип ответа</th>
                            <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-slate-900">Кол-во сотрудников</th>
                            <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-slate-900">Доля</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Формальный ответ (пустой и короткий, без тем)</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center font-medium">59</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">29%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Средней вовлечённости (есть 1-2 темы, но неразвёрнуто)</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center font-medium">64</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">31%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Осмысленный, но краткий (содержательный, но лаконичный)</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center font-medium">46</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">22%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Содержательный ответ (развёрнутый, несколько тем)</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center font-medium">37</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">18%</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-semibold">Итого</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center font-semibold">206</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center font-semibold">100%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* Вывод */}
                    <div className="space-y-3">
                      <h4 className="text-base font-semibold text-slate-900">Вывод:</h4>
                      <ul className="space-y-2 text-sm text-slate-900 leading-relaxed">
                        <li>• Только 18% сотрудников дали действительно содержательные ответы.</li>
                        <li>• Половина (~60%) ответов — формальные или минимальные.</li>
                        <li>• Эти цифры чётко показывают, что компания находится на ранней стадии осознанного взаимодействия с ИИ.</li>
                        <li>• Для программы обучения важно начать с базового уровня, но при этом выделить "ядро" активных пользователей (около 20%) как амбассадоров и лидеров мнений.</li>
                      </ul>
                    </div>
                  </div>

                  {/* 1.3. Вовлечённость по подразделениям */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-4">1.3. Вовлечённость по подразделениям</h3>
                    <div className="overflow-x-auto mb-4">
                      <table className="w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Подразделение</th>
                            <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-slate-900">Кол-во ответов</th>
                            <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-slate-900">Средний объём (слов)</th>
                            <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-slate-900">Среднее число тем</th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Преобладающий тип ответа</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Строительство</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center font-medium">49</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">40</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">1.2</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">средней вовлечённости</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Проектирование</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center font-medium">24</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">13</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">0.8</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">формальный ответ</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Финансы</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center font-medium">21</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">20</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">0.8</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">средней вовлечённости</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Продажи</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center font-medium">18</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">16</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">1.0</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">формальный ответ</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Другие</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center font-medium">17</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">27</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">1.0</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">формальный ответ</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">HR</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center font-medium">13</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">82</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">1.3</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">осмысленный, но краткий</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Цифра</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center font-medium">10</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">312</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">2.5</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">содержательный ответ</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Девелопмент</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center font-medium">7</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">33</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">1.4</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">средней вовлечённости</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">IT</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center font-medium">6</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">156</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">2.3</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">содержательный ответ</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Закупки</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center font-medium">6</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">39</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">1.2</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">осмысленный, но краткий</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Секретариат</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center font-medium">5</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">41</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">1.4</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">осмысленный, но краткий</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Контроль качества</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center font-medium">5</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">29</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">1.2</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">средней вовлечённости</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">AXO</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center font-medium">5</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">52</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">1.2</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">средней вовлечённости</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Маркетинг</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center font-medium">4</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">183</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">3.5</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">содержательный ответ</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Операционный контроль</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center font-medium">3</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">18</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">1.3</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">средней вовлечённости</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">PR</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center font-medium">3</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">201</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">2.3</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">содержательный ответ</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Юристы</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center font-medium">3</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">12</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">1.0</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">формальный ответ</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Охрана труда</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center font-medium">2</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">0</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">0.0</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">формальный ответ</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">СБ</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center font-medium">2</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">3</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">0.5</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">средней вовлечённости</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Транспорт</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center font-medium">1</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">17</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">0.0</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">формальный ответ</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Строительство ГенПодр</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center font-medium">1</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">0</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">0.0</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">формальный ответ</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">GR</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center font-medium">1</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">295</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 text-center">3.0</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">содержательный ответ</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>;
      default:
        return null;
    }
  };
  return <div className="w-full max-w-7xl mx-auto space-y-6 p-4 my-0 py-0">
      {/* Заголовок */}
      <div className="text-center space-y-4">
        
        
      </div>

      {/* Навигация */}
    <div className="flex flex-wrap gap-3 justify-center bg-transparent my-[8px] py-[12px] px-0">
  {[{
        id: 'analysis',
        label: 'Выводы и рекомендации',
        icon: Brain
      }, {
        id: 'detailed',
        label: 'Аналитика по вопросам',
        icon: FileText
      }, {
        id: 'quantitative',
        label: 'Общий количественный анализ',
        icon: PieChartIcon
      }, {
        id: 'top10',
        label: 'ТОП 10 идей развитию культуры ИИ',
        icon: Lightbulb
      }].map(({
        id,
        label,
        icon: Icon
      }) => <button key={id} onClick={() => {
        setActiveTab(id);
        setLastClickedButton(id);
      }} className={`flex items-center gap-2 px-4 py-1.5 rounded-md font-normal transition-all duration-300 ease-in-out text-sm
        focus:outline-none focus:ring-2 focus:ring-primary/20
        ${activeTab === id ? 'bg-black text-white hover:bg-black' : 'text-black border-0 bg-transparent hover:bg-gray-200'}
      `}>
      <Icon className="h-4 w-4" />
      {label}
    </button>)}
    </div>
    
      {/* Контент */}
      {renderTabContent()}

      {/* Выводы */}
      

      {/* Источники */}
      
    </div>;
};
export default HRAnalyticsReport;
