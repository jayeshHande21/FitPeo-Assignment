import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import './FunctionLabel.css';

export default function FunctionLabel() {
  return (
    <div className="bar-chart-container">
      <BarChart
        
        series={[
          { data: [1000, 2400, 1398, 9800, 4000, 3500, 1800, 4900, 2600, 3700, 2100, 4300] },
          { data: [500, 2398, 4300, 6500, 8000, 7200, 3100, 5400, 2300, 3900, 2500, 4700] },
        ]}
        xAxis={[
          { data: ['5', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27'], scaleType: 'band' },
        ]}
        yAxis={[
          { data: ['0', '5k', '10k', '15k'], scaleType: 'linear' },
        ]}
        className="bar-chart"
      />
    </div>
  );
}
