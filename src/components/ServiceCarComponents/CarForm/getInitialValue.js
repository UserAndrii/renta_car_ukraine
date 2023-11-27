export const getInitialValue = car => {
  return {
    year: car?.year || 0,
    make: car?.make || '',
    model: car?.model || '',
    type: car?.type || '',
    img: car?.img || '',
    description: car?.description || '',
    fuelConsumption: car?.fuelConsumption || '',
    engineSize: car?.engineSize || '',
    accessories: car?.accessories.join(', ') || '', // []
    functionalities: car?.functionalities.join(', ') || '', // []
    rentalPrice: car?.rentalPrice || '$10',
    rentalCompany: car?.rentalCompany || '',
    address: car?.address || '',
    rentalConditions: car?.rentalConditions.replaceAll('\n', ', ') || '',
    mileage: car?.mileage || 100,
  };
};
