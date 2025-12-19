import "./Resume.css";

function Resume() {
    return (

        <div className="backround">
            <section className="resume-page">
                <div className="tl1 tl"></div>
                <div className="tl2 tl"></div>
                <div className="tl3 tl"></div>
                <div className="tl4 tl"></div>

                <div className=" profile-card">
                    <div className="resume-header">
                        <h2> Resume</h2>
                        <p>A quick glance at my journey.</p>
                    </div>
                    <div className="profile-wrapper">

                        <div className="timeline">

                        </div>

                        <div className="profile-left">
                            <h2 className="name"> NaveenKumar R</h2>

                            <p className="degree">
                                Computer Science and Engineering | Vetri Vinayaga college of Engineering and Technology
                            </p>

                            <div className="info">
                                <span>📍 Trichy, Tamilnadu</span>
                                <span>✉️ naveenkumar302603@gmail.com</span>
                                <span>📞 +91 9344279898</span>
                            </div>
                        </div>


                        <div className="profile-right">
                            <h4>Professional Summary:</h4>
                            <p>
                                Highly motivated Computer Science and Engineering graduate with a strong foundation in programming, data structures, algorithms, and software development. Skilled in developing efficient, scalable, and user-friendly applications using modern technologies. Possesses hands-on experience in web development, database management, and problem-solving.
                            </p>
                        </div>

                    </div>

                    <div className="card">
                        <h4> Education</h4>

                        <div className="edu-item">
                            <strong>
                                B.E Computer Science And Engineering — V.V.C.E.T (2022–2025)
                            </strong>
                            <p>GPA: 9.0</p>
                        </div>

                        <div className="edu-item">
                            <strong>
                                Diplomo — Musiri Institute of Technology (2018-2021)
                            </strong>
                            <p>Percentage: 78%</p>
                        </div>

                        {/* <div className="edu-item">
                            <strong>
                                10th StateBoard — Ambika Niketan School (2020)
                            </strong>
                            <p>Percentage: 85%</p>
                        </div> */}
                    </div>

                    {/* Projects */}
                    <div className="projects">
                        <h4>Projects</h4>
                        <ul className="project-list">
                            <li>Choco magic (E-Commarce)</li>
                            <li>Watch Worriors (E-Commarce)</li>
                            <li>Nature Honey (E-Commarce)</li>
                            <li>Member ID card-TVK (React)</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Resume;
