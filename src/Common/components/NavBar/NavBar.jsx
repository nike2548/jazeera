import React from 'react';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import DropDownIcon from '../../../assets/images/dropDown.svg';
import hrmsLogo from '../../../assets/images/hrmsLogo.png';
import flagLogo from '../../../assets/images/flagLogo.png';
import profilePic from '../../../assets/images/profilePic.png';

import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { Avatar } from '@material-ui/core';
import './navbar.scss';

// const styles = makeStyles(theme => ({
//   drawerHide: {
//     [theme.breakpoints.up('md')]: {
//       display: 'none'
//     }
//   },
//   drawerShow: {
//     [theme.breakpoints.down('sm')]: {
//       display: 'none'
//     }
//   },
//   toolbar: {
//     height: '69px',
//     backgroundColor: '#002f6c'
//   },
//   centerAlign: {
//     flex: 1
//   },

//   rightAlign: {
//     marginLeft: 'auto'
//   },
//   hr: {
//     width: '1px',
//     height: '69px',
//     opacity: '0.3',
//     border: 'solid 1px #1565c0',
//     backgroundColor: '#d8d8d8',
//     marginLeft: '10px',
//     marginRight: '10px'
//   },
//   navDropdowns: {
//     position: 'static',
//     fontFamily: 'Roboto',
//     fontSize: '14px',
//     fontWeight: 'normal',
//     fontStretch: 'normal',
//     fontStyle: 'normal',
//     lineHeight: 'normal',
//     letterSpacing: '0.13px',
//     color: '#e8eaf6',
//     cursor: 'pointer'
//   },
//   icons: {
//     color: '#1565c0'
//   },
//   hrmsLogo: {
//     height: '40px'
//   },
//   flagLogo: {
//     height: '14px'
//   },
//   profilePic: {
//     height: '32px',
//     width: '32px'
//   }
// }));

export default function NavBar({ changeLang, lang }) {
  return (
    <div>
      <AppBar>
        {/* Desktop View */}
        <section>
          <Toolbar className={'toolbar'}>
            <img src={hrmsLogo} className="hrms-logo" alt="Logo" />
            <hr className="hr" />
            <span className="nav-dropdowns">
              DashBoard
              <IconButton>
                <img src={DropDownIcon} alt="D" />
              </IconButton>
            </span>
            <span className="nav-dropdowns">
              Organisation Setup
              <IconButton>
                <img src={DropDownIcon} alt="D" />
              </IconButton>
            </span>
            <span className="nav-dropdowns">
              ESS
              <IconButton>
                <img src={DropDownIcon} alt="D" />
              </IconButton>
            </span>
            <section className="right-align">
              <span className="nav-dropdowns" onClick={changeLang}>
                <img src={flagLogo} className="flag-logo" alt="F" />
                {lang === 'en' ? 'Arabic' : 'English'}
                <IconButton>
                  <img src={DropDownIcon} alt="D" />
                </IconButton>
              </span>
              <IconButton>
                <hr className="hr" />
              </IconButton>
              <IconButton>
                <SearchIcon className="icons" />
              </IconButton>
              <IconButton>
                <HelpOutlineIcon className="icons" />
              </IconButton>
              <IconButton>
                <NotificationsNoneIcon className="icons" />
              </IconButton>
              <IconButton>
                <Avatar alt="C" src={profilePic} className="profile-pic" />
              </IconButton>
              <IconButton>
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
