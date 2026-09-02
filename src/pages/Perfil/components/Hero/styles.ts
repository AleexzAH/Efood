import styled from 'styled-components'

export const CapHeroWrapper = styled.div`
  position: relative;

  height: 280px;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
    max-height: 280px;
    width: 100vw;
    margin-left: 50%;
    transform: translateX(-50%);
  }
`
export const CapaHero = styled.img<{ $image: string }>`
  background-image: url(${({ $image }) => $image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  object-fit: cover;
  width: 100vw;
  margin-left: 50%;
  transform: translateX(-50%);
`

export const CategoriesDiv = styled.div`
  position: absolute;
  background-color: transparent;
  top: 16px;
  
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
  
  bottom: 16px;
  z-index: 2;
`
export const HeroInfos = styled.div`
  margin: 0 auto;
`