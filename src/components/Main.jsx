import React from "react";
import myPhoto from "../assets/eu2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faLaptopCode, faLocationDot, faGlobe, faFlag, faPhoneVolume, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Main = () => (
    <main>
        <article aria-label='seção sobre mim' className='about'>
          <img src={myPhoto} alt="imagem de uma pessoa ilutrativa" />
          <div className="about-content" id="about">
            <div className="text">
              <h1>Olá, eu sou o Kayo !</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo pariatur, iusto unde minus quae nam. Placeat excepturi architecto enim tempora?Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo pariatur, iusto unde minus quae nam. Placeat excepturi architecto enim tempora?Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo pariatur, iusto unde minus quae nam. Placeat excepturi architecto enim tempora?</p>
            </div>
            <div className="about-info">
              <p><i><FontAwesomeIcon icon={faCalendarDays} /></i> Aniversário: 06 maio 1996</p>
              <p><i><FontAwesomeIcon icon={faLaptopCode} /></i> Freelance: Disponível</p>
              <p><i><FontAwesomeIcon icon={faLocationDot} /></i> Endereço: Guaxupé, MG</p>
              <p><i><FontAwesomeIcon icon={faGlobe} /></i> Línguas conhecidas: Português, Espanhol, Inglês.</p>
              <p><i><FontAwesomeIcon icon={faFlag} /></i> Nacionalidade: Brasileiro</p>
              <p><i><FontAwesomeIcon icon={faPhoneVolume} /></i> Telefone: +55 35 99224-0197</p>
              <p><i><FontAwesomeIcon icon={faEnvelope} /></i> Email: kayothyerrework@gmail.com</p>
            </div>
          </div>
        </article>
      </main>
  );
  
export default Main;