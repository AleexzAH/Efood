import Logo from '../../../../components/Logo'
import { useCart } from '../../../../contexts/CartContexts'
import { Container, Header, LinkMenu, TextCompras } from './styles'


const HeaderPerfil = () => {
  const { cartQuantity, openCart } = useCart()

  return (
    <Container>
      <Header>
        <LinkMenu to={'/'}>Restaurantes</LinkMenu>
        <Logo />
        <TextCompras onClick={openCart}>{cartQuantity} produto(s) no carrinho</TextCompras>
      </Header>
    </Container>
  )
}

export default HeaderPerfil
