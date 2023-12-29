import { Dot, LoadingContainer, LoadingWrapper } from './Loader.styled';

const Loader = () => {
  const colors = ['#7ef9ff', '#89cff0', '#4682b4', '#0f52ba', '#000080'];

  return (
    <LoadingContainer>
      <LoadingWrapper>
        {colors.map((color, index) => (
          <Dot key={index} color={color} delay={`${index * 0.2}s`} />
        ))}
      </LoadingWrapper>
    </LoadingContainer>
  );
};

export default Loader;
