import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


//utilizes crypto api from coinranking 
const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '6d9de3db78mshe4e9ca9346147a4p1c4897jsn54d0b87a9a39'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({url, headers: cryptoApiHeaders});

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos : builder.query({
            query: (count)  => createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails: builder.query({
            query: (coinId)  => createRequest(`/coin/${coinId}`),
        }),
       
        getCryptoHistory: builder.query({
            query: (coinId, timePeriod)  => createRequest(`coin/${coinId}/history?timeperiod=${timePeriod}`),
        })
    }),
});
console.log('query: '+cryptoApi.getCryptoDetails);
export const {
    useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery
} = cryptoApi;

