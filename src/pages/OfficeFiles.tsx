import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

export default function OfficeFiles() {
  return (
    <div className="w-full max-w-5xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Чат с инсайтами</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg text-muted-foreground">
            Чат доступен вам по следующей ссылке:
          </p>
          <a 
            href="https://t.me/labvkusbot" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xl font-medium text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span>@labvkusbot</span>
            <ExternalLink className="w-5 h-5" />
          </a>
          <p className="text-sm text-muted-foreground mt-4">
            Откройте Telegram и начните диалог с ботом для получения инсайтов.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}


