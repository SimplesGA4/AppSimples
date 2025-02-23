import React from "react";
import "./styles/App/App.css";
// foto de perfil
import perfil from "./assets/img/Perfil.png";

// icones
import github   from "./assets/icons/github.svg";
import insta    from "./assets/icons/insta.svg";
import linkedin from "./assets/icons/linkdin.svg";
import whatsapp from "./assets/icons/whatsapp.svg";
import gmail    from "./assets/icons/gmail.svg";


// gifs 
import curriculo from "./assets/gifs/curriculo.gif";
import project   from "./assets/gifs/project.gif";

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
                        <img src={insta}    />
                    </a>
                    <a href="https://www.linkedin.com/in/mateus-sousa-do-carmo-737696268/" target="_blank">
                        <img src={linkedin} />
                    </a>
                    <a href="https://github.com/kaladabrio2020" target="_blank">
                        <img src={github}   />    
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
                    <img src={curriculo}/>

                </div>
            </div>

        </div>
    );
}