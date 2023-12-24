import styled from '@emotion/styled';
import { MdAddAPhoto } from 'react-icons/md';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px 20px;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 128px 50px;

    .full_width {
      grid-column: span 2;
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 14px;
  overflow: hidden;
  width: 280px;
  height: 180px;

  margin: 0 auto;
  background-color: aliceblue;

  @media screen and (min-width: 768px) {
    width: 640px;
    height: 300px;
  }

  @media screen and (min-width: 1200px) {
    width: 800px;
    height: 320px;
  }
`;

export const AddFotoIcon = styled(MdAddAPhoto)`
  position: absolute;

  top: 20px;
  right: 20px;
  width: 20px;
  height: 20px;

  cursor: pointer;
  color: var(--accent);

  @media screen and (min-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

export const Image = styled.img`
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

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextareaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 100%;

  @media screen and (min-width: 768px) {
    /* flex-direction: row; */
  }
`;

export const Label = styled.label`
  color: var(--accent);
  font-weight: 600;
  font-size: 16px;
  line-height: 1.43;

  & > span {
    color: var(--main-text);
    font-size: 9px;
  }

  @media screen and (min-width: 768px) {
    & > span {
      font-size: 12px;
    }
  }
`;

export const Input = styled.input`
  color: var(--main-text);
  font-size: 16px;
  line-height: 1.43;

  min-width: 280px;
  height: 50px;
  padding: 12px 16px;

  border-radius: 4px;
  border: 2px solid rgba(33, 33, 33, 0.2);
  transition: border var(--transition);

  &:focus,
  &:hover {
    border: 2px solid var(--accent);
    outline: transparent;
  }

  @media screen and (max-width: 767px) {
    max-width: 280px;
  }

  @media screen and (min-width: 768px) {
    width: 320px;
  }
`;

export const Select = styled.select`
  color: var(--main-text);
  font-size: 16px;
  line-height: 1.43;

  height: 50px;
  padding: 12px 16px;

  border-radius: 4px;
  border: 2px solid rgba(33, 33, 33, 0.2);
  transition: border var(--transition);

  &:focus,
  &:hover {
    border: 2px solid var(--accent);
    outline: transparent;
  }

  @media screen and (max-width: 767px) {
    max-width: 280px;
  }

  @media screen and (min-width: 768px) {
    width: 320px;
  }
`;

export const Option = styled.option`
  position: relative;
  color: var(--main-text);
  font-size: 16px;
  line-height: 1.43;

  :hover {
    background-color: var(--accent);
  }
`;

export const Textarea = styled.textarea`
  color: var(--main-text);
  font-size: 16px;
  line-height: 1.43;

  resize: none;
  padding: 12px 16px;

  border-radius: 4px;
  border: 2px solid rgba(33, 33, 33, 0.2);
  transition: border var(--transition);

  &:focus,
  &:hover {
    border: 2px solid var(--accent);
    outline: transparent;
  }

  @media screen and (max-width: 767px) {
    width: 280px;
    height: 120px;
  }

  @media screen and (min-width: 768px) {
    width: 320px;
    height: 160px;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const Btn = styled.button`
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.43;

  min-width: 120px;
  height: 50px;
  margin-top: 30px;
  cursor: pointer;

  border: none;
  border-radius: 12px;
  background: var(--accent);
  color: var(--btn-text);
  transition: background var(--transition);

  :hover {
    background: var(--hover);
  }

  @media screen and (min-width: 768px) {
    margin-top: 110px;
  }
`;
