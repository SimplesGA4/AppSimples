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
import cerfificado from "/src/assets/gifs/certificate.gif";

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
                        <span>(85) 9 8796-5879</span>
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
                <a href="https://github.com/kaladabrio2020/kaladabrio2020/blob/main/vitae/Mateus%20Sousa%20do%20Carmo%20-%20vitae.pdf" className="a_curriculo" target="_blank">
                    <div className="div_perfil_gifs">
                        <span>Currículo Vitae</span>
                        <img src={curriculo} alt="curriculo"/>
                    </div>
                </a>
                <hr></hr>
                <a href="https://github.com/kaladabrio2020/ecommerce-brazil-dashboard-bi" className="a_curriculo" target="_blank">
                    <div className="div_perfil_gifs">
                        <span>Certificações</span>
                        <img src={cerfificado} alt="cerfificado"/>
                    </div>
                </a>

            </div>

            <div className="div_portfolio">
                <div>
                    <h2>Sobre mim</h2>
                    <span>Tenho 22 anos e sou estudante de Ciência de Dados na Universidade Federal do Ceará. Meu principal objetivo é adquirir conhecimento e experiência na área, além de contribuir de forma significativa com dedicação e excelência. Tenho grande interesse em Machine Learning, especialmente em Redes Neurais, e estudo intensamente todos os dias para aprimorar meu entendimento e habilidades nesse campo.</span>
                 </div>
                 <div>
                    <h2>Hard Skills</h2>
                    <li><b>Analise de Dados:</b> Python, R, SQL, Pyspark, Pandas</li><li><b>Visualização de dados:</b> Power BI, Plotly, Dash, Matplotlib, Seaborn</li><li><b>Front End:</b> HTML, JS, TS, React</li><li><b>Banco de dados:</b> Postgres, SQL server</li>
                    <li><b>Machine Learning:</b> Keras, Torch, Tensorflow, Stastsmodels, Sklearn</li>
                 </div>
                 <div>
                    <h2>Projetos</h2>
                    <div className="div_projetos_main_1">
                        <div className="div_projeto">
                            <a href="https://github.com/kaladabrio2020/MachineLearning" target="_blank" className="a_projeto1">
                                <div className="div_projeto1_text">
                                    <h4>Machine Learning</h4>
                                    <p>Pegando vários dataset e criando modelos de predição</p>
                                </div>
                            </a>
                        </div>
                        <div>
                            <div className="div_projeto">
                                <a href="https://github.com/kaladabrio2020/MachineLearning" target="_blank" className="a_projeto1">
                                    <div className="div_projeto1_text">
                                        <h4>Dashboard Ecommerce</h4>
                                        <p>Criando uma Dashboard Ecommerce Brasil via Dash + Plotly </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>


                    <div className="div_projetos_main_2">
                        <div className="div_projeto">
                            <a href="https://github.com/kaladabrio2020/Programa.Bolsa.Compass.Uol.CienciaDeDados" target="_blank" className="a_projeto1">
                                <div className="div_projeto1_text">
                                    <h4>Compass Uol Ciencia De Dados </h4>
                                    <p>Projetos da bolsa Compass.Uol que possibilitou minha Certificação em AWS Cloud Practioner</p>
                                </div>
                            </a>
                        </div>
                        <div>
                            <div className="div_projeto">
                                <a href="https://github.com/kaladabrio2020/TimesSeriesLivroOR" target="_blank" className="a_projeto1">
                                    <div className="div_projeto1_text">
                                        <h4>Séries Temporais</h4>
                                        <p>Todo o meu progresso nos estudos sobre Séries Temporais</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}