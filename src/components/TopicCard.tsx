import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Stat {
  label: string;
  value: string;
  sublabel?: string;
  color?: string;
}

interface Quote {
  author: string;
  text: string;
  color?: string;
}

interface TopicCardProps {
  title: string;
  status: string;
  statusColor?: string;
  description: string;
  stats: Stat[];
  quotes: Quote[];
  analysis: string;
  borderColor?: string;
}

// Function to render sentiment badges
const renderSentimentBadges = (sentimentText: string) => {
  // All sentiment data is now in unified format: "Позитив: X | Негатив: Y | Нейтраль: Z"
  if (!sentimentText.includes('Позитив') && !sentimentText.includes('Негатив') && !sentimentText.includes('Нейтраль')) {
    return null;
  }
  
  // Clean and parse sentiment string
  const cleanText = sentimentText.replace(/\s+/g, ' ').trim();
  const sentimentParts = cleanText.split('|').map(part => part.trim());
  
  return (
    <div className="flex flex-wrap gap-1.5 justify-center">
      {sentimentParts.map((part, idx) => {
        if (!part.includes(':')) return null;
        
        const [label, value] = part.split(':').map(s => s.trim());
        
        let badgeColor = 'bg-gray-50 text-gray-600';
        
        if (label.includes('Позитив')) {
          badgeColor = 'bg-green-50 text-green-700';
        } else if (label.includes('Негатив')) {
          badgeColor = 'bg-red-50 text-red-700';
        } else if (label.includes('Нейтраль')) {
          badgeColor = 'bg-slate-50 text-slate-600';
        }
        
        return (
          <Badge 
            key={idx} 
            className={`text-xs px-2.5 py-1 font-normal rounded-lg ${badgeColor} hover:opacity-80 transition-opacity`}
          >
            {label}: {value}
          </Badge>
        );
      }).filter(Boolean)}
    </div>
  );
};

const TopicCard: React.FC<TopicCardProps> = ({
  title,
  status,
  statusColor = 'bg-destructive text-white',
  description,
  stats,
  quotes,
  analysis,
  borderColor = 'border-l-destructive',
}) => {
  // Apply ShadCN styles for specific statuses
  const shouldApplyShadCNStyles = ['ВЫСОКИЙ', 'КРИТИЧЕСКИЙ', 'СИЛЬНАЯ СТОРОНА'].includes(status);
  const finalStatusColor = shouldApplyShadCNStyles ? 'bg-muted/50 text-muted-foreground border border-border' : statusColor;
  const finalBorderColor = shouldApplyShadCNStyles ? 'border-l-border' : borderColor;
  
  return (
    <Card className={`border-l-4 ${finalBorderColor} bg-gray-50 border border-border shadow-none rounded-lg`} style={{ boxShadow: 'none' }}> {/* Card wrapper */}
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-lg font-medium text-black">
            {title}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Описание */}
        <div className="bg-white p-4 rounded-lg border border-border">
          <h4 className="font-medium mb-2 text-sm text-foreground">Краткое описание:</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
        {/* Статистика */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => {
            const colors = [
              'bg-[#355CFF]/10 border-[#355CFF]/20',
              'bg-[#2B977D]/10 border-[#2B977D]/20',
              'bg-[#E69F3E]/10 border-[#E69F3E]/20',
              'bg-[#A3C451]/10 border-[#A3C451]/20'
            ];
            const colorClass = colors[idx % colors.length];
            const textColors = [
              'text-[#355CFF]',
              'text-[#2B977D]',
              'text-[#E69F3E]',
              'text-[#A3C451]'
            ];
            const textColor = textColors[idx % textColors.length];
            const isEmotion = stat.label.toLowerCase().includes('эмоционал');
            return (
              <div key={idx} className={`${colorClass} rounded-lg p-4 shadow-sm h-32 flex flex-col items-center justify-start`}>
                <div className="text-sm font-bold text-foreground text-center w-full mb-1">{stat.label}</div>
                {stat.label === 'Тональность'
                  ? (stat.sublabel && renderSentimentBadges(stat.sublabel))
                  : <div className={`text-lg font-semibold ${textColor} text-center mb-1`}>{stat.value}</div>
                }
                {stat.sublabel && !isEmotion && stat.label !== 'Тональность' && (
                  <div className="text-xs text-muted-foreground text-center leading-snug">{stat.sublabel}</div>
                )}
              </div>
            );
          })}
        </div>
        {/* Цитаты */}
        <div>
          <h4 className="font-medium mb-3 text-sm text-foreground">
            Репрезентативные анонимные цитаты:
          </h4>
          <div className="space-y-3">
            {quotes.map((q, idx) => (
              <div key={idx} className="border-l-4 border-l-muted-foreground/30 pl-4 p-3 bg-muted/10 rounded-r-lg">
                <div className="text-sm font-medium text-foreground mb-2">{q.author}:</div>
                <p className="text-sm text-muted-foreground italic leading-relaxed">"{q.text}"</p>
              </div>
            ))}
          </div>
        </div>
        {/* Анализ */}
        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
          <p className="text-sm font-medium mb-3 text-black">
            Качественный анализ:
          </p>
          <p className="text-sm text-black leading-relaxed">{analysis}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TopicCard; 