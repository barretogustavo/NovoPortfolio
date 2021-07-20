import styled from 'styled-components'

export const AreaMain = styled.div`

.div_Button_responsive{
    display: flex;
    justify-content: space-between;
    @media (max-width:634px){
        display: block;
    }
}

`;

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
    
.div_Title{
    width: 500px; /*auto*/
    height: auto;
    margin: 0 50vw 0 18vw; /*0 50vw 0 15vw;*/ 
    
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
    @media(max-width:599px){
        margin: 0 50vw 0 7vw;

        h1{
            font-size: 1.9em;
            font-weight: bolder;
        }
        h2{
            font-size: .8em;
        }
        h3{
            font-size: .8em;
        }
        }
}
`;

export const Lateral = styled.div`

    background-color: #e9723d;
    width: 47.3vw; /*47.3%; */
    height: 880px;
    float: right;
    position: relative;
    z-index: 1;

    @media (max-width:1622px)
    {
        width:46.8vw;
    }
    @media (max-width:1366px)
    {
        width:46.2vw;
    }
    @media (max-width:1134px)
    {
        width:45.3vw;
    }
    @media (max-width:896px)
    {
        width:44.2vw;
    }
    @media (max-width:746px)
    {
        width:43vw;
    }

`;

export const Button_main = styled.button`
color: #e9723d;
background-color: transparent;
border:3px solid #e9723d ;
border-radius: 15px;
width: 190px;
height: 50px;
margin: 60px 0 0 0; /*60px 50px 0 0; */
font-size: 18px;

    &:hover{
        cursor: pointer;
        background-color: #e9723d;
        color: black;
    }
@media(max-width:1200px){
    width:160px;
}
@media(max-width:1016px){
    width:140px;
    font-size: 13px;
    font-weight: bold;
}
@media(max-width:882px){
    width:120px;
}
@media(max-width:760px){
    width:100px;
}
@media (max-width:634px){
        width: 190px;
        margin-top:15px ;
    }
`;

export const Section = styled.section`
display: flex;
justify-content: center;
align-items: center;
width: 100vw;

.Section_width{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 1152px;
    height: auto;
}
`;

export const Slider = styled.div`
overflow: hidden;
display: flex;
align-items: center;
border: 5px solid #e9723d;
border-radius: 25px;


.slider_width{
    width: calc(900px * 3);
    height: 600px;
    display: flex;
    align-items: center;
    transition: all ease 0.3s;
}

img{
    width: 900px;
    height: 600px;
}

button{
        
        border: none;
        border-radius: 50%;
        
        background-color: #e9723d;
        color: black;
        
        font-size: 40px;
        width: 60px;
        height: 60px;
               
        position: absolute;
        float: right;
        
    }
`;

export const Section_title = styled.h1`
width: 100%;
height: 50px;
margin: 30px 0 0 0;
text-align: center;
color: #e9723d;
font-size: 30px;
`;