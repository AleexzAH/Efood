import type { Product } from '../../../../types/product'
import { useCart } from '../../../../contexts/CartContexts'

import {
  Overlay,
  Modal,
  Image,
  Title,
  Description,
  Quantify,
  CloseButton,
  Infos,
  ButtonBuy,
} from './styles'

interface ProductModalProps {
  product: Product
  onClose: () => void
}

const ProductModal = ({ product, onClose }: ProductModalProps) => {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(product)
    onClose()
  }
  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(event) => event.stopPropagation()}>
        <CloseButton onClick={onClose}>X</CloseButton>

        <Image src={product.image} alt={product.title} />
        <Infos>
          <Title>{product.title}</Title>

          <Description>{product.description}</Description>
          <Quantify>{product.quantify}</Quantify>
          <ButtonBuy onClick={handleAddToCart}>
            Adicionar ao carrinho - R$ {product.price}
          </ButtonBuy>
        </Infos>
      </Modal>
    </Overlay>
  )
}

export default ProductModal
