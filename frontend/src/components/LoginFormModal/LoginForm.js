import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';

import './LoginForm.css';

function LoginFormPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const sessionServers = Object.values(useSelector(state => state.servers));
  console.log(sessionServers)
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/" />
  );

  const handleSubmit = async(e) => {
    e.preventDefault();
    setErrors([]);
    const { user } = await dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
    });

    history.push(`/users/${user.id}`)
  }

  return (
    <div className='log-in-form-container'>
        <form className='log-in-form' onSubmit={handleSubmit}>
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <div className='form-field'>
                <label htmlFor='credential-input'>
                    Username or Email:
                </label>
                <input
                    className='credential-input'
                    type="text"
                    value={credential}
                    onChange={(e) => setCredential(e.target.value)}
                    required
                />
            </div>
            <div className='form-field'>
                <label htmlFor='password'>
                    Password: 
                </label>
                <input
                    className='password'
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <div className='form-field'>
                <button className='login-button' type="submit">Log In</button>
            </div>
        </form>
    </div>
  );
}

export default LoginFormPage;