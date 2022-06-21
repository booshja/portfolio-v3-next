/* eslint-disable */
// dependencies
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

export const booshjaApi = createApi({
  reducerPath: 'booshjaApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BOOSHJA_BASE_URL,
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: ['Message'],
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => 'projects',
    }),
    getProject: builder.query({
      query: (id) => `projects/${id}`,
    }),
    getMessages: builder.query({
      query: () => 'messages',
      providesTags: ['Message'],
    }),
    addNewMessage: builder.mutation({
      query: (newMessage) => ({
        url: 'messages',
        method: 'POST',
        body: newMessage,
      }),
    }),
    toggleArchive: builder.mutation({
      query: ({ id, archive }) => ({
        url: `messages/${id}`,
        method: 'PATCH',
        body: {
          archive: archive,
        },
      }),
      invalidatesTags: ['Message'],
    }),
    deleteMessage: builder.mutation({
      query: (id) => ({
        url: `messages/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Message'],
    }),
  }),
});

export const {
  useGetProjectsQuery,
  useGetProjectQuery,
  useGetMessagesQuery,
  useAddNewMessageMutation,
  useToggleArchiveMutation,
  useDeleteMessageMutation,
} = booshjaApi;
