import type { RestaurantProps } from '../../../../types'
import { Categories, CapaHero, CategoriesDiv, Title } from './styles'

export interface RestaurantInfoProps {
  restaurant: RestaurantProps
}

const Hero = ({ restaurant }: RestaurantInfoProps) => {
  return (
    <div>
      <CapaHero $image={restaurant.image}>
        <CategoriesDiv>
          {restaurant.categories.map((category) => (
            <Categories key={category}>{category}</Categories>
          ))}
        </CategoriesDiv>
        <Title>{restaurant.title}</Title>
      </CapaHero>
    </div>
  )
}

export default Hero
