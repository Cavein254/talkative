import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const authApi = createApi({
    reducerPath:'authApi',
    baseQuery: fetchBaseQuery({baseUrl:`${import.meta.env.VITE_REACT_APP_URL}/api/auth/`}),
    endpoints: (builder) => ({
        getAuthUser: builder.query({
            query: () => '/login/success'
        })
    })
}) 


export const {useGetAuthUserQuery} = authApi;