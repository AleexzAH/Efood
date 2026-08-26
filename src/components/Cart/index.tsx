import { useCart } from '../../contexts/CartContexts'

import CartProducts from '../CartProducts'
import Delivery from '../CartDeveliry'
import Payment from '../CartPayment'

import {
  Overlay,
  CartContainer,
} from './styles'
import CartFinish from '../CartFinish'

const Cart = () => {
  const {
    isCartOpen,
    closeCart,
    cartStep,
  } = useCart()

  if (!isCartOpen) {
    return null
  }

  return (
    <Overlay onClick={closeCart}>
      <CartContainer
        onClick={(event) =>
          event.stopPropagation()
        }
      >
        {cartStep === 'cart' && (
          <CartProducts />
        )}

        {cartStep === 'delivery' && (
          <Delivery />
        )}

        {cartStep === 'payment' && (
          <Payment />
        )}
        {cartStep === 'finish' && (
          <CartFinish/>
        )}
      </CartContainer>
    </Overlay>
  )
}

export default Cart