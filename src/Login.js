import React, { useState } from "react";
import { TextField, Button, Typography, Container } from "@mui/material";
import { auth } from "./firebase";
import { Navigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      // User is logged in, you can now redirect to the main app.
      setLoginError(null); // Clear any previous login errors
      // Use Navigate to programmatically navigate to the main app page
      return <Navigate to="/" />;
    } catch (error) {
      console.log(error.code, error.message);
      setLoginError("Invalid email or password");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <div style={{ marginTop: "8px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography variant="h5">Sign In</Typography>
        <form style={{ width: "100%", marginTop: "8px" }} onSubmit={handleLogin}>
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
            style={{ marginTop: "16px" }}
          >
            Sign In
          </Button>
          {loginError && <Typography color="error">{loginError}</Typography>}
        </form>
      </div>
    </Container>
  );
}

export default Login;
