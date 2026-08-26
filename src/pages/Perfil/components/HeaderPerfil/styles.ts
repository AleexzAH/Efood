import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { theme } from '../../../../styles'
import Fundo from '../../../../assests/Backs/fundo.png'

export const Container = styled.div`
  justify-items: center;
  height: 200px;
  background-image: url(${Fundo});
  align-items: center;
`
export const Header = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`
export const LinkMenu = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  color: ${theme.colors.text};
  font-weight: 900;
`

export const TextCompras = styled.button`
  text-decoration: none;
  font-size: 18px;
  color: ${theme.colors.text};
  font-weight: 900;
  background-color: transparent;
  border: none;
  cursor: pointer;
`
