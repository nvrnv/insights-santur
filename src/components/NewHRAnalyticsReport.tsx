import React, { useState } from 'react';
import { 
  FileText, 
  Heart, 
  MessageCircle, 
  PieChart as PieChartIcon, 
  Lightbulb
} from 'lucide-react';
import DetailedOverview from './DetailedOverview';
import ENPSAnalysis from './tabs/ENPSAnalysis';
import QualitativeAnalysis from './tabs/QualitativeAnalysis';
import QuantitativeAnalysis from './tabs/QuantitativeAnalysis';
import Recommendations from './tabs/Recommendations';

const HRAnalyticsReport = () => {
  const [activeTab, setActiveTab] = useState('questions');

  const tabs = [
    {
      id: 'questions',
      label: 'Аналитика по вопросам',
      icon: FileText
    },
    {
      id: 'enps',
      label: 'eNPS анализ',
      icon: Heart
    },
    {
      id: 'qualitative',
      label: 'Качественный анализ',
      icon: MessageCircle
    },
    {
      id: 'quantitative',
      label: 'Общий количественный анализ',
      icon: PieChartIcon
    },
    {
      id: 'recommendations',
      label: 'Рекомендации',
      icon: Lightbulb
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'questions':
        return <DetailedOverview />;
      case 'enps':
        return <ENPSAnalysis />;
      case 'qualitative':
        return <QualitativeAnalysis />;
      case 'quantitative':
        return <QuantitativeAnalysis />;
      case 'recommendations':
        return <Recommendations />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto space-y-6 p-4 my-0 py-0">
      {/* Навигация */}
      <div className="flex flex-wrap gap-3 justify-center bg-transparent my-[8px] py-[12px] px-0">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`nav-tab ${activeTab === id ? 'nav-tab-active' : 'nav-tab-inactive'}`}
          >
            <Icon className="h-4 w-4" />
            {label}
          </button>
        ))}
      </div>
      
      {/* Контент */}
      {renderTabContent()}
    </div>
  );
};

export default HRAnalyticsReport;
