import React from 'react'
import './SocialMedia.css'
import {
    FaGithub,
    FaLinkedinIn,
    FaEnvelope,
    FaWhatsapp,
    FaInstagram,
    FaFacebookF
} from 'react-icons/fa';
import { Link } from 'react-router-dom'
const SocialMedia = () => {
    const iconSize = 24;
    const phoneNumber = "919344279898";
    const message = encodeURIComponent("Hello Naveen, I would like to connect with you!");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    const instagramUrl = "https://www.instagram.com/iam_naveen_bro/";

    const email = "naveenkumar302623@gmail.com";
    const subject = encodeURIComponent("Contact from Portfolio");
    const body = encodeURIComponent("Hello Naveen,\n\nI would like to connect with you.");
    const mailUrl = `mailto:${email}?subject=${subject}&body=${body}`;

    return (
        <>
            <div className="icons">
                <Link
                    to="https://github.com/Naveenkumar9898"
                    target="_blank"
                    aria-label="GitHub" className="social-icon"
                >
                    <FaGithub size={iconSize} />
                </Link>

                {/* <a href="" aria-label="LinkedIn" className="social-icon">

                            </a> */}
                <Link
                    to="https://www.linkedin.com/in/naveenkumar-r-89a04238b"
                    target="_blank"
                    aria-label="GitHub" className="social-icon"
                >
                    <FaLinkedinIn size={iconSize} />
                </Link>


                {/* <a href="" aria-label="Email" className="social-icon">
                                /> */}

                {/* </a> */}
                <Link
                    to={mailUrl}

                    aria-label="Email" className="social-icon"
                >
                    <FaEnvelope size={iconSize} />
                </Link>

                {/* <a href="" aria-label="WhatsApp" className="social-icon">
                                
                            </a> */}
                <Link
                    to={whatsappUrl}
                    target="_blank"
                    aria-label="WhatsApp" className="social-icon"
                >
                    <FaWhatsapp size={iconSize} />
                </Link>

                {/* <a href="" aria-label="Instagram" className="social-icon">

                            </a> */}
                <Link
                    to={instagramUrl}
                    target="_blank"
                    aria-label="Instagram" className="social-icon"
                >
                    <FaInstagram size={iconSize} />
                </Link>

                {/* <a href="" aria-label="Facebook" className="social-icon">
                                <FaFacebookF size={iconSize} /> 
                                  </a> */}



            </div>
        </>
    )
}

export default SocialMedia
