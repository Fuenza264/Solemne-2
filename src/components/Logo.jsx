import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../photos/logo.png';

function Logo(){
    return (
        <div id="componentelogo">
            <Link to='/Home'>
                <img src={logo} width='150'/>
            </Link>
        </div>
    );
}
export default Logo;
