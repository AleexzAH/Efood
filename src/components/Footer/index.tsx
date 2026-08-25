import Logo from '../Logo'

import Redes from '../../assests/Backs/redessociais.png'
import { RedesSocias, Rodape, Text } from './styles'

const Footer = () => {
  return (
    <Rodape>
      <Logo />
      <RedesSocias src={Redes} alt="Logos das redes sociais" />
      <Text>
        A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela
        entrega, qualidade
        <br /> dos produtos é toda do estabelecimento contratado.
      </Text>
    </Rodape>
  )
}

export default Footer
