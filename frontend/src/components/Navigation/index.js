import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import SignupFormModal from '../SignupFormModal';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
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