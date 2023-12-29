import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// `${import.meta.env.VITE_REACT_APP_URL}/api/`
// initialize an empty api service that we'll inject endpoints into later
export const basePlateApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/',
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem('token');
      const pureToken = token?.replace(/"/g, '');
      if (pureToken) {
        headers.set('cookie', pureToken);
        headers.set('Accept', 'application/json');
        headers.set('Access-Control-Allow-Credentials', 'true');
        headers.set('Access-Control-Allow-Origin', '*');
        console.log(pureToken);
        return headers;
      }
      return headers;
    },
    credentials: 'include',
  }),
  endpoints: () => ({}),
});
