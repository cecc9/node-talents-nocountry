"use client";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const logSlice = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api" }),
  endpoints: (builder) => ({
    loginVerification: builder.mutation({
      query: (user) => ({
        url: "/login",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }),
    }),
  }),
});

export const { useLoginVerificationMutation } = logSlice;
