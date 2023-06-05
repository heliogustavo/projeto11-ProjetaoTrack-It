import React from "react"
import styled from "styled-components"



export default function Rodape() {
    return (
            <BotoesRodape>
                    <BotaoDeAcessoRodape>Hábitos</BotaoDeAcessoRodape>
                    <BotaoDeAcessoRodape>Histórico</BotaoDeAcessoRodape>
            </BotoesRodape>
    )

}





const BotoesRodape = styled.div`
display: flex;
justify-content: space-around;
width: 375px;
height: 70px;
background: #FFFFFF;
   position:fixed;
   left:0px; 
   top: 685px;
`
const BotaoDeAcessoRodape = styled.button`
border: none; 
background: rgba(0, 0, 0, 0);
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
text-align: center;
color: #52B6FF;
`