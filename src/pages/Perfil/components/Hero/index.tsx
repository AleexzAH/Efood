import type { RestaurantProps } from '../../../../types'
import { Categories, CapaHero, CategoriesDiv, Title, CapHeroWrapper, HeroInfos } from './styles'

export interface RestaurantInfoProps {
  restaurant: RestaurantProps
}

const Hero = ({ restaurant }: RestaurantInfoProps) => {
  return (
    <div>
      <CapHeroWrapper>
        <CapaHero $image={restaurant.image} />
        <HeroInfos>
          <CategoriesDiv>
            {restaurant.categories.map((category) => (
              <Categories key={category}>{category}</Categories>
            ))}
          </CategoriesDiv>
          <Title>{restaurant.title}</Title>
        </HeroInfos>
      </CapHeroWrapper>
    </div>
  )
}

export default Hero
