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
                    <a href="https://www.facebook.com/kayo.alarcon.9" target="_blank">
                        <i><FontAwesomeIcon icon={faFacebook} /></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/kayoalarcon/" target="_blank">
                        <i><FontAwesomeIcon icon={faInstagram} /></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/kayothyerre/" target="_blank">
                        <i><FontAwesomeIcon icon={faLinkedin} /></i>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/KayoThyerre" target="_blank">
                        <i><FontAwesomeIcon icon={faGithub} /></i>
                    </a>
                </li>
            </ul>
            <p className="footer-comercial">Todos os direitos reservados Kayo Thyerre &copy; - 2024</p>
        </nav>
    )
}

export default Contact;