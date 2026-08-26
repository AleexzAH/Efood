import { useState } from 'react'

import { useCart } from '../../contexts/CartContexts'
import { Container, ContainerData, Title } from './styles'
import { CampForm, ContainerAdress, TextForm } from '../CartDeveliry/styles'
import { ButtonActions } from '../CartProducts/styles'

const Payment = () => {
  const { cart, setCartStep } = useCart()

  const [holderName, setHolderName] = useState('')

  const [cardNumber, setCardNumber] = useState('')

  const [cvv, setCvv] = useState('')

  const [month, setMonth] = useState('')

  const [year, setYear] = useState('')

  const total = cart.reduce((acc, product) => acc + product.price, 0)

  const handleContinue = () => {
    setCartStep('finish')
  }

  return (
    <Container>
      <Title>Pagamento - Valor a pagar R$ {total.toFixed(2)}</Title>
      <TextForm>Nome do cartão</TextForm>
      <CampForm value={holderName} onChange={(event) => setHolderName(event.target.value)} />
      <ContainerData>
        <div>
          <TextForm>Número do cartão</TextForm>
          <CampForm value={cardNumber} onChange={(event) => setCardNumber(event.target.value)} />
        </div>
        <div>
          <TextForm>CVV</TextForm>
          <CampForm value={cvv} onChange={(event) => setCvv(event.target.value)} />
        </div>
      </ContainerData>
      <ContainerAdress>
        <div>
          <TextForm>Mês de vencimento</TextForm>
          <CampForm value={month} onChange={(event) => setMonth(event.target.value)} />
        </div>
        <div>
          <TextForm>Ano de vencimento</TextForm>
          <CampForm value={year} onChange={(event) => setYear(event.target.value)} />
        </div>
      </ContainerAdress>

      <ButtonActions onClick={() => setCartStep('delivery')}>
        Voltar para a edição do endereço
      </ButtonActions>

      <ButtonActions onClick={handleContinue}>Finalizar pagamento</ButtonActions>
    </Container>
  )
}

export default Payment
