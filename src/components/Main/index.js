import React from 'react';
import '../styles/Main.css';
import me from '../../assets/images/me.jpg';

function Main() {
    return (
        <section className='main-section'>
            <div className="container">
                <div className="texts">
                    <h1>Hello My Name is</h1>
                    <h1 className='h1-big'> Andres Malagon</h1>
                    <p>I'm a full stack web developer</p>
                    <button className='text-button'>My Work</button>
                </div>
                <div className="image">
                    <img src={me} alt="" />
                </div>

            </div>
        </section>
    )
}

export default Main;