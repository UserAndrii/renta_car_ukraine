import styled from '@emotion/styled';

export const Item = styled.li`
  position: relative;
  border-radius: 12px;

  .heart {
    position: absolute;
    top: 14px;
    right: 14px;
    cursor: pointer;

    width: 18px;
    height: 18px;
    color: #ffffffcc;
    transition: transform var(--transition);

    :hover,
    :focus {
      transform: scale(1.3);
    }
  }

  .heart-active {
    color: var(--accent);
  }

  .none {
    display: none;
  }
`;

export const Image = styled.img`
  height: 268px;
  object-fit: cover;
  border-radius: 14px;
  background-position: center;
  background-size: cover;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    #f3f3f2;
`;

export const NameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 8px 8px 0;
`;

export const NameCar = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const ModelCar = styled.span`
  color: var(--accent);
`;

export const Description = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: 1.5;
`;

export const Line = styled.span`
  padding: 0 4px;
  color: rgba(18, 20, 23, 0.1);
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  color: var(--btn-text);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;

  width: 274px;
  height: 44px;
  margin-top: 28px;

  cursor: pointer;
  border: none;
  border-radius: 12px;
  background-color: var(--accent);
  transition: background-color var(--transition);

  :hover,
  :focus {
    background-color: var(--hover);
  }
`;
