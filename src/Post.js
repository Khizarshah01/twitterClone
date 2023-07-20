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

          <Avatar src='https://media.comicbook.com/2020/12/naruto-1249229.jpeg?auto=webp'></Avatar>
        </div>
        <div className='post__body'>
          <div className='post__header'>
            <div className='post__headerText'>
              <h3>
                khizar shah{" "}
                <span>
                <VerifiedUser className="post__badge"></VerifiedUser>
             </span>
              </h3>
            </div>
            <div className='post__description'>
              <p>lore fewere  wr w wer e rw r</p>
            </div>
          </div>
          <img src='https://wallpapers-clan.com/wp-content/uploads/2023/01/naruto-gif-pfp-1.gif' alt='hory'/>
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