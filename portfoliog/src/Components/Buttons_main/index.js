import React from 'react';
import styled from 'styled-components';

const Button_main = styled.button`
color: #e9723d;
background-color: transparent;

border:3px solid #e9723d ;
border-radius: 15px;

width: 190px;
height: 50px;
margin: 60px 50px 0 0;

font-size: 18px;

    &:hover{
        cursor: pointer;
        background-color: #e9723d;
        color: black;
    }


@media (max-width:1374px){
    margin-right: 40px;
}
@media (max-width:1317px){
    margin-right: 30px;
}
@media (max-width:1258px){
    margin-right: 20px;
    width: 160px;
    height: 50px;
}
@media (max-width:1030px){
    margin-right: 10px;
    width: 160px;
    height: 50px;
}
@media (max-width:972px){
    margin-right: 10px;
    width: 155px;
    height: 50px;
    font-size: 17px;
}

`;

const ButtonMain = ()=>{
    return(
        <>
        <Button_main>Entrar em contato</Button_main>
        <Button_main>Download CV</Button_main>
        </>
    )
}

export default ButtonMain;