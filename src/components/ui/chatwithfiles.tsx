import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

const ChatWithFiles: React.FC = () => {
  return (
    <Card className="h-[60vh] flex flex-col border border-border shadow-none overflow-hidden relative" style={{
      boxShadow: 'none'
    }}>
      <CardContent className="flex flex-col h-full p-6 justify-center items-center text-center space-y-6">
        <div className="space-y-4">
          <p className="text-lg text-muted-foreground">
            Чат доступен вам по следующей ссылке:
          </p>
          <a 
            href="https://t.me/labvkusbot" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-2xl font-medium text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span>@labvkusbot</span>
            <ExternalLink className="w-6 h-6" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
};
export default ChatWithFiles;