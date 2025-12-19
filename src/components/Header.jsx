import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <header className="header">
                <div className="header-container">
                    <div className="logo">
                        <h2>NK</h2>
                        <div className="logo-text">
                            <h4>Naveenkumar</h4>
                            <p>FullstackDeveloper</p>
                        </div>
                    </div>
                </div>
                <div className="nav">
                    <ul>
                        <li><Link to={'/Home'} >Home</Link ></li>
                        <li><Link to={'/projects'} >Project</Link ></li>
                        <li><Link to={'/Skill'} >Skills</Link ></li>
                        <li><Link to={'/Resume'} >Resume</Link ></li>
                        <li><Link to={'/About'} >About</Link ></li>
                        <li><Link to={'/Contact'} >contact</Link ></li>
                    </ul>
                </div>

            </header>
        </>
    )
}

export default Header
