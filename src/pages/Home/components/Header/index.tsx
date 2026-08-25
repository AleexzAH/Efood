import { Title, TopHeader } from './styles'
import Logo from '../../../../components/Logo'

const Header = () => {
  return (
    <TopHeader>
      <Logo />
      <Title>
        Viva experiências gastronômicas
        <br /> no conforto da sua casa
      </Title>
    </TopHeader>
  )
}

export default Header
