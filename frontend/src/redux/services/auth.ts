import { basePlateApi } from './baseplate';

export const authApi = basePlateApi.injectEndpoints({
  endpoints: (build) => ({
    getAuthUser: build.query<any, void>({
      query: () => 'auth/login/success',
    }),
  }),
  overrideExisting: false,
});

export const { useGetAuthUserQuery } = authApi;
