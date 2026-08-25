import type { RestaurantProps } from '../../../../types'

import {
  ImagemCard,
  ButtonCard,
  Card,
  CategoriesCard,
  CategoriesDiv,
  DescriptionCard,
  TitleRatingCard,
  Header,
  InfosCard,
  ImageContainer,
} from './styles'

const Cards = ({ categories, description, image, rating, title, id }: RestaurantProps) => {
  return (
    <Card>
      <ImageContainer>
        <ImagemCard src={image} title={title} />
        <CategoriesDiv>
          {categories.map((category) => (
            <CategoriesCard key={category}> {category} </CategoriesCard>
          ))}
        </CategoriesDiv>
      </ImageContainer>
      <InfosCard>
        <Header>
          <TitleRatingCard>{title}</TitleRatingCard>
          <TitleRatingCard>⭐ {rating}</TitleRatingCard>
        </Header>
        <DescriptionCard>{description}</DescriptionCard>
        <ButtonCard to={`/perfil/${id}`}>Saiba mais</ButtonCard>
      </InfosCard>
    </Card>
  )
}

export default Cards
