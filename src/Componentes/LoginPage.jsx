import styled from "styled-components"
import { useEffect, useState } from "react"
import axios from "axios"
import Logo1 from "../assets/logoTrackIt.png"

export default function LoginPage() {   

    /* jgPNp85bnXHfvN5hg3r84SV5 */

    useEffect(() => {
        const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up");

        requisicao.then(resposta => {
            console.log(resposta.data)
        });
    }, []);
    

    return (



        <form>
            <label>
                <ContainerLogin>
                    <img src={Logo1} alt="erro" />
                    <NomeLogo>TrackIt</NomeLogo>
                    <ContainerInputs>
                        <InputEmail type="text" placeholder="Email" name="email" />
                        <InputSenha type="text" placeholder="Senha" name="senha" />
                        <ButtonEntrar>Entrar</ButtonEntrar>
                        {/*<input type="submit" value="Enviar" /> */}
                    </ContainerInputs>
                    <LinkCadastro>Não tem uma conta? Cadastre-se!</LinkCadastro>

                </ContainerLogin>
            </label>

        </form>

    )
}



const ContainerLogin = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
width: 375px;
height: 667px;
background: #FFFFFF;
margin: auto;
padding: 36px;
`
const NomeLogo = styled.h1`
width: 180px;
height: 86.23px;
font-family: 'Playball';
font-style: normal;
font-weight: 400;
font-size: 68.982px;
line-height: 86px;
text-align: center;
color: #126BA5;
`
const ContainerInputs = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
background-color: #FFFFFF;
width: 100%;
height: 200px;

`
const InputEmail = styled.input`
width: 303px;
height: 45px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
color: #DBDBDB;
padding-left: 11px;
`
const InputSenha = styled.input`
width: 303px;
height: 45px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
margin-top: 6px;
padding-left: 11px;

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
color: #DBDBDB;

`
const ButtonEntrar = styled.button`
width: 303px;
height: 45px;
background-color: #52B6FF;
border-radius: 4.63636px;
font-family: 'Lexend Deca';
font-weight: 400;
font-size: 20.976px;
color: #FFFFFF;
margin-top: 6px;

`

/* const Logo = styled.img`
width: 180px;
height: 178.38px;

` */
const LinkCadastro = styled.p`
width: 232px;
height: 17px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 13.976px;
text-align: center;
text-decoration-line: underline;
color: #52B6FF;
`