import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';

import {
  Container,
  Head,
  Imeges,
  SliderWrap,
  Text,
  TextWrap,
  Title,
} from './About.styled';

import Clock from '../../../images/clock.png';
import Map from '../../../images/fon_map.png';
import Key from '../../../images/kljuchi_ot_mashiny.png';
import Wheel from '../../../images/wheel.png';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        backgroundColor: '#3470FF',
        width: 30,
        height: 30,
        borderRadius: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 100,
        marginRight: '15px',
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        backgroundColor: '#3470FF',
        width: 30,
        height: 30,
        borderRadius: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 100,
        marginLeft: '15px',
      }}
      onClick={onClick}
    />
  );
}

const About = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Container>
      <Title>OUR SERVICES</Title>
      <Slider {...settings}>
        <div>
          <SliderWrap>
            <Imeges>
              <img src={Clock} alt="clock" />
            </Imeges>
            <TextWrap>
              <Head>24/7 work around the clock</Head>
              <Text>
                24/7 support guarantees convenience and reliability in the car
                rental process. We are always ready to help you choose the right
                car and provide full advice on its use.
              </Text>
            </TextWrap>
          </SliderWrap>
        </div>
        <div>
          <SliderWrap>
            <Imeges>
              <img src={Key} alt="key" />
            </Imeges>
            <TextWrap>
              <Head>AUTO TRANSMISSION TAKES UP TO 8 MINUTES</Head>
              <Text>
                Fast delivery of the car allows you to save your time and
                quickly start your business. This is especially convenient for
                busy people and helps avoid delays in travel planning.
              </Text>
            </TextWrap>
          </SliderWrap>
        </div>
        <div>
          <SliderWrap>
            <Imeges>
              <img src={Wheel} alt="wheel" />
            </Imeges>
            <TextWrap>
              <Head>CAR DELIVERY AND PICKUP AT THE ADDRESS</Head>
              <Text>
                Delivery to your address or to any other place for you makes the
                rental process more convenient and fast. You can not waste time
                visiting the office, but order a car with a few clicks. In
                addition, we will also collect the car at the end of the rental,
                which saves you even more time and effort.
              </Text>
            </TextWrap>
          </SliderWrap>
        </div>
        <div>
          <SliderWrap>
            <Imeges>
              <img src={Map} alt="map" />
            </Imeges>
            <TextWrap>
              <Head>CAR RENTAL WITH DEPARTURE ABROAD</Head>
              <Text>
                You can not only freely move around Ukraine, but also beyond it,
                without having to look for another car rental company in other
                countries. You only need a valid foreign passport.
              </Text>
            </TextWrap>
          </SliderWrap>
        </div>
      </Slider>
    </Container>
  );
};

export default About;
