import React from "react";

import { FaLocationDot } from "react-icons/fa6";
import "./Home.css";


import SocialMedia from "./SocialMedia";




function Home() {




    return (
        <section className="hero">
            <div className="hero-container">


                <div className="hero-left">
                    <div className="doteline">
                        <div className="profile-ring">
                            <img src="https://cdn.suitsupply.com/image/upload/ar_10:21,b_rgb:efefef,bo_200px_solid_rgb:efefef,c_pad,g_north,w_2600/b_rgb:efefef,c_lfill,g_north,dpr_1,w_768,h_922,f_auto,q_auto,fl_progressive/products/Suits/default/Winter/P7117_1.jpg" alt="Kunj Desai" />
                        </div>
                    </div>
                </div>


                <div className="hero-right">
                    <h1>
                        Hi, I'm <span>NaveenKumar</span>
                    </h1>

                    <p className="subtitle">
                        Fullstack Devoloper  |   React |   Problem Solving
                    </p>


                    <div className="tags">
                        <span>AI Enthusiast</span>
                        <span>Web Devoloper</span>
                        <span>Deep Learning Expert</span>
                        <span>Computer Vision Researcher</span>
                        <span>Developer</span>
                    </div>


                    <div className="info">
                        <div className="info-card">
                            <h4>
                                <FaLocationDot /> Location
                            </h4>
                            <p>Tiruchirappalli, Tamilnadu , India</p>
                        </div>

                        <div className="info-card">
                            <h4>💼 Expertise</h4>
                            <p>Devoloper, Problem Solving</p>
                        </div>

                        <div className="info-card">
                            <h4>📧 Contact</h4>
                            <p>naveenkumar302623@gmail.com</p>
                        </div>
                    </div>

                    <div className="social">
                        <p>Connect with me :</p>

                        <SocialMedia />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Home;
