import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TextField, Button, Typography, Container } from "@mui/material";
import { auth } from "./firebase";
import "./style/Login.css"; // Import the Login.css file

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      // User is logged in, you can now redirect to the main app or handle the authenticated state.
    } catch (error) {
      console.log(error.message);
      // Handle authentication errors (e.g., incorrect credentials, account not found, etc.)
    }
  };

  return (
    <Container component="main">
      <div className="login-container">
        <div className="iconImage">

      <img
        src="https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_400x400.jpg"
        alt="Twitter Icon"
        className='login_twittericon'
        />
        </div>

        <div>

        <Typography variant="h5">Sign In</Typography>
        <form className="login-form" onSubmit={handleLogin}>
          <TextField
         
         variant="outlined"
         margin="normal"
         required
         fullWidth
         id="email"
         label="Email Address"
         name="email"
         autoComplete="email"
         autoFocus
         value={email}
         onChange={(e) => setEmail(e.target.value)}
         />
           <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="login-submit-button"
            >
            Sign In
          </Button>
        </form>
        <Typography variant="body2" style={{ marginTop: "16px" }}>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </Typography>
            </div>
      </div>
    </Container>
  );
}

export default Login;
