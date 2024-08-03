import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup, faCircle, faBookOpenReader } from "@fortawesome/free-solid-svg-icons";

const MyResume = () => (
    <section aria-label="resumo profissional do kayo" className="my-resume" id="resume">
        <div className="about-title">
            <h1>Resumo Profissional</h1>
        </div>
        <div className="generic-resume">
            <h2 className="Experiencia"><i><FontAwesomeIcon icon={faPeopleGroup} /></i>Experiencia</h2>
            <div className="experience-content">
                <div>
                    <span>2022-2023</span>
                    <h3>Título exemplo - cargo exemplo</h3>
                    <p>descrição de exemplo sobre o trabalho</p>
                </div>
                <div>
                    <span>2022-2023</span>
                    <h3>Tchutchara - tu tu tu</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores libero recus</p>
                </div>
                <div>
                    <span>2022-2023</span>
                    <h3>Tchutchara - tu tu tu</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores libero recus</p>
                </div>
                <ul>
                    <li><i><FontAwesomeIcon icon={faCircle} /></i></li>
                    <li><i><FontAwesomeIcon icon={faCircle} /></i></li>
                    <li><i><FontAwesomeIcon icon={faCircle} /></i></li>
                </ul>                
            </div>
            <h2 className="Formação"><i><FontAwesomeIcon icon={faBookOpenReader} /></i>Educação</h2>
        </div>
    </section>
)

export default MyResume;