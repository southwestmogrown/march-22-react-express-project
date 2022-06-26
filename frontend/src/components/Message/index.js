import { Avatar } from '@material-ui/core';
import React from 'react';
import './Message.css';

function Message() {
  return (
    <div className="message">
        <Avatar />
        <div className="message__info">
            <h4>
                Shane
                <span className="message__timeStamp">Timestamp</span>
            </h4>
            <p>Message</p>
        </div>
    </div>
  )
}

export default Message;