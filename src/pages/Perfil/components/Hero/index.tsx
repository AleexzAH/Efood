import type { RestaurantProps } from '../../../../types'

interface RestaurantInfoProps {
  restaurant: RestaurantProps
}

const Hero = ({ restaurant }: RestaurantInfoProps) => {
  return (
    <div>
      <img src={restaurant.image} />
      <label>{restaurant.categories}</label>
      <h2>{restaurant.title}</h2>
    </div>
  )
}

export default Hero
