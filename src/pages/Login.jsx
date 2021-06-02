import React from 'react';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import {Link} from 'react-router-dom';

const datosbarra=[
    {href:'Home',label:'HOME'}, 
    {href:'About',label:'ACERCA DE MI'},
    {href:'Publication',label:'PUBLICACIONES'},
    {href:'Partners',label:'COLABORADORES'}, 
    {href:'Login',label:'INICIAR SESION'}
];

function Login(){
    return (
        <>
            <Navbar links={datosbarra}/>
            <Logo/>
           

            <head>
                <title>Ingreso de Usuario</title>
                
            </head>
            <body>
            
                <section>
                    <section id="card">
                        <header>
                            <h3> <strong>Login</strong> </h3>
                            
                        </header>
                        <form>
                            <div>
                                <label> <strong>Nombre</strong></label>
                                <input type="text" placeholder="ingrese su nombre completo" class="fullWidth bigger" />
                            </div>
                            <div>
                                <label> <strong>Contrase&ntilde;a</strong> </label>
                                <input type="password" class="fullWidth bigger" />
                            </div>
                            <div class="no_contraseña">
                                ¿Olvidaste tu contraseña?

                            </div>

                            <div class="centered">
                                <input type="submit" id="boton" value="Ingresar" />
                            </div>
                            <div class="logueado">
                            <Link to='/Register'>
                                <p id="registro">¿No tienes cuenta?  Haz click aqui y crea una</p>
                            </Link>
                               

                            </div>
                        </form>
                    </section>
                </section>
            </body>

            <Footer/>
               
        </>
    );
}
export default Login;