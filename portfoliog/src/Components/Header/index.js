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
                <li>BLOG</li>
                <li> <a className="a_default" href="#Contact">CONTATO</a></li>
                <li className="project_word"><a className="a_different" href="#Projects">PROJETOS</a></li>
            </ul>
        </nav>
    <img className="darkmode" src={darkmode}/> 
    </header>
    </Area_Header>
)
}
export default Page;