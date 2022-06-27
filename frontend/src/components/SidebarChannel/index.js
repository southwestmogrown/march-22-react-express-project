import React from 'react';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import "./SidebarChannel.css";

function SidebarChannel({ id, channelName }) {
  return (
    <div className="sidebarChannel">
        <h4>
          <div>
            <span className='sidebarChannel__hash'>#</span>
            {channelName}
          </div>
          <div style={{"padding": "15px"}}>
            <RemoveCircleIcon style={{"fontSize": "15px"}}/>   
          </div>
        </h4>
    </div>
  )
}

export default SidebarChannel;