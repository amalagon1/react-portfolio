import React from 'react';
import { ArrowBack } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import '../styles/Contact.css';

function Contact() {
    return (
        <div className='contact'>
            <div className='arrow-home'>
                <Link to='/'><ArrowBack className='arrow' /></Link>
            </div>

            <form>
                <label>Your Name</label>
                <input type="text" placeholder='Enter your name' />
                <label>Your email</label>
                <input type="text" placeholder='Enter your email' />
                <label>Your Name</label>
                <label>Message</label>
                <textarea cols="50" rows="7" placeholder='e.g Hello'></textarea>

                <button>Send</button>
            </form>

        </div>
    )
}


export default Contact;