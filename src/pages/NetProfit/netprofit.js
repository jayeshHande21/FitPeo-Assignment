import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './netprofit.css';

const Netprofit = () => {
  return (
    <div className="netprofit-container">
      <p className="netprofit-title">Net Profit</p>
      <div className="netprofit-content">
        <h4 className="netprofit-value">$6759.25</h4>
        <div className="netprofit-chart">
          <CircularProgressbar value={70} text={`${70}%`} />
        </div>
      </div>
      <div className="netprofit-details">
        <p className="netprofit-percentage">▲ 3%</p>
        <p className="netprofit-note">*The values here have been rounded off</p>
      </div>
    </div>
  );
};

export default Netprofit;
