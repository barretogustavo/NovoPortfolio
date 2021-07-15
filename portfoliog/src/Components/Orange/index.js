import React from 'react';
import styled from 'styled-components';

const Lateral = styled.div`

    background-color: #e9723d;
    width: 44.5%;
    height: 880px;
    float: right;
    position: relative;
    z-index: 1;

    @media (max-width:1640px)
    {
        width:44%;
    }
    @media (max-width:1480px)
    {
        width:43.5%;
    }
    @media (max-width:1235px)
    {
        width:42.4%;
    } 
    @media (max-width:1055px)
    {
        width:41%;
    }
    @media (max-width:875px)
    {
        width:39.5%;
    }
`;

const Orange = ()=>{
    return(
        <div>
            <Lateral />
        </div>
    )
}

export default Orange;