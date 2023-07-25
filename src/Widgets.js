import React from "react";
import "./style/Widgets.css";
import { Search } from "@mui/icons-material";
import { TwitterShareButton, TwitterTimelineEmbed, TwitterTweetEmbed } from "react-twitter-embed";



function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1682978324375543808"} options={{ theme: 'dark' }} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="elonmusk"
          options={{ height: 400, theme: 'dark' }}
        />

        <TwitterShareButton
          url={"https://github.com/Khizarshah01"}
          options={{ text: "#twitterClone is awesome", via: "KhizarShah3987" }}
        />
      </div>
    </div>
  );
}

export default Widgets;