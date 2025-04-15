import React from 'react'
import '@styles/certificados/Certificados.css'

export default function Certificados() {
    return (
        <div className='divMainCertificados'>
            
            <div>
                <h1>Certificações</h1>
            </div>
            <div className='div_certificados'>
                <a> <h3> AWS Cloud Practitioner Certified </h3> </a>
            </div>
            <div className='div_certificados'> 
                <a> <h3> Data Science Specialization Compass.uol </h3> </a>
            </div>

            <div className='div_certificados'>
                <a> <h3> Machine Learning Bootcamp Atlantico </h3> </a>
            </div>

            <div className='div_voltar'>
                <a href='/home'>  <h4>Voltar</h4> </a>
            </div>
        </div>

    )
}