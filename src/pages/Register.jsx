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

function Register(){
    return (
        <>
            <Navbar links={datosbarra}/>
            <Logo/>

            <head>
                <title>Registro de Usuario</title>
                
            </head>
            <body id="fotohernan">
                <section> 
                    <section id="card2">
                        <header>
                            <h3>Registrarse</h3>
                        </header>
                        <form id="datos_usuario">
                            <div>
                                <label><strong>Nombre  </strong></label>
                                <input type="text" class="fullWidth bigger" required ></input>
                            </div>
                            <div>
                                <label><strong>Apellidos </strong></label>
                                <input type="text" class="fullWidth bigger" required></input>
                            </div>
                            
                        <div>
                            <label><strong>Rut</strong></label>
                            <input type="text" name="cedula" placeholder="Ingrese su rut con guion" class="fullWidth bigger" min="1" max="9" id="numero"></input>

                        </div>
                        
                            <div>
                                <label><strong>Nacionalidad </strong></label>
                                <input type="text" class="fullWidth bigger" required></input>
                            </div>
                            <div>
                                <label><strong>Region</strong> </label>
                                <input type="text" list="cursos" class="fullWidth bigger" ></input>
                                <datalist id= "cursos">
                                    <option>Región de Arica y Parinacota</option>
                                    <option>Región de Tarapacá</option>
                                    <option>Región de Antofagasta</option>
                                    <option>Región de Atacama</option>
                                    <option>Región de Coquimbo</option>
                                    <option>Región de Valparaíso</option>
                                    <option>Región Metropolitana de Santiago</option>
                                    <option>Región del Libertador General Bernardo O’Higgins</option>
                                    <option>Región del Maule</option>
                                    <option>Región del Ñuble</option>
                                    <option>Región del Biobío</option>
                                    <option>Región de La Araucanía</option>
                                    <option>Región de Los Ríos</option>
                                    <option>Región de Los Lagos</option>
                                    <option>Región de Aysén del General Carlos Ibáñez del Campo</option>
                                    <option>Región de Magallanes y la Antártica Chilena</option>
                                    
                                </datalist>
                            </div>
                            <div>
                                <label><strong>Comuna </strong></label>
                                <input type="text" class="fullWidth bigger" required></input>
                            </div>
                            <div>
                                <label><strong>Direccion </strong></label>
                                <input type="text" class="fullWidth bigger" required></input>
                            </div>
                            <div>
                                <label><strong>Profesion u oficio </strong></label>
                                <input type="text" class="fullWidth bigger" required></input>
                            </div>
                            <div>
                                <label><strong>Telefono</strong></label>
                                <input type="number" name="telefono" class="fullWidth bigger" min="1" max="9" id="telefono"></input>
            
                            </div>
                        
                            
                            <div>
                                <div><label> <strong>Correo</strong></label>
                                </div>
                                <div>
                                <input type="email" placeholder="su direcci&oacute;n de correo " class="fullWidth bigger" required></input>
                            </div>
                            </div>
                        
                            <div>
                                <div>
                                <label><strong>Contraseña </strong></label>
                                </div>
                                <div>
                                <input type="password" id="password" class="fullWidth bigger"required></input>
                                </div>
                                <div>
                                <label><strong>Confirmaci&oacute;n de Contraseña </strong></label>
                                </div>
                                <div>
                                <input type="password" id="confirmacion" class="fullWidth bigger" required></input>
                                </div>

                            </div > 
                            <br>
                            
                            </br>
                            <br>
                            </br>
                        
                            
                            <div class= "centered">
                                <input type="submit" id="boton" value="Enviar"></input>

                            </div>
                        </form>

                    </section>

                </section>
                
                
                
                
                
            </body>







            <Footer/>
            
        
               
        </>
    );
}
export default Register;