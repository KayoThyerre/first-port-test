import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faHtml5, faJsSquare, faCss3Alt, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faFileCode } from "@fortawesome/free-solid-svg-icons"; 

const Proeficiency = () => {
    return (
        <section className="proeficiencies">
            <div className="about-title">
                <h1>Habilidades</h1>                
            </div>
            <div className="my-proeficiencies">
                <ul aria-label="Navegação secundária">
                    <li>
                        <i><FontAwesomeIcon icon={faReact} /></i>
                        <h3>React</h3>
                        <p>Biblioteca JavaScript para interfaces interativas.</p>
                    </li>
                    <li>
                        <i><FontAwesomeIcon icon={faHtml5} /></i>
                        <h3>HTML</h3>
                        <p>Markup para estrutura de páginas.</p>
                    </li>
                    <li>
                        <i><FontAwesomeIcon icon={faJsSquare} /></i>
                        <h3>JavaScript</h3>
                        <p>Linguagem para programação web dinâmica.</p>
                    </li>
                    <li>
                        <i><FontAwesomeIcon icon={faFileCode} /></i>
                        <h3>TypeScript</h3>
                        <p>JavaScript com tipagem estática.</p>
                    </li>
                    <li>
                        <i><FontAwesomeIcon icon={faCss3Alt} /></i>
                        <h3>CSS</h3>
                        <p>Estilização de páginas web.</p>
                    </li>
                    <li>
                        <i><FontAwesomeIcon icon={faNodeJs} /></i>
                        <h3>Node.js</h3>
                        <p>JavaScript no servidor.</p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Proeficiency;
