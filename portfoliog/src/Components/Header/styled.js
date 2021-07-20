import Styled from 'styled-components';

export const Area_Header = Styled.div`
width: 100vw;
height: 100px;
    background-color:transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        z-index:2;

ul .project_word{
    color: black;
        &:hover{
            border-bottom:solid 2px black;
        }
}

header{
    width: 60%; /*1200px*/
    min-width:600px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    @media(max-width:599px){
        min-width: 300px;
    }
}

img{
    width: 80px;
}
.logotipo{
    margin:0 0 0 0;  /*0 35% 0 35%;*/
}
.darkmode{
    margin:12px 0 0 60px; /*20px 44% 0 35%;*/
    width: 60px;
    height: 60px;
        &:hover{
            cursor: pointer;
            transform: rotate(720deg);
            transition:2s;
        }
        @media(max-width:400px){
            width: 40px;
            height: 40px;
        }
}
nav{
    width:500px;
    margin-left:0; /*60px*/

    @media(max-width:599px){
        display: none; /*Libera o burguer menu*/
    }
}
nav ul{
    display: flex;
    justify-content: center;
        li{
            width:fit-content;
            text-align:center;
            font-weight: 900;
            font-size:20px;
            color: #e9723d;
            list-style: none;
            margin: 10px 0 0 20px;
                &:hover{
                    cursor: pointer;
                    border-bottom: solid 2px #e9723d;
                    margin-top:8px;
                }
        }
    }
}
`;