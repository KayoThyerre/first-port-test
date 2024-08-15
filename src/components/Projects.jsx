import React, { useState } from "react";

const Projects = () => {

    const [activeFilter, setActiveFilter] = useState("all");

    const projects = [
        { id: 1, img: 'https://placehold.co/600x400/000000/FFFFFF/png', tech: "react" },
        { id: 2, img: 'https://placehold.co/600x400/000000/FFFFFF/png', tech: "" },
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
                            <li key={project.id} className={project.tech}>
                                <img src={project.img} alt={project.tech} />
                            </li>
                        ))}
                </ul>
                <a href="#" target="_blank">Saiba mais</a>
            </div>
        </section>
    );
};

export default Projects;