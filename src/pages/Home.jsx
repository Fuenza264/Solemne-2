import React from 'react';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import Noticia1 from '../components/Noticia1';
import Noticia2 from '../components/Noticia2';

const datosbarra=[
    {href:'Home',label:'HOME'}, 
    {href:'About',label:'ACERCA DE MI'},
    {href:'Publication',label:'PUBLICACIONES'},
    {href:'Partners',label:'COLABORADORES'}, 
    {href:'Login',label:'INICIAR SESION'}
];

function Home(){
    return (
        <>
            <Navbar links={datosbarra}/>
            <Logo/>
            <h1>BIENVENIDOS A NEUROABOGADO</h1>
            <Noticia1/>
            <Noticia2/>
            <Footer/>
            
               
        </>
    );
}
export default Home;