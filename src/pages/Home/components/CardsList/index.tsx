import { Container } from './styles'
import Cards from '../Cards'
import { restaurants } from '../../../../data/index'

const CardsList = () => {
  return (
    <Container>
      {restaurants.map((restaurant) => (
        <Cards
          key={restaurant.id}
          image={restaurant.image}
          categories={restaurant.categories}
          title={restaurant.title}
          rating={restaurant.rating}
          description={restaurant.description}
          id={restaurant.id}
        />
      ))}
    </Container>
  )
}

export default CardsList
