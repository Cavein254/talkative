import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// `${import.meta.env.VITE_REACT_APP_URL}/api/`
// initialize an empty api service that we'll inject endpoints into later
export const basePlateApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }),
  endpoints: () => ({}),
});
