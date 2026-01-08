import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const username = process.env.NEXT_PUBLIC_BASIC_AUTH_USER;
const password = process.env.NEXT_PUBLIC_BASIC_AUTH_PASS;
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
// ✅ Browser-safe basic auth header
const authHeader =
  username && password ? "Basic " + btoa(`${username}:${password}`) : "";

export const blogAPISlice = createApi({
  reducerPath: "blogAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${apiUrl}/blog`,
    credentials: "include",
    prepareHeaders: (headers) => {
      if (authHeader) {
        headers.set("Authorization", authHeader);
      }
      return headers;
    },
  }),
  tagTypes: ["Blog"],
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => `/all-blogs`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ BlogID }) => ({ type: "Blog", id: BlogID })),
              { type: "Blog", id: "LIST" },
            ]
          : [{ type: "Blog", id: "LIST" }],
    }),

    getBlogById: builder.query({
      query: (id) => `/fill-blog-data?BlogID=${id}`,
      providesTags: (result, error, id) => [{ type: "Blog", id }],
    }),

    saveOrUpdateBlog: builder.mutation({
      query: (formData) => ({
        url: `/save-or-update-blog`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: [{ type: "Blog", id: "LIST" }],
    }),

    deleteBlog: builder.mutation({
      query: (BlogID) => ({
        url: `/delete-blog/${BlogID}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, BlogID) => [
        { type: "Blog", id: BlogID },
        { type: "Blog", id: "LIST" },
      ],
    }),

    updateBlogStatus: builder.mutation({
      query: ({ BlogID, ActiveStatus }) => ({
        url: `/update-status`,
        method: "POST",
        body: { BlogID, ActiveStatus },
      }),
      invalidatesTags: (result, error, { BlogID }) => [
        { type: "Blog", id: BlogID },
      ],
    }),
  }),
});

export const {
  useGetBlogsQuery,
  useGetBlogByIdQuery,
  useSaveOrUpdateBlogMutation,
  useDeleteBlogMutation,
  useUpdateBlogStatusMutation,
} = blogAPISlice;