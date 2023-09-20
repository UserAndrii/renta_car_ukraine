import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 20px 112px;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 28px;
  line-height: 1.6;
  color: var(--main-text);
  margin: 30px 0;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 30px 0;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;

  .icon {
    width: 24px;
    height: 24px;
    color: var(--btn-text);
  }
`;

export const Text = styled.p`
  width: 230px;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: 1.5;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;
  border: 3px solid var(--second-accent);
  border-radius: 10px;
  background-color: var(--accent);
`;

export const Imeges = styled.div`
  max-width: 800px;
  overflow: hidden;
`;

export const SecondTitle = styled.h3`
  font-size: 28px;
  line-height: 1.6;
  color: var(--main-text);
  margin-bottom: 30px;
`;

export const GetList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 15px;
`;

export const Number = styled.h4`
  font-size: 22px;
  line-height: 1.2;
`;
