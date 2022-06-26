import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as serverActions from '../../store/server';

const CreateServerForm = ({ setShowModal }) => {

    const dispatch = useDispatch();

    const user = useSelector(state => state.session.user);

    const [serverName, setServerName] = useState('');
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            ownerId: user.id,
            name: serverName
        }

        const server = await dispatch(serverActions.createServer(payload)).catch(
            errors => setErrors(errors));
        
        setShowModal(false)
    }


    return (
        <div className='create-server-form-container'>
            <form className='create-server-form' onSubmit={handleSubmit}>
                {/* <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul> */}
                <div className='form-field'>
                    <label htmlFor='server-name-input'>
                        Server Name:
                    </label>
                    <input
                        className='server-name-input'
                        type="text"
                        value={serverName}
                        onChange={(e) => setServerName(e.target.value)}
                        required
                    />
                </div>
                <div className='form-field'>
                    <button className='create-server-button' type="submit">Create Server</button>
                </div>
            </form>
        </div>
    )
}

export default CreateServerForm;