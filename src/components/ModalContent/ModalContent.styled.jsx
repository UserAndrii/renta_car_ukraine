import styled from '@emotion/styled';

export const Image = styled.img`
  width: 461px;
  height: 248px;
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

export const CarModel = styled.p`
  color: var(--main-text);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;

  margin-top: 14px;
  margin-bottom: 8px;

  & > span {
    color: var(--accent);
  }
`;

export const Description = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: 1.5;
`;

export const Line = styled.span`
  padding: 0 5px;
  color: rgba(18, 20, 23, 0.1);
`;

export const Text = styled.span`
  display: inline-block;
  color: var(--main-text);
  font-size: 14px;
  line-height: 1.43;
  margin-top: 14px;
`;

export const Subtitle = styled.p`
  color: var(--main-text);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  margin-top: 24px;
  margin-bottom: 8px;
`;

export const ConditionsWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Item = styled.li`
  padding: 7px 14px;
  border-radius: 35px;
  background: #f9f9f9;
`;

export const Value = styled.p`
  color: #363535;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.24px;

  & > span {
    color: var(--accent);
  }
`;

export const RentalBtn = styled.a`
  display: inline-block;
  padding: 12px 50px;
  margin-top: 24px;
  border-radius: 12px;
  background: var(--accent);
  color: var(--btn-text);

  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
`;
