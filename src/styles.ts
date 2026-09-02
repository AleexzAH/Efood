import { createGlobalStyle, styled } from 'styled-components'

export const theme = {
  colors: {
    text: '#E66767',
  },
}

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0; 
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #fff5eb;
  }
`
export const Container = styled.div`
  max-width: 1050px;
  margin: 0 auto;
`
