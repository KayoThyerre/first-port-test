import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";


const Contact = () => {
    return (
        <nav aria-label="contato de kayo" className="contact" id="contact">
            <div className="about-title">
                <h1>Contato</h1>
            </div>
            <ul className="social-media">
                <li>
                    <a href="#" target="_blank">
                        <i><FontAwesomeIcon icon={faFacebook} /></i>
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank">
                        <i><FontAwesomeIcon icon={faInstagram} /></i>
                    </a>
                </li>
                <li>
                    <i><FontAwesomeIcon icon={faLinkedin} />
                        <a href="#" target="_blank"></a>
                    </i>
                </li>
                <li>
                    <i><FontAwesomeIcon icon={faGithub} />
                        <a href="#" target="_blank"></a>
                    </i>
                </li>
            </ul>
            <p className="footer-comercial">Todos os direitos reservados Kayo Thyerre &copy; - 2024</p>
        </nav>
    )
}

export default Contact;