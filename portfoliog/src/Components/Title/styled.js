import styled from "styled-components";

export const Title = styled.div`
width: 100%;
height: 880px;

display: flex;
align-items: center;
justify-content: center;
position: absolute;
z-index: 0;

background-color: black;
color: white;
    
div{
    width: 500px;
    height: auto;
    margin: 0 50vw 0 15vw;
    h1{
        font-weight: bold;
        font-size: 3em;
        margin-bottom: 0;
    }    
    h2{
        font-size: 1em;
        margin-top:0;
        text-align: left;
    }
    h3{
        font-weight: normal;
        font-size: 1em;
        margin-top: 50px;
        text-align: left;
    }
}
`;