import React, { useContext } from "react";
import Home from "./Home";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {  AuthContext } from "./AuthProvider";
import "./App.css";
import SignUp from "./SignUp";

function App() {
  const { currentUser } = useContext(AuthContext);

  return (
   
      
        <BrowserRouter>
          <Routes>
            {currentUser ? (
              // If user is logged in, show the Home component
              <Route path="/" element={<Home />} />
            ) : (
              // If user is not logged in, show the Login component
              <Route path="/" element={<Login />} />
            )}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
  
  
  );
}

export default App;
