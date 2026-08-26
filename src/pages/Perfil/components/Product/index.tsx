import type { Product as ProductType } from '../../../../types/product'

import {
  Button,
  Container,
  Descricao,
  Imagem,
  Title,
} from './styles'

interface ProductProps {
  product: ProductType
  onClick: () => void
}

const Product = ({ product, onClick }: ProductProps) => {
  return (
    <Container>
      <Imagem
        src={product.image}
        alt={product.title}
      />

      <Title>{product.title}</Title>

      <Descricao>
        {product.resume}
      </Descricao>

      <Button  onClick={onClick}>
        Mais detalhes
      </Button>
    </Container>
  )
}

export default Product