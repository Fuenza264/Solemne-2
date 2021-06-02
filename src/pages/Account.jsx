import React from 'react';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';
import Footer from '../components/Footer';


const datosbarra=[
    {href:'Home',label:'HOME'}, 
    {href:'About',label:'ACERCA DE MI'},
    {href:'Publication',label:'PUBLICACIONES'},
    {href:'Partners',label:'COLABORADORES'}, 
    {href:'Login',label:'INICIAR SESION'}
];

function Account(){
    return (
        <>
            <Navbar links={datosbarra}/>
            <Logo/>
            <h1>esto es mi cuenta</h1>
            <Footer/>
            
            
            

               
        </>
    );
}
export default Account;