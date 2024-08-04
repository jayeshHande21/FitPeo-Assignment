import React from 'react';
import Sidebar from '../Sidebar/sidebar';
import CardsContainer from '../card/cardsContainer';
import FunctionLabel from '../Activity/activity';
import Orders from "../ordersPage/orders";
import Netprofit from '../NetProfit/netprofit';
import Feedback from "../Feedback/feedback";
import Tabs from '../Tabs/tabs';
import './hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="sidebar">
       <Sidebar/>
      </div>
      
      <div className="left">
        <p style={{color:"white" , margin:"0px" , padding:"0px" , marginLeft:"4px"}}>Dashboard</p>
        <CardsContainer />
        <FunctionLabel />
        <Orders />
      </div>
      <div className="right">
        <p style={{ margin:"0px" , padding:"0px" ,marginLeft:"4px"}}>Dashboard</p>
        <Netprofit />
        <Tabs />
        <Feedback />
      </div>
    </div>
  );
};

export default Hero;
