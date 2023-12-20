import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    singUp: builder.mutation({
      query: (data) => ({
        url: "/register",
        method: "POST",
        body: data,
      }),
    }),
    signIn: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
    }),
  }),
});
export const { useSignInMutation, useSingUpMutation } = authApi;
