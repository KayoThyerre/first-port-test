import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faHtml5, faJsSquare, faCss3Alt, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faFileCode } from "@fortawesome/free-solid-svg-icons"; // Usado para o TypeScript

const Proeficiency = () => {
    return (
        <section className="proeficiencies">
            <div className="about-title">
            <h1>Sobre mim</h1>
            <p>Perfil profissional - Tudo sobre mim</p>
            <div aria-label='seção ilustrativa de botões'>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="my-proeficiencies">
            <ul aria-label="Navegação secundária">
                <li>
                    <i><FontAwesomeIcon icon={faReact} /></i>
                    <h3>React</h3>
                    <p>Descrição do React</p>
                </li>
                <li>
                    <i><FontAwesomeIcon icon={faHtml5} /></i>
                    <h3>HTML</h3>
                    <p>Descrição do HTML</p>
                </li>
                <li>
                    <i><FontAwesomeIcon icon={faJsSquare} /></i>
                    <h3>JavaScript</h3>
                    <p>Descrição do JavaScript</p>
                </li>
                <li>
                    <i><FontAwesomeIcon icon={faFileCode} /></i>
                    <h3>TypeScript</h3>
                    <p>Descrição do TypeScript</p>
                </li>
                <li>
                    <i><FontAwesomeIcon icon={faCss3Alt} /></i>
                    <h3>CSS</h3>
                    <p>Descrição do CSS</p>
                </li>
                <li>
                    <i><FontAwesomeIcon icon={faNodeJs} /></i>
                    <h3>Node.js</h3>
                    <p>Descrição do Node.js</p>
                </li>
            </ul>
          </div>
        </section>
    );
};

export default Proeficiency;
