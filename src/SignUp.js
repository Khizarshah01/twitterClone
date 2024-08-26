import React, { useState } from "react";
import { TextField, Button, Typography, Container } from "@mui/material";
import { auth, db } from "./firebase";
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
      // Create a new user with email and password
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      // Set the user's display name
      await user.updateProfile({
        displayName: displayName,
      });

      // Create or update user profile in Firestore
      const userRef = db.collection("users").doc(user.uid);
      await userRef.set({
        displayName: displayName,
        avatar: user.photoURL || "", // Set avatar to an empty string if not available
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
    <Container component="main">
      <div className="sign-up-container">
        <div>
      <img
        src="https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_400x400.jpg"
        alt="Twitter Icon"
        className='login_twittericon'
        />
        </div>
        <div>

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
          Have an account? <Link to="/">Login</Link>
        </Typography>
            </div>
      </div>
    </Container>
  );
}

export default SignUp;
