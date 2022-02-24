import React from 'react';
import { Card } from "react-bootstrap";


function Projects() {

    const applications = [
        {
            name: "Goal-Tracker",
            gitHubLink: "https://github.com/kassidyr/virtual-practice-log",
            deployedLink: "https://glacial-everglades-31515.herokuapp.com/",
            image: "goal-track.png"
        },
        {
            name: "Best-Seller",
            gitHubLink: "https://github.com/MarcosManresa/08-Interactive-Project",
            deployedLink: "https://marcosmanresa.github.io/08-Interactive-Project/",
            image: "app.jpg"
        },
        {
            name: "Horiseon",
            gitHubLink: "https://github.com/amalagon1/code_refactor",
            deployedLink: "https://amalagon1.github.io/code_refactor/",
            image: "horiseon.png"
        },
        {
            name: "React-Portfolio",
            gitHubLink: "https://github.com/amalagon1/react-portfolio",
            // deployedLink: "https://amalagon1.github.io/code_refactor/",
            image: "portfolio.png"
        }

    ];

    return (
        <section className="sectionHeader">
            <title>Project</title>
            <div className="row">
                <h1>Projects</h1>
                {applications.map((app, i) => (
                    <Card key={i} className="col-sm-4 card">
                        <Card>
                            <Card.Img className="projectImage" src={app.image} />
                            <Card.Title>{app.name}</Card.Title>
                            <a href={app.gitHubLink} target="true">
                                <Card.Text>{app.name} Repo</Card.Text>
                            </a>
                            <a href={app.deployedLink} target="true">
                                <Card.Text>{app.name} Deployed</Card.Text>
                            </a>
                        </Card>
                    </Card>
                ))}
            </div>
        </section>
    );



}


export default Projects;