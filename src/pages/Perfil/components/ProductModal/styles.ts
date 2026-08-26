import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

export const Modal = styled.div`
  position: relative;
  width: 90%;
  max-width: 1000px;
  max-height: 90vh;
  overflow-y: auto;
  background: #E66767;
  padding: 24px;
  display: grid;
  grid-template-columns: 300px 600px;
  color: #FFFFFF;
`

export const Image = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin: 20px 0;
`

export const Quantify = styled.span`
  margin-bottom: 20px;
  font-size: 14px;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 15px;
  border: none;
  background: transparent;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
`

export const ButtonBuy = styled.button`
  border: none;
  color: #E66767;
  font-size: 14px;
  font-weight: bold;
  background-color: #FFEBD9;
  padding: 5px;
  max-width: 280px;
  cursor: pointer;
`