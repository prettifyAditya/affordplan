import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const username = process.env.NEXT_PUBLIC_BASIC_AUTH_USER;
const password = process.env.NEXT_PUBLIC_BASIC_AUTH_PASS;
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
// ✅ Browser-safe basic auth header
const authHeader =
  username && password ? "Basic " + btoa(`${username}:${password}`) : "";

export const seoAPISlice = createApi({
  reducerPath: "seoAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${apiUrl}/seo`,
    credentials: "include",
    prepareHeaders: (headers) => {
      if (authHeader) {
        headers.set("Authorization", authHeader);
      }
      return headers;
    },
  }),
  tagTypes: ["Seo"],
  endpoints: (builder) => ({
    getSeos: builder.query({
      query: () => `/all-seos`,
      providesTags: (result) =>
        result
          ? [
            ...result.map(({ SeoID }) => ({ type: "Seo", id: SeoID })),
            { type: "Seo", id: "LIST" },
          ]
          : [{ type: "Seo", id: "LIST" }],
    }),

    getSeoById: builder.query({
      query: (id) => `/fill-seo-data?SeoID=${id}`,
      providesTags: (result, error, id) => [{ type: "Seo", id }],
    }),

    saveOrUpdateSeo: builder.mutation({
      query: (formData) => ({
        url: `/save-or-update-seo`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: [{ type: "Seo", id: "LIST" }],
    }),

    deleteSeo: builder.mutation({
      query: (SeoID) => ({
        url: `/delete-seo/${SeoID}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, SeoID) => [
        { type: "Seo", id: SeoID },
        { type: "Seo", id: "LIST" },
      ],
    }),

    updateSeoStatus: builder.mutation({
      query: ({ SeoID, ActiveStatus }) => ({
        url: `/update-status`,
        method: "POST",
        body: { SeoID, ActiveStatus },
      }),
      invalidatesTags: (result, error, { SeoID }) => [
        { type: "Seo", id: SeoID },
      ],
    }),
    getAllActiveSeos: builder.query({
      query: () => `/seos`,
      providesTags: [{ type: "Seo", id: "LIST" }],
    })

  }),
});

export const {
  useGetSeosQuery,
  useGetSeoByIdQuery,
  useSaveOrUpdateSeoMutation,
  useDeleteSeoMutation,
  useUpdateSeoStatusMutation,
  useGetAllActiveSeosQuery,
} = seoAPISlice;