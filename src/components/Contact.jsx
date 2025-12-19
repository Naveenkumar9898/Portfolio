import React from 'react';

import './Contact.css'
import SocialMedia from './SocialMedia';


function Contact() {
    return (
        <div className="contact-page-container">

            <main className="contact-content">
                <h1 className="main-title">
                    Let's Connect & Collaborate
                </h1>

                <p className="subtitle">
                    Whether it's a new project, a collaboration, or just to say hi — I'd love to hear from you!
                </p>
                <div className="social-links">

                    <SocialMedia />
                </div>


                <form className="contact-form">
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email or Phone" required />
                    <input type="text" placeholder="Subject" required />
                    <textarea placeholder="Your Message..." rows="6" required></textarea>

                    <button type="submit" className="send-button">
                        Send Message
                    </button>
                </form>
            </main>
        </div>
    );
};

export default Contact;