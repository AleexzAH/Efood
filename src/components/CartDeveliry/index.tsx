import { useState } from 'react'

import { useCart } from '../../contexts/CartContexts'
import { CampForm, ContainerAdress, TextForm, Title } from './styles'
import { ButtonActions } from '../CartProducts/styles'

const Delivery = () => {
  const { setCartStep } = useCart()

  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [cep, setCep] = useState('')
  const [number, setNumber] = useState('')
  const [complement, setComplement] = useState('')

  const handleContinue = () => {
    setCartStep('payment')
  }

  return (
    <>
      <Title>Entrega</Title>
      <TextForm>Quem irá receber</TextForm>
      <CampForm value={name} onChange={(event) => setName(event.target.value)} />
      <TextForm>Endereço</TextForm>
      <CampForm value={address} onChange={(event) => setAddress(event.target.value)} />
      <TextForm>Cidade</TextForm>
      <CampForm value={city} onChange={(event) => setCity(event.target.value)} />
      <ContainerAdress>
        <div>
          <TextForm>CEP</TextForm>
          <CampForm value={cep} onChange={(event) => setCep(event.target.value)} />
        </div>
        <div>
          <TextForm>Número</TextForm>
          <CampForm value={number} onChange={(event) => setNumber(event.target.value)} />
        </div>
      </ContainerAdress>
      <TextForm>Complemento</TextForm>
      <CampForm value={complement} onChange={(event) => setComplement(event.target.value)} />

      <ButtonActions onClick={() => setCartStep('cart')}>Voltar para o carrinho</ButtonActions>

      <ButtonActions onClick={handleContinue}>Continuar para pagamento</ButtonActions>
    </>
  )
}

export default Delivery
