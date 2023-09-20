import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const carsApi = createApi({
  reducerPath: 'cars',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://650947d8f6553137159b280e.mockapi.io/api',
  }),

  endpoints: builder => ({
    getCars: builder.query({
      query: () => '/cars',
    }),
  }),
});

export const { useGetCarsQuery } = carsApi;
