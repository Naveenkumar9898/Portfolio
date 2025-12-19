import React from 'react';

import './About.css'

function About() {
    return (
        <div className="about-page-container">


            <main className="about-content">


                <section className="about-me-text">
                    <h2 className="section-title">About Me</h2>

                    <p>
                        I am Naveenkumar, a passionate <span className="highlight-text">Computer Science and Engineering</span>  with a strong foundation in software development and problem-solving skills. I specialize in building dynamic and responsive web applications using <b> React.js </b>on the frontend and have experience working with backend technologies to create seamless full-stack solutions. I enjoy writing clean, efficient code and continuously learning new tools and frameworks to improve user experience and application performance. My goal is to leverage my technical expertise to contribute to innovative projects and grow as a <b> full-stack developer</b> in a collaborative and fast-paced environment.
                    </p>

                    <p>
                        the frontend and backend technologies such as <b> Node.js, Express, and MongoDB </b>. I have a strong grasp of data structures, algorithms, and software design principles, which enables me to write efficient and maintainable code.
                    </p>

                    <p>
                        My goal is to join a forward-thinking organization where I can apply my technical skills, contribute to impactful projects, and continue <b>growing </b>as a skilled <b>full-stack developer</b>.
                    </p>
                </section>


                <section className="education-section">
                    <h2 className="section-title education-header">Education</h2>


                    <div className="education-card">
                        <div className="card-header">

                            <h3 className="card-title">B.E Computer Science and Engineering</h3>
                        </div>
                        <div className="card-details">
                            <p className="institution">V.V.C.E.T (Anna University) — Thottiyam, Trichy</p>
                            <p>4th Year (Pursuing) | GPA: 8.0</p>
                            <p className="date">2022 - 2025</p>
                        </div>
                    </div>

                    <div className="education-card">
                        <div className="card-header">

                            <h3 className="card-title">Diplomo in Electrical and Electronical Engineering</h3>
                        </div>
                        <div className="card-details">
                            <p className="institution">M.I.T  — musiri,Trichy</p>
                            <p>Percentage: 78%</p>
                            <p className="date">Completed in 2021</p>
                        </div>
                    </div>


                    {/* <div className="education-card">
                        <div className="card-header">

                            <h3 className="card-title">Secondary Education (10th)</h3>
                        </div>
                        <div className="card-details">
                            <p className="institution">R.S.M. Poonawala Experimental School — Surat</p>
                            <p>Percentage: 89%</p>
                            <p className="date">Completed in 2020</p>
                        </div>
                    </div> */}

                </section>

            </main>
        </div>
    );
};

export default About;