import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import React from 'react';

const KeyContradictionsBlock = () => (
  <Card className="border border-border shadow-none rounded-lg" style={{ boxShadow: 'none' }}>
    <CardHeader>
      <CardTitle className="text-lg font-medium text-foreground">
        Ключевые противоречия (Data-driven insights)
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Management Contradiction */}
        <Card className="border-l-4 border-l-amber-500 border border-border shadow-none rounded-lg" style={{ boxShadow: 'none' }}>
          <CardHeader>
            <CardTitle className="text-base font-medium text-foreground">
              Менеджмент и руководство
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="font-medium text-black mb-1 text-sm">Позитивно воспринимают:</div>
                <div className="text-green-700 text-sm leading-relaxed">Новички и специалисты отмечают поддержку и доверие</div>
              </div>
              <div className="p-4 bg-red-50 rounded-lg">
                <div className="font-medium text-black mb-1 text-sm">Негативно воспринимают:</div>
                <div className="text-red-700 text-sm leading-relaxed">Опытные сотрудники и руководители среднего звена видят непоследовательность и давление</div>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Tasks and Projects Contradiction */}
        <Card className="border-l-4 border-l-blue-500 border border-border shadow-none rounded-lg" style={{ boxShadow: 'none' }}>
          <CardHeader>
            <CardTitle className="text-base font-medium text-foreground">
              Задачи и проекты
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="font-medium text-black mb-1 text-sm">Мотивирует:</div>
                <div className="text-green-700 text-sm leading-relaxed">Junior/Middle: сложность и новизна задач — ключевой мотиватор</div>
              </div>
              <div className="p-4 bg-red-50 rounded-lg">
                <div className="font-medium text-black mb-1 text-sm">Вызывает выгорание:</div>
                <div className="text-red-700 text-sm leading-relaxed">Senior/Lead: рутина и отсутствие стратегической ценности</div>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Autonomy Contradiction */}
        <Card className="border-l-4 border-l-purple-500 border border-border shadow-none rounded-lg" style={{ boxShadow: 'none' }}>
          <CardHeader>
            <CardTitle className="text-base font-medium text-foreground">
              Автономия и свобода
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="font-medium text-black mb-1 text-sm">Сильная сторона:</div>
                <div className="text-green-700 text-sm leading-relaxed">Удаленные сотрудники ценят гибкость и свободу</div>
              </div>
              <div className="p-4 bg-red-50 rounded-lg">
                <div className="font-medium text-black mb-1 text-sm">Создает проблемы:</div>
                <div className="text-red-700 text-sm leading-relaxed">Недостаток четких процессов создает "хаос" для части команды</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </CardContent>
  </Card>
);

export default KeyContradictionsBlock; 