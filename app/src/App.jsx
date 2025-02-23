import React from "react";

import "./styles/App/App.css";

// foto de perfil
import perfil from "/src/assets/img/perfil.png";

// icones
import github   from "/src/assets/icons/github.svg";
import insta    from "/src/assets/icons/insta.svg";
import linkedin from "/src/assets/icons/linkdin.svg";
import whatsapp from "/src/assets/icons/whatsapp.svg";
import gmail    from "/src/assets/icons/gmail.svg";


// gifs 
import curriculo from "/src/assets/gifs/curriculo.gif";

export default function App() {
    return (
        <div className="div_main">
            <div className="div_perfil">
                <div className="div_perfil_img">
                    <img src={perfil} alt='perfil' className="div_perfil_img_style"/>
                </div>
                
                <div className="div_perfil_nome">
                    Mateus Sousa do Carmo
                </div>

                
                <div className="div_perfil_icons_redes">
                    <a href="https://www.instagram.com/carmomateussousado/" target="_blank">
                        <img src={insta}    alt="insta"/>
                    </a>
                    <a href="https://www.linkedin.com/in/mateus-sousa-do-carmo-737696268/" target="_blank">
                        <img src={linkedin} alt="linkedin"/>
                    </a>
                    <a href="https://github.com/kaladabrio2020" target="_blank">
                        <img src={github}  alt="linkedin" />    
                    </a>
                
                </div>

                <hr></hr>

                <div className="div_perfil_contatos">     
                    <button>
                        <img src={whatsapp}   />
                        <span>(11) 9 9999-9999</span>
                    </button>
                    <button>
                        <img src={gmail}/>
                        <span>mateus.1090ptbr0@gmail.com</span>
                    </button>
                    <button>
                        <img src={gmail}/>
                        <span>mateus.0201@alu.ufc.br</span>
                    </button>
                </div>
                <hr style={{marginTop:"90px"}}></hr>
                <div className="div_perfil_gifs">
                    <span>Currículo Vitae</span>
                    <img src={curriculo} alt="curriculo"/>

                </div>
            </div>

            <div>
                <div>
                    <h2>Sobre mim</h2>
                    <span/>Tenho 22 anos e estou cursando Ciência de Dados na Universidade Federal do Ceará. Meu principal objetivo é adquirir conhecimento e experiência na área, além de contribuir de forma significativa com o meu melhor esforço. 
                    <span/>Gosto muito da área de Machine Learning e estudo copiosamente todos os dias para melhorar meu conhecimento sobre essa área, principalmente no que tange a Redes Neurais.
         

                 </div>
            </div>

        </div>
    );
}