import React, { useState } from "react";
import FirstFormGif from '../assets/1-form-gif.gif';
import FirstFormImg from '../assets/1-form-ss.png';
import FirstYtQuest from '../assets/1-Yt-quest.png';
import FirstCssQuest from '../assets/FirstQuestCss.png';
import FirstCssQuestGif from '../assets/FirstQuestCssGif.gif';
import TlouProject from '../assets/tlou-img.png';
import TlouProjectGif from '../assets/tlou-gif.gif';
import AdviceGenerator from '../assets/AdviceGenerator.png';
import AdviceGeneratorGif from '../assets/AdviceGeneratorGif.gif';
import FirstReactProject from '../assets/FirstReactProject.png';
import FirstReactProjectGif from '../assets/FirstReactProjectGif.gif';
import PokemonCardProject from '../assets/PokemonCardProject.png';
import PokemonCardProjectGif from '../assets/PokemonCardProjectGif.gif';
import LandingPagePortProject from '../assets/LandingPagePortProject.png';
import LandingPagePortProjectGif from '../assets/LandingPagePortProject.gif';
import FirstGridLandingPage from '../assets/FirstGridLandingPage.png';
import FirstGridLandingPageGif from '../assets/FirstGridLandingPage.gif';
import CubeAnimation from '../assets/CubeAnimation.png';
import CubeAnimationGif from '../assets/CubeAnimation.gif';
import PokeballAnimation from '../assets/PokeballAnimation.png';
import PokeballAnimationGif from '../assets/PokeballAnimation.gif';
import MarvelCharacterSelection from '../assets/MarvelCharacterSelection.png';
import MarvelCharacterSelectionGif from '../assets/MarvelCharacterSelection.gif';
import FirstFetchProject from '../assets/FirstFetchProject.png';
import FirstFetchProjectGif from '../assets/FirstFetchProject.gif';
import PokedexJsProject from '../assets/PokedexJsProject.png';
import PokedexJsProjectGif from '../assets/PokedexJsProject.gif';
import PokedexReactProject from '../assets/PokedexReact.png';
import PokedexReactProjectGif from '../assets/PokedexReact.gif';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState("all");
    const [hoveredProjectId, setHoveredProjectId] = useState(null);
    const [showAll, setShowAll] = useState(false);

    const projects = [
        { id: 1, img: PokedexReactProject, gif: PokedexReactProjectGif, link: 'https://github.com/KayoThyerre/pokedex', tech: "react" },
        { id: 111, img: PokedexJsProject, gif: PokedexJsProjectGif, link: 'https://github.com/KayoThyerre/pokemon-js-port', tech: "javascript" },
        { id: 2, img: FirstFetchProject, gif: FirstFetchProjectGif, link: 'https://github.com/KayoThyerre/first-fetch-github-project', tech: "javascript" },
        { id: 3, img: MarvelCharacterSelection, gif: MarvelCharacterSelectionGif, link: 'https://github.com/KayoThyerre/char-select-port', tech: "javascript" },
        { id: 4, img: PokeballAnimation, gif: PokeballAnimationGif, link: 'https://github.com/KayoThyerre/pokeball-animation-test', tech: "" },
        { id: 6, img: FirstGridLandingPage, gif: FirstGridLandingPageGif, link: 'https://github.com/KayoThyerre/landing-page-1', tech: "" },
        { id: 7, img: LandingPagePortProject, gif: LandingPagePortProjectGif, link: 'https://github.com/KayoThyerre/landing-page-port-1', tech: "javascript" },
        { id: 8, img: PokemonCardProject, gif: PokemonCardProjectGif, link: 'https://github.com/KayoThyerre/pokemon-card-port', tech: "javascript" },
        { id: 9, img: FirstReactProject, gif: FirstReactProjectGif, link: 'https://github.com/KayoThyerre/react-base-1', tech: "react" },
        { id: 10, img: AdviceGenerator, gif: AdviceGeneratorGif, link: 'https://github.com/KayoThyerre/advice-generator-app', tech: "javascript" },
        { id: 11, img: TlouProject, gif: TlouProjectGif, link: 'https://github.com/KayoThyerre/szpc-projeto-the-last-of-us', tech: "javascript" },
        { id: 5, img: CubeAnimation, gif: CubeAnimationGif, link: 'https://github.com/KayoThyerre/cube', tech: "" },
        { id: 12, img: FirstCssQuest, gif: FirstCssQuestGif, link: 'https://github.com/KayoThyerre/final-quest-css/tree/main', tech: "" },
        { id: 13, img: FirstFormImg, gif: FirstFormGif, link: 'https://github.com/KayoThyerre/first-js-form', tech: "javascript" },
        { id: 14, img: FirstYtQuest, gif: FirstYtQuest, link: 'https://github.com/KayoThyerre/yt-quest/tree/main', tech: "" }
    ];

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
        setShowAll(false); // Resetar para mostrar apenas 6 imagens quando o filtro é alterado
    };

    const handleMouseEnter = (id) => {
        setHoveredProjectId(id);
    };

    const handleMouseLeave = () => {
        setHoveredProjectId(null);
    };

    const handleToggleShowAll = () => {
        setShowAll(!showAll);
    };

    const filteredProjects = projects.filter(project => activeFilter === "all" || project.tech === activeFilter);
    const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

    return (
        <section className="projects" id="portifolio">
            <div className="about-title">
                <h1>Meu portifolio</h1>
            </div>
            <div className="projects-models">
                <ul aria-label="Navegação entre os projetos de Kayo">
                    <li className={activeFilter === "all" ? "active" : ""} onClick={() => handleFilterClick("all")}>All</li>
                    <li className={activeFilter === "javascript" ? "active" : ""} onClick={() => handleFilterClick("javascript")}>Javascript</li>
                    <li className={activeFilter === "react" ? "active" : ""} onClick={() => handleFilterClick("react")}>React</li>
                    <li className={activeFilter === "python" ? "active" : ""} onClick={() => handleFilterClick("python")}>Python</li>
                </ul>
            </div>
            <div className="projects-box">
                <ul>
                    {displayedProjects.map(project => (
                        <li
                            key={project.id}
                            className={project.tech}
                            onMouseEnter={() => handleMouseEnter(project.id)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <img   
                                    src={hoveredProjectId === project.id && project.gif ? project.gif : project.img}
                                    alt={project.tech}
                                />
                            </a>
                        </li>
                    ))}
                </ul>
                <a onClick={handleToggleShowAll}>
                    {showAll ? "Ver menos" : "Ver mais"}
                </a>
            </div>
        </section>
    );
};

export default Projects;
