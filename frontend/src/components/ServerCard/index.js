import EditIcon from '@material-ui/icons/Edit';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import { useDispatch } from 'react-redux';

import * as serverActions from '../../store/server';
import UpdateServerFormModal from '../UpdateServerFormModal';

import './ServerCard.css'

const ServerCard = ({ server }) => {
    const dispatch = useDispatch();
    return (
        <div className='server-card'>
            <div className='server-name'>
                <p>{server.name}</p>
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