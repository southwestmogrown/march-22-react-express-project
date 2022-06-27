import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { useEffect, useState } from "react";

import './ServerDropDown.css';
import CreateServerFormModal from "../CreateServerForm";
import ServerCard from "../ServerCard";
import { useDispatch } from "react-redux";
import * as channelActions from '../../store/channel';


const ServerDropDown = ({servers}) => {
    const dispatch = useDispatch();
    const serversArray = Object.values(servers);
    const [defaultServer, setDefaultServer] = useState(serversArray[0]);
    const [showServers, setShowServers] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleShowServers = () => {
        setShowServers(!showServers)
        setIsExpanded(!isExpanded)
    }

    useEffect(() => {
        dispatch(channelActions.loadServerChannels(defaultServer.id))
    }, [dispatch, defaultServer])

    
    
    const expandIcon = isExpanded ? (
        <ExpandLessIcon onClick={handleShowServers} /> 
    ) : (
        <ExpandMoreIcon onClick={handleShowServers} /> 
    )

    return (
        <div className="servers-container">
            <h3 className="server-name" >
                {defaultServer.name}
                {expandIcon}
            </h3>
            {showServers && (
                <ul className="servers-list" style={{"listStyleType": "none"}}>
                    <li style={{"display": "flex", "alignItems": "center"}}>Add a new server <CreateServerFormModal /> </li>
                    {
                    serversArray.map(server => (
                        <li key={server.id}><ServerCard server={server} setDefaultServer={setDefaultServer} /></li>
                    ))
                    }
                </ul>
            )}
        </div>
    )
}

export default ServerDropDown;