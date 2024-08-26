import React, { useContext } from "react";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import Profile from "./Profile";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import "./App.css";

function App() {
  const { currentUser } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        {currentUser ? (
          <>
            {/* If user is logged in, show the Home component at the root path */}
            <Route path="/" element={<Home />} />
            {/* Profile route is accessible only if the user is logged in */}
            <Route path="/profile" element={<Profile />} />
            {/* Redirect to Home if the user tries to access login/signup when logged in */}
            <Route path="/login" element={<Navigate to="/" />} />
            <Route path="/signup" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            {/* If user is not logged in, show the Login component at the root path */}
            <Route path="/" element={<Login />} />
            {/* SignUp page for new users */}
            <Route path="/signup" element={<SignUp />} />
            {/* Redirect to login if the user tries to access protected routes */}
            {/* <Route path="/profile" element={<Navigate to="/login" />} /> */}
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
