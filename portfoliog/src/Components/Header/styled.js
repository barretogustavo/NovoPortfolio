import Styled from 'styled-components';

export const Area_Header = Styled.div`
width: 100vw;
//min-width: 1200px;
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
    width: 1200px;
    display: flex;
    justify-content: center;
    align-items: center;
}

img{
    width: 80px;
}
.logotipo{
    margin:0 35% 0 35%; 
    float:left;
}
.darkmode{
    margin:20px 44% 0 35%;
    width: 30px;
    height: 30px;
        &:hover{
            cursor: pointer;
            width: 40px;
            height: 40px;
            transition:0.1s;
            margin-left:34.1%;
        }
}
nav{
    width:500px;
    margin-left:60px;
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
            margin: 10px 0 0 15%;
                &:hover{
                    cursor: pointer;
                    border-bottom: solid 2px #e9723d;
                    margin-top:8px;
                }
        }
    }
}
`;