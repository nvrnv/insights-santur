import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import { Heart, TrendingUp, Users, AlertCircle, ThumbsUp, ThumbsDown, Smile, Meh, Frown } from 'lucide-react';

const ENPSAnalysis = () => {
  // Общие результаты по компании
  const enpsData = [
    { name: 'Промоутеры', value: 33, color: '#10B981' },
    { name: 'Пассивы', value: 32, color: '#6B7280' },
    { name: 'Детракторы', value: 35, color: '#EF4444' }
  ];

  const metrics = [
    { title: 'eNPS Score', value: '≈-2', icon: AlertCircle, color: 'orange', description: 'Нейтральный с потенциалом роста' },
    { title: 'Промоутеры', value: '33%', icon: TrendingUp, color: 'green', description: '9-10 баллов' },
    { title: 'Пассивы', value: '32%', icon: Users, color: 'gray', description: '7-8 баллов' },
    { title: 'Детракторы', value: '35%', icon: ThumbsDown, color: 'red', description: '0-6 баллов' }
  ];

  // ENPS по подразделениям
  const departmentData = [
    { 
      name: 'Произв.-складской', 
      enps: 10, 
      promoters: 47, 
      passives: 33, 
      detractors: 37,
      comment: 'Позитивная динамика, ценят порядок и стабильность'
    },
    { 
      name: 'Офис Екатеринбург', 
      enps: 25, 
      promoters: 55, 
      passives: 30, 
      detractors: 25,
      comment: 'Самый высокий ENPS; отмечают развитие и культуру'
    },
    { 
      name: 'Магазины Екатеринбург', 
      enps: -5, 
      promoters: 35, 
      passives: 25, 
      detractors: 40,
      comment: 'Смешанные мнения, чувствуется усталость и нагрузка'
    },
    { 
      name: 'Офис Тагил', 
      enps: 3, 
      promoters: 40, 
      passives: 30, 
      detractors: 37,
      comment: 'Нейтральный баланс; хорошие отношения в коллективе'
    },
    { 
      name: 'Магазины Тагил', 
      enps: -8, 
      promoters: 33, 
      passives: 26, 
      detractors: 41,
      comment: 'Наименьшая лояльность, часто звучат темы графика и оплаты'
    }
  ];

  // Причины высоких оценок (Промоутеры)
  const promoterReasons = [
    { theme: '🤝 Коллектив и отношения', frequency: '58%', quote: '«Команда у нас замечательная, всегда помогают.»' },
    { theme: '📊 Стабильность компании', frequency: '47%', quote: '«Работаю давно, уверен в завтрашнем дне.»' },
    { theme: '👔 Поддержка руководства', frequency: '35%', quote: '«Руководитель слушает, помогает разобраться.»' },
    { theme: '🎓 Интересная работа и развитие', frequency: '28%', quote: '«Можно учиться, дают новые задачи.»' }
  ];

  // Причины низких оценок (Детракторы)
  const detractorReasons = [
    { theme: '💰 Выплаты и прозрачность начислений', frequency: '61%', quote: '«Задерживают зарплату, непонятно, за что снимают.»' },
    { theme: '🏢 Быт и условия труда', frequency: '48%', quote: '«Тесные раздевалки, очереди, грязно в душевых.»' },
    { theme: '👔 Стиль мастеров и отношение', frequency: '42%', quote: '«Могут накричать, даже если всё сделал правильно.»' },
    { theme: '📅 График и нагрузка', frequency: '31%', quote: '«Работаем без передышки, график неудобный.»' }
  ];

  // Баланс эмоционального восприятия
  const emotionalBalanceData = [
    { name: 'Позитивный', value: 45, color: '#10B981', icon: Smile, quote: '«Рада работать здесь, коллектив хороший.»' },
    { name: 'Смешанный / нейтральный', value: 35, color: '#6B7280', icon: Meh, quote: '«Всё неплохо, но хотелось бы больше порядка.»' },
    { name: 'Негативный', value: 20, color: '#EF4444', icon: Frown, quote: '«Проблемы не решаются, условия тяжёлые.»' }
  ];

  return (
    <div className="container-main">
      <Card variant="standard" shadow="none">
        <CardHeader>
          <CardTitle className="text-heading">eNPS-анализ</CardTitle>
          <p className="text-body-secondary mt-2">
            Employee Net Promoter Score — Индекс готовности рекомендовать компанию как место работы
          </p>
        </CardHeader>
        <CardContent className="card-spacing">
          
          {/* Что измеряет ENPS */}
          <div className="mb-8 p-4 bg-slate-50 rounded-lg border border-slate-200">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-slate-600" />
              Что измеряет ENPS
            </h3>
            <p className="text-sm text-slate-700 mb-3">
              ENPS показывает долю сотрудников, которые готовы рекомендовать компанию как место работы:
            </p>
            <ul className="text-sm text-slate-700 space-y-2">
              <li className="flex items-center gap-2">
                <span className="font-semibold text-green-600">9–10 баллов 💚</span>
                <span className="italic">Промоутеры</span> (лояльны, поддерживают бренд)
              </li>
              <li className="flex items-center gap-2">
                <span className="font-semibold text-gray-600">7–8 баллов 💛</span>
                <span className="italic">Пассивы</span> (нейтральны, но могут «перетечь» в обе стороны)
              </li>
              <li className="flex items-center gap-2">
                <span className="font-semibold text-red-600">0–6 баллов 💔</span>
                <span className="italic">Детракторы</span> (недовольны или скептичны)
              </li>
            </ul>
            <p className="text-sm text-slate-700 mt-3 font-medium">
              📊 Формула: ENPS = % Промоутеров – % Детракторов
            </p>
          </div>

          {/* Метрики */}
          <h3 className="text-heading mb-4">📊 Общие результаты по компании</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {metrics.map((metric, index) => (
              <Card key={index} variant="outlined" shadow="soft">
                <CardContent className="p-4 text-center">
                  <metric.icon className={`h-6 w-6 mx-auto mb-2 text-${metric.color}-600`} />
                  <div className="text-2xl font-bold mb-1">{metric.value}</div>
                  <div className="text-xs font-semibold text-slate-600 mb-1">{metric.title}</div>
                  <div className="text-xs text-slate-500">{metric.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-900">
              <strong>Комментарий:</strong> Кол-во участников с оценками ~120 из 142. Остальные ответили словами, без цифр.
            </p>
          </div>

          {/* График распределения */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-heading mb-4">Распределение по категориям</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={enpsData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {enpsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div>
              <h3 className="text-heading mb-4">💡 Интерпретация</h3>
              <div className="space-y-3">
                <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
                  <p className="text-sm text-slate-700">
                    Компания находится на границе <strong>нейтрального ENPS</strong>. Это значит, что потенциал для роста лояльности высок:
                  </p>
                </div>
                <ul className="text-sm text-slate-700 space-y-2 pl-4">
                  <li>• не хватает <strong>5–7% перехода</strong> пассивов в промоутеры, чтобы выйти в устойчивый «плюс»</li>
                  <li>• Нейтральная зона: баланс позитива и негатива</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ENPS по подразделениям */}
          <div className="mb-8">
            <h3 className="text-heading mb-4">🏢 ENPS по подразделениям</h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={departmentData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" angle={-15} textAnchor="end" height={80} />
                <YAxis label={{ value: '%', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="promoters" name="Промоутеры" fill="#10B981" />
                <Bar dataKey="passives" name="Пассивы" fill="#6B7280" />
                <Bar dataKey="detractors" name="Детракторы" fill="#EF4444" />
              </BarChart>
            </ResponsiveContainer>

            <div className="mt-4 space-y-3">
              {departmentData.map((dept, index) => (
                <Card key={index} variant="outlined" shadow="soft">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="font-semibold text-slate-800 mb-1">{dept.name}</div>
                        <div className="text-sm text-slate-600">{dept.comment}</div>
                      </div>
                      <div className="text-center ml-4">
                        <div className="text-xs text-slate-500 mb-1">ENPS</div>
                        <div className={`text-2xl font-bold ${dept.enps >= 10 ? 'text-green-600' : dept.enps >= 0 ? 'text-orange-600' : 'text-red-600'}`}>
                          {dept.enps > 0 ? '+' : ''}{dept.enps}
                        </div>
                      </div>
                      <div className="text-center ml-4">
                        <div className="text-xs text-slate-500 mb-1">Промоутеры</div>
                        <div className="text-lg font-semibold text-green-600">{dept.promoters}%</div>
                      </div>
                      <div className="text-center ml-4">
                        <div className="text-xs text-slate-500 mb-1">Пассивы</div>
                        <div className="text-lg font-semibold text-gray-600">{dept.passives}%</div>
                      </div>
                      <div className="text-center ml-4">
                        <div className="text-xs text-slate-500 mb-1">Детракторы</div>
                        <div className="text-lg font-semibold text-red-600">{dept.detractors}%</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-4 space-y-2">
              <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-sm text-slate-700">
                  <strong>✅ Офис Екатеринбург</strong> — сильный центр корпоративной культуры, самый высокий ENPS; отмечают развитие и культуру
                </p>
              </div>
              <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
                <p className="text-sm text-slate-700">
                  <strong>⚠️ Магазины Тагил и Екатеринбург</strong> — «зона риска»: усталость, бытовые вопросы и мотивация
                </p>
              </div>
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-slate-700">
                  <strong>💡 Производственные и офисные подразделения</strong> демонстрируют противоположные профили лояльности, что важно учитывать при коммуникациях
                </p>
              </div>
            </div>
          </div>

          {/* Причины высоких оценок */}
          <div className="mb-8">
            <h3 className="text-heading mb-4 flex items-center gap-2">
              <ThumbsUp className="h-6 w-6 text-green-600" />
              Причины высоких оценок (Промоутеры 9-10)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {promoterReasons.map((reason, index) => (
                <Card key={index} variant="outlined" shadow="soft">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="text-sm font-semibold text-slate-700">{reason.theme}</div>
                      <div className="text-lg font-bold text-green-600">{reason.frequency}</div>
                    </div>
                    <p className="text-xs italic text-slate-600 mt-2">{reason.quote}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm font-semibold text-green-900 mb-2">💡 Вывод:</p>
              <p className="text-sm text-slate-700">
                Лояльность основана не на внешних бонусах, а на <strong>атмосфере и ощущении стабильности</strong>. 
                Люди ценят предсказуемость, уважение и профессиональный рост.
              </p>
            </div>
          </div>

          {/* Причины низких оценок */}
          <div className="mb-8">
            <h3 className="text-heading mb-4 flex items-center gap-2">
              <ThumbsDown className="h-6 w-6 text-red-600" />
              Причины низких оценок (Детракторы 0-6)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {detractorReasons.map((reason, index) => (
                <Card key={index} variant="outlined" shadow="soft">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="text-sm font-semibold text-slate-700">{reason.theme}</div>
                      <div className="text-lg font-bold text-red-600">{reason.frequency}</div>
                    </div>
                    <p className="text-xs italic text-slate-600 mt-2">{reason.quote}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm font-semibold text-red-900 mb-2">💡 Вывод:</p>
              <p className="text-sm text-slate-700">
                Главные источники недовольства — <strong>быт, выплаты и стиль управления</strong>. 
                Эти темы носят системный характер и напрямую влияют на ENPS.
              </p>
            </div>
          </div>

          {/* Баланс эмоционального восприятия */}
          <div className="mb-8">
            <h3 className="text-heading mb-4">🎭 Баланс эмоционального восприятия</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {emotionalBalanceData.map((emotion, index) => {
                const IconComponent = emotion.icon;
                return (
                  <Card key={index} variant="outlined" shadow="soft">
                    <CardContent className="p-4 text-center">
                      <IconComponent className={`h-8 w-8 mx-auto mb-2`} style={{ color: emotion.color }} />
                      <div className="text-2xl font-bold mb-1" style={{ color: emotion.color }}>
                        {emotion.value}%
                      </div>
                      <div className="text-sm font-semibold text-slate-700 mb-2">{emotion.name}</div>
                      <p className="text-xs italic text-slate-600">{emotion.quote}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm font-semibold text-blue-900 mb-2">💡 Вывод:</p>
              <p className="text-sm text-slate-700">
                Эмоциональный фон умеренно позитивный. В большинстве ответов присутствует элемент конструктивности — 
                даже критика выражается не агрессивно, а с предложениями улучшить.
              </p>
            </div>
          </div>

          {/* Общие выводы раздела */}
          <div className="mt-8 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg">
            <h3 className="text-lg font-semibold text-slate-800 mb-3">🔍 Общие выводы раздела</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-0.5">•</span>
                <span><strong>ENPS компании — нейтральный</strong>, но с явным потенциалом роста.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-0.5">•</span>
                <span>Лояльность формируется вокруг <strong>коллектива, стабильности и поддержки руководителей</strong>, а снижается из-за <strong>условий и коммуникаций</strong>.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-0.5">•</span>
                <span><strong>Офис Екатеринбург</strong> может стать внутренним «эталоном лояльности».</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-0.5">•</span>
                <span>Розничные подразделения и цеха нуждаются в <strong>адресных программах</strong>: прозрачность оплат, бытовые улучшения, обучение мастеров коммуникации.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-0.5">•</span>
                <span>Перевод даже <strong>10-12% «пассивов» в «промоутеры»</strong> способен поднять общий ENPS до +10 → +15.</span>
              </li>
            </ul>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default ENPSAnalysis;
