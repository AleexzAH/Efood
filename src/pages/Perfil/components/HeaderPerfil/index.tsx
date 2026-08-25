import Logo from '../../../../components/Logo'
import { Container, LinkMenu, TextCompras } from './styles'

const HeaderPerfil = () => {
  return (
    <Container>
      <LinkMenu href="">Restaurantes</LinkMenu>
      <Logo />
      <TextCompras>0 produtos adicionados</TextCompras>
    </Container>
  )
}

export default HeaderPerfil
