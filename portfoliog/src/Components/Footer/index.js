import React from 'react';
import {Area_Footer} from './styled';
import instaIconFooter from './img/instaIconFooter.png';
import linkedinIconFooter from './img/linkedinIconFooter.png';

const Page = ()=>{
    return(
        <Area_Footer>
            <p>&copy; Criado por Gustavo Barreto</p>
            <div>
                <a href="https://www.instagram.com/gustavobarreto.dev/" target="_blank"><img src={instaIconFooter} /></a>
                <a href="https://www.linkedin.com/in/gustavobarretodev" target="_blank"><img src={linkedinIconFooter} /></a>
            </div>
        </Area_Footer>
    )
}

export default Page;