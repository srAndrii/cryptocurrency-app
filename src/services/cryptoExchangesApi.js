import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'coingecko.p.rapidapi.com',
    'X-RapidAPI-Key': '70e922c28emsh17a00def1cba515p159a83jsn50cd40064bce'
  }

const baseUrl = 'https://coingecko.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoExchangesApi = createApi({
    reducerPath: 'cryptoExchangesApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getExchangesList: builder.query({
            query: ()=> createRequest(`/exchanges`)
        })
        
        
    })
})

export const {
    useGetExchangesListQuery
} = cryptoExchangesApi;