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

    createNewCar: builder.mutation({
      query: data => ({
        url: '/cars',
        method: 'POST',
        body: data,
      }),
    }),

    updateRentCar: builder.mutation({
      query: (id, data) => ({
        url: `/cars/${id}`,
        method: 'PATCH',
        body: data,
      }),
    }),
  }),
});

export const {
  useGetCarsQuery,
  useCreateNewCarMutation,
  useUpdateRentCarMutation,
} = carsApi;
