import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const carsApi = createApi({
  reducerPath: 'cars',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://renta-car-ukraine-api.onrender.com',
  }),

  endpoints: builder => ({
    getCars: builder.query({
      query: () => '/cars/all',
    }),
  }),
});

export const { useGetCarsQuery } = carsApi;
