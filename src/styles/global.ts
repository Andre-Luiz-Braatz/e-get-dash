import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #121214;
    --grey-600: #c3c5c9;
    --grey-800: #28353d;
    --grey-900: #201F24;
    --blue: #5429CC;
    --blue-light: #6933FF;
    --blue-e-mail: #3C79DC;
    --green: #33CC95;
    --red: #E62E4D;  
    --shape: #FFFFFF;
    --text-title: #363F5F;
    --text-body: #969CB3;
    --text-information: #FFFFFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px){
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
    height: 100%;
  }

  body {
    height: 100%;
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins','Roboto', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
    &:hover {
      filter: brightness(0.7);
    } 
    &:disabled {
      filter: brightness(0.5);
    } 
  }

  img {
    -webkit-user-select: none;
    -webkit-user-drag: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
  }

  [disabled] {
    filter: brightness(0.5);
    cursor: not-allowed;
  }
  .react-modal-overlay { 
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }
  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter 0.2s;
    &:hover{
      filter: brightness(0.7)
    }
  }
  #root {
    height: 100%;
  }
  .App {
    height: 100%;
  }

  
`;
