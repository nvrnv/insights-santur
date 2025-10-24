import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { TrendingUp, Settings, Target, Clock, Users, Lightbulb } from 'lucide-react';

const Recommendations = () => {
  const priorityRecommendations = [
    {
      priority: 'Высокий',
      title: 'Улучшение коммуникации с руководством',
      description: 'Внедрить регулярные встречи один-на-один и открытые форумы для обратной связи',
      impact: 'Высокий',
      effort: 'Средний',
      timeline: '1-2 месяца'
    },
    {
      priority: 'Высокий',
      title: 'Развитие карьерных возможностей',
      description: 'Создать программы менторства и внутреннего развития сотрудников',
      impact: 'Высокий',
      effort: 'Высокий',
      timeline: '3-6 месяцев'
    },
    {
      priority: 'Средний',
      title: 'Улучшение рабочей среды',
      description: 'Оптимизировать офисное пространство и внедрить гибкий график работы',
      impact: 'Средний',
      effort: 'Низкий',
      timeline: '2-4 месяца'
    }
  ];

  const implementationPlan = [
    { stage: '1', action: 'Проведение анализа текущего состояния', timeline: '1-2 недели', responsible: 'HR отдел' },
    { stage: '2', action: 'Разработка программы улучшений', timeline: '2-3 недели', responsible: 'Руководство' },
    { stage: '3', action: 'Пилотное внедрение', timeline: '1 месяц', responsible: 'Все отделы' },
    { stage: '4', action: 'Полномасштабное внедрение', timeline: '2-3 месяца', responsible: 'Все отделы' }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Высокий': return 'bg-red-100 text-red-800';
      case 'Средний': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-green-100 text-green-800';
    }
  };

  return (
    <div className="container-main">
      {/* Содержание (Table of Contents) */}
      <Card variant="standard" shadow="none">
        <CardHeader>
          <CardTitle className="text-heading">Содержание</CardTitle>
          <p className="text-body-secondary mt-2">Быстрая навигация по разделу рекомендаций</p>
        </CardHeader>
        <CardContent className="card-spacing">
          <nav aria-label="Содержание">
            <ul className="text-sm text-slate-700 space-y-2">
              <li>
                <a href="#rec-priority" className="hover:underline">Приоритетные направления</a>
              </li>
              <li>
                <a href="#rec-by-levels" className="hover:underline">Рекомендации по уровням управления</a>
                <ul className="mt-1 ml-4 space-y-1">
                  <li><a href="#rec-levels-ceo" className="hover:underline">Для руководства компании</a></li>
                  <li><a href="#rec-levels-hr" className="hover:underline">Для HR‑директора и HR‑функции</a></li>
                  <li><a href="#rec-levels-managers" className="hover:underline">Для линейных руководителей</a></li>
                </ul>
              </li>
              <li>
                <a href="#rec-implementation" className="hover:underline">План внедрения</a>
              </li>
              <li>
                <a href="#rec-final" className="hover:underline">Финальный аналитический акцент</a>
              </li>
            </ul>
          </nav>
        </CardContent>
      </Card>
      {/* Приоритетные направления */}
      <Card variant="standard" shadow="none" id="rec-priority">
        <CardHeader>
          <CardTitle className="text-heading">Приоритетные направления</CardTitle>
          <p className="text-body-secondary mt-2">
            Практические рекомендации для улучшения корпоративной культуры и удовлетворенности сотрудников
          </p>
        </CardHeader>
        <CardContent className="card-spacing">
          {/* Заголовок раздела */}
          <div className="mb-8">
            <h3 className="text-heading mb-2">Рекомендации (уровень руководства компании)</h3>
            <p className="text-body-secondary">Руководство компании — стратегический уровень</p>
          </div>

          {/* Р1. Прозрачность выплат */}
          <Card variant="outlined" shadow="soft" id="rec-priority-r1">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-lg">R1. Прозрачность выплат</h4>
                  <p className="text-body-secondary">Единый стандарт прозрачности начислений и сроков выплат</p>
                </div>
                <div className="text-sm">
                  <span className="px-3 py-1 rounded-full bg-green-100 text-green-800 font-medium">Эффект: рост доверия</span>
                </div>
              </div>

              {/* Сетка из трёх колонок: Quick Win — Medium Bet — Big Rock */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Quick Win */}
                <div className="border border-slate-200 rounded-lg p-4">
                  <div className="mb-2">
                    <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">Quick Win</span>
                  </div>
                  <div className="font-medium text-slate-900 mb-2">SLA по выплатам — публичное подтверждение сроков зарплат</div>
                  <ul className="text-sm text-slate-700 space-y-1 mb-3">
                    <li>1) Утвердить внутренним приказом дату «не позднее 5 числа».</li>
                    <li>2) Опубликовать сообщение от генерального директора в корпоративных каналах.</li>
                    <li>3) Повторить в еженедельной рассылке HR.</li>
                  </ul>
                  <div className="text-xs text-slate-600">Ответственные: Генеральный директор, финдиректор, HRD</div>
                  <div className="text-xs text-slate-600">Срок: 0–30 дней</div>
                  <div className="text-xs font-medium text-green-700 mt-1">KPI: рост доверия (по отзывам)</div>
                </div>

                {/* Medium Bet */}
                <div className="border border-slate-200 rounded-lg p-4">
                  <div className="mb-2">
                    <span className="px-2 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">Medium Bet</span>
                  </div>
                  <div className="font-medium text-slate-900 mb-2">Расчётные листы для всех подразделений</div>
                  <ul className="text-sm text-slate-700 space-y-1 mb-3">
                    <li>1) Финансовый блок готовит шаблон расчётов.</li>
                    <li>2) HR внедряет в пилоте (2 подразделения).</li>
                    <li>3) После корректировок — масштабирование.</li>
                  </ul>
                  <div className="text-xs text-slate-600">Ответственные: Финансовый департамент, HR</div>
                  <div className="text-xs text-slate-600">Срок: 30–60 дней</div>
                  <div className="text-xs font-medium text-green-700 mt-1">KPI: 100% сотрудников получают расчёты</div>
                </div>

                {/* Big Rock */}
                <div className="border border-slate-200 rounded-lg p-4">
                  <div className="mb-2">
                    <span className="px-2 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-800">Big Rock</span>
                  </div>
                  <div className="font-medium text-slate-900 mb-2">Цифровизация выплат и коммуникаций</div>
                  <ul className="text-sm text-slate-700 space-y-1 mb-3">
                    <li>1) Выбор IT‑решения (HRM / личный кабинет).</li>
                    <li>2) Интеграция с 1С / бухгалтерией.</li>
                    <li>3) Запуск личного кабинета сотрудников.</li>
                  </ul>
                  <div className="text-xs text-slate-600">Ответственные: Финансы, IT, HR</div>
                  <div className="text-xs text-slate-600">Срок: 60–90+ дней</div>
                  <div className="text-xs font-medium text-green-700 mt-1">KPI: прозрачная онлайн‑система начислений</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>

      {/* Рекомендации по уровням управления */}
      <Card variant="standard" shadow="none" id="rec-by-levels">
        <CardHeader>
          <CardTitle className="text-heading">Рекомендации по уровням управления</CardTitle>
        </CardHeader>
        <CardContent className="card-spacing">
          <div className="space-y-8">
            {/* Для руководства компании */}
            <div className="border-t border-gray-200 pt-6" id="rec-levels-ceo">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-gray-800 text-white rounded-sm flex items-center justify-center text-sm font-medium">1</div>
                <h3 className="text-lg font-semibold">Для руководства компании</h3>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <span className="font-medium">Цель:</span>
                </div>
                <p className="text-body">задать тон и управленческое направление трансформации корпоративной культуры.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-medium text-slate-900 mb-3">Что нужно сделать</h4>
                  <ul className="space-y-2 text-body">
                    <li>• Принять стратегическое решение о развитии корпоративной культуры</li>
                    <li>• Создать внутреннюю политику открытой коммуникации</li>
                    <li>• Публично поддержать программы развития и делиться собственными кейсами</li>
                    <li>• Определить подразделения-лидеры и назначить "амбассадоров культуры"</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 mb-3">Почему это важно</h4>
                  <ul className="space-y-2 text-body">
                    <li>• Это сигнал сотрудникам, что развитие — не "мода", а инструмент роста</li>
                    <li>• Снимает страхи и обеспечивает психологическую безопасность</li>
                    <li>• Формирует доверие и культуру открытых изменений</li>
                    <li>• Это ускорит внедрение и обмен опытом по горизонтали</li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                  <span className="font-medium">Главный вывод для руководства:</span>
                </div>
                <div className="text-body space-y-2">
                  <p>Корпоративная культура перестала быть темой "про HR". Это новая управленческая реальность.</p>
                  <p>Роль лидеров — превратить интерес сотрудников в движение вперёд.</p>
                </div>
              </div>
            </div>

            {/* Для HR-директора и HR-функции */}
            <div className="border-t border-gray-200 pt-6" id="rec-levels-hr">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-gray-800 text-white rounded-sm flex items-center justify-center text-sm font-medium">2</div>
                <h3 className="text-lg font-semibold">Для HR-директора и HR-функции</h3>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <span className="font-medium">Цель:</span>
                </div>
                <p className="text-body">превратить обучение в инструмент вовлечения и развития корпоративной культуры.</p>
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
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Разделить сотрудников на 3 уровня вовлеченности (низкий / средний / высокий).</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Обеспечить релевантные программы по потребностям.</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">Базовое обучение</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Видеоуроки "Эффективная коммуникация и развитие карьеры".</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Снять страх и повысить уверенность.</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">Практикумы</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">"Развитие в моей профессии" — кейсы для HR, финансистов, строителей и т.д.</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Показать практическую пользу и мотивировать.</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">Сообщество</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Создать внутренний канал обмена опытом и лучшими практиками.</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">Расширить культуру развития и горизонтальный обмен.</td>
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
                <div className="text-body space-y-2">
                  <p>Обучение должно быть не "для галочки", а инструментом вовлечения и развития.</p>
                  <p>Роль HR — создать среду, где каждый сотрудник видит возможности для роста.</p>
                </div>
              </div>
            </div>

            {/* Для линейных руководителей */}
            <div className="border-t border-gray-200 pt-6" id="rec-levels-managers">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-gray-800 text-white rounded-sm flex items-center justify-center text-sm font-medium">3</div>
                <h3 className="text-lg font-semibold">Для линейных руководителей</h3>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <span className="font-medium">Цель:</span>
                </div>
                <p className="text-body">стать проводниками изменений и поддерживать команды в процессе развития.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-medium text-slate-900 mb-3">Что нужно делать</h4>
                  <ul className="space-y-2 text-body">
                    <li>• Регулярно проводить встречи один-на-один с подчиненными</li>
                    <li>• Обсуждать карьерные цели и возможности развития</li>
                    <li>• Поддерживать инициативы команды по улучшению процессов</li>
                    <li>• Быть примером открытой коммуникации и обратной связи</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 mb-3">Ключевые навыки</h4>
                  <ul className="space-y-2 text-body">
                    <li>• Активное слушание и эмпатия</li>
                    <li>• Постановка целей и планирование развития</li>
                    <li>• Конструктивная обратная связь</li>
                    <li>• Управление изменениями и мотивация команды</li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                  <span className="font-medium">Главный вывод для руководителей:</span>
                </div>
                <div className="text-body space-y-2">
                  <p>Лидерство — это не только управление задачами, но и развитие людей.</p>
                  <p>Роль руководителя — создать условия для роста каждого члена команды.</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* План внедрения */}
      <Card variant="standard" shadow="none" id="rec-implementation">
        <CardHeader>
          <CardTitle className="text-heading">План внедрения</CardTitle>
        </CardHeader>
        <CardContent className="card-spacing">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Этап</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Действие</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Срок</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-slate-900">Ответственный</th>
                </tr>
              </thead>
              <tbody>
                {implementationPlan.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900 font-medium">{row.stage}</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">{row.action}</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">{row.timeline}</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-slate-900">{row.responsible}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Финальный аналитический акцент */}
      <Card variant="standard" shadow="none" id="rec-final">
        <CardHeader>
          <CardTitle className="text-heading">Финальный аналитический акцент</CardTitle>
        </CardHeader>
        <CardContent className="card-spacing">
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <span className="font-medium">Обзор:</span>
              </div>
              <p className="text-body">
                Корпоративная культура в компании — уже реальность, но пока не практика.
              </p>
              <p className="text-body mt-2">
                Сотрудники видят потенциал, но ждут уверенности и поддержки.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <span className="font-medium">Цель:</span>
              </div>
              <div className="text-body space-y-2">
                <p>Задача руководства — показать направление,</p>
                <p>роль HR — превратить обучение в развитие,</p>
                <p>миссия руководителей — дать сотрудникам инструменты, а не только знания.</p>
              </div>
            </div>

            <div className="pt-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                <span className="font-medium text-slate-900">Главный вывод:</span>
              </div>
              <div className="text-body">
                <p>Компания стоит на пороге зрелого взаимодействия с корпоративной культурой. При правильной коммуникации и поддержке она способна превратить интерес в уверенность, а уверенность — в конкурентное преимущество.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Recommendations;
