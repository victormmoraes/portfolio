import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root {
  --background: #181818;
  --white: #FFFFFF;
}

html {
    box-sizing: border-box;
    
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
 }

* {
  margin: 0;
  padding: 0;
}

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    height: 100%;
    margin: 0;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: .6;
    cursor: not-allowed;
  }

  #root {
  height: 100%;
  width: 100%;
}

  #error-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

`

// export const StMainContainer = styled.div`
//   display: block;
//   width: 100vw;
//   height: 100vh;
//   background: linear-gradient(180deg, #181818 0%, #100D0D 100%);
//   padding: 0 110px;
// `