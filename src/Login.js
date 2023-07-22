import React, { useState } from "react";
import { TextField, Button, Typography, Container } from "@mui/material";
import { auth } from "./firebase";

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
        </form>
      </div>
    </Container>
  );
}

export default Login;
