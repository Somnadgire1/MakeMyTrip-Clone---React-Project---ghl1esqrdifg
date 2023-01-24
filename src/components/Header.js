import React from 'react';
import { Link } from 'react-router-dom';
import AuthDetails from './AuthDetails';

export default function HeaderNav() {
  return (
    <div>
      <div className='bg-orange'>
      <nav className="navbar navbar-light bg-light">
  <div className="container">
    <Link className="navbar-brand" to="">
      <img src="https://logos-download.com/wp-content/uploads/2020/06/MakeMyTrip_Logo.png" alt="logo" width="200" height="60"/>
    </Link>
    <nav>
    <Link className="navbar-brand" to='/flight'>Flights</Link>
    <Link className="navbar-brand" to='/hotel'>Stays</Link>
    <Link className="navbar-brand" to='/train'>Trains</Link>
    <Link className="navbar-brand " to='/login'>Login</Link>
    <Link className='navbar-brand' ><AuthDetails/></Link>
    </nav>
    </div>
    </nav>
    <hr/>
    </div>
    </div>
  )
}
