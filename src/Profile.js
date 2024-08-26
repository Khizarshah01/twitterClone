import React, { useState } from "react";
import { Avatar, Button, IconButton } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import db, { auth, storage } from "./firebase";
import "./style/profile.css";

function Profile() {
  const [avatar, setAvatar] = useState(auth.currentUser.photoURL);
  const [newAvatar, setNewAvatar] = useState(null); // Store the selected new avatar file

  const handleAvatarChange = (e) => {
    if (e.target.files[0]) {
      setNewAvatar(e.target.files[0]);
    }
  };

  const handleProfileUpdate = (e) => {
    e.preventDefault();

    const user = auth.currentUser;

    if (user && newAvatar) {
      const storageRef = storage.ref();
      const avatarRef = storageRef.child(`avatars/${newAvatar.name}`);

      avatarRef.put(newAvatar).then(() => {
        avatarRef.getDownloadURL().then((url) => {
          user.updateProfile({
            photoURL: url,
          }).then(() => {
            setAvatar(url);
            db.collection("users").doc(user.uid).update({
              avatar: url,
            });
            alert("Profile updated successfully!");
          });
        });
      });
    }
  };

  return (
    <div className="profile">
      <h2>Edit Profile</h2>
      <form onSubmit={handleProfileUpdate}>
        <div className="profile__avatar">
          <Avatar src={avatar} alt="User Avatar" sx={{ width: 100, height: 100 }} />
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="icon-button-file"
            type="file"
            onChange={handleAvatarChange}
          />
          <label htmlFor="icon-button-file">
            <IconButton color="primary" aria-label="upload picture" component="span">
              <PhotoCamera />
            </IconButton>
          </label>
        </div>
        <Button type="submit" variant="contained" color="primary" className="profile__saveButton">
          Save Changes
        </Button>
      </form>
    </div>
  );
}

export default Profile;
