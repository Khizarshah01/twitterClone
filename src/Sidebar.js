import React from 'react';
import "./Sidebar.css";
import TwitterIcon from '@mui/icons-material/Twitter';
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

function Sidebar() {
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
      <TwitterIcon className='sidbar_threadicon' />
      <SidebarOption Icon={HomeIcon} text={"Home"}/>
      <SidebarOption Icon={ExploreIcon} text={"Explore"}/>
      <SidebarOption Icon={NotificationsIcon} text={"Notification"}/>
      <SidebarOption Icon={BookmarkIcon} text={"Bookmark"}/>
      <SidebarOption Icon={EmailIcon} text={"Messages"}/>
      <SidebarOption Icon={ListIcon} text={"Lists"}/>
      <SidebarOption Icon={PersonIcon} text={"Profile"}/>
      <SidebarOption Icon={Logout} text={"Logout"} className="sidebar_signout" onClick={handleSignOut}/>
      <SidebarOption Icon={MoreHorizIcon} text={"More"}/>
      <Button variant="outlined" className="sidebar_tweet">Tweet</Button>
    </div>
  );
}

export default Sidebar;
