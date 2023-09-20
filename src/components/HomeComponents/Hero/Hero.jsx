import { Button, Check, Container, Imeges, Item, List, Location, Title, Wrapper } from './Hero.styled';
import HeroImg from '../../../images/kia_hero.png'

const Hero = () => {
  return (
    <Container>
      <Title>DAILY RENTAL OF CARS IN UKRAINE</Title>
      <Location>Kyiv, Lviv, Dnipro, Odesa, Kharkiv, Vinnytsia</Location>
      <Wrapper>
        <List>
          <Item>
            <Check /> 137 new cars in the fleet
          </Item>
          <Item>
            <Check /> Full insurance (CASCO, OSAGO)
          </Item>
          <Item>
            <Check /> Car delivery to the address
          </Item>
          <Item>
            <Check /> Car transfer takes up to 8 minutes
          </Item>
          <Item>
            <Check /> It is possible to go abroad
          </Item>
          <Item>
            <Check /> 24/7 support
          </Item>
          <Item>
            <Button>BOOK WITH 10% DISCOUNT</Button>
          </Item>
        </List>
        <Imeges>
          <img src={HeroImg} alt="" />
        </Imeges>
      </Wrapper>
    </Container>
  );
}

export default Hero
