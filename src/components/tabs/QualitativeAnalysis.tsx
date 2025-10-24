import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { MessageCircle, TrendingUp, AlertCircle, Flame, Lightbulb, Heart, Users, Zap } from 'lucide-react';

const QualitativeAnalysis = () => {
  // Топ-10 сквозных тем (по индексу остроты)
  const top10Themes = [
    { 
      rank: 1, 
      emoji: '💰',
      theme: 'Выплаты и прозрачность начислений', 
      mentions: '~70', 
      severity: 120,
      emotionalTone: 'негативный',
      comment: 'Топ-боль: «задержки», «непонятные удержания»'
    },
    { 
      rank: 2, 
      emoji: '🚿',
      theme: 'Быт, раздевалки, душевые', 
      mentions: '~40', 
      severity: 95,
      emotionalTone: 'негативный',
      comment: 'Очереди, теснота, грязь, неудобство'
    },
    { 
      rank: 3, 
      emoji: '🍽️',
      theme: 'Столовая и питание', 
      mentions: '~30', 
      severity: 70,
      emotionalTone: 'смешанный',
      comment: '«Подавай», «далеко», «мало времени»'
    },
    { 
      rank: 4, 
      emoji: '👔',
      theme: 'Поведение мастеров, стиль руководства', 
      mentions: '~60', 
      severity: 65,
      emotionalTone: 'полярный',
      comment: 'Уважение ценится, но много жалоб на грубость'
    },
    { 
      rank: 5, 
      emoji: '📈',
      theme: 'Карьера и развитие', 
      mentions: '~25', 
      severity: 50,
      emotionalTone: 'позитивный',
      comment: 'Запрос на обучение и понятные критерии роста'
    },
    { 
      rank: 6, 
      emoji: '💬',
      theme: 'Коммуникация и информирование', 
      mentions: '~20', 
      severity: 45,
      emotionalTone: 'смешанный',
      comment: '«Нет единого канала», «инфо теряется»'
    },
    { 
      rank: 7, 
      emoji: '🤝',
      theme: 'Коллектив, атмосфера', 
      mentions: '~90', 
      severity: 40,
      emotionalTone: 'позитивный',
      comment: 'Главный фактор лояльности'
    },
    { 
      rank: 8, 
      emoji: '🎓',
      theme: 'Обучение и наставничество', 
      mentions: '~15', 
      severity: 35,
      emotionalTone: 'позитивный',
      comment: 'Люди хотят учиться, особенно на производстве'
    },
    { 
      rank: 9, 
      emoji: '⏰',
      theme: 'График и нагрузка', 
      mentions: '~18', 
      severity: 30,
      emotionalTone: 'смешанный',
      comment: 'Непредсказуемость, переработки'
    },
    { 
      rank: 10, 
      emoji: '🎉',
      theme: 'Корпоративная культура и мероприятия', 
      mentions: '~10', 
      severity: 20,
      emotionalTone: 'позитивный',
      comment: 'Отмечают, когда есть внимание и праздники'
    }
  ];

  // Индекс остроты по подразделениям (Heatmap)
  const heatmapData = [
    { theme: '💰 Выплаты', proizv: 85, officeEkb: 40, magazineEkb: 90, officeTgl: 65, magazineTgl: 95 },
    { theme: '🚿 Быт / раздевалки', proizv: 75, officeEkb: 0, magazineEkb: 60, officeTgl: 40, magazineTgl: 85 },
    { theme: '🍽️ Столовая', proizv: 50, officeEkb: 10, magazineEkb: 55, officeTgl: 15, magazineTgl: 45 },
    { theme: '👔 Поведение мастеров', proizv: 60, officeEkb: 25, magazineEkb: 80, officeTgl: 40, magazineTgl: 75 },
    { theme: '📈 Карьера и рост', proizv: 15, officeEkb: 60, magazineEkb: 20, officeTgl: 55, magazineTgl: 10 },
    { theme: '💬 Коммуникации', proizv: 10, officeEkb: 50, magazineEkb: 20, officeTgl: 45, magazineTgl: 15 },
    { theme: '🤝 Коллектив', proizv: 70, officeEkb: 80, magazineEkb: 75, officeTgl: 85, magazineTgl: 80 }
  ];

  // Живые голоса (цитаты сотрудников) по темам
  const employeeQuotes = {
    salary: [
      '«Хотелось бы понимать, за что снимают деньги. Расчёток не видим, только слухи.»',
      '«Если бы сделали расчётный лист, вопросов бы не было.»'
    ],
    facilities: [
      '«Раздевалки тесные, утром очередь, вечером тоже — ужас.»',
      '«Если бы у нас был директором, сделал бы раздевалки и душевые нормальными.»'
    ],
    canteen: [
      '«Кухня в подвале, каждый раз переодеваться — терпеть уже не могу.»',
      '«Хотелось бы нормальную столовую побыстрее к цеху.»'
    ],
    management: [
      '«Наш мастер может накричать просто так.»',
      '«А у нас наоборот — спокойный, справедливый, приятно работать.»'
    ],
    team: [
      '«Самое ценное — люди. Все поддерживают друг друга.»',
      '«Хороший коллектив — и поэтому остаюсь.»'
    ]
  };

  const getEmotionalToneColor = (tone: string) => {
    switch (tone) {
      case 'позитивный': return 'bg-green-100 text-green-800';
      case 'негативный': return 'bg-red-100 text-red-800';
      case 'полярный': return 'bg-orange-100 text-orange-800';
      case 'смешанный': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSeverityColor = (severity: number) => {
    if (severity >= 85) return '#EF4444'; // очень острая тема - красный (как детракторы в ENPS)
    if (severity >= 60) return '#F59E0B'; // умеренная - оранжевый
    if (severity >= 40) return '#FBBF24'; // средняя - желтый
    return '#10B981'; // позитивная - зеленый (как промоутеры в ENPS)
  };

  const getHeatmapCellColor = (value: number) => {
    if (value >= 80) return 'bg-red-500 text-white'; // очень острая (#EF4444 как в ENPS)
    if (value >= 60) return 'bg-orange-500 text-white'; // умеренная
    if (value >= 40) return 'bg-yellow-400 text-gray-900'; // средняя
    if (value >= 20) return 'bg-gray-400 text-gray-800'; // малозаметная (серый как пассивы)
    return 'bg-green-500 text-white'; // позитивная (#10B981 как в ENPS)
  };

  // ========== ЭМОЦИОНАЛЬНЫЙ АНАЛИЗ ==========
  
  // Общая картина эмоционального фона
  const emotionalTones = [
    {
      type: '💚 Позитивный / вдохновлённый',
      percentage: 43,
      characteristics: 'Уверенность, гордость, удовлетворение.',
      quote: '«Люблю свою работу, у нас отличная команда и всё по-честному.»'
    },
    {
      type: '😐 Смешанный / взвешенный',
      percentage: 36,
      characteristics: '«Всё неплохо, но есть, что улучшить.»',
      quote: '«В целом хорошо, но раздевалки бы сделать удобнее.»'
    },
    {
      type: '❤️‍🩹 Негативный / раздражённый',
      percentage: 17,
      characteristics: 'Недовольство, усталость, критика без веры в изменения.',
      quote: '«Каждый день одно и то же, никто не слышит.»'
    },
    {
      type: '💭 Рефлексивный / задумчивый',
      percentage: 4,
      characteristics: 'Спокойный тон, рассуждения о будущем компании.',
      quote: '«Если бы сделать карьерные лестницы, люди бы больше старались.»'
    }
  ];

  // Эмоциональный индекс и потенциал подразделений
  const departmentEmotions = [
    {
      department: 'Офис Екатеринбург',
      emotionalIndex: 82,
      potential: '💚 Высокий потенциал',
      comment: 'Сильный позитив, много энтузиастов и созидателей. Важно закрепить состояние признанием и вовлечением в проекты.'
    },
    {
      department: 'Производственно-складской комплекс',
      emotionalIndex: 68,
      potential: '⚪ Стабильный потенциал',
      comment: 'Эмоциональный фон ровный, преобладают реалисты. При улучшении бытовых условий можно перейти в позитивный полюс.'
    },
    {
      department: 'Офис Тагил',
      emotionalIndex: 70,
      potential: '⚖️ Сбалансированный потенциал',
      comment: 'Позитивный, спокойный настрой, умеренный интерес к изменениям. Можно усиливать за счёт коммуникаций и обратной связи.'
    },
    {
      department: 'Магазины Екатеринбург',
      emotionalIndex: 55,
      potential: '🟠 Сниженный потенциал',
      comment: 'Эмоциональная усталость, особенно в темах графика и оплаты. Требуется «подлитка» вниманием руководителей.'
    },
    {
      department: 'Магазины Тагил',
      emotionalIndex: 49,
      potential: '🔴 Зона эмоционального риска',
      comment: 'Преобладают усталые и скептики, низкий уровень энергии. При отсутствии улучшений возможно дальнейшее выгорание.'
    }
  ];

  // Кластеры восприятия (эмоциональные профили сотрудников)
  const emotionalClusters = [
    {
      cluster: '💪 Энтузиасты',
      percentage: '~25%',
      description: 'Активно вовлечены, говорят с гордостью, часто упоминают «мы».',
      quote: '«Люблю коллектив, горжусь, что работаю здесь.»'
    },
    {
      cluster: '🌿 Реалисты',
      percentage: '~35%',
      description: 'Спокойный, деловой тон, конструктивные предложения, доверие к изменениям.',
      quote: '«Всё хорошо, но можно улучшить условия и порядок.»'
    },
    {
      cluster: '😴 Усталые / выгоревшие',
      percentage: '~20%',
      description: 'Эмоционально плоские или раздражённые ответы, жалобы на нагрузку.',
      quote: '«Работы много, сил не остаётся, раздевалки ужасны.»'
    },
    {
      cluster: '😐 Скептики / отстранённые',
      percentage: '~10%',
      description: 'Сдержанная ирония, недоверие к изменениям, но без агрессии.',
      quote: '«Опросы проводите, а толку? Всё как было.»'
    },
    {
      cluster: '🚀 Созидатели (инициативные)',
      percentage: '~10%',
      description: 'Предлагают идеи, чувствуется энергия, говорят "я бы сделал...".',
      quote: '«Добавили бы обучение, чтобы расти самим и помогать другим.»'
    }
  ];

  // Эмоциональные профили по подразделениям
  const departmentProfiles = [
    {
      department: '🏭 Производственно-складской комплекс',
      enthusiasts: 20,
      realists: 40,
      tired: 25,
      skeptics: 10,
      creators: 5,
      comment: 'Спокойное ядро, усталость ближе к физической, но нет эмоционального выгорания'
    },
    {
      department: '🏢 Офис Екатеринбург',
      enthusiasts: 35,
      realists: 30,
      tired: 10,
      skeptics: 5,
      creators: 20,
      comment: 'Самый высокий уровень энергии и креатива'
    },
    {
      department: '🛒 Магазины Екатеринбург',
      enthusiasts: 22,
      realists: 33,
      tired: 28,
      skeptics: 12,
      creators: 5,
      comment: 'Баланс между лояльностью и усталостью, немного эмоциоза'
    },
    {
      department: '🏢 Офис Тагил',
      enthusiasts: 28,
      realists: 38,
      tired: 18,
      skeptics: 6,
      creators: 10,
      comment: 'Спокойный, уравновешенный эмоциональный климат'
    },
    {
      department: '🛒 Магазины Тагил',
      enthusiasts: 15,
      realists: 30,
      tired: 35,
      skeptics: 15,
      creators: 5,
      comment: 'Самая высокая доля выгорания и скепсиса, зона эмоционального риска'
    },
    {
      department: '📊 Средний по компании',
      enthusiasts: 25,
      realists: 35,
      tired: 20,
      skeptics: 10,
      creators: 10,
      comment: '—'
    }
  ];

  const getEmotionalIndexColor = (index: number) => {
    if (index >= 80) return '#10B981'; // высокий - зеленый (как промоутеры)
    if (index >= 70) return '#6B7280'; // стабильный - серый (как пассивы)
    if (index >= 60) return '#FBBF24'; // сбалансированный - желтый
    if (index >= 50) return '#F59E0B'; // сниженный - оранжевый
    return '#EF4444'; // риск - красный (как детракторы)
  };

  const getPotentialColor = (potential: string) => {
    if (potential.includes('Высокий')) return 'bg-green-100 text-green-800';
    if (potential.includes('Стабильный')) return 'bg-gray-100 text-gray-800';
    if (potential.includes('Сбалансированный')) return 'bg-yellow-100 text-yellow-800';
    if (potential.includes('Сниженный')) return 'bg-orange-100 text-orange-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <div className="container-main">
      <Card variant="standard" shadow="none">
        <CardHeader>
          <CardTitle className="text-heading">Качественный анализ</CardTitle>
          <p className="text-body-secondary mt-2">
            Мы объединили все открытые ответы по четырём вопросам и выделили топ-10 сквозных тем, которые повторяются в разных подразделениях и контекстах.
          </p>
          <p className="text-body-secondary mt-2">
            Для каждой темы показаны: частота, охват подразделений, индекс остроты (Severity Index), эмоциональный баланс и пример живых цитат.
          </p>
        </CardHeader>
        <CardContent className="card-spacing">
          
          {/* Топ-10 сквозных тем */}
          <div className="mb-8">
            <h3 className="text-heading mb-4">
              📊 Топ-10 сквозных тем (по индексу остроты)
            </h3>
            
            {/* График индекса остроты */}
            <div className="mb-6">
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={top10Themes} layout="vertical" margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis type="category" dataKey="theme" width={180} tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Bar dataKey="severity" name="Индекс остроты">
                    {top10Themes.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={getSeverityColor(entry.severity)} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Таблица с деталями */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-300 p-2 text-left text-sm">№</th>
                    <th className="border border-slate-300 p-2 text-left text-sm">Тема</th>
                    <th className="border border-slate-300 p-2 text-center text-sm">Частота упоминаний</th>
                    <th className="border border-slate-300 p-2 text-center text-sm">Индекс остроты (0-100)</th>
                    <th className="border border-slate-300 p-2 text-center text-sm">Эмоциональный фон</th>
                    <th className="border border-slate-300 p-2 text-left text-sm">Краткий комментарий</th>
                  </tr>
                </thead>
                <tbody>
                  {top10Themes.map((item) => (
                    <tr key={item.rank} className="hover:bg-slate-50">
                      <td className="border border-slate-300 p-2 text-center font-semibold">{item.rank}</td>
                      <td className="border border-slate-300 p-2">
                        <span className="text-lg mr-2">{item.emoji}</span>
                        <span className="font-medium">{item.theme}</span>
                      </td>
                      <td className="border border-slate-300 p-2 text-center">{item.mentions}</td>
                      <td className="border border-slate-300 p-2 text-center">
                        <span 
                          className="px-3 py-1 rounded-full font-bold text-white"
                          style={{ backgroundColor: getSeverityColor(item.severity) }}
                        >
                          {item.severity}
                        </span>
                      </td>
                      <td className="border border-slate-300 p-2 text-center">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getEmotionalToneColor(item.emotionalTone)}`}>
                          {item.emotionalTone}
                        </span>
                      </td>
                      <td className="border border-slate-300 p-2 text-sm text-slate-700">{item.comment}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Интерпретация топа */}
          <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-3">📌 Интерпретация топа</h4>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="font-bold mt-0.5">•</span>
                <span><strong>Первые четыре темы</strong> (💰🚿🍽️👔) — <strong>«гигиенические»</strong>, они вызывают раздражение и напрямую влияют на ENPS.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold mt-0.5">•</span>
                <span><strong>Средняя группа</strong> (📈💬) — темы «роста и доверия»: важны для удержания активных сотрудников.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold mt-0.5">•</span>
                <span><strong>Последние темы</strong> (🤝🎓🎉) — <strong>позитивное ядро</strong> корпоративной культуры, удерживают даже при наличии проблем.</span>
              </li>
            </ul>
          </div>

          {/* Индекс остроты по подразделениям (Heatmap) */}
          <div className="mb-8">
            <h3 className="text-heading mb-4">
              🔥 Индекс остроты по подразделениям (Heatmap)
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-300 p-3 text-left font-semibold">Тема</th>
                    <th className="border border-slate-300 p-3 text-center font-semibold">Производственно-складской</th>
                    <th className="border border-slate-300 p-3 text-center font-semibold">Офис ЕКБ</th>
                    <th className="border border-slate-300 p-3 text-center font-semibold">Магазины ЕКБ</th>
                    <th className="border border-slate-300 p-3 text-center font-semibold">Офис Тагил</th>
                    <th className="border border-slate-300 p-3 text-center font-semibold">Магазины Тагил</th>
                  </tr>
                </thead>
                <tbody>
                  {heatmapData.map((row, index) => (
                    <tr key={index}>
                      <td className="border border-slate-300 p-3 font-medium">{row.theme}</td>
                      <td className={`border border-slate-300 p-3 text-center font-bold ${getHeatmapCellColor(row.proizv)}`}>
                        {row.proizv === 0 ? '—' : row.proizv}
                      </td>
                      <td className={`border border-slate-300 p-3 text-center font-bold ${getHeatmapCellColor(row.officeEkb)}`}>
                        {row.officeEkb === 0 ? '—' : row.officeEkb}
                      </td>
                      <td className={`border border-slate-300 p-3 text-center font-bold ${getHeatmapCellColor(row.magazineEkb)}`}>
                        {row.magazineEkb === 0 ? '—' : row.magazineEkb}
                      </td>
                      <td className={`border border-slate-300 p-3 text-center font-bold ${getHeatmapCellColor(row.officeTgl)}`}>
                        {row.officeTgl === 0 ? '—' : row.officeTgl}
                      </td>
                      <td className={`border border-slate-300 p-3 text-center font-bold ${getHeatmapCellColor(row.magazineTgl)}`}>
                        {row.magazineTgl === 0 ? '—' : row.magazineTgl}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex items-center gap-4 text-sm flex-wrap">
              <span className="font-semibold">Легенда:</span>
              <span className="flex items-center gap-2">
                <span className="w-6 h-6 bg-red-600 rounded"></span>
                очень острая тема
              </span>
              <span className="flex items-center gap-2">
                <span className="w-6 h-6 bg-orange-500 rounded"></span>
                умеренная
              </span>
              <span className="flex items-center gap-2">
                <span className="w-6 h-6 bg-yellow-400 rounded"></span>
                позитивная
              </span>
              <span className="flex items-center gap-2">
                <span className="w-6 h-6 bg-gray-300 rounded"></span>
                малозаметная
              </span>
            </div>

            <div className="mt-4 space-y-2">
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-slate-700">
                  <strong>🔴 Самые «красные» зоны</strong> — Магазины Тагил и Магазины Екатеринбург: быт, выплаты, отношение мастеров.
                </p>
              </div>
              <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-sm text-slate-700">
                  <strong>🟢 Самый «зелёный» участок</strong> — Офис Екатеринбург, где позитивно ядро устойчиво.
                </p>
              </div>
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-slate-700">
                  <strong>💡 «Офис Тагил»</strong> находится в балансе: нет сильных проблем, но и нет выраженных драйверов.
                </p>
              </div>
            </div>
          </div>

          {/* Живые голоса (цитаты сотрудников) */}
          <div className="mb-8">
            <h3 className="text-heading mb-4">
              💬 Живые голоса (цитаты сотрудников)
            </h3>

            <div className="space-y-4">
              {/* Выплаты */}
              <Card variant="outlined" shadow="soft">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-slate-800 mb-3">💰 Выплаты:</h4>
                  <div className="space-y-2">
                    {employeeQuotes.salary.map((quote, index) => (
                      <p key={index} className="text-sm italic text-slate-600 pl-4 border-l-2 border-red-300">
                        {quote}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Быт */}
              <Card variant="outlined" shadow="soft">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-slate-800 mb-3">🚿 Быт:</h4>
                  <div className="space-y-2">
                    {employeeQuotes.facilities.map((quote, index) => (
                      <p key={index} className="text-sm italic text-slate-600 pl-4 border-l-2 border-orange-300">
                        {quote}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Столовая */}
              <Card variant="outlined" shadow="soft">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-slate-800 mb-3">🍽️ Столовая:</h4>
                  <div className="space-y-2">
                    {employeeQuotes.canteen.map((quote, index) => (
                      <p key={index} className="text-sm italic text-slate-600 pl-4 border-l-2 border-yellow-300">
                        {quote}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Стиль руководства */}
              <Card variant="outlined" shadow="soft">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-slate-800 mb-3">👔 Стиль руководства:</h4>
                  <div className="space-y-2">
                    {employeeQuotes.management.map((quote, index) => (
                      <p key={index} className="text-sm italic text-slate-600 pl-4 border-l-2 border-purple-300">
                        {quote}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Коллектив */}
              <Card variant="outlined" shadow="soft">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-slate-800 mb-3">🤝 Коллектив:</h4>
                  <div className="space-y-2">
                    {employeeQuotes.team.map((quote, index) => (
                      <p key={index} className="text-sm italic text-slate-600 pl-4 border-l-2 border-green-300">
                        {quote}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Структура тем по типу (Герцберг) */}
          <div className="mb-8">
            <h3 className="text-heading mb-4">🌿 Структура тем по типу (Герцберг)</h3>
            
            <div className="space-y-4">
              <Card variant="outlined" shadow="soft">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-800 mb-2">Гигиенические факторы</h4>
                      <p className="text-sm text-slate-600 mb-2">
                        <strong>Темы:</strong> 💰 Выплаты, 🚿 Быт, 🍽️ Столовая, 👔 Поведение мастеров, ⏰ График
                      </p>
                      <p className="text-sm text-slate-600">
                        <strong>Вывод:</strong> Основные источники раздражения
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-red-600">65%</div>
                      <div className="text-xs text-slate-500">Доля от всех упоминаний</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card variant="outlined" shadow="soft">
                  <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-800 mb-2">Мотивационные факторы</h4>
                      <p className="text-sm text-slate-600 mb-2">
                        <strong>Темы:</strong> 📈 Карьера, 💬 Коммуникации, 🤝 Коллектив, 🎓 Обучение, 🎉 Культура
                      </p>
                      <p className="text-sm text-slate-600">
                        <strong>Вывод:</strong> Основные точки вовлечения и удержания
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">35%</div>
                      <div className="text-xs text-slate-500">Доля от всех упоминаний</div>
                    </div>
                  </div>
                  </CardContent>
                </Card>
            </div>

            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm font-semibold text-blue-900 mb-2">💡 Интерпретация:</p>
              <p className="text-sm text-slate-700">
                Чтобы повысить общий ENPS, компании важно <strong>сначала закрыть «гигиену»</strong>, а затем усиливать «мотивацию». 
                Именно такой порядок даст устойчивый рост удовлетворённости.
              </p>
            </div>
          </div>

          {/* Связка тем с ENPS */}
          <div className="mb-8 p-5 bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-lg">
            <h3 className="text-lg font-semibold text-slate-800 mb-3">
              🔗 Связка тем с ENPS
            </h3>
            <p className="text-sm text-slate-700 mb-3">
              Сравнение показало, что там, где улучшить можно быстро, — <strong>ENPS растёт почти линейно</strong>. Например:
            </p>
            <ul className="space-y-2 text-sm text-slate-700 pl-4">
              <li className="flex items-start gap-2">
                <span className="font-bold mt-0.5">•</span>
                <span>подразделения с решённой темой «выплаты» имеют ENPS выше на <strong>15–20 пунктов</strong>;</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold mt-0.5">•</span>
                <span>где сотрудники отмечают «уважительное руководство», доля промоутеров выше на <strong>25%</strong>.</span>
              </li>
            </ul>
          </div>

          {/* Главные инсайты раздела */}
          <div className="mt-8 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg">
            <h3 className="text-lg font-semibold text-slate-800 mb-3">🔍 Главные инсайты раздела V</h3>
            <ol className="space-y-2 text-sm text-slate-700 pl-4">
              <li className="flex items-start gap-2">
                <span className="font-bold">1.</span>
                <span><strong>Три «красные зоны»</strong> — 💰 выплаты, 🚿 быт, 👔 руководство — требуют первоочередных действий.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">2.</span>
                <span><strong>Три «зелёные опоры»</strong> — 🤝 коллектив, 📊 стабильность, 📈 возможность роста — стоит усиливать и публично подсвечивать.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">3.</span>
                <span><strong>ENPS растёт там, где решаются базовые боли</strong>, а не от коммуникаций «вверх».</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">4.</span>
                <span><strong>Эмоциональный баланс компании — 70/30</strong>: большинство настроено позитивно, но негатив концентрируется в «узких местах», которые видны всем.</span>
              </li>
            </ol>
          </div>

          {/* ========== ЭМОЦИОНАЛЬНАЯ КАРТА И КЛАСТЕРЫ ========== */}
          
          <div className="mt-12 border-t-4 border-purple-200 pt-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">🎭 Эмоциональная карта и кластеры</h2>
            <p className="text-body-secondary mb-2">
              Открытые голосовые ответы дают возможность анализировать не только смысл, но и <strong>тональность</strong> — настроение и отношение сотрудников.
            </p>
            <p className="text-body-secondary mb-6">
              Мы выделили <strong>четыре основных эмоциональных кластера</strong>, которые описывают разные типы восприятия компании.
            </p>
          </div>

          {/* Общая картина эмоционального фона */}
          <div className="mb-8">
            <h3 className="text-heading mb-4">
              📊 Общая картина эмоционального фона
            </h3>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-300 p-3 text-left font-semibold">Тип тона</th>
                    <th className="border border-slate-300 p-3 text-center font-semibold">Доля ответов</th>
                    <th className="border border-slate-300 p-3 text-left font-semibold">Характеристика</th>
                    <th className="border border-slate-300 p-3 text-left font-semibold">Пример цитаты</th>
                  </tr>
                </thead>
                <tbody>
                  {emotionalTones.map((tone, index) => (
                    <tr key={index} className="hover:bg-slate-50">
                      <td className="border border-slate-300 p-3 font-medium">{tone.type}</td>
                      <td className="border border-slate-300 p-3 text-center">
                        <span className="text-lg font-bold text-slate-800">{tone.percentage}%</span>
                      </td>
                      <td className="border border-slate-300 p-3 text-sm text-slate-700">{tone.characteristics}</td>
                      <td className="border border-slate-300 p-3 text-sm italic text-slate-600">{tone.quote}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm font-semibold text-blue-900 mb-2">💡 Вывод:</p>
              <ul className="space-y-1 text-sm text-slate-700 pl-4">
                <li>— 8 из 10 сотрудников говорят сдержанно или позитивно.</li>
                <li>— Доля агрессивно-негативных ответов минимальна — признак конструктивного восприятия и доверия к процессу.</li>
                <li>— «Смешанный» тон — золотой резерв вовлечённости: именно эти люди чаще формулируют конкретные предложения.</li>
              </ul>
            </div>
          </div>

          {/* Эмоциональный индекс и потенциал подразделений */}
          <div className="mb-8">
            <h3 className="text-heading mb-4">
              📊 Эмоциональный индекс и потенциал подразделений
            </h3>

            <div className="mb-6 -ml-16">
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={departmentEmotions} layout="vertical" margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis type="category" dataKey="department" width={280} tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Bar dataKey="emotionalIndex" name="Эмоциональный индекс">
                    {departmentEmotions.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={getEmotionalIndexColor(entry.emotionalIndex)} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-3">
              {departmentEmotions.map((dept, index) => (
                <Card key={index} variant="outlined" shadow="soft">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-800 mb-2">{dept.department}</h4>
                        <p className="text-sm text-slate-600 mb-2">{dept.comment}</p>
                      </div>
                      <div className="ml-4 text-right">
                        <div className="text-2xl font-bold mb-2" style={{ color: getEmotionalIndexColor(dept.emotionalIndex) }}>
                          {dept.emotionalIndex}
                      </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getPotentialColor(dept.potential)}`}>
                          {dept.potential}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-6 p-4 bg-slate-50 border border-slate-200 rounded-lg">
              <h4 className="font-semibold text-slate-800 mb-3">💬 Как читать эту таблицу</h4>
              <ul className="space-y-2 text-sm text-slate-700 pl-4">
                <li className="flex items-start gap-2">
                  <span className="font-bold mt-0.5">•</span>
                  <span><strong>Эмоциональный индекс (ЕI)</strong> отражает средний тон высказываний в подразделении: 0 – 100, где 100 = максимально позитивный настрой.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold mt-0.5">•</span>
                  <span><strong>Потенциал</strong> — это не динамика во времени, а <strong>оценка способности подразделения усилить или потерять эмоциональный заряд</strong> при текущих условиях.</span>
                </li>
              </ul>
            </div>

            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <ul className="space-y-2 text-sm text-slate-700 pl-4">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-0.5">💚</span>
                  <span><strong>Высокий потенциал</strong> — среда, где сотрудники вовлечены и могут быть «амбассадорами» изменений.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 font-bold mt-0.5">⚪</span>
                  <span><strong>Стабильный</strong> — баланс эмоций, важно не потерять равновесие.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold mt-0.5">🟠</span>
                  <span><strong>Сниженный</strong> — усталость, требуются быстрые «малые победы».</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold mt-0.5">🔴</span>
                  <span><strong>Риск</strong> — критическая точка, где HR-действия приоритетны.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Кластеры восприятия (эмоциональные профили сотрудников) */}
          <div className="mb-8">
            <h3 className="text-heading mb-4">
              🧩 Кластеры восприятия (эмоциональные профили сотрудников)
            </h3>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-300 p-3 text-center font-semibold">№</th>
                    <th className="border border-slate-300 p-3 text-left font-semibold">Название кластера</th>
                    <th className="border border-slate-300 p-3 text-center font-semibold">Примерное соотношение</th>
                    <th className="border border-slate-300 p-3 text-left font-semibold">Описание</th>
                    <th className="border border-slate-300 p-3 text-left font-semibold">Ключевая эмоция / цитата</th>
                  </tr>
                </thead>
                <tbody>
                  {emotionalClusters.map((cluster, index) => (
                    <tr key={index} className="hover:bg-slate-50">
                      <td className="border border-slate-300 p-3 text-center font-semibold">{index + 1}</td>
                      <td className="border border-slate-300 p-3 font-medium">{cluster.cluster}</td>
                      <td className="border border-slate-300 p-3 text-center text-lg font-bold text-slate-800">
                        {cluster.percentage}
                      </td>
                      <td className="border border-slate-300 p-3 text-sm text-slate-700">{cluster.description}</td>
                      <td className="border border-slate-300 p-3 text-sm italic text-slate-600">{cluster.quote}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
              <p className="text-sm font-semibold text-purple-900 mb-2">💡 Интерпретация:</p>
              <ul className="space-y-2 text-sm text-slate-700 pl-4">
                <li className="flex items-start gap-2">
                  <span className="font-bold mt-0.5">•</span>
                  <span><strong>«Энтузиасты» и «Созидатели»</strong> — это ядро вовлечённости (≈ 35% выборки).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold mt-0.5">•</span>
                  <span><strong>«Реалисты»</strong> — основная масса сотрудников, их настроение определяет средний ENPS.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold mt-0.5">•</span>
                  <span><strong>«Усталые» и «Скептики»</strong> — группы риска, требуют адресных управленческих действий (особенно в производственных подразделениях).</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Эмоциональные профили по подразделениям */}
          <div className="mb-8">
            <h3 className="text-heading mb-4">
              🏢 Эмоциональные профили по подразделениям
            </h3>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-300 p-3 text-left font-semibold">Подразделение</th>
                    <th className="border border-slate-300 p-3 text-center font-semibold">💪<br/>Энтузиасты</th>
                    <th className="border border-slate-300 p-3 text-center font-semibold">🌿<br/>Реалисты</th>
                    <th className="border border-slate-300 p-3 text-center font-semibold">😴<br/>Усталые</th>
                    <th className="border border-slate-300 p-3 text-center font-semibold">😐<br/>Скептики</th>
                    <th className="border border-slate-300 p-3 text-center font-semibold">🚀<br/>Созидатели</th>
                    <th className="border border-slate-300 p-3 text-left font-semibold">Комментарий</th>
                  </tr>
                </thead>
                <tbody>
                  {departmentProfiles.map((profile, index) => (
                    <tr key={index} className={index === departmentProfiles.length - 1 ? 'bg-slate-50 font-semibold' : 'hover:bg-slate-50'}>
                      <td className="border border-slate-300 p-3">{profile.department}</td>
                      <td className="border border-slate-300 p-3 text-center font-semibold">{profile.enthusiasts}%</td>
                      <td className="border border-slate-300 p-3 text-center font-semibold">{profile.realists}%</td>
                      <td className="border border-slate-300 p-3 text-center font-semibold">{profile.tired}%</td>
                      <td className="border border-slate-300 p-3 text-center font-semibold">{profile.skeptics}%</td>
                      <td className="border border-slate-300 p-3 text-center font-semibold">{profile.creators}%</td>
                      <td className="border border-slate-300 p-3 text-xs text-slate-700">{profile.comment}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="space-y-2">
              <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-sm text-slate-700">
                  <strong>💡 Офис Екатеринбург</strong> — эмоциональный драйвер всей компании (много энтузиастов и созидателей).
                </p>
              </div>
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-slate-700">
                  <strong>💡 Магазины Тагил</strong> — зона риска: 50% «усталые» и «скептики».
                </p>
              </div>
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-slate-700">
                  <strong>💡 Производственный комплекс</strong> — рабочее, спокойное настроение, но мало креативности.
                </p>
              </div>
            </div>

            <div className="mt-4 p-4 bg-slate-50 border border-slate-200 rounded-lg">
              <p className="text-sm font-semibold text-slate-800 mb-2">📍 Вывод по таблице:</p>
              <ul className="space-y-1 text-sm text-slate-700 pl-4">
                <li className="flex items-start gap-2">
                  <span className="font-bold mt-0.5">•</span>
                  <span><strong>Офисы</strong> в целом несут позитивный эмоциональный заряд; <strong>розница</strong> — нуждается в «подпитке» вниманием и поддержкой.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Ключевые выводы эмоционального анализа */}
          <div className="mt-8 p-5 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg">
            <h3 className="text-lg font-semibold text-slate-800 mb-3">
              🌿 Ключевые выводы эмоционального анализа
            </h3>
            <ol className="space-y-2 text-sm text-slate-700 pl-4">
              <li className="flex items-start gap-2">
                <span className="font-bold">1.</span>
                <span><strong>Эмоциональный фон компании умеренно позитивный (индекс ≈ 66/100)</strong>. Большинство сотрудников настроены доброжелательно и говорят с уважением.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">2.</span>
                <span><strong>Основная эмоция — «взвешенный реализм»</strong>: люди видят проблемы, но не закрыты для диалога.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">3.</span>
                <span><strong>Усталость концентрируется в розничных подразделениях и производстве</strong>, где выше физическая нагрузка и меньше нематериальных стимулов.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">4.</span>
                <span><strong>HR и руководству</strong> стоит развивать эмоциональные коммуникации — благодарность, признание, внимание к мелочам. Это даст эффект «разряда» и укрепит доверие быстрее, чем новые регламенты.</span>
              </li>
            </ol>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default QualitativeAnalysis;
