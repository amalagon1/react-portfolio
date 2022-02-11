import React from 'react';
import coverImage from "../../assets/images/me.jpg";

function About() {
    return (
        <section className="my-5">
            <h1 id="about">Who am I?</h1>
            <img src={coverImage} style={{ width: "50%" }} alt="cover" />
        </section>
    );

}

export default About;