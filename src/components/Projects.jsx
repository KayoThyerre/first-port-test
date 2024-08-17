import React, { useState } from "react";
import FirstFormGif from '../assets/1-form-gif.gif';
import FirstFormImg from '../assets/1-form-ss.png';


const Projects = () => {
    const [activeFilter, setActiveFilter] = useState("all");
    const [hoveredProjectId, setHoveredProjectId] = useState(null);

    const projects = [
        { id: 1, img: 'https://placehold.co/600x400/000000/FFFFFF/png', tech: "react" },
        { id: 2, img: FirstFormImg, gif: FirstFormGif, tech: "" }, // Adicionei uma imagem e um GIF
        { id: 3, img: 'https://placehold.co/600x400/000000/FFFFFF/png', tech: "" },
        { id: 4, img: 'https://placehold.co/600x400/000000/FFFFFF/png', tech: "" },
        { id: 5, img: 'https://placehold.co/600x400/000000/FFFFFF/png', tech: "react" },
        { id: 6, img: 'https://placehold.co/600x400/000000/FFFFFF/png', tech: "" },
        { id: 7, img: 'https://placehold.co/600x400/000000/FFFFFF/png', tech: "react" },
        { id: 8, img: 'https://placehold.co/600x400/000000/FFFFFF/png', tech: "" }
    ];

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
    };

    const handleMouseEnter = (id) => {
        setHoveredProjectId(id);
    };

    const handleMouseLeave = () => {
        setHoveredProjectId(null);
    };

    return (
        <section className="projects" id="portifolio">
            <div className="about-title">
                <h1>Meu portifolio</h1>
            </div>
            <div className="projects-models">
                <ul aria-label="Navegação entre os projetos de Kayo">
                    <li className={activeFilter === "all" ? "active" : ""} onClick={() => handleFilterClick("all")}>All</li>
                    <li className={activeFilter === "react" ? "active" : ""} onClick={() => handleFilterClick("react")}>React</li>
                    <li className={activeFilter === "python" ? "active" : ""} onClick={() => handleFilterClick("python")}>Python</li>
                </ul>
            </div>
            <div className="projects-box">
                <ul>
                    {projects
                        .filter(project => activeFilter === "all" || project.tech === activeFilter)
                        .map(project => (
                            <li 
                                key={project.id} 
                                className={project.tech}
                                onMouseEnter={() => handleMouseEnter(project.id)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <img 
                                    src={hoveredProjectId === project.id && project.gif ? project.gif : project.img} 
                                    alt={project.tech} 
                                />
                            </li>
                        ))}
                </ul>
                <a href="#" target="_blank">Saiba mais</a>
            </div>
        </section>
    );
};

export default Projects;