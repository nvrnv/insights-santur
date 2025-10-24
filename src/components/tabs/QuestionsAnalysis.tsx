import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Heart, AlertCircle, Lightbulb, MessageCircle, TrendingUp, Users, Zap } from 'lucide-react';

const QuestionsAnalysis = () => {
  // Данные для анализа трех ключевых вопросов HR-исследования
  const questions = [
    {
      id: 1,
      title: 'Что тебе больше всего нравится в нашей компании?',
      icon: Heart,
      summary: 'Анализ позитивных факторов и драйверов вовлеченности',
      emoji: '💚',
      type: 'positive'
    },
    {
      id: 2,
      title: 'Что тебя больше всего бесит в компании? Почему?',
      icon: AlertCircle,
      summary: 'Анализ негативных факторов и источников раздражения',
      emoji: '🔴',
      type: 'negative'
    },
    {
      id: 3,
      title: 'Если бы ты стал руководителем компании, какие 3 вещи сделал бы в первую очередь?',
      icon: Lightbulb,
      summary: 'Анализ предложений сотрудников по улучшению компании',
      emoji: '💡',
      type: 'suggestions'
    }
  ];

  // Данные для позитивных тем
  const positiveThemes = [
    { theme: '🤝 Коллектив,\nподдержка', percentage: 64, quote: '«С людьми легко, помогают.»', color: '#10B981' },
    { theme: '🏢 Стабильность,\nуверенность', percentage: 53, quote: '«Не боюсь завтра остаться без работы.»', color: '#10B981' },
    { theme: '🧑‍💼 Отношение\nруководства', percentage: 36, quote: '«Начальник нормальный, объясняет спокойно.»', color: '#10B981' },
    { theme: '💡 Возможность\nразвития', percentage: 27, quote: '«Учусь новому, есть рост.»', color: '#10B981' },
    { theme: '🎉 Корпоративная\nжизнь, атмосфера', percentage: 19, quote: '«Праздники, внимание, приятно.»', color: '#10B981' }
  ];

  // Данные для негативных тем
  const negativeThemes = [
    { theme: '💰 Выплаты\nи расчёты', frequency: '70+', severity: 120, comment: 'Главная боль, особенно цеха и магазины', color: '#EF4444' },
    { theme: '🚿 Быт, раздевалки,\nдушевые', frequency: '40+', severity: 95, comment: 'Очереди, теснота, грязь', color: '#F59E0B' },
    { theme: '🍽️ Столовая\nи питание', frequency: '30+', severity: 70, comment: '«Подвал, далеко, мало времени»', color: '#FBBF24' },
    { theme: '👥 Поведение\nмастеров', frequency: '60+', severity: 65, comment: '«Кричат», «штрафы без объяснения»', color: '#F59E0B' },
    { theme: '📈 Карьера\nи рост', frequency: '25+', severity: 50, comment: '«Хочу развиваться, но не знаю как»', color: '#6B7280' }
  ];

  // Данные для предложений
  const suggestions = [
    { category: '💰 Улучшить оплату\nи прозрачность начислений', percentage: 41, color: '#EF4444' },
    { category: '🚿 Улучшить быт,\nраздевалки, питание', percentage: 37, color: '#F59E0B' },
    { category: '👥 Изменить стиль\nруководства, "меньше крика"', percentage: 29, color: '#F59E0B' },
    { category: '📈 Сделать карьерные\nлестницы', percentage: 24, color: '#6B7280' },
    { category: '🔔 Улучшить коммуникации\nи обратную связь', percentage: 18, color: '#6B7280' }
  ];

  // Цитаты сотрудников
  const employeeQuotes = {
    positive: [
      '«Хороший коллектив — все как одна семья.»',
      '«Платят вовремя, всё честно.»',
      '«Можно развиваться, дают новые задачи.»'
    ],
    negative: [
      '«Не нравится, что зарплату задерживают.»',
      '«Раздевалки тесные, утром очередь.»',
      '«Могут накричать без причины.»',
      '«Невозможно вырасти — всё по знакомству.»'
    ],
    suggestions: [
      '«Первым делом — привёл бы в порядок раздевалки и душевые.»',
      '«Ввёл бы расчётные листы, чтобы все понимали, за что платят.»',
      '«Сделал бы собрания раз в месяц без страха сказать правду.»',
      '«Добавил бы обучение и рост для тех, кто хочет.»'
    ]
  };

  return (
    <div className="container-main">
      {/* Обзор вопросов */}
      <Card variant="standard" shadow="none">
        <CardHeader>
          <CardTitle className="text-heading">Аналитика по вопросам</CardTitle>
          <p className="text-body-secondary mt-2">
            Детальный анализ ответов сотрудников на три ключевых вопроса HR-исследования
          </p>
        </CardHeader>
        <CardContent className="card-spacing">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {questions.map((question, index) => (
              <Card key={index} variant="outlined" shadow="soft">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{question.emoji}</span>
                    <span className="font-semibold text-sm">Вопрос {question.id}</span>
                  </div>
                  <p className="text-sm text-slate-900 mb-3">{question.title}</p>
                  <p className="text-xs text-slate-600">{question.summary}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Вопрос 1: Что нравится в компании */}
      <Card variant="standard" shadow="none">
        <CardHeader>
          <CardTitle className="text-heading">💚 Что тебе больше всего нравится в нашей компании?</CardTitle>
          <p className="text-body-secondary mt-2">
            Анализ позитивных факторов и драйверов вовлеченности сотрудников
          </p>
        </CardHeader>
        <CardContent className="card-spacing">
          
          {/* Топ-5 позитивных тем */}
          <div className="mb-8">
            <h3 className="text-heading mb-4">Топ-5 позитивных тем</h3>
            
            {/* График */}
            <div className="mb-6" style={{ width: '88%', margin: '0 auto' }}>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={positiveThemes} layout="vertical" margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 70]} />
                  <YAxis type="category" dataKey="theme" width={180} tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Bar dataKey="percentage" name="Доля упоминаний">
                    {positiveThemes.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
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
                    <th className="border border-slate-300 p-3 text-left font-semibold">Тема</th>
                    <th className="border border-slate-300 p-3 text-center font-semibold">Доля упоминаний</th>
                    <th className="border border-slate-300 p-3 text-left font-semibold">Ключевая эмоция</th>
                  </tr>
                </thead>
                <tbody>
                  {positiveThemes.map((item, index) => (
                    <tr key={index} className="hover:bg-slate-50">
                      <td className="border border-slate-300 p-3 font-medium">{item.theme}</td>
                      <td className="border border-slate-300 p-3 text-center">
                        <span className="text-lg font-bold text-green-600">{item.percentage}%</span>
                      </td>
                      <td className="border border-slate-300 p-3 text-sm italic text-slate-600">{item.quote}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Примеры цитат */}
          <div className="mb-8">
            <h3 className="text-heading mb-4 flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-blue-600" />
              Примеры цитат
            </h3>
            <div className="space-y-2">
              {employeeQuotes.positive.map((quote, index) => (
                <p key={index} className="text-sm italic text-slate-600 pl-4 border-l-2 border-green-300">
                  {quote}
                </p>
              ))}
            </div>
          </div>

          {/* Вывод */}
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <h4 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
              <Lightbulb className="h-4 w-4" />
              Вывод:
            </h4>
            <p className="text-sm text-slate-700">
              Главные драйверы вовлечённости — человеческий климат и ощущение устойчивости. 
              Это "эмоциональный капитал", который стоит поддерживать публичным признанием и коммуникациями.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Вопрос 2: Что бесит в компании */}
      <Card variant="standard" shadow="none">
        <CardHeader>
          <CardTitle className="text-heading">🔴 Что тебя больше всего бесит в компании? Почему?</CardTitle>
          <p className="text-body-secondary mt-2">
            Анализ негативных факторов и источников раздражения сотрудников
          </p>
        </CardHeader>
        <CardContent className="card-spacing">
          
          {/* Топ-5 негативных тем */}
          <div className="mb-8">
            <h3 className="text-heading mb-4">Топ-5 негативных тем (по индексу остроты)</h3>
            
            {/* График индекса остроты */}
            <div className="mb-6" style={{ width: '88%', margin: '0 auto' }}>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={negativeThemes} layout="vertical" margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 130]} />
                  <YAxis type="category" dataKey="theme" width={180} tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Bar dataKey="severity" name="Индекс остроты">
                    {negativeThemes.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
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
                    <th className="border border-slate-300 p-3 text-left font-semibold">Тема</th>
                    <th className="border border-slate-300 p-3 text-center font-semibold">Частота упоминаний</th>
                    <th className="border border-slate-300 p-3 text-center font-semibold">Индекс остроты (0-100)</th>
                    <th className="border border-slate-300 p-3 text-left font-semibold">Комментарий</th>
                  </tr>
                </thead>
                <tbody>
                  {negativeThemes.map((item, index) => (
                    <tr key={index} className="hover:bg-slate-50">
                      <td className="border border-slate-300 p-3 font-medium">{item.theme}</td>
                      <td className="border border-slate-300 p-3 text-center font-semibold">{item.frequency}</td>
                      <td className="border border-slate-300 p-3 text-center">
                        <span 
                          className="px-3 py-1 rounded-full font-bold text-white"
                          style={{ backgroundColor: item.color }}
                        >
                          {item.severity}
                        </span>
                      </td>
                      <td className="border border-slate-300 p-3 text-sm text-slate-700">{item.comment}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Примеры цитат */}
          <div className="mb-8">
            <h3 className="text-heading mb-4 flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-blue-600" />
              Примеры цитат
            </h3>
            <div className="space-y-2">
              {employeeQuotes.negative.map((quote, index) => (
                <p key={index} className="text-sm italic text-slate-600 pl-4 border-l-2 border-red-300">
                  {quote}
                </p>
              ))}
            </div>
          </div>

          {/* Вывод */}
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <h4 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
              <Lightbulb className="h-4 w-4" />
              Вывод:
            </h4>
            <p className="text-sm text-slate-700">
              Проблемы концентрируются в зоне «гигиены» — оплата, быт, уважение. 
              Решение этих тем даст мгновенный прирост доверия и снизит раздражение в ответах.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Вопрос 3: Предложения сотрудников */}
      <Card variant="standard" shadow="none">
        <CardHeader>
          <CardTitle className="text-heading">💡 Если бы ты стал руководителем компании, какие 3 вещи сделал бы в первую очередь?</CardTitle>
          <p className="text-body-secondary mt-2">
            Анализ предложений сотрудников по улучшению компании
          </p>
        </CardHeader>
        <CardContent className="card-spacing">
          
          {/* Количественный обзор */}
          <div className="mb-8">
            <h3 className="text-heading mb-4">Количественный обзор</h3>
            
            {/* График предложений */}
            <div className="mb-6" style={{ width: '88%', margin: '0 auto' }}>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={suggestions} layout="vertical" margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 45]} />
                  <YAxis type="category" dataKey="category" width={200} tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Bar dataKey="percentage" name="Доля ответов">
                    {suggestions.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
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
                    <th className="border border-slate-300 p-3 text-left font-semibold">Категория предложений</th>
                    <th className="border border-slate-300 p-3 text-center font-semibold">Доля ответов</th>
                  </tr>
                </thead>
                <tbody>
                  {suggestions.map((item, index) => (
                    <tr key={index} className="hover:bg-slate-50">
                      <td className="border border-slate-300 p-3 font-medium">{item.category}</td>
                      <td className="border border-slate-300 p-3 text-center">
                        <span className="text-lg font-bold" style={{ color: item.color }}>
                          {item.percentage}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Примеры цитат */}
          <div className="mb-8">
            <h3 className="text-heading mb-4 flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-blue-600" />
              Примеры цитат
            </h3>
            <div className="space-y-2">
              {employeeQuotes.suggestions.map((quote, index) => (
                <p key={index} className="text-sm italic text-slate-600 pl-4 border-l-2 border-blue-300">
                  {quote}
                </p>
              ))}
            </div>
          </div>

          {/* Вывод */}
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
              <Lightbulb className="h-4 w-4" />
              Вывод:
            </h4>
            <p className="text-sm text-slate-700">
              Сотрудники мыслят конструктивно: их «волшебная палочка» — не мечта о повышении зарплаты, 
              а желание честных, понятных и человечных условий. Это ценный сигнал зрелости корпоративной культуры.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Общие выводы по разделу */}
      <Card variant="standard" shadow="none">
        <CardHeader>
          <CardTitle className="text-heading">Общие выводы по разделу</CardTitle>
        </CardHeader>
        <CardContent className="card-spacing">
          <div className="section-spacing">
            <div className="insight-item">
              <div className="insight-dot"></div>
              <p className="insight-text">
                В ответах ясно разделяются два пласта: «гигиена» (оплата, быт, стиль) и «мотивация» (развитие, признание).
              </p>
            </div>
            <div className="insight-item">
              <div className="insight-dot"></div>
              <p className="insight-text">
                <strong>70% всех упоминаний</strong> — о базовых условиях; <strong>30%</strong> — о ценностях и росте.
              </p>
            </div>
            <div className="insight-item">
              <div className="insight-dot"></div>
              <p className="insight-text">
                Почти в каждом подразделении сотрудники <strong>критикуют</strong> и <strong>предлагают одновременно</strong> — преобладает конструктивный тон.
              </p>
            </div>
            <div className="insight-item">
              <div className="insight-dot"></div>
              <p className="insight-text">
                Самый ценный ресурс компании — доверие, которое пока держится на коллективе.
              </p>
            </div>
            <div className="insight-item">
              <div className="insight-dot"></div>
              <p className="insight-text">
                Следующий шаг — укрепить доверие системными действиями: прозрачность, быт, уважение.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuestionsAnalysis;
