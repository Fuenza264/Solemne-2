import React from 'react';
import {Link} from 'react-router-dom';
import noticia1 from '../photos/noticia1.png';

function Noticia1(){
    return (
        <div>
            <Link to='/Article1'>
                <img src={noticia1} width='500'/>
            </Link>
        </div>
    );
}
export default Noticia1;