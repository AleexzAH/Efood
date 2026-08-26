import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2000;
`

export const CartContainer = styled.aside`
  position: absolute;
  background-color: #E66767;
  top: 0;
  right: 0;
  width: 360px;
  height: 100%;
  padding: 24px;
  overflow-y: none;
`

export const CloseButton = styled.button`
  border: none;
  background: none;
  font-size: 28px;
  cursor: pointer;
`


