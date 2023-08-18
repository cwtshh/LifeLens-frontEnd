import React from 'react';
import './Navbar.css';

// components
import { NavLink, Link } from 'react-router-dom';
import { BsSearch, BsHouseDoorFill, BsFillPersonFill, BsFillCameraFill } from 'react-icons/bs';

const Navbar = () => {
  return (
    <nav id='nav'>
        <Link to="/">LifeLens</Link>
        <form className='search-form'>
            <BsSearch /> 
            <input type='text' placeholder='Pesquisar...' />
        </form>
        <ul id='nav-links'>

            <li>
                <NavLink to='/'>
                    <BsHouseDoorFill />
                </NavLink>
            </li>

            <li>
                <NavLink to='/login'>
                    Logar
                </NavLink>
            </li>

            <li>
                <NavLink to='/register'>
                    Registrar
                </NavLink>
            </li>


        </ul>
    </nav>
  )
}

export default Navbar