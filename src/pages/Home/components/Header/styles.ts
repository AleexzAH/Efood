import styled from 'styled-components'
import { theme } from '../../../../styles'
import Fundo from '../../../../assests/Backs/fundo.png'

export const Title = styled.h2`
  font-size: 36px;
  color: ${theme.colors.text};
  font-weight: bold;
  font-family: Roboto;
  margin-top: 60px;
`

export const TopHeader = styled.div`
  width: 100%;
  height: 300px;
  padding: 20px;
  text-align: center;
  background-image: url(${Fundo});
  background-repeat: no-repeat;
  background-size: cover;
`
