import {
  CallLink,
  CatalogLink,
  Container,
  Imeges,
  Text,
  TextWrapper,
} from './NoFavoriteCars.styled';

import { AiFillHeart } from 'react-icons/ai';
import img from '../../../images/no_favorite_cars.png';

const NoFavoriteCars = () => {
  return (
    <Container>
      <TextWrapper>
        <Text>
          At the moment, you haven't added any cars to your favorites list. To
          add a car to your favorites,{' '}
          <CatalogLink to="/catalog">go to the car's page</CatalogLink> and
          click the "Add to Favorites" button -{' '}
          <AiFillHeart style={{ color: '#3470FF' }} />.
        </Text>
        <Text>
          We invite you to browse our range and find your perfect car! Our fleet
          offers a wide selection of models and brands to meet any needs and
          preferences. If you have any questions or need additional information,
          please don't hesitate{' '}
          <CallLink href="tel:+380730000000">
            to contact our support team
          </CallLink>
          . We are always ready to help you choose the car that suits you best.
        </Text>
        <Text style={{ fontWeight: 600 }}>
          Thank you for choosing us for your car experience!
        </Text>
      </TextWrapper>

      <Imeges src={img} alt="Black car - No Favorite Cars" />
    </Container>
  );
};

export default NoFavoriteCars;
