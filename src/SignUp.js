import React, { useState } from "react";
import { TextField, Button, Typography, Container } from "@mui/material";
import { auth } from "./firebase";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [signUpError, setSignUpError] = useState(null);

  const navigate = useNavigate(); // Get the navigate function from the hook

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      await auth.createUserWithEmailAndPassword(email, password);
      // After successful sign-up, set the user's display name
      await auth.currentUser.updateProfile({
        displayName: displayName,
      });
      // Clear any previous sign-up errors
      setSignUpError(null);
      // Redirect the user to the home page after successful signup
      navigate("/");
    } catch (error) {
      console.log(error.code, error.message);
      setSignUpError("Error creating an account");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <div style={{ marginTop: "8px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography variant="h5">Sign Up</Typography>
        <form style={{ width: "100%", marginTop: "8px" }} onSubmit={handleSignUp}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="displayName"
            label="Display Name"
            name="displayName"
            autoComplete="displayName"
            autoFocus
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
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
            autoComplete="new-password"
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
            Sign Up
          </Button>
          {signUpError && <Typography color="error">{signUpError}</Typography>}
        </form>
      </div>
      <Typography variant="body2" style={{ marginTop: "16px" }}>
        Have an account? <Link to="/login">Login</Link>
      </Typography>
    </Container>
  );
}

export default SignUp;
