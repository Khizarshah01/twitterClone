import React, { useEffect, useState } from 'react';
import "./Feed.css";
import TweetBox from './TweetBox';
import Post from './Post';
import db from './firebase';
import { useTransition, animated } from 'react-spring';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
    );

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  const transitions = useTransition(posts, {
    key: (post) => post.id,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      {transitions((style, post) => (
        <animated.div style={style}>
          <Post
            key={post.id} // Use the document ID as the unique key
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        </animated.div>
      ))}
    </div>
  );
}

export default Feed;
