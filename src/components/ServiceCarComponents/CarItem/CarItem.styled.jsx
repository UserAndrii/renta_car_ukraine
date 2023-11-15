import styled from '@emotion/styled';
import { MdOutlineEdit, MdOutlineDelete } from 'react-icons/md';

export const Item = styled.li`
  border-radius: 12px;
`;

export const ImageContainer = styled.div`
  position: relative;
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

export const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* display: none; */
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
  width: 30px;
  height: 30px;
`;

export const DeleteCar = styled(MdOutlineDelete)`
  width: 30px;
  height: 30px;
`;
