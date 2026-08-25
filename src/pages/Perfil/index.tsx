import { useParams } from 'react-router-dom'
import { getRestaurantById } from '../../data/index'

import HeaderPerfil from './components/HeaderPerfil'
import Hero from './components/Hero'

const Perfil = () => {
  const { id } = useParams()
  const restaurant = getRestaurantById(Number(id))

  if(!restaurant) {
    return <h1>Restaurante não encontrado</h1>
  }
  
  return (
    <>
      <HeaderPerfil />
      <Hero restaurant={restaurant} />
    </>
  )
}

export default Perfil
