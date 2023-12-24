import { useRef, useState } from 'react';
import { useFormik } from 'formik';
import { useLocation, useNavigate } from 'react-router-dom';

import {
  useCreateNewCarMutation,
  useUpdateRentCarMutation,
} from 'redux/carsApi';

import { getInitialValue } from './getInitialValue';
import { buildFormData } from './buildFormData';
import { typeCarList } from './typeList';

import {
  AddFotoIcon,
  Btn,
  BtnWrapper,
  Form,
  Image,
  ImageContainer,
  Input,
  InputGroup,
  InputWrapper,
  Label,
  Option,
  Select,
  Textarea,
  TextareaWrapper,
} from './CarForm.styled';
import noImages from '../../../images/no-img.jpg';

const CarForm = () => {
  const navigate = useNavigate();
  const carInputRef = useRef(null);
  const { pathname, state: car } = useLocation();

  const [createNewCar] = useCreateNewCarMutation();
  const [updateRentCar] = useUpdateRentCarMutation();
  const [carPreviewUrl, setCarPreviewUrl] = useState('');
  const [typeList] = useState(typeCarList);

  const formik = useFormik({
    initialValues: getInitialValue(car),
    onSubmit: async data => {
      try {
        const formData = buildFormData(data);

        if (pathname === '/service/add_new_car') {
          await createNewCar(formData).unwrap();
        } else {
          await updateRentCar({ id: car._id, data: formData }).unwrap();
        }

        navigate('/service');
      } catch (error) {
        console.log('ERROR: ', error);
      }
    },
  });

  const handleIconOnClick = e => {
    const file = e.target.files[0];

    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setCarPreviewUrl(previewUrl);
      formik.setFieldValue('img', file);
    } else {
      setCarPreviewUrl(car?.img);
      formik.setFieldValue('img', car?.img);
    }
  };

  return (
    <Form onSubmit={formik.handleSubmit} autocomplete="off">
      <ImageContainer className="full_width">
        <Image
          src={carPreviewUrl || car?.img || noImages}
          alt={formik.values.description || car?.description}
        />
        <AddFotoIcon onClick={() => carInputRef.current.click()} />
        <input
          id="img"
          name="img"
          type="file"
          accept="image/*"
          ref={carInputRef}
          onChange={handleIconOnClick}
          style={{ display: 'none' }}
        />
      </ImageContainer>

      <InputGroup>
        <InputWrapper>
          <Label htmlFor="make">Make</Label>
          <Input
            id="make"
            name="make"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.make}
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="model">Model</Label>
          <Input
            id="model"
            name="model"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.model}
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="year">Year</Label>
          <Input
            id="year"
            name="year"
            type="number"
            min={0}
            max={9999}
            onChange={formik.handleChange}
            value={formik.values.year}
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="mileage">Mileage</Label>
          <Input
            id="mileage"
            name="mileage"
            type="number"
            min={0}
            max={1000000}
            onChange={formik.handleChange}
            value={formik.values.mileage}
          />
        </InputWrapper>
      </InputGroup>

      <InputGroup>
        <InputWrapper>
          <Label htmlFor="rentalPrice">Rental Price</Label>
          <Input
            id="rentalPrice"
            name="rentalPrice"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.rentalPrice}
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="type">Type</Label>
          <Select
            id="type"
            name="type"
            value={formik.values.type}
            onChange={formik.handleChange}
          >
            <Option value="">Enter the text</Option>
            {typeList?.map((option, index) => (
              <Option key={index} value={option}>
                {option}
              </Option>
            ))}
          </Select>
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="engineSize">Engine Size</Label>
          <Input
            id="engineSize"
            name="engineSize"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.engineSize}
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="fuelConsumption">Fuel Consumption</Label>
          <Input
            id="fuelConsumption"
            name="fuelConsumption"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.fuelConsumption}
          />
        </InputWrapper>
      </InputGroup>

      <TextareaWrapper className="full_width">
        <InputWrapper>
          <Label htmlFor="rentalCompany">Rental Company</Label>
          <Input
            id="rentalCompany"
            name="rentalCompany"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.rentalCompany}
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="rentalConditions">
            Rental Conditions <span>(write through a comma)</span>
          </Label>
          <Input
            id="rentalConditions"
            name="rentalConditions"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.rentalConditions}
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="address">
            Address <span>(write through a comma - street, city, country)</span>
          </Label>
          <Input
            id="address"
            name="address"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.address}
          />
        </InputWrapper>
      </TextareaWrapper>

      <TextareaWrapper className="full_width">
        <InputWrapper>
          <Label htmlFor="accessories">
            Accessories <span>(write through a comma)</span>
          </Label>
          <Textarea
            id="accessories"
            name="accessories"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.accessories}
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="functionalities">
            Functionalities <span>(write through a comma)</span>
          </Label>
          <Textarea
            id="functionalities"
            name="functionalities"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.functionalities}
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.description || car?.description}
          />
        </InputWrapper>
      </TextareaWrapper>

      <BtnWrapper>
        <Btn type="submit">Submit</Btn>
        <Btn type="button" onClick={() => navigate('/service')}>
          Cancel
        </Btn>
      </BtnWrapper>
    </Form>
  );
};

export default CarForm;
