import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import Login from "./Login";
import { auth } from "./firebase";

function App() {
 
  return (
    <Router>
      <Routes>
        {/* Route to the login page */}
        <Route path="/login" element={<Login />} />

        {/* Protected route for the main app */}
        <Route  path="/" element = { <AuthenticatedApp />}/>
    
      </Routes>
    </Router>
  );
}

function AuthenticatedApp() {
  return (
    <div className="App">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
