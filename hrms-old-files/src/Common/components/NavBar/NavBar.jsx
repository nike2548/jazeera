import React from 'react';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import DropDownIcon from '../../../assets/images/dropDown.svg';
import hrmsLogo from '../../../assets/images/hrmsLogo.svg';
import flagLogo from '../../../assets/images/flagLogo.png';
import flagLogoAr from '../../../assets/images/arabic.svg';
import profilePic from '../../../assets/images/profilePic.png';

import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { Avatar } from '@material-ui/core';
import './navbar.scss';

export default function NavBar({ changeLang, lang }) {
  return (
    <div className="main_header_inner_section">
      <AppBar>
        {/* Desktop View */}
        <section>
          <Toolbar className={'toolbar'}>
           <span className="logo_sec"> <img src={hrmsLogo} className="hrms-logo" alt="Logo" /></span>
            <span className="nav-dropdowns">
              DashBoard
              <IconButton className="dropdown-icon">
                <img src={DropDownIcon} alt="D" />
              </IconButton>
            </span>
            <span className="nav-dropdowns">
              Organisation Setup
              <IconButton className="dropdown-icon">
                <img src={DropDownIcon} alt="D" />
              </IconButton>
            </span>
            <span className="nav-dropdowns">
              ESS
              <IconButton className="dropdown-icon">
                <img src={DropDownIcon} alt="D" />
              </IconButton>
            </span>
            <section className="right-align">
              <span className="nav-dropdowns language_sec" onClick={changeLang}>
                <img src={ lang === 'ar' ? flagLogo : flagLogoAr} className="flag-logo" alt="F" />
                {lang === 'en' ? 'Arabic' : 'English'}
                <IconButton className="dropdown-icon">
                  <img src={DropDownIcon} alt="D" />
                </IconButton>
              </span>
              <IconButton>
                <SearchIcon className="icons" />
              </IconButton>
              <IconButton>
                <HelpOutlineIcon className="icons" />
              </IconButton>
              <IconButton>
                <NotificationsNoneIcon className="icons" />
              </IconButton>
              <IconButton className="profile-pic-sec">
                <Avatar alt="C" src={profilePic} className="profile-pic" />
              </IconButton>
              <IconButton className="dropdown-icon">
                <img src={DropDownIcon} alt="D" />
              </IconButton>
            </section>
          </Toolbar>
        </section>

        {/* Mobile View */}

        <section className="mobile-menu">
          <Toolbar className="toolbar">
            <IconButton color="inherit">
              <MenuIcon />
            </IconButton>
            <IconButton className="center-align">
              <img src={hrmsLogo} className="hrms-logo" alt="Logo" />
            </IconButton>
            <section className="right-align">
              <IconButton color="inherit">
                <MoreVertIcon />
              </IconButton>
            </section>
          </Toolbar>
        </section>
      </AppBar>
    </div>
  );
}
