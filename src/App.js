import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import Login from "./Login";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Your code to handle authentication state goes here
    // For example, using Firebase Auth's onAuthStateChanged to check if the user is logged in.
    // If the user is logged in, set the user state. Otherwise, set it to null.
    // You can also store the user data in localStorage or session storage for persistence across page reloads.
  }, []);

  // Helper function to check if the user is authenticated
  const isAuthenticated = () => {
    return user !== null;
  };

  return (
    <Router>
      <Routes>
        {/* Route to the login page */}
        <Route path="/login" element={<Login />} />

        {/* Protected route for the main app */}
        <Route
          path="/"
          element={
            isAuthenticated() ? (
              <div className="App">
                <Sidebar />
                <Feed />
                <Widgets />
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
