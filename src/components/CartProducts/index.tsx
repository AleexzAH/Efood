import { useCart } from '../../contexts/CartContexts'
import { FaRegTrashAlt } from 'react-icons/fa'

import {
  ButtonActions,
  ButtonExcluir,
  CardProduct,
  Imagem,
  PriceLabel,
  SumTotal,
  TitleHeader,
  TitleProduct,
} from './styles'

const CartProducts = () => {
  const { cart, removeFromCart, setCartStep } = useCart()

  const total = cart.reduce((acc, product) => acc + product.price, 0)

  return (
    <>
      <TitleHeader>Seu carrinho</TitleHeader>

      {cart.map((product) => (
        <CardProduct key={product.id}>
          <Imagem src={product.image} alt={product.title} />
          <div>
            <TitleProduct>{product.title}</TitleProduct>

            <PriceLabel>R$ {product.price.toFixed(2)}</PriceLabel>

            <ButtonExcluir onClick={() => removeFromCart(product.id)}>
              <FaRegTrashAlt />
            </ButtonExcluir>
          </div>
        </CardProduct>
      ))}
      <SumTotal>
        <p>Valor total</p>
        <p> R$ {total.toFixed(2)}</p>
      </SumTotal>

      <ButtonActions onClick={() => setCartStep('delivery')} disabled={cart.length === 0}>
        Continuar para entrega
      </ButtonActions>
    </>
  )
}

export default CartProducts
