import React, { useState } from "react";
import { Avatar, Button, IconButton } from "@mui/material";
import PermMediaIcon from '@mui/icons-material/PermMedia';
import db, { auth, storage } from "./firebase"; // Import Firebase storage
import "./style/TweetBox.css";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState(null); // Store the selected image file

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setTweetImage(e.target.files[0]);
    }
  };

  const sendTweet = (e) => {
    e.preventDefault();

    const user = auth.currentUser;

    if (user && tweetImage) {
      const storageRef = storage.ref(); // Reference to Firebase Storage
      const imageRef = storageRef.child(`images/${tweetImage.name}`); // Create a reference for the image file

      // Upload the image to Firebase Storage
      imageRef.put(tweetImage).then(() => {
        // Get the download URL for the uploaded image
        imageRef.getDownloadURL().then((url) => {
          // Add the post data to Firestore with the image URL
          db.collection("posts").add({
            displayName: user.displayName,
            username: user.email.split("@")[0],
            verified: false,
            text: tweetMessage,
            image: url, // Store the image URL
            avatar: user.photoURL,
          });

          setTweetMessage("");
          setTweetImage(null);
        });
      });
    } else if (user) {
      // If there's no image, just post the message
      db.collection("posts").add({
        displayName: user.displayName,
        username: user.email.split("@")[0],
        verified: false,
        text: tweetMessage,
        avatar: user.photoURL,
      });

      setTweetMessage("");
    }
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src={auth.currentUser.photoURL} />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>

        {/* Custom File Upload Button */}
        <div id="sectionTweet">

        <input
          accept="image/*"
          style={{ display: "none" }}
          id="icon-button-file"
          type="file"
          onChange={handleImageChange}
          />
        <label htmlFor="icon-button-file">
          <IconButton color="primary" aria-label="upload picture" component="span">
            <PermMediaIcon />
          </IconButton>
        </label>

        <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">
          Post
        </Button>
          </div>
      </form>
    </div>
  );
}

export default TweetBox;
