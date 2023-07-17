import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IBook } from '../../types/globaltypes';


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
    addNewBook: builder.mutation<IBook, Partial<IBook>>({
      query: (book) => ({
        url: `/api/v1/book/books`,
        method: 'POST',
        body: book,
      }),
    }),
    getSingleBook: builder.query({
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      query: (id) => `/api/v1/book/${id}`
    }),
    editBook: builder.mutation<IBook, Partial<IBook>>({
      query: ({id, data}) => ({
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        url: `/api/v1/book/${id}`,
        method: 'PATCH',
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        body: data,
      }),
    }),
  }),
});

export const { useGetRecentBooksQuery, useGetBooksQuery, useCreateUserMutation, useSignInUserMutation, useAddNewBookMutation, useGetSingleBookQuery, useEditBookMutation } = api
