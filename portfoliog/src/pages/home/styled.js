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

/*@media (max-width:1374px){
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
@media (max-width:943px){
    margin-right: 10px;
    width: 120px;
    height: 50px;
    font-size: 12px;
}
@media (max-width:743px){
    margin-right: 10px;
    width: 120px;
    height: 50px;
    font-size: 12px;
}*/
`;