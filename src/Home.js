import React from 'react'
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import "./style/Home.css"

function Home() {
  return (
    <div className='app'>
         <Sidebar />
      <Feed />
      <Widgets />
    </div>
  )
}

export default Home