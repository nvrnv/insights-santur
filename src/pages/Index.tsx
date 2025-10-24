import HRAnalyticsReport from '@/components/HRAnalyticsReport';
import { Button } from '@/components/ui/button';
const Index = () => {
  return <div className="min-h-screen bg-white">
      {/* Хедер с кнопками */}
      <div className="w-full bg-white border-b border-gray-200">
        <div className="w-full max-w-6xl mx-auto flex justify-start items-center py-3 px-6 gap-6">
          <a href="https://t.me/nvrnv" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-700 hover:text-gray-900 cursor-pointer">
            Связаться с нами
          </a>
        </div>
      </div>

      {/* Заголовок с отступом */}
      <div className="w-full bg-white pt-20 pb-8">
        <div className="w-full max-w-6xl mx-auto text-center px-6">
          <h1 className="text-2xl font-semibold leading-tight text-zinc-900 mb-4 md:text-4xl">SurwayHR для "Сантехкомплект Урал"</h1>
          <p className="text-base max-w-2xl mx-auto text-slate-900">Отчёт по исследованию вовлечённости и опыта сотрудников. Основой стали ответы на три ключевых вопроса: что больше всего нравится в компании; что больше всего мешает и почему; какие 3 вещи вы сделали бы в первую очередь, став руководителем. На основе результатов представлены eNPS, качественный и количественный анализы и приоритетные рекомендации.</p>
        </div>
      </div>
      
      <HRAnalyticsReport />
    </div>;
};
export default Index;