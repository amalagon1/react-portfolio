import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css'
import { MenuOutlined } from '@material-ui/icons'

function Nav() {
    return (
        <div className='header'>
            <nav>
                <div className="logo">
                    <h1>A.M.</h1>
                </div>
                <ul className='ul-items'>
                    <li>
                        <Link to='#'>Home</Link>
                    </li>
                    <li>
                        <Link to='#'>About Me</Link>
                    </li>
                    <li>
                        <Link to='#'>Projects</Link>
                    </li>
                    <li>
                        <Link to='#'>Testimonials</Link>
                    </li>
                    <li>
                        <Link to='#'>Get in Contact</Link>
                    </li>
                    <div className="hamburger-menu">
                        <MenuOutlined className='menu' />
                    </div>
                </ul>
            </nav>
        </div>

    );
}

export default Nav;