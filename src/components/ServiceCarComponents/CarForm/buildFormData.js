export const buildFormData = data => {
  if (!data.rentalPrice.includes('$')) {
    data.rentalPrice = '$'.concat(data.rentalPrice);
  }

  if (data.rentalConditions) {
    data.rentalConditions = data.rentalConditions.replaceAll(', ', '\n');
  }

  const formData = new FormData();

  Object.keys(data).forEach(key => {
    if (key === 'img' && data[key] instanceof File) {
      formData.append(key, data[key]);
    } else if (data[key] !== '' && data[key] !== undefined && key !== 'img') {
      formData.append(key, data[key]);
    }
  });

  return formData;
};
