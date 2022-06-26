import React from 'react';
import './Chat.css';
import ChatHeader from '../ChatHeader';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import GifIcon from "@material-ui/icons/Gif";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import Message from '../Message';

function Chat() {
  return (
    <div className='chat'>
        <ChatHeader />
        <div className="chat__messages">
            <Message />
        </div>
        <div className="chat__input">
            <AddCircleIcon fontSize="large" />
            <form>
                <textarea type="text" placeholder='Message #TESTCHANNEL' />
                <button type='submit' className='chat__inputButton'>Send Message</button>
            </form>
            <div className="chat__inputIcons">
                <CardGiftcardIcon fontSize="large" className='chat-icon' />
                <GifIcon fontSize="large" className='chat-icon'/>
                <EmojiEmotionsIcon fontSize="large" className='chat-icon'/>
            </div>
        </div>
    </div>
  )
}

export default Chat;