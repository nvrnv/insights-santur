import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Calendar, Users, Clock } from 'lucide-react';

const MeetingDetailsCard = () => {
  const sections = [
    { title: "About them", content: [] },
    { title: "Key takeaways", content: [] },
    { title: "Decision-making insights", content: [] },
    { title: "Budget & Timeline", content: [] },
    { title: "Next Steps", content: [] }
  ];

  return (
    <Card className="w-full max-w-md h-fit">
      <CardHeader className="pb-4 border-b border-border/10">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <Calendar className="h-4 w-4" />
          <span>Today 10:45 AM</span>
          <span>Jim, Michaela +5</span>
        </div>
        <CardTitle className="text-lg font-medium">
          Upstart Health intro call
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4 pt-4">
        {sections.map((section, index) => (
          <div key={index} className="space-y-2">
            <h4 className="text-sm font-medium text-foreground">
              {section.title}
            </h4>
            <div className="space-y-1">
              <div className="h-2 bg-muted rounded-full w-full opacity-60"></div>
              <div className="h-2 bg-muted rounded-full w-3/4 opacity-40"></div>
              {index < 2 && (
                <div className="h-2 bg-muted rounded-full w-1/2 opacity-30"></div>
              )}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default MeetingDetailsCard;