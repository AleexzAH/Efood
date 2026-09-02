import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { theme } from '../../../../styles'


export const Container = styled.div`
  justify-items: center;
  height: 200px;
  align-items: center;
  position: relative;
  width: 100%;
`
export const ImgFundo = styled.img`
  position: absolute;
  width: 100vw;
  max-height: 200px;
  margin-left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`
export const Header = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 250px 550px 250px;
  justify-items: space-between;
  align-items: center;
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
