import React from 'react';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import javier from '../photos/javier.jpeg';
import francisca from '../photos/francisca.jpeg';
import alejandra from '../photos/alejandra.jpeg';
import akihisa from '../photos/akihisa.jpeg';

const datosbarra=[
    {href:'Home',label:'HOME'}, 
    {href:'About',label:'ACERCA DE MI'},
    {href:'Publication',label:'PUBLICACIONES'},
    {href:'Partners',label:'COLABORADORES'}, 
    {href:'Login',label:'INICIAR SESION'}
];

function Partners(){
    return (
        <>
            <Navbar links={datosbarra}/>
            <Logo/>
            <div id="colaboradores">
            <img src={javier} width='250'/>
            <h3>Javier Valdés Vergara</h3>
            <p class="letrapartner">Abogado. Licenciado en Ciencias Jurídicas y Sociales de la Universidad de Talca. 

            Magíster (c) en Derecho por la Universidad de Talca.</p>
            <img src={francisca} width='250'/>
            <h3>Francisca Madrid González</h3>
            <p class="letrapartner">Estudiante de Derecho en la Universidad del Desarrollo.</p>
            <img src={alejandra} width='250'/>
            <h3>Alejandra Pérez Ceballos</h3>
            <p class="letrapartner">Abogada. Licenciada en Ciencias Jurídicas y Sociales de la Universidad Bernardo O’Higgins. 

            Diplomado en Innovación y Gestión Colaborativa en la Docencia Universitaria. 

            Magíster en Derecho Público por la Universidad de Chile.

            Profesora de Derecho Constitucional</p>
            <img src={akihisa} width='250'/>
            <h3>Akihisa Hirano</h3>
            <p class="letrapartner">Escritor y Empresario japonés. Licenciado en Relaciones Internacionales por la Universidad de Ritsumeikan Japón.

            Máster en Empresa, Justicia y Derecho, Universitát de Valencia, España. 

            Director de Academia de profesores de Inglés-Japonés-Español </p>

            </div>
            
            <Footer/>
               
        </>
    );
}
export default Partners;