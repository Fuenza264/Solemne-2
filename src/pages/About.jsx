import React from 'react';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import hernan from '../photos/hernan.png';


const datosbarra=[
    {href:'Home',label:'HOME'}, 
    {href:'About',label:'ACERCA DE MI'},
    {href:'Publication',label:'PUBLICACIONES'},
    {href:'Partners',label:'COLABORADORES'}, 
    {href:'Login',label:'INICIAR SESION'}
];

function About(){
    return (
        <>
            <Navbar links={datosbarra}/>
            <Logo/>
            <h1>ACERCA DE MÍ</h1>
            <div id="colaboradores">
            <img src={hernan} width='250'/>
            </div>
            <p class="texto">Hernán Alfonso López Hernández (HALH), es Abogado, Académico, Diplomado en Litigación Oral; Diplomado en Innovación y Gestión Colaborativa en la Docencia Universitaria; Máster en Derecho de Familia e Infancia por la Universitát de Barcelona, España; Máster© en Empresa Justicia y Derecho por la Universitát de Valencia, España.

            Cuenta con una sólida experiencia en materias de gestión académica universitaria; planificación, desarrollo y ejecución de eventos formato webinar’s, seminarios, congresos y conferencias nacionales e internacionales; competencias y habilidades de liderazgo y manejo de equipos. También posee experiencia en docencia universitaria en asignaturas de Derecho de Familia, Derecho Privado (en particular civil), Filosofía del Derecho, Ética e Inteligencia Artificial, Derechos Sexuales y Reproductivos entre otros.</p>
            <p class="texto">¿Por qué el neuroabogado/a?

            Durante los últimos años se instala con fuerza en el discurso académico, político, comercial y jurídico la costumbre de emplear el prefijo “neuro” en sus respectivas disciplinas de base. En ese contexto y de la mano de las neurociencias, como fuente transdiciplinaria que ha dado origen a nuevos términos compuestos, como por ejemplo neurohumanidades, neuroética, neuroeconomía, neuromarketing y por último, neuroley, neuroderecho(s), neuroprotección; y en general otras expresiones.

            Bajo esa premisa, por qué no ¿el neuroabogado/a? Así, emerge el neuroabogado/a se, quien se debe abrir paso en la tecno-sociedad 4.0 junto a las neurociencias, tomando como principal insumo la Inteligencia Artificial, no solo como objeto de estudio, sino que como una herramienta más para su ejercicio profesional y consciente de los efectos que el uso de las neuro-bio tecnologías y el “mejoramiento” de la especie humana tendrán efectos en el campo académico y laboral.</p>
            <Footer/>
            
            
            
               
        </>
    );
}
export default About;