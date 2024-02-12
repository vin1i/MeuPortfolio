import React, { useState } from "react";
import './services.css';

const Services = () => {

    const[toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };
return(
    <section className="services section" id="services">
         <h2 className="section__title">Serviços<span className="dot__services">.</span></h2>
                <span className="section__subtitle">
                O que ofereço </span>
        <div className="services__container container grid">
            <div className="services__content">

                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Frontend Developer</h3>
                </div>


                <span className="services__button" onClick={() => toggleTab(1)}>Veja mais <i className="uil uil-arrow-right services__button-icon">
                    </i></span>



                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Frontend Developer</h3>
                        <p className="services__modal-description">Atuo como desenvolvedor, fornecendo serviços freelancers e construindo projetos pessoais.</p>

                        <ul className="services__modal-services grid">

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Desenvolvimento Frontend
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Desenvolvimento Backend

                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Integrações de APIS

                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Websites Dinâmicos e responsivos

                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Aplicações Web Single-Page (SPA)

                                </p>
                            </li>

                        </ul>
                    </div>

                    

                    
                </div>


            </div>

            
        </div>

        
    </section>
);
};

export default Services;