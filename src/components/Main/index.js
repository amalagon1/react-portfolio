import React from 'react';
import '../styles/Main.css';
import me from '../../assets/images/me.jpg';


function Main() {
    return (
        <section className='main'>
            <div className="container">
                <div className="texts">
                    <h1 className='h1-big'> Andres Malagon</h1>
                </div>
                <div className="image">
                    <img src={me} alt="" />
                </div>

            </div>
        </section>
    )
}

export default Main;