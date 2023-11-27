import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const carsApi = createApi({
  reducerPath: 'cars',

  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000/cars',

    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),

  tagTypes: ['Cars'],

  endpoints: builder => ({
    getCars: builder.query({
      query: () => '/all',
    }),

    createNewCar: builder.mutation({
      query: data => ({
        url: '/',
        method: 'POST',
        body: data,
      }),
      providesTags: ['Cars'],
    }),

    updateRentCar: builder.mutation({
      query: ({ id, data }) => ({
        url: `/${id}`,
        method: 'PATCH',
        body: data,
      }),
      providesTags: ['Cars'],
    }),

    deleteRentCar: builder.mutation({
      query: id => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      providesTags: ['Cars'],
    }),
  }),
});

export const {
  useGetCarsQuery,
  useCreateNewCarMutation,
  useUpdateRentCarMutation,
  useDeleteRentCarMutation,
} = carsApi;
