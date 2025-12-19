import React from 'react'
import './Skill.css'
import html from '../images/html2.png';
import css from '../images/css4.png'
import js from '../images/js.png'
import bootstrap from '../images/bootstrap.png'
import jquery from '../images/jquery2.png'
import react from '../images/React1.png'
import mysql from '../images/mysql.png'
import mongodb from '../images/mongodb.png'
import nodejs from '../images/nodejs.png'
import express from '../images/express.png'

const Skill = () => {
    return (
        <>
            <div className="container">

                <div className="skill  html">
                    <img src={html} alt="" />

                </div>


                <div className="skill css">
                    <img src={css} alt="" />

                </div>

                <div className="skill js">
                    <img src={js} alt="" />

                </div>

                <div className="skill bootstrap">
                    <img src={bootstrap} alt="" />

                </div>

                <div className="skill jquery">
                    <img src={jquery} alt="" />

                </div>

                <div className="skill react">
                    <img src={react} alt="" />

                </div>

                <div className="skill mysql">
                    <img src={mysql} alt="" />

                </div>

                <div className="skill mongodb">
                    <img src={mongodb} alt="" />

                </div>
                <div className="skill nodejs">
                    <img src={nodejs} alt="" />

                </div>

                <div className="skill  expresss ">
                    <img src={express} alt="" />

                </div>

            </div>

        </>
    )
}

export default Skill
