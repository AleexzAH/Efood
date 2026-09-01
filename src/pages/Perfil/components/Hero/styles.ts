import styled from 'styled-components'

export const CapaHero = styled.div<{ $image: string }>`
  position: relative;

  background-image: url(${({ $image }) => $image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  height: 280px;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
    max-height: 280px;
  }
`
export const CategoriesDiv = styled.div`
  position: absolute;
  background-color: transparent;
  top: 16px;
  left: 230px;
  display: flex;
  column-gap: 20px;
`
export const Categories = styled.label`
  font-size: 32px;
  color: #ffffff;
  z-index: 2;
  font-weight: 100;
`
export const Title = styled.h2`
  position: absolute;
  color: #ffffff;
  font-size: 32px;
  font-weight: 900;
  left: 230px;
  bottom: 16px;
  z-index: 2;
`
