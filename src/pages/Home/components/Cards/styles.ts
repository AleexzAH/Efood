import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { theme } from '../../../../styles'

export const Card = styled.div`
  position: relative;
  width: 500px;
  align-content: center;
`
export const ImageContainer = styled.div`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
    max-height: 220px;
  }
`

export const ImagemCard = styled.img`
  width: 100%;
  max-height: 220px;
  object-fit: cover;
`

export const TitleRatingCard = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: ${theme.colors.text};
`

export const DescriptionCard = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${theme.colors.text};
  margin: 16px 0px;
`
export const CategoriesDiv = styled.div`
  position: absolute;
  width: 100%;
  background-color: transparent;
  top: 10px;
  right: 10px;
  display: flex;
  gap: 20px;
  justify-content: flex-end;
`

export const CategoriesCard = styled.span`
  color: #ffebd9;
  font-size: 12px;
  font-weight: bold;
  padding: 10px;
  background-color: #e66767;
  z-index: 2;
`

export const ButtonCard = styled(Link)`
  color: #ffebd9;
  font-size: 14px;
  font-weight: bold;
  padding: 6px;
  background-color: #e66767;
  cursor: pointer;
  text-decoration: none;
`

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
export const InfosCard = styled.div`
  padding: 10px;
  border-right: 1px solid #e66767;
  border-left: 1px solid #e66767;
  border-bottom: 1px solid #e66767;
  background-color: #fff;
  margin-top: -5px;
`
