import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { FileText, Clock, MessageSquare, Users, Lightbulb } from 'lucide-react';

const QuantitativeAnalysis = () => {
  // Основные показатели
  const mainMetrics = [
    { label: 'Количество участников', value: '142 сотрудника', comment: 'Охвачены 5 подразделений компании' },
    { label: 'Формат опроса', value: 'Голосовые ответы (аудио → текст)', comment: 'Транскрипция выполнена автоматически, ответы сохранены в виде PDF.' },
    { label: 'Количество страниц итогового файла', value: '151', comment: 'Есть ответы более 1 страницы длиной' },
    { label: 'Общее количество слов в тексте', value: '17 000', comment: 'Средняя длина одного ответа — ≈ 119 слов.' },
    { label: 'Количество символов (с пробелами)', value: '112 000', comment: 'В среднем 788 символов на один ответ' },
    { label: 'Общая длительность аудио-записей', value: '230 минут', comment: 'В среднем по ≈ 97 секунд на один ответ.' },
    { label: 'Темп речи (фактический)', value: '≈ 73 слов/мин', comment: 'Рассчитан по соотношению слов и реального времени записи.' }
  ];

  // Средняя длина и темп ответов по подразделениям (оценочно)
  const departmentResponseStats = [
    { dept: 'Производственно-складской комплекс', avgWords: '~100', avgMinutes: '~0,8', comment: 'Короткие, но конкретные ответы' },
    { dept: 'Офис Екатеринбург', avgWords: '~130', avgMinutes: '~2,0', comment: 'Самые развернутые ответы' },
    { dept: 'Магазины Екатеринбург', avgWords: '~115', avgMinutes: '~1,5', comment: 'Средний объём, лёгкий тон' },
    { dept: 'Офис Тагил', avgWords: '~125', avgMinutes: '~1,4', comment: 'Ответы вдумчивые, спокойные' },
    { dept: 'Магазины Тагил', avgWords: '~95', avgMinutes: '~1,4', comment: 'Средний объём, содержательные ответы' }
  ];

  // Качество и глубина ответов
  const responseQuality = [
    { type: 'Развёрнутые (несколько тем)', count: 36, percentage: 25 },
    { type: 'Средней длины (1-2 темы)', count: 68, percentage: 48 },
    { type: 'Краткие, но содержательные', count: 32, percentage: 23 },
    { type: 'Формальные или пустые', count: 6, percentage: 4 }
  ];

  // Кодировка по подразделениям
  const departmentCodes = [
    { code: 1, name: 'Производственно-складской комплекс' },
    { code: 2, name: 'Офис УЦСК Екатеринбург' },
    { code: 3, name: 'Магазины Екатеринбург' },
    { code: 4, name: 'Офис УЦСК Тагил' },
    { code: 5, name: 'Магазины Тагил' }
  ];

  const getQualityColor = (type: string) => {
    if (type.includes('Развёрнутые')) return '#10B981'; // зеленый
    if (type.includes('Средней')) return '#FBBF24'; // желтый
    if (type.includes('Краткие')) return '#F59E0B'; // оранжевый
    return '#EF4444'; // красный
  };

  return (
    <div className="container-main">
      <Card variant="standard" shadow="none">
        <CardHeader>
          <CardTitle className="text-heading">Общий количественный анализ</CardTitle>
        </CardHeader>
        <CardContent className="card-spacing">
          
          {/* Основные показатели */}
          <div className="mb-8">
            <h3 className="text-heading mb-4">📊 Основные показатели</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-300 p-3 text-left font-semibold">Показатель</th>
                    <th className="border border-slate-300 p-3 text-left font-semibold">Значение</th>
                    <th className="border border-slate-300 p-3 text-left font-semibold">Комментарий</th>
                  </tr>
                </thead>
                <tbody>
                  {mainMetrics.map((metric, index) => (
                    <tr key={index} className="hover:bg-slate-50">
                      <td className="border border-slate-300 p-3 font-medium text-slate-800">{metric.label}</td>
                      <td className="border border-slate-300 p-3 font-semibold text-slate-900">{metric.value}</td>
                      <td className="border border-slate-300 p-3 text-sm text-slate-600">{metric.comment}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm font-semibold text-blue-900 mb-2">💬 Интерпретация:</p>
              <p className="text-sm text-slate-700">
                Сотрудники говорили неспешно, вдумчиво — для голосовых опросов это признак доверия и рефлексивности. 
                Формат «говори голосом» дал глубину без давления формальных анкет.
              </p>
            </div>
          </div>

          {/* Средняя длина и темп ответов по подразделениям */}
          <div className="mb-8">
            <h3 className="text-heading mb-4">⏱️ Средняя длина и темп ответов по подразделениям (оценочно)</h3>
            
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-300 p-3 text-left font-semibold">Подразделение</th>
                    <th className="border border-slate-300 p-3 text-center font-semibold">Средняя длина ответа (слов)</th>
                    <th className="border border-slate-300 p-3 text-center font-semibold">Средняя длительность (мин)</th>
                    <th className="border border-slate-300 p-3 text-left font-semibold">Комментарий</th>
                  </tr>
                </thead>
                <tbody>
                  {departmentResponseStats.map((stat, index) => (
                    <tr key={index} className="hover:bg-slate-50">
                      <td className="border border-slate-300 p-3 font-medium">{stat.dept}</td>
                      <td className="border border-slate-300 p-3 text-center font-semibold">{stat.avgWords}</td>
                      <td className="border border-slate-300 p-3 text-center font-semibold">{stat.avgMinutes}</td>
                      <td className="border border-slate-300 p-3 text-xs text-slate-700">{stat.comment}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="space-y-2">
              <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-sm text-slate-700">
                  <strong>💡 Офис Екатеринбург</strong> даёт самые длинные и продуманные ответы → высокая вовлечённость и культура обратной связи.
                </p>
              </div>
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-slate-700">
                  <strong>💡 Магазины Тагил и производственный комплекс</strong> — более лаконичны, но не формальны.
                </p>
              </div>
            </div>
          </div>

          {/* Качество и глубина ответов */}
          <div className="mb-8">
            <h3 className="text-heading mb-4">💬 Качество и глубина ответов</h3>
            
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-300 p-3 text-left font-semibold">Тип ответа</th>
                    <th className="border border-slate-300 p-3 text-center font-semibold">Количество</th>
                    <th className="border border-slate-300 p-3 text-center font-semibold">Доля</th>
                  </tr>
                </thead>
                <tbody>
                  {responseQuality.map((item, index) => (
                    <tr key={index} className="hover:bg-slate-50">
                      <td className="border border-slate-300 p-3 font-medium">{item.type}</td>
                      <td className="border border-slate-300 p-3 text-center font-bold text-lg">{item.count}</td>
                      <td className="border border-slate-300 p-3 text-center">
                        <span 
                          className="px-3 py-1 rounded-full text-white font-bold"
                          style={{ backgroundColor: getQualityColor(item.type) }}
                        >
                          {item.percentage}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
              <p className="text-sm font-semibold text-orange-900 mb-2">📍 Вывод:</p>
              <p className="text-sm text-slate-700 mb-2">
                Около четверти участников дали глубокие, многотемные ответы — значительный объём для голосового формата. 
                Почти половина — ответы средней детализации, что позволяет проводить корректный качественный анализ по темам.
              </p>
            </div>
          </div>

          {/* Итоговая интерпретация раздела II */}
          <div className="mb-8 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg">
            <h3 className="text-lg font-semibold text-slate-800 mb-3">💡 Итоговая интерпретация раздела II</h3>
            <ul className="space-y-2 text-sm text-slate-700 pl-4">
              <li className="flex items-start gap-2">
                <span className="font-bold mt-0.5">•</span>
                <span>Опрос получился <strong>качественно насыщенным</strong>: 17 000 слов живой речи — достаточная база для смыслового и эмоционального анализа.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold mt-0.5">•</span>
                <span><strong>Разница по подразделениям</strong> незначительна: все пять блоков включились в процесс, что говорит о доверии и открытости коммуникаций.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold mt-0.5">•</span>
                <span><strong>Типичный ответ</strong> — это короткое рассуждение длиной около минуты, часто с личными наблюдениями и конкретными примерами.</span>
              </li>
            </ul>
          </div>

          {/* Кодировка по подразделениям */}
          <div className="mb-8">
            <h3 className="text-heading mb-4">🏢 Кодировка по подразделениям</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <tbody>
                  {departmentCodes.map((item, index) => (
                    <tr key={index} className="hover:bg-slate-50">
                      <td className="border border-slate-300 p-3 text-center font-bold text-lg w-20">{item.code}</td>
                      <td className="border border-slate-300 p-3 font-medium">{item.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default QuantitativeAnalysis;
