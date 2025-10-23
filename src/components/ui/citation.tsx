import React, { useState } from 'react';
import { ExternalLink, Quote, BookOpen } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface Citation {
  title: string;
  url: string;
  content: string;
  date: string;
  siteName: string;
  sourceContent: string;
}

interface CitationLinkProps {
  id: string;
  callType: 'quote' | 'recommend' | 'source';
  citations: Record<string, Citation>;
}

export const CitationLink: React.FC<CitationLinkProps> = ({ id, callType, citations }) => {
  const [isOpen, setIsOpen] = useState(false);
  const citation = citations[id];

  if (!citation) return null;

  const renderTrigger = () => {
    switch (callType) {
      case 'quote':
        return (
          <sup className="inline-flex items-center text-xs text-primary hover:text-primary/80 cursor-pointer transition-colors">
            [{id}]
          </sup>
        );
      case 'recommend':
        return (
          <span className="text-sm hover:text-primary cursor-pointer transition-colors flex items-center gap-1">
            <Quote className="h-3 w-3" />
            {citation.title} - {citation.siteName}
          </span>
        );
      case 'source':
        return (
          <Button variant="link" size="sm" className="h-auto p-0 text-sm">
            <BookOpen className="h-3 w-3 mr-1" />
            {citation.title}
          </Button>
        );
      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {renderTrigger()}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Quote className="h-5 w-5" />
            {citation.title}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="font-medium">{citation.siteName}</span>
            <span>•</span>
            <span>{citation.date}</span>
          </div>
          
          <div className="bg-muted/50 p-4 rounded-lg">
            <p className="text-sm leading-relaxed">{citation.content}</p>
          </div>
          
          <div className="border-t pt-4">
            <p className="text-xs text-muted-foreground mb-2">Источник:</p>
            <p className="text-sm">{citation.sourceContent}</p>
          </div>
          
          <div className="flex justify-end">
            <Button variant="outline" size="sm" asChild>
              <a href={citation.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <ExternalLink className="h-3 w-3" />
                Перейти к источнику
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};