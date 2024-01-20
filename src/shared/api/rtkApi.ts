import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AUTH_USER_LOCAL_STORAGE } from 'shared/consts/localStorage';

export const rtkApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: __API__,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem(AUTH_USER_LOCAL_STORAGE) || '';
            if (token) {
                headers.set('Authorization', token);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({}),
});

// export const { useGetPokemonByNameQuery } = pokemonApi;
