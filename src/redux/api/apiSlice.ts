import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


interface IUser {
      name: string | null;
      email: string | null;
      password: string | null;
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: (builder) => ({
    getRecentBooks: builder.query({
      query: () => '/api/v1/book/recent'
    }),
    getBooks: builder.query({
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      query: (searchTerm) => `/api/v1/book/books/?searchTerm=${searchTerm}`
    }),
    createUser: builder.mutation<IUser, Partial<IUser>>({
      query: (user) => ({
        url: `/api/v1/auth/signup`,
        method: 'POST',
        body: user,
      }),
    }),
    signInUser: builder.mutation<IUser, Partial<IUser>>({
      query: (data) => ({
        url: `/api/v1/auth/signin`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useGetRecentBooksQuery, useGetBooksQuery, useCreateUserMutation, useSignInUserMutation } = api
