import React from 'react';

export interface ICEScoreItem {
  type: 'Подтвержденный инсайт' | 'Гипотеза' | 'Слабый сигнал';
  title: string;
  subtitle?: string;
  justification: string;
  businessImpact: string;
  impact: number;
  confidence: number;
  ease: number;
  iceScore: number;
}

interface ICEScoreTableProps {
  data: ICEScoreItem[];
}

const ICEScoreTable: React.FC<ICEScoreTableProps> = ({ data }) => {
  // Function to get type styling
  const getTypeStyle = (type: string) => {
    switch (type) {
      case 'Подтвержденный инсайт':
        return 'text-chart-secondary';
      case 'Гипотеза':
        return 'text-purple-600';
      case 'Слабый сигнал':
        return 'text-amber-600';
      default:
        return 'text-gray-600';
    }
  };

  // Function to get score circle styling
  const getScoreStyle = (score: number, isICE: boolean = false) => {
    if (isICE) {
      // ICE Score styling based on value ranges
      if (score >= 7.5) return 'bg-[#2B977D]/20 text-[#2B977D]';   // 7.5-10: зеленый
      if (score >= 6) return 'bg-[#E69F3E]/20 text-[#E69F3E]';   // 6-7.4: желтый
      return 'bg-[#ED7B3A]/20 text-[#ED7B3A]';                   // <6: оранжевый
    }

    // Impact, Confidence, Ease styling - используем цвета из прогресс-баров
    if (score >= 9) return 'bg-[#D6655A]/20 text-[#D6655A]';     // красный
    if (score >= 7) return 'bg-[#ED7B3A]/20 text-[#ED7B3A]';     // оранжевый
    if (score >= 5) return 'bg-[#E69F3E]/20 text-[#E69F3E]';     // желтый
    return 'bg-[#2B977D]/20 text-[#2B977D]';                     // зеленый
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="text-left p-3 font-semibold text-sm">Тип</th>
            <th className="text-left p-3 font-semibold text-sm">Инсайт/Гипотеза</th>
            <th className="text-left p-3 font-semibold text-sm">Обоснование</th>
            <th className="text-left p-3 font-semibold text-sm">Влияние на бизнес</th>
            <th className="text-center p-3 font-semibold text-sm">Impact</th>
            <th className="text-center p-3 font-semibold text-sm">Confidence</th>
            <th className="text-center p-3 font-semibold text-sm">Ease</th>
            <th className="text-center p-3 font-semibold text-sm">ICE Score</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b hover:bg-muted/20">
              <td className="p-3">
                <div className={`text-sm font-medium ${getTypeStyle(item.type)}`}>
                  {item.type}
                </div>
              </td>
              <td className="p-3 text-sm">
                <div className="font-medium">{item.title}</div>
                {item.subtitle && (
                  <div className="text-xs text-muted-foreground mt-1">{item.subtitle}</div>
                )}
              </td>
              <td className="p-3 text-xs text-muted-foreground">
                {item.justification}
              </td>
              <td className="p-3 text-xs">
                {item.businessImpact}
              </td>
              <td className="p-3 text-center">
                <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm ${getScoreStyle(item.impact)}`}>
                  {item.impact}
                </span>
              </td>
              <td className="p-3 text-center">
                <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm ${getScoreStyle(item.confidence)}`}>
                  {item.confidence}
                </span>
              </td>
              <td className="p-3 text-center">
                <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm ${getScoreStyle(item.ease)}`}>
                  {item.ease}
                </span>
              </td>
              <td className="p-3 text-center">
                <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm ${getScoreStyle(item.iceScore, true)}`}>
                  {item.iceScore}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ICEScoreTable; 