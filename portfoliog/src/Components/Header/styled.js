import Styled from 'styled-components';

export const Area_Header = Styled.div`
width: 100vw;
min-width: 1200px;
height: 100px;
background-color:transparent;
display: flex;
align-items: center;
justify-content: center;

header{
    display: flex;
    justify-content: center;
}

img{
    width: 80px;
}
.darkmode{
    margin:20px 0 0 90px;
    width: 30px;
    height: 30px;
}

nav ul{
    display: flex;
    justify-content: center;
        li{
            width:fit-content;
            text-align:center;
            font-weight: 800;
            color: #e9723d;
            list-style: none;
            margin: 10px 0 0 20px;
                &:hover{
                    cursor: pointer;
                    border-bottom: solid 2px #e9723d;
        }
                }
        }
}
`;