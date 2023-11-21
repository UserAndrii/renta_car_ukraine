import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const carsApi = createApi({
  reducerPath: 'cars',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://renta-car-ukraine-api.onrender.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  refetchOnMountOrArgChange: true,
  refetchOnReconnect: false,
  keepUnusedDataFor: 1,

  endpoints: builder => ({
    getCars: builder.query({
      query: () => '/cars/all',
    }),

    updateRentCar: builder.mutation({
      query: ({ _id, ...data }) => ({
        url: `/cars/${_id}`,
        method: 'PATCH',
        body: data,
      }),
    }),
  }),
});

export const { useGetCarsQuery, useUpdateRentCarMutation } = carsApi;
