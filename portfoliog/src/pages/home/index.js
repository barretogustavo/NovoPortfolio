import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import {AreaMain, Title, Lateral, Button_main, Section, Section_title, Projects_content, Habilidades, Button_about, Card_skills, Contact} from './styled'

import csslogo from './img_home/csslogo.png';
import htmllogo from './img_home/htmllogo.png';
import jslogo from './img_home/jslogo.png';
import reactlogo from './img_home/reactlogo.png';

import img_project1 from './img_home/project1.png';
import img_project2 from './img_home/project2.png';
import img_project3 from './img_home/project3.png';
import img_project4 from './img_home/project4.png';
import img_project5 from './img_home/project5.png';
import img_project6 from './img_home/project6.png';

import instaIcon from './img_home/instaIcon.png';
import mailIcon from './img_home/mailIcon.png';
import linkedinIcon from './img_home/linkedinIcon.png'

const Page = ()=>{

return(<div className="container">
        <AreaMain>            
        <Title>
            <div className="div_Title">
            <h1>Gustavo Barreto</h1>
            <h2>Front-end Developer Trainee</h2>
             <h3>
                Estudante de Ciência da Computação e desde sempre apaixonado por tecnologia. Meu grande objetivo é me tornar referência na área da tecnologia e poder contribuir para crescer e melhorar a comunidade. Logo abaixo você pode ver alguns dos meus projetos e minhas habilidade.
            </h3>
            

        <div className="div_Button_responsive">
            <a href="#Contact"><Button_main>Entrar em contato</Button_main></a>
        </div>
        </div>
        </Title>

        <div className="div_Lateral">
        <Lateral />   
        </div>

        </AreaMain>

        <Section>
            <div className="Section_width">
            <Section_title id="Projects">PROJETOS</Section_title>
            <Projects_content>
                <div className="project1" id="project_style">
                    <img src={img_project1} />
                    <h2 className="swipe_smartphone">➜</h2>
                    <div className="name_project" id="name_project_effect">E-commerce de Pizza
                        <span><br/><br/>Este projeto conta com bastante lógica de programação aplicada no Javascript. Neste projeto, implementei todas as funcionalidade que devem estar presentes em um e-commerce.</span>
                        <Button_about className="Button_about"><a href="https://barretogustavo.github.io/Ecommerce-Pizza/" target="_blank">Ver projeto</a></Button_about>
                        <Button_about className="Button_about"><a href="https://github.com/barretogustavo/Ecommerce-Pizza" target="_blank">GitHub</a></Button_about>
                    </div>
                </div>
                <div className="project1" id="project_style">
                    <img src={img_project2} /> 
                    <h2 className="swipe_smartphone">➜</h2>                   
                    <div className="name_project" id="name_project_effect">Clima Hoje 
                        <span><br/><br/>Utilizando a OpenWeather API, criei este projeto para mostrar minhas noções de requisições e utilização de API's com Javascript.</span>
                        <Button_about className="Button_about"><a href="https://barretogustavo.github.io/ClimaTempo/" target="_blank">Ver projeto</a></Button_about>
                        <Button_about className="Button_about"><a href="https://github.com/barretogustavo/ClimaTempo" target="_blank">GitHub</a></Button_about>
                    </div>
                </div>
                <div className="project1" id="project_style">
                    <img src={img_project3} />
                    <h2 className="swipe_smartphone">➜</h2>
                    <div className="name_project" id="name_project_effect">Estude Inglês 
                        <span><br/><br/>Neste projeto, utilizei a mesma lógica aplicada ao projeto da Pizza, porém, em um contexto educacional. Ao analisar este código, poderá ver que está limpo e organizado,, além de ter um design muito bonito e agradável.</span>
                        <Button_about className="Button_about"><a href="https://barretogustavo.github.io/LearnVerbs-project/" target="_blank">Ver projeto</a></Button_about>
                        <Button_about className="Button_about"><a href="https://github.com/barretogustavo/LearnVerbs-project" target="_blank">GitHub</a></Button_about>
                    </div>
                </div>
                <div className="project1" id="project_style">
                    <img src={img_project4} />
                    <h2 className="swipe_smartphone">➜</h2>
                    <div className="name_project" id="name_project_effect">Clone do Google 
                        <span><br/><br/>Meu primeiro projeto criado quando terminei meu curso de HTML e CSS. Este trata-se de um clone da UI do Google, além de eu ter adicionado um modo noturno.</span>
                        <Button_about className="Button_about"><a href="" target="_blank">Ver projeto</a></Button_about>
                        <Button_about className="Button_about"><a href="https://github.com/barretogustavo/googleclone" target="_blank">GitHub</a></Button_about>
                    </div>
                </div>
                <div className="project1" id="project_style">
                    <img src={img_project5} />
                    <h2 className="swipe_smartphone">➜</h2>
                    <div className="name_project" id="name_project_effect">Template Flexbox
                        <span><br/><br/>Template criada usando Flexbox para deixar o site adaptável e responsivo. Assim ele fica atraente em qualquer dispositivo e melhora a usabilidade.</span>
                        <Button_about className="Button_about"><a href="https://barretogustavo.github.io/MedCenter/" target="_blank">Ver projeto</a></Button_about>
                        <Button_about className="Button_about"><a href="https://github.com/barretogustavo/MedCenter" target="_blank">GitHub</a></Button_about>
                    </div>
                </div>
                <div className="project1" id="project_style">
                    <img src={img_project6} />
                    <h2 className="swipe_smartphone">➜</h2>
                    <div className="name_project" id="name_project_effect">Web Paint - Desenhe
                        <span><br/><br/>Um projeto bem desafiador que me permitiu conhecer novas funções do Javascript. Aqui, o usuário pode desenhar em um quadro branco e escolher várias cores para colorir.</span>
                        <Button_about className="Button_about"><a href="https://barretogustavo.github.io/paint-JS/" target="_blank">Ver projeto</a></Button_about>
                        <Button_about className="Button_about"><a href="https://github.com/barretogustavo/paint-JS" target="_blank">GitHub</a></Button_about>
                    </div>
                </div>
            </Projects_content>
            <Section_title>HABILIDADES</Section_title>
            <Habilidades>
                <Card_skills>
                    <img src={csslogo} style={{width:120}} />
                    <div>
                        <h2>Nível:</h2>
                        <h1>Avançado</h1>
                    </div>                    
                </Card_skills>
                <Card_skills>
                    <img src={htmllogo} style={{width:120}} />
                    <div>
                        <h2>Nível:</h2>
                        <h1>Avançado</h1>
                    </div>
                </Card_skills>
                <Card_skills>
                    <img src={jslogo} style={{width:120}} />
                    <div>
                        <h2>Nível:</h2>
                        <h1>Intemediário</h1>
                    </div>
                </Card_skills>
                <Card_skills>
                    <img src={reactlogo} style={{width:160}} />
                    <div>
                        <h2>Nível:</h2>
                        <h1>Intermediário</h1>
                    </div>
                </Card_skills>
            </Habilidades>
            <Section_title>CONTATO</Section_title>
            <Contact id="Contact">
            <a className="a_responsive_adjustment" href="https://www.instagram.com/gustavobarreto.dev/" target="_blank">
                <div className="contact_box">
                    <img src={instaIcon} />
                    <h2 className="back_contact">@gustavobarreto.dev</h2>
                    <h2 className="front_contact">@gustavobarreto.dev</h2>
                </div>
            </a>
            <a className="a_responsive_adjustment" href="mailto:gbarreto.alves@gmail.com?subject=Proposta%20de%20emprego">
                <div className="contact_box">
                    <img src={mailIcon} />
                    <h2 className="back_contact">gbarreto.alves@gmail.com</h2>
                    <h2 className="front_contact">@gustavobarreto.dev</h2>
                </div>
            </a>
            <a className="a_responsive_adjustment" href="https://www.linkedin.com/in/gustavobarretodev/" target="_blank">
                <div className="contact_box">
                    <img src={linkedinIcon} />
                    <h2 className="back_contact">Gustavo Barreto</h2>
                    <h2 className="front_contact">Gustavo Barreto</h2>
                </div>
            </a>
            </Contact>


            </div>
        </Section>
        
        
        </div>
) 

}
export default Page;