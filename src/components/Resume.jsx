import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup, faCircle, faBookOpenReader } from "@fortawesome/free-solid-svg-icons";

const MyResume = () => {
    const [currentExperienceIndex, setCurrentExperienceIndex] = useState(0);
    const [currentEducationIndex, setCurrentEducationIndex] = useState(0);

    const experienceData = [
        {
            period: "2021-2024",
            title: "Guarda Civil Municipal - 3ª Classe",
            description: "Operações policiais municipais, gerenciamento de equipes, trabalho interno administrativo com ferramentas computacionais, gerenciamento de escala, posicionamento tático de equipes em operações policiais, apoio a demais orgãos municiapais e estaduais."
        },
        {
            period: "2020-2021",
            title: "W1 Consultoria Financeira - Líder de equipe de Consultoria",
            description: "Trabalho voltado a educação financeira do Brasileiro, focada em ensinar técnicas financeiras, organização, melhores maneiras de realizar aquisições patrimoniais, entre outros. Gerenciamento de equipe, incluindo treinamento da equipe em assuntos relacionados a parte financeira, reuniões de alinhamento e gerenciamento de agendas de clientes."
        },
        {
            period: "2019 - 2020",
            title: "Star Word - Técnico de informática",
            description: "Manutenção de equipamentos eletrônicos (computadores, celulares, fontes, placas), realizando intalação e configuração de redes e impressoras. Conserto de placas e trocas de componentes eletrônicos."
        }
    ];

    const educationData = [
        {
            period: "2016-2021",
            title: "Engenharia Mecânica, Bacharelado - UNIFEG",
            description: "Engenharia Mecânica é a área da engenharia que projeta, desenvolve e mantém sistemas e dispositivos mecânicos, aplicando princípios da física e matemática para resolver problemas técnicos e melhorar processos industriais, como máquinas, motores e estruturas."
        },
        {
            period: "2023-2025 (Esperado)",
            title: "Sistemas para internet - UNICESUMAR",
            description: "O curso de graduação em Sistemas para Internet da EAD UniCesumar capacita profissionais a projetar e desenvolver soluções digitais para a web. A formação inclui a criação de sites, interfaces, plataformas e aplicativos, abrangendo todas as etapas necessárias para construir e conectar ferramentas digitais. Ao se formar como Tecnólogo em Sistemas para Internet, você estará preparado para enfrentar os desafios do desenvolvimento web e contribuir para a construção das estruturas que facilitam a interação online e a entrega de resultados eficazes."
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
