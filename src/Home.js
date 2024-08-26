import React, { useState } from 'react';
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Profile from "./Profile";
import Widgets from "./Widgets";
import "./style/Home.css";

function Home() {
  const [activeComponent, setActiveComponent] = useState('feed'); // 'feed' or 'profile'

  return (
    <div className='app'>
      <Sidebar setActiveComponent={setActiveComponent} />
      {activeComponent === 'feed' ?<>  <Feed />   <Widgets /> </> : <Profile />}
     
    </div>
  );
}

export default Home;
