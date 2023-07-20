import React from 'react'
import "./Post.css"
import { Avatar } from '@mui/material'
import { ChatBubbleOutline, FavoriteBorder, Publish, Repeat, VerifiedUser } from '@mui/icons-material'
function Post({
  displayName,
  username,
  verified,
  text,
  image,
  avatar

}) {
  return (
    <div className='post'>
        <div className='post__avatar'>

          <Avatar src={avatar}></Avatar>
        </div>
        <div className='post__body'>
          <div className='post__header'>
            <div className='post__headerText'>
              <h3>
                {displayName}{" "}
                <span>
               {verified && <VerifiedUser className="post__badge"></VerifiedUser>} @{username}
             </span>
              </h3>
            </div>
            <div className='post__description'>
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt='hory'/>
         <div className='post__footer'>
          <ChatBubbleOutline fontSize='small'/>
          <Repeat fontSize='small' />
          <FavoriteBorder fontSize='small'/>
          <Publish fontSize='small'/>
         </div>
         </div>
    </div>
  )
}

export default Post