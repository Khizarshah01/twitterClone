import React from 'react'
import './TweetBox.css'
import { Avatar, Button } from '@mui/material'
function TweetBox() {
  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox__input'>
                <Avatar src='https://media.comicbook.com/2020/12/naruto-1249229.jpeg?auto=webp'></Avatar>
             <input placeholder="what's happening"></input>
            </div>
            <input className='tweetBox__imginput' placeholder='Enter image url' type='text'></input>
            <Button className='tweetBox__button'>Tweet</Button>
        </form>

    </div>
  )
}

export default TweetBox