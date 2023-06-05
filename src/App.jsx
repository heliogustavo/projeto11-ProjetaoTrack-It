import { useState } from 'react';
import GlobalStyle from './Styled/GlobalStyle';
import LoginPage from './Componentes/LoginPage';
import Cadastro from './Componentes/Cadastro';
import Habitos from './Componentes/Habitos';
import TopoPerfil from './Componentes/TopoPerfil';
import Hoje from './Componentes/Hoje';
import Rodape from './Componentes/Rodape';

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GlobalStyle />
{/*       <LoginPage />
      <Cadastro/> 
            <Habitos/>*/}
      <TopoPerfil/>
      <Hoje/>
      <Rodape/>
    </>
  )
}

