import React from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import logo from "./logo.png"
import img1 from "./images/img1.jpg";
import NotificationsIcon from '@mui/icons-material/Notifications';

import './header.css';

const Header = () => {
 
  return (
    <div className="header-container">
      <div className="search-container">
        <img className='logo' src={logo} alt="logo"/> 
        <TextField
          placeholder="Search"
          variant="outlined"
          size="small"
          className="search-input"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div className="icon-container">
      <IconButton>
          <EmailRoundedIcon />
        </IconButton>
        <IconButton>
          <SettingsRoundedIcon />
        </IconButton>
       
        <IconButton>
        <Badge color="secondary" variant="dot">
        <NotificationsIcon/>
      </Badge>
        </IconButton>
        <IconButton>
          <Stack direction="row" spacing={2}>
            <Avatar sx={{ width: 24, height: 24 }} alt="Remy Sharp" src={img1} />
          </Stack>
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
