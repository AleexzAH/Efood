import Logo from '../../../../components/Logo'
import { useCart } from '../../../../contexts/CartContexts'
import Fundo from '../../../../assests/Backs/fundo.png'
import { Container, Header, ImgFundo, LinkMenu, TextCompras } from './styles'

const HeaderPerfil = () => {
  const { cartQuantity, openCart } = useCart()

  return (
    <Container>
      <ImgFundo src={Fundo} />
      <Header>
        <LinkMenu to={'/'}>Restaurantes</LinkMenu>
        <Logo />
        <TextCompras onClick={openCart}>{cartQuantity} produto(s) no carrinho</TextCompras>
      </Header>
    </Container>
  )
}

export default HeaderPerfil
