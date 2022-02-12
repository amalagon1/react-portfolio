import React from 'react';
import '../styles/About.css';
import banner from '../../assets/images/banner.jpg';

function About() {
    return (
        <section className='about-section'>
            <h1 className='about'>About Me</h1>

            <div className='container-2'>
                <div className='image-cont'>
                    <img src={banner} alt="banner" />
                </div>
                <div className='about-details'>
                    <p>Full-stack developer</p>
                    <p>Web-design</p>
                    <p>React js developer</p>
                    <p>MERN stack developer</p>
                    <p>Strong work ethic and communication</p>
                </div>

            </div>
        </section>
    );

}

export default About;