import styled from 'styled-components'
import { theme } from '../../../../styles'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`

export const LinkMenu = styled.a`
  text-decoration: none;
  font-size: 18px;
  color: ${theme.colors.text};
  font-weight: 900;
`

export const TextCompras = styled.a`
  text-decoration: none;
  font-size: 18px;
  color: ${theme.colors.text};
  font-weight: 900;
`
