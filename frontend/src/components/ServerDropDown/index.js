import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import AddIcon from "@material-ui/icons/Add";
import { useState } from "react";

import './ServerDropDown.css';
import CreateServerFormModal from "../CreateServerForm";


const ServerDropDown = ({servers}) => {
    const serversArray = Object.values(servers);
    const [defaultServer, setDefaultServer] = useState(serversArray.splice(0,1)[0]);
    const [showServers, setShowServers] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleShowServers = () => {
        setShowServers(!showServers)
        setIsExpanded(!isExpanded)
    }

    const addServerHandler = () => {
        
    }
    
    const expandIcon = isExpanded ? (
        <ExpandLessIcon onClick={handleShowServers} /> 
    ) : (
        <ExpandMoreIcon onClick={handleShowServers} /> 
    )

    return (
        <div className="servers-container">
            <h3>
                {defaultServer.name}
                {expandIcon}
            </h3>
            {showServers && (
                <ul className="servers-list" style={{"listStyleType": "none"}}>
                    <li style={{"display": "flex", "alignItems": "center"}}>Add a new server <CreateServerFormModal /> </li>
                    {
                    serversArray.map(server => (
                        <li key={server.id}>{server.name}</li>
                    ))
                    }
                </ul>
            )}
        </div>
    )
}

export default ServerDropDown;