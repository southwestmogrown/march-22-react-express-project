import EditIcon from '@material-ui/icons/Edit';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import * as serverActions from '../../store/server';
import UpdateServerFormModal from '../UpdateServerFormModal';

import './ServerCard.css'

const ServerCard = ({ server, setDefaultServer }) => {

    const history = useHistory()
    
    const dispatch = useDispatch();

    const handleClick = () => {
        setDefaultServer(server);
        console.log(server);
        history.push(`/servers/${server.id}`);
    }

    return (
        <div className='server-card'>
            <div className='server-name' onClick={handleClick}>
                <h3>{server.name}</h3>
            </div>
            <div className='server-icons'>
                <div className='icon'>
                    <UpdateServerFormModal server={server}/>
                </div>
                <div className='icon'>
                    <RemoveCircleIcon style={{fontSize: '12px'}} onClick={() => dispatch(serverActions.deleteServer(server.id))} />
                </div>
            </div>
        </div>
    )
} 

export default ServerCard;