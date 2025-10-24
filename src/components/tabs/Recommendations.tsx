import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const Recommendations = () => {
  return (
    <div className="container-main">
      <Card variant="standard" shadow="none">
        <CardHeader>
          <CardTitle className="text-heading">Рекомендации</CardTitle>
          <p className="text-body-secondary mt-2">
            Раздел находится в разработке
          </p>
        </CardHeader>
        <CardContent className="card-spacing">
          <p className="text-body">
            Контент будет добавлен позже.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Recommendations;
