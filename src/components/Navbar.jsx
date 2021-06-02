import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(props){
    return (
        <header>
            <nav>
                <ul id="barranavegadora">
                    {
                        props.links.map(
                            (link,i)=><li key={i}>
                                <Link to={link.href}>{link.label}</Link>
                            </li>
                        )
                    }
                    
                </ul>
            </nav>
        </header>
    );
}
export default Navbar;
