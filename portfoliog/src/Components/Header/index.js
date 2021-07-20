import React from 'react';
import { Area_Header} from './styled';

import logotipo from './img/logogb.png';
import darkmode from './img/darkmodeicon1.png';

const Page = ()=>{

    return(
    <Area_Header>
    <header>
    <img className="logotipo" src={logotipo}/> 
        <nav>
            <ul>
                <li>HOME</li>
                <li>CONTATO</li>
                <li className="project_word">PROJETOS</li>
            </ul>
        </nav>
    <img className="darkmode" src={darkmode}/> 
    </header>
    </Area_Header>
)
}
export default Page;