import React, { useState } from "react";
import "./style/TweetBox.css";

import db from "./firebase";
import { Avatar, Button } from "@mui/material";
import { auth } from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    // Get the currently logged-in user
    const user = auth.currentUser;

    if (user) {
      db.collection("posts").add({
        displayName: user.displayName,
        username: user.email.split("@")[0],
        verified: false,
        text: tweetMessage,
        image: tweetImage,
        avatar: user.photoURL, // Use the user's photoURL as the avatar
      });

      setTweetMessage("");
      setTweetImage("");
    }
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src={auth.currentUser.photoURL} /> {/* Show the user's photoURL as the avatar */}
          <input className="input"
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input 
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
