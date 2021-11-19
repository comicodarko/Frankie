import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {    
    --black: #282a36;
    --blue: #8be9fd;
    --gray: #bfbfbf;
    --green: #50fa7b;
    --pink: #ff80bf;
    --purple: #bd93f9;
    --red: #ff5555;
    --yellow: #f1fa8c;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* font-family: 'Gemunu Libre', sans-serif; */
    font-family: 'Press Start 2P', cursive;
    color: #fff;
  }
  
  html {
    @media (max-width: 1080px){
      font-size: 93.75%;
    }
    @media (max-width: 720px){
      font-size: 87.5%;
    }
  }

  body {
    background-color: var(--black);
    -webkit-font-smoothing: antialiased;
  }

  #app {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .animationLeft {
    opacity: 0;
    transform: translateX(-20px);
    animation: animationShow 1.3s forwards; 
    border-radius: 5px;
  }

  .animationRight {
    opacity: 0;
    transform: translateX(20px);
    animation: animationShow 1.3s forwards; 
    border-radius: 5px;
  }

  @keyframes animationShow {
    to {
      opacity: 1;
      transform: initial;
    }
  }

  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: #0005;
    border-radius: 100px;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--purple);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--pink);
  }
`