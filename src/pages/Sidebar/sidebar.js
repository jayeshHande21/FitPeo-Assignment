import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import AssessmentIcon from '@mui/icons-material/Assessment';
import TaskIcon from '@mui/icons-material/Task';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import SettingsPowerIcon from '@mui/icons-material/SettingsPower';
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <HomeIcon className="sidebar-icon" style={{ color: "blue" }} />
      <AssessmentIcon className="sidebar-icon" />
      <TaskIcon className="sidebar-icon" />
      <AccountBalanceWalletIcon className="sidebar-icon" />
      <LocalMallIcon className="sidebar-icon" />
      <div className="sidebar-spacer"></div>
      <SettingsPowerIcon className="sidebar-icon" />
    </div>
  );
};

export default Sidebar;
