import { useParams } from 'react-router-dom'
import { getRestaurantById } from '../../data/index'

import HeaderPerfil from './components/HeaderPerfil'
import Hero from './components/Hero'
import ProductList from './components/ProductList'
import Footer from '../../components/Footer'
import { Container } from '../../styles'

const Perfil = () => {
  const { id } = useParams()
  const restaurant = getRestaurantById(Number(id))

  if (!restaurant) {
    return <h1>Restaurante não encontrado</h1>
  }

  return (
    <>
    <Container>
      <HeaderPerfil />
      <Hero restaurant={restaurant} />
      <ProductList />
    </Container>
      <Footer />
    </>
  )
}

export default Perfil
