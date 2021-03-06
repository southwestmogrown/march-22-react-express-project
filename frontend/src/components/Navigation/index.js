import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';

import * as sessionActions from '../../store/session'; 
import './Navigation.css';


function Navigation({ isLoaded }){
  const history = useHistory();
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);

  const handleClick = () => {
    dispatch(sessionActions.logout())
    history.push('/')
  }

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <button style={{"marginRight": "15px"}} onClick={handleClick}>Log Out</button>
    );
  } else {
    sessionLinks = (
      <div className='nav-session-links'>
        <div>
          <LoginFormModal className='session-link' />
        </div>
        <div>
          <SignupFormModal className='session-link' />
        </div>
      </div>
    );
  }

  return (
    <div className='nav-container'>
      <div className='home-nav-container'>
        <NavLink className='home-nav' exact to="/">HomeSteadr</NavLink>
      </div>
        {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;