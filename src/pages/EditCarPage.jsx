import CarForm from 'components/ServiceCarComponents/CarForm';
import { useEffect } from 'react';

const EditCarPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <CarForm />;
};

export default EditCarPage;
