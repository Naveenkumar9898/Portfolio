import "./Projects.css";
import Chocomagic from '../images/chocolate-banner.jpg'
import watchworriors from '../images/watchworriors.jpg'
import naturehoney from '../images/naturehoney.jpg'
import tvk from '../images/tvk.avif'
import { Link } from "react-router-dom";


function Projects() {
    const tvkid = "https://tvk-id-card.vercel.app/"
    return (
        <section className="projects-section">
            <div className="projects-wrapper">


                <div className="projects-header">
                    <h2>🚀 Projects</h2>
                    <p>
                        A collection of my major works — blending research, AI innovation.
                    </p>
                </div>


                <div className="projects-grid">

                    {/* CARD 1 */}
                    <div className="project-card">
                        <img
                            src={Chocomagic}
                        />
                        <h3>Choco Magic</h3>
                        <p>
                            The "<b>Choco Magic</b>" typically refers to crunchy nuts or  marketed as a rich, multi-sensorial indulgence. Various brands, such as Effete and Oblivion, use the "Choco Magic" name for their products.
                        </p>

                        <div className="tech">
                            <span>HTML</span>
                            <span>CSS</span>
                            {/* <span>OpenCV</span>
                            <span>YOLOv8</span> */}
                        </div>

                        <div className="actions">
                            {/* <button className="code">Code</button> */}
                            <Link
                                to="https://naveenkumar9898.github.io/ChocoMagic/"
                                target="_blank"
                                aria-label="GitHub" className="live"
                            > Live
                            </Link>
                        </div>
                    </div>

                    {/* CARD 2 */}
                    <div className="project-card">
                        <img
                            src={watchworriors}
                        />
                        <h3>Watch Worriors</h3>
                        <p>
                            A watch website's blend luxurious visuals sleek design, high-res images, elegant fonts with rich, keyword-driven text detailing craftsmanship, materials, heritage, and specs movement, water resistance.
                        </p>

                        <div className="tech">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>Java Script</span>

                        </div>

                        <div className="actions">
                            {/* <button className="code">Code</button> */}
                            <Link
                                to="https://naveenkumar9898.github.io/watch-warries/"
                                target="_blank"
                                aria-label="GitHub" className="live"
                            > Live
                            </Link>
                        </div>
                    </div>

                    {/* CARD 3 */}
                    <div className="project-card">
                        <img
                            src={naturehoney}
                            alt="Sign Language"
                        />
                        <h3>Nature Honey</h3>
                        <p>
                            pure, raw, unprocessed honey, often sourced from specific flowers mono-floral like litchi, mustard or diverse regions (multi-floral), emphasizing health benefits antioxidants, energy, natural extraction.
                        </p>

                        <div className="tech">
                            <span>HTML</span>
                            <span>CSS</span>

                        </div>

                        <div className="actions">
                            {/* <button className="code">Code</button> */}
                            <Link
                                to="https://www.linkedin.com/in/naveenkumar-r-89a04238b"
                                target="_blank"
                                aria-label="GitHub" className="live"
                            > Live
                            </Link>
                        </div>
                    </div>

                    {/* CARD 4 */}
                    <div className="project-card">
                        <img
                            src={tvk}
                            alt="Portfolio"
                        />
                        <h3>TVK-Member card</h3>
                        <p>
                            the digital platform for Tamilaga Vettri Kazhagam (TVK) party members, accessible via the My TVK app and the official website (tvk.family), serving as a hub for members
                            actor-politician Vijay's new part
                        </p>

                        <div className="tech">
                            <span>React js</span>

                        </div>

                        <div className="actions">
                            {/* <button className="code">Code</button> */}

                            <Link
                                to="https://tvk-id-card.vercel.app/"
                                target="_blank"
                                aria-label="GitHub" className="live"
                            > Live
                            </Link>


                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Projects;
