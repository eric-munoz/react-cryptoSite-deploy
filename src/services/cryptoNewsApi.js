import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { cryptoApi } from './cryptoApi';

//utilizes bing news search api from RapidAPI

const cyrptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
    'X-RapidAPI-Key': '6d9de3db78mshe4e9ca9346147a4p1c4897jsn54d0b87a9a39'
  }

  const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

  const createRequest = (url) => ({url, headers: cyrptoNewsHeaders});

  export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews : builder.query({
            query: ({newsCategory, count})  => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        }),
    }),
});

export const {useGetCryptoNewsQuery} = cryptoNewsApi;