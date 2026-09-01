import type { RestaurantProps } from '../types'
import First from '../assests/restaurants/first.png'
import Second from '../assests/restaurants/second.png'

export const restaurants: RestaurantProps[] = [
  {
    id: 1,
    image: First,
    categories: ['Destaque do dia', 'Japonesa'],
    title: 'Hioki Sushi',
    rating: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
  },
  {
    id: 2,
    image: Second,
    categories: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
  },
  {
    id: 3,
    image: Second,
    categories: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
  },
  {
    id: 4,
    image: Second,
    categories: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
  },
  {
    id: 5,
    image: Second,
    categories: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
  },
  {
    id: 6,
    image: Second,
    categories: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
  },
]

export const getRestaurantById = (id: number) => {
  return restaurants.find((restaurant) => restaurant.id === id)
}
