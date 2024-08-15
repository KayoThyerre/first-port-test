import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup, faCircle, faBookOpenReader } from "@fortawesome/free-solid-svg-icons";

const MyResume = () => {
    const [currentExperienceIndex, setCurrentExperienceIndex] = useState(0);
    const [currentEducationIndex, setCurrentEducationIndex] = useState(0);

    const experienceData = [
        {
            period: "2022-2023",
            title: "Título exemplo - cargo exemplo",
            description: "descrição de exemplo sobre o trabalho"
        },
        {
            period: "2022-2023",
            title: "Título 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores libero recus"
        },
        {
            period: "2022-2023",
            title: "Título 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores libero recus"
        }
    ];

    const educationData = [
        {
            period: "2016-2021",
            title: "Engenharia Mecânica, Bacharelado - UNIFEG",
            description: "Sobre o que é a faculdade."
        },
        {
            period: "2023-2025",
            title: "Sistemas para internet - UNICESUMAR",
            description: "Sobre o que é a faculdade."
        }
    ];

    const handleExperienceClick = (index) => {
        setCurrentExperienceIndex(index);
    };

    const handleEducationClick = (index) => {
        setCurrentEducationIndex(index);
    };

    return (
        <section aria-label="resumo profissional do kayo" className="my-resume" id="resume">
            <div className="about-title">
                <h1>Resumo Profissional</h1>
            </div>
            <div className="generic-resume">
                <h2 className="experience">
                    <i><FontAwesomeIcon icon={faPeopleGroup} /></i>Experiencia
                </h2>
                <div className="experience-content">
                    {experienceData.map((experience, index) => (
                        <div key={index} className={index === currentExperienceIndex ? 'ativo' : ''}>
                            <span>{experience.period}</span>
                            <h3>{experience.title}</h3>
                            <p>{experience.description}</p>
                        </div>
                    ))}
                    <ul>
                        {experienceData.map((_, index) => (
                            <li key={index} className={index === currentExperienceIndex ? 'ativo' : ''} onClick={() => handleExperienceClick(index)}>
                                <i><FontAwesomeIcon icon={faCircle} /></i>
                            </li>
                        ))}
                    </ul>                
                </div>
                <h2 className="education">
                    <i><FontAwesomeIcon icon={faBookOpenReader} /></i>Educação
                </h2>
                <div className="education-content">
                    {educationData.map((education, index) => (
                        <div key={index} className={index === currentEducationIndex ? 'ativo' : ''}>
                            <span>{education.period}</span>
                            <h3>{education.title}</h3>
                            <p>{education.description}</p>
                        </div>
                    ))}
                    <ul>
                        {educationData.map((_, index) => (
                            <li key={index} className={index === currentEducationIndex ? 'ativo' : ''} onClick={() => handleEducationClick(index)}>
                                <i><FontAwesomeIcon icon={faCircle} /></i>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default MyResume;
