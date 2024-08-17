import React from "react";
import Typing from "./typing";
import myPhoto from "../assets/eu2.png";

const Welcome = () => (
    <section aria-label='seção curriculo download Kayo' className='section-cv'>
        <div>
            <h2>Olá, seja bem vindo !</h2>
            <Typing />
            <p>Olá eu sou o Kayo, seja bem vindo ao meu portifólio !</p>
            <a href="#">Download CV</a>
        </div>
        <img src={myPhoto} alt="foto ilustrativa do dev" className='dev-img' />
    </section>
);

export default Welcome;