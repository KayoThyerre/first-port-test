import React from "react";
import Typing from "./typing";
import myPhoto from "../assets/eu2.png";

const Welcome = () => (
    <section aria-label='seção curriculo download Kayo' className='section-cv'>
        <div>
            <h2>Olá, seja bem vindo !</h2>
            <Typing />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, exercitationem odio reiciendis dicta magnam fugit odit quasi tempore doloremque optio sunt, nisi provident quis rem numquam eveniet harum aliquam nihil!</p>
            <a href="#">Download CV</a>
        </div>
        <img src={myPhoto} alt="foto ilustrativa do dev" className='dev-img' />
    </section>
);

export default Welcome;