import styled from "styled-components";

export const TitleHeader = styled.h2`
    font-size: 20px;
    color: #FFEBD9;
    text-transform: uppercase;
    margin-bottom: 20px;
`

export const CardProduct = styled.div`
    display: grid;
    grid-template-columns: 80px 300px;
    gap: 10px;
    background-color: #FFEBD9;
    color: #E66767;
    padding: 10px;
    position: relative;
    margin: 20px 0;
`
export const Imagem = styled.img`
    height: 80px;
    width: 80px;
    object-fit: cover;
`
export const TitleProduct = styled.h3`
    font-size: 18px;
`

export const PriceLabel = styled.label`
    font-size: 14px;
    margin-top: 20px;
    display: block;
`

export const ButtonExcluir = styled.button`
    border: none;
    background-color: transparent;
    font-size: 16px;
    color: #E66767;
    cursor: pointer;
    position: absolute;
    bottom: 5px;
    right: 10px;
`

export const SumTotal = styled.div`
    color: #FFEBD9;
    justify-content: space-between;
    display: flex;
    margin: 40px 0 20px 0;
    font-weight: bold;
`

export const ButtonActions = styled.button`
    border: none;
    background-color: #FFEBD9;
    font-size: 16px;
    font-weight: bold;
    color: #E66767;
    padding: 5px;
    width: 100%;
    cursor: pointer;
    margin: 5px 0;
`