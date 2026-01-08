import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const username = process.env.NEXT_PUBLIC_BASIC_AUTH_USER;
const password = process.env.NEXT_PUBLIC_BASIC_AUTH_PASS;
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const authHeader =
  username && password ? "Basic " + btoa(`${username}:${password}`) : "";

export const serviceAPISlice = createApi({
  reducerPath: "serviceAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${apiUrl}/service`,
    credentials: "include",
    prepareHeaders: (headers) => {
      if (authHeader) {
        headers.set("Authorization", authHeader);
      }
      return headers;
    },
  }),
  tagTypes: ["Service"],
  endpoints: (builder) => ({
    getAllServices: builder.query({
      query: () => `/all-services`,
      providesTags: (result) =>
        result
          ? [
            ...result.map(({ ServiceID }) => ({ type: "Service", id: ServiceID })),
            { type: "Service", id: "LIST" },
          ]
          : [{ type: "Service", id: "LIST" }],
    }),

    getServiceById: builder.query({
      query: (id) => `/fill-service-data?ServiceID=${id}`,
      providesTags: (result, error, id) => [{ type: "Service", id }],
    }),

    saveOrUpdateService: builder.mutation({
      query: (formData) => ({
        url: `/save-or-update-service`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: [{ type: "Service", id: "LIST" }],
    }),

    deleteService: builder.mutation({
      query: (ServiceID) => ({
        url: `/delete-service/${ServiceID}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, ServiceID) => [
        { type: "Service", id: ServiceID },
        { type: "Service", id: "LIST" },
      ],
    }),

    updateDisplayOrder: builder.mutation({
      query: (formData) => ({
        url: `/update-display-order`,
        method: "POST",
        body: formData,
        formData: true,
      }),
      invalidatesTags: [{ type: "Service", id: "LIST" }],
    }),

    updateServiceStatus: builder.mutation({
      query: ({ ServiceID, ActiveStatus }) => ({
        url: `/update-status`,
        method: "POST",
        body: { ServiceID, ActiveStatus },
      }),
      invalidatesTags: (result, error, { ServiceID }) => [{ type: "Service", id: ServiceID }],
    }),

    getMaxDisplayOrder: builder.query({
      query: () => `/max-display-order`,
      providesTags: [{ type: "Service", id: "MAX_ORDER" }],
    }),
  }),
});

export const {
  useGetAllServicesQuery,
  useGetServiceByIdQuery,
  useSaveOrUpdateServiceMutation,
  useDeleteServiceMutation,
  useUpdateDisplayOrderMutation,
  useUpdateServiceStatusMutation,
  useGetMaxDisplayOrderQuery,
} = serviceAPISlice;
