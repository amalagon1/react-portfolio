import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css'
import { MenuOutlined } from '@material-ui/icons'
import { Data } from '../Data';

function Nav() {
    const [open, setOpen] = useState(false)

    const showMenu = () => {
        setOpen(!open)
    }
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
                        <MenuOutlined className='menu' onClick={showMenu} />
                    </div>
                </ul>
            </nav>
            <nav className={open ? 'slider active' : 'slider'}>
                <ul className='slider-ul' onClick={showMenu}>
                    {Data.map((item, index) => {
                        return (
                            <li key={index} className={item.className}>
                                <Link to={item.path}>{item.text}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>

    );
}

export default Nav;