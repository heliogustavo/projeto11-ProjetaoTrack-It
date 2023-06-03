import { useState } from 'react';
import GlobalStyle from './Styled/GlobalStyle';
import LoginPage from './Componentes/LoginPage';
import Cadastro from './Componentes/Cadastro';
import Habitos from './Componentes/Habitos';
import TopoPerfil from './Componentes/TopoPerfil';

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GlobalStyle />
{/*       <LoginPage />
      <Cadastro/> */}
      <TopoPerfil/>
      <Habitos/>
    </>
  )
}

