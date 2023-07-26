import React, { useState } from "react";
import { TextField, Button, Typography, Container } from "@mui/material";
import { auth } from "./firebase";
import { Link, useNavigate } from "react-router-dom";
import "./style/SignUp.css"; // Import the SignUp.css file

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
      <div className="sign-up-container">
        <Typography variant="h5">Sign Up</Typography>
        <form className="sign-up-form" onSubmit={handleSignUp}>
          <TextField
            className="sign-up-input" // Add a custom CSS class to the Display Name input
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
            InputLabelProps={{ // Add this prop to customize the label
              className: "sign-up-label",
            }}
          />
          <TextField
            className="sign-up-input" // Add a custom CSS class to the Email Address input
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
            InputLabelProps={{ // Add this prop to customize the label
              className: "sign-up-label",
            }}
          />
          <TextField
            className="sign-up-input" // Add a custom CSS class to the Password input
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
            InputLabelProps={{ // Add this prop to customize the label
              className: "sign-up-label",
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="sign-up-submit-button" // Add a custom CSS class to the submit button
          >
            Sign Up
          </Button>
          {signUpError && <Typography className="sign-up-error">{signUpError}</Typography>}
        </form>
        <Typography className="sign-up-link" variant="body2">
          Have an account? <Link to="/login">Login</Link>
        </Typography>
      </div>
    </Container>
  );
}

export default SignUp;
