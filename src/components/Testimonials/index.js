import React from 'react';
import '../styles/Testimonials.css'
import test3 from '../../assets/images/test3.jpg';
import test2 from '../../assets/images/test2.jpg';
import test1 from '../../assets/images/test1.jpg';



function Testimonials() {
    return (
        <section className='test'>
            <h1>Testimonials</h1>

            <div className="card-container">
                <div className="card">
                    <img src={test3} alt="test3" />
                    <p>John</p>
                    <h5>Amazing web developer!</h5>
                </div>
            </div>
            <div className="card-container">
                <div className="card">
                    <img src={test2} alt="test3" />
                    <p>John</p>
                    <h5>Amazing web developer!</h5>
                </div>
            </div>
            <div className="card-container">
                <div className="card">
                    <img src={test1} alt="test3" />
                    <p>John</p>
                    <h5>Amazing web developer!</h5>
                </div>
            </div>

        </section >
    )
}


export default Testimonials