import React from 'react';
import {Link} from 'react-router-dom';
import noticia2 from '../photos/noticia2.png';

function Noticia2(){
    return (
        <div>
            <Link to='/Article2'>
                <img src={noticia2} width='500'/>
            </Link>
        </div>
    );
}
export default Noticia2;