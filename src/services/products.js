import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const product = createApi({
  reducerPath: 'productApi', //
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ofertasvapp.com/testing/offerta-sv/offerta-backend/v1/',
  }),
  endpoints: builder => ({
    getAllList: builder.query({
      query: () => 'getAllList.php',
    }),
  }),
});

export const {useGetAllListQuery} = product;
