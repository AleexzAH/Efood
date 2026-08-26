import { Title } from '../CartPayment/styles'
import { ButtonActions } from '../CartProducts/styles'
import { Broken, Text } from './styles'

const CartFinish = () => {
  return (
    <>
      <Title>Pedido realizado - ID 20345</Title>
      <Text>
        <Broken>
          Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve,
          será entregue no endereço fornecido.
        </Broken>
        <Broken>
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar
          cobranças extras.
        </Broken>
        <Broken>
          Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo
          assim sua segurança e bem-estar durante a refeição.
        </Broken>
        <Broken>
          Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
        </Broken>
      </Text>
      <ButtonActions> Concluir </ButtonActions>
    </>
  )
}

export default CartFinish
