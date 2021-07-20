import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import {AreaMain, Title, Lateral, Button_main, Section, Slider, Section_title} from './styled'
import wp1 from './img_home/wp1.jpg';
import wp2 from './img_home/wp2.jpg';
import wp3 from './img_home/wp3.jpg';

const Page = ()=>{

    return(<div className="container">
        <AreaMain>            
        <Title>
            <div className="div_Title">
            <h1>Gustavo Barreto</h1>
            <h2>Front-end Developer Trainee</h2>
             <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
            </h3>
            

        <div className="div_Button_responsive">
            <Button_main>Entrar em contato</Button_main>
            <Button_main>Download CV</Button_main>
        </div>
        </div>
        </Title>

        <div className="div_Lateral">
        <Lateral />   
        </div>

        </AreaMain>

        <Section>
            <div className="Section_width">
            <Section_title>PROJETOS</Section_title>
            <Slider>
                <div className="slider_width">
                    <div className="slider_item"><img src={wp1}/></div>
                    <div className="slider_item"><img src={wp2}/></div>
                    <div className="slider_item"><img src={wp3}/></div>
                </div>
                <button>&#x02192;</button>
            </Slider>
            </div>
        </Section>
        
        
        </div>
)    
}
export default Page;