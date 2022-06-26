import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import CallIcon from "@material-ui/icons/Call";
import { Avatar } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import HeadsetIcon from "@material-ui/icons/Headset";
import SettingsIcon from "@material-ui/icons/Settings";

import "./SideBar.css";
import SidebarChannel from "../SidebarChannel";
import * as serverActions from '../../store/server';
import ServerDropDown from "../ServerDropDown";

function Sidebar() {

    const dispatch = useDispatch();
    const [foundServers, setFoundServers] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        dispatch(serverActions.loadUserServers(user.id)).then(() => 
            setFoundServers(true)
        )
    }, []);
    
    const user = useSelector(state => state.session.user);
    const servers = useSelector(state => state.servers);
    

    useEffect(() => {
        if (foundServers) setIsLoaded(true);
    }, [foundServers]);



        
    return (
        <>
        {isLoaded && (
            <div className="sidebar">
                <div className="sidebar__top">
                    <ServerDropDown servers={servers} />
                </div>

                <div className="sidebar__channels">
                    <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon />
                        <h4>Text Channels</h4>
                    </div>

                    <AddIcon className="sidebar__addChannel" />
                                </div>
                    <div className="sidebar__channelsList">
                        <SidebarChannel />
                    </div>
                </div>

                <div className="sidebar__voice">
                    <SignalCellularAltIcon
                    className="sidebar__voiceIcon"
                    fontSize="large"
                    />
                    <div className="sidebar__voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                    </div>

                    <div className="sidebar__voiceIcons">
                    <InfoOutlinedIcon />
                    <CallIcon />
                    </div>
                </div>

                <div className="sidebar__profile">
                    <Avatar />
                    <div className="sidebar__profileInfo">
                    <h3>{user.username}</h3>
                    <p>#{user.id}</p>
                    </div>

                    <div className="sidebar__profileIcons">
                    <MicIcon />
                    <HeadsetIcon />
                    <SettingsIcon />
                    </div>
                </div>
            </div>
            )}
        </>
    );
}

export default Sidebar;