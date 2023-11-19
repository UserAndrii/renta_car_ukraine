import styled from '@emotion/styled';
import { MdOutlineEdit, MdOutlineDelete } from 'react-icons/md';

export const Item = styled.li`
  border-radius: 12px;
`;

export const ImageContainer = styled.div`
  position: relative;
  border-radius: 14px;
  overflow: hidden;

  :hover {
    box-shadow: 0 0 10px 5px rgba(128, 128, 128, 0.5);

    .box {
      transform: translate(-50%, -50%);
    }
  }
`;

export const Image = styled.img`
  height: 268px;
  object-fit: cover;
  background-position: center;
  background-size: cover;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    #f3f3f2;
`;

export const IconContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: end;

  gap: 50px;
  width: 100%;
  height: 100%;
  padding-bottom: 20px;

  top: 50%;
  left: 50%;
  transform: translate(-150%, -50%);

  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    #ffffff 70%
  );

  transition: transform var(--transition);
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

export const EditCar = styled(MdOutlineEdit)`
  cursor: pointer;
  color: var(--accent);
  width: 80px;
  height: 80px;
`;

export const DeleteCar = styled(MdOutlineDelete)`
  cursor: pointer;
  color: var(--accent);
  width: 80px;
  height: 80px;
`;
