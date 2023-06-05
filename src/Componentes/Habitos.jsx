import React from "react";
import styled from "styled-components";

export default function Habitos() {

    return (
        <ContainerGeral>

            <BarraADDHabito>
                <MeusHabitosText>Meus Hábitos</MeusHabitosText>
                <BotaoADDHabito>+</BotaoADDHabito>
            </BarraADDHabito>
            <CaixaADDHabito>
                <InputNomeDoHabito type="text" placeholder="Nome do Hábito" name="habito" />
                <ContainerButtons>
                    <button>D</button>
                    <button>S</button>
                    <button>T</button>
                    <button>Q</button>
                    <button>Q</button>
                    <button>S</button>
                    <button>S</button>
                </ContainerButtons>
                <BotaoCancelar>Cancelar</BotaoCancelar>
                <BotaoSalvar>Salvar</BotaoSalvar>
            </CaixaADDHabito>
            <ParagrafotH3>Você ainda não tem nenhum Hábito cadastrado ainda. Adicione um hábito para começar a trackear!</ParagrafotH3>
        </ContainerGeral>
    )
}

const ContainerGeral = styled.div`
display: flex;
flex-direction: column;
width: 375px;
height: 667px;
background: #F2F2F2;
`
const FotoPerfil = styled.image`
width: 51px; 
height: 51px;
background: url(image.png);
border-radius: 98.5px;
`
const BarraADDHabito = styled.div`
display: flex;
align-items: center;
width: 375px;
height: 29px;
padding-top: 25px;
padding-bottom: 25px;
`
const MeusHabitosText = styled.h2`
padding-left: 18px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;
color: #126BA5;
`
const BotaoADDHabito = styled.button`
width: 40px;
height: 35px;
background: #52B6FF;
border-radius: 4.63636px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 26.976px;
margin-left: 145px ;
color: #FFFFFF;
`
const CaixaADDHabito = styled.div`
flex-direction: column;
width: 340px;
height: 180px;
background: #FFFFFF;
border-radius: 5px;
margin-left: 16px;
margin-bottom: 15px;
`
const InputNomeDoHabito = styled.input`
width: 303px;
height: 45px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
margin-top: 6px;
margin-left: 9px;
padding-left: 11px;
`
const ContainerButtons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 200px;
    height: 34px;
    margin-left: 9px;
    margin-top: 10px;
`
const button = styled.button`
width: 30px;
height: 30px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
color: #DBDBDB;


/* background: #CFCFCF;
border: 1px solid #CFCFCF;
border-radius: 5px;
color: #FFFFFF; */

`
//####################################################################
const BotaoCancelar = styled.button`
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
const BotaoSalvar = styled.button`
width: 84px;
height: 35px;
background: #52B6FF;
border-radius: 4.63636px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 15.976px;
line-height: 20px;
text-align: center;
color: #FFFFFF;
`

const ParagrafotH3 = styled.h3`
width: 338px;
height: 74px;
padding-left: 18px;
padding-top: 25px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
color: #666666;
`


