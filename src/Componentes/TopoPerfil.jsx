import React from "react"
import styled from "styled-components"
import Logo1 from "../assets/logoTrackIt.png"


export default function TopoPerfil(){
    return(
        <BarraTopo>
        <NomeLogo>TrackIt</NomeLogo>
        <img src={Logo1} alt="erro" />
    </BarraTopo>
    )
}

const BarraTopo = styled.div`
width: 340px;
height: 70px;
display: flex;
justify-content: space-between;
padding-left: 18px;
padding-top: 18px;
padding-right: 18px;
background: #126BA5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

img{
width: 51px;
height: 51px;
background: url(image.png);
border-radius: 98.5px;
}
`
const NomeLogo = styled.h1`
display: flex;
align-items: center;
width: 97px;
height: 49px;
font-family: 'Playball';
font-style: normal;
font-weight: 400;
font-size: 38.982px;
line-height: 49px;
color: #FFFFFF;
`