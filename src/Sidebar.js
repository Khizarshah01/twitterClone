import React from 'react';
import "./style/Sidebar.css";
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListIcon from '@mui/icons-material/List';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';
import { auth } from './firebase';
import { Logout } from '@mui/icons-material';
// import { Link } from 'react-router-dom';

function Sidebar({ setActiveComponent }) {
  const handleSignOut = async () => {
    try {
      await auth.signOut();
      // Perform any additional tasks after successful sign-out if needed
    } catch (error) {
      console.log(error.message);
      // Handle sign-out errors if any
    }
  };

  return (
    <div className='sidebar'>
         <img
        src="https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_400x400.jpg"
        alt="Twitter Icon"
        className='sidbar_twittericon'
      />
       <SidebarOption Icon={HomeIcon} text={"Home"} onClick={() => setActiveComponent('feed')} />
      <SidebarOption Icon={ExploreIcon} text={"Explore"} />
      <SidebarOption Icon={NotificationsIcon} text={"Notifications"} />
      <SidebarOption Icon={BookmarkIcon} text={"Bookmark"} />
      <SidebarOption Icon={EmailIcon} text={"Messages"} />
      <SidebarOption Icon={ListIcon} text={"Lists"} />
      <SidebarOption Icon={PersonIcon} text={"Profile"} onClick={() => setActiveComponent('profile')} />
      <SidebarOption Icon={Logout} text={"Logout"} className="sidebar_signout" onClick={handleSignOut} />
      <SidebarOption Icon={MoreHorizIcon} text={"More"} />
      <Button variant="outlined" className="sidebar_tweet">Post</Button>
    </div>
  );
}

export default Sidebar;
