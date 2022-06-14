import React from 'react'; //Importando react
import ReactDOM from 'react-dom/client'; //Importando DOM
import { ThemeProvider } from 'styled-components'; //Importar padrão esse Theme Provider e envolver toda a aplicação nele
import GlobalStyles from './styles/global'; // Pegando aquele CSS em que consta todo o estilo global

import theme from './styles/theme'; // Importando as cores da aplicação

import { New } from './pages/New'; // Improtando a página Details

ReactDOM.createRoot(document.getElementById('root')).render( // Função para renderizar e jogar como SPA lá no HTML
  <React.StrictMode>
    <ThemeProvider theme = { theme }> 
      <GlobalStyles />
      <New />
    </ThemeProvider>
  </React.StrictMode>
)
