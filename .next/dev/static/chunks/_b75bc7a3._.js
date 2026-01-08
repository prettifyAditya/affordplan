(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/store/frontendSlice/metaAPISlice.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "baseQueryWithAuth",
    ()=>baseQueryWithAuth,
    "fetchMetaDataById",
    ()=>fetchMetaDataById,
    "fetchMetaDataByUrl",
    ()=>fetchMetaDataByUrl,
    "metaAPISlice",
    ()=>metaAPISlice,
    "useGetMetaDataByIdQuery",
    ()=>useGetMetaDataByIdQuery,
    "useGetMetaDataByUrlQuery",
    ()=>useGetMetaDataByUrlQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
//metaAPISlice.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-client] (ecmascript)");
;
const username = ("TURBOPACK compile-time value", "API.afford");
const password = ("TURBOPACK compile-time value", "Admin@afford");
const apiUrl = ("TURBOPACK compile-time value", "http://localhost:3002/api"); // e.g. http://localhost:3002
// Universal Basic Auth header
function makeAuthHeader() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const raw = `${username}:${password}`;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        // browser
        return "Basic " + btoa(raw);
    }
}
const authHeader = makeAuthHeader();
const baseQueryWithAuth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchBaseQuery"])({
    baseUrl: `${apiUrl}/page`,
    credentials: "include",
    prepareHeaders: (headers)=>{
        if (authHeader) headers.set("Authorization", authHeader);
        return headers;
    }
});
const metaAPISlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: "metaAPI",
    baseQuery: baseQueryWithAuth,
    tagTypes: [
        "Static"
    ],
    endpoints: (builder)=>({
            getMetaDataById: builder.query({
                query: (id)=>`/meta_data/${id}`,
                providesTags: (result, error, id)=>[
                        {
                            type: "Static",
                            id
                        }
                    ]
            }),
            getMetaDataByUrl: builder.query({
                query: (url)=>`/meta_data_by_url/${encodeURIComponent(url)}`,
                providesTags: (result, error, url)=>[
                        {
                            type: "Static",
                            id: url
                        }
                    ]
            })
        })
});
const { useGetMetaDataByIdQuery, useGetMetaDataByUrlQuery } = metaAPISlice;
async function fetchMetaDataById(id) {
    const res = await baseQueryWithAuth({
        url: `/meta_data/${id}`,
        method: "GET"
    }, {}, {});
    if ("error" in res) {
        throw new Error(`Meta API by ID failed (status: ${res.error?.status ?? "UNKNOWN"}) → ${res.error?.error || "Unknown error"}`);
    }
    const payload = res.data;
    if (!payload?.success || !payload.data) {
        throw new Error(`Meta API returned empty/failed result for ID: ${id}`);
    }
    return payload.data;
}
async function fetchMetaDataByUrl(url) {
    //const endpoint = `${apiUrl}/meta_data_by_url/${encodeURIComponent(url)}`;
    //console.log("👉 [fetchMetaDataByUrl] Requesting meta for URL:", url);
    const res = await baseQueryWithAuth({
        url: `/meta_data_by_url/${url}`,
        method: "GET"
    }, {}, {});
    // RTK Query returns { data?, error? }
    if (res.error) {
        const status = res.error?.status ?? "UNKNOWN_STATUS";
        const message = res.error?.data?.message || res.error?.error || "Unknown error";
        //console.error("❌ [fetchMetaDataByUrl]", message);
        throw new Error(`Meta API request failed (status: ${status}) → ${message} for url: ${url}`);
    }
    if (!res.data || typeof res.data !== "object") {
        //console.error("❌ [fetchMetaDataByUrl] Non-JSON response:", res.data);
        throw new Error(`Meta API returned non-JSON response for url: ${url}`);
    }
    const payload = res.data;
    if (!payload.success || !payload.data) throw new Error("Meta API returned empty or failed result");
    //console.log("✅ [fetchMetaDataByUrl] Meta data found:", payload.data);
    return payload.data;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/store/backendSlice/contactUsAPISlice.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "contactUsAPISlice",
    ()=>contactUsAPISlice,
    "useDeleteEnquiryMutation",
    ()=>useDeleteEnquiryMutation,
    "useGetAllLeadsQuery",
    ()=>useGetAllLeadsQuery,
    "useSaveEnquiryMutation",
    ()=>useSaveEnquiryMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// contactUsAPISlice.js
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-client] (ecmascript)");
;
const username = ("TURBOPACK compile-time value", "API.afford");
const password = ("TURBOPACK compile-time value", "Admin@afford");
const apiUrl = ("TURBOPACK compile-time value", "http://localhost:3002/api");
// ✅ Browser-safe basic auth header
const authHeader = ("TURBOPACK compile-time truthy", 1) ? "Basic " + btoa(`${username}:${password}`) : "TURBOPACK unreachable";
const contactUsAPISlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: "contactUsAPI",
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchBaseQuery"])({
        baseUrl: `${apiUrl}/contact`,
        credentials: "include",
        prepareHeaders: (headers)=>{
            if ("TURBOPACK compile-time truthy", 1) {
                headers.set("Authorization", authHeader);
            }
            return headers;
        }
    }),
    tagTypes: [
        "ContactUs"
    ],
    endpoints: (builder)=>({
            // ✅ Fetch all leads
            getAllLeads: builder.query({
                query: ()=>`/all-leads`,
                providesTags: (result)=>result ? [
                        ...result.map(({ ContactID })=>({
                                type: "ContactUs",
                                id: ContactID
                            })),
                        {
                            type: "ContactUs",
                            id: "LIST"
                        }
                    ] : [
                        {
                            type: "ContactUs",
                            id: "LIST"
                        }
                    ]
            }),
            // ✅ Save new enquiry
            saveEnquiry: builder.mutation({
                query: (formData)=>({
                        url: `/save-enquiry`,
                        method: "POST",
                        body: formData
                    }),
                invalidatesTags: [
                    {
                        type: "ContactUs",
                        id: "LIST"
                    }
                ]
            }),
            // ✅ Delete enquiry
            deleteEnquiry: builder.mutation({
                query: (ContactID)=>({
                        url: `/delete-enquiry/${ContactID}`,
                        method: "DELETE"
                    }),
                invalidatesTags: (result, error, ContactID)=>[
                        {
                            type: "ContactUs",
                            id: ContactID
                        },
                        {
                            type: "ContactUs",
                            id: "LIST"
                        }
                    ]
            })
        })
});
const { useGetAllLeadsQuery, useSaveEnquiryMutation, useDeleteEnquiryMutation } = contactUsAPISlice;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/store/backendSlice/homeAPISlice.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "homeAPISlice",
    ()=>homeAPISlice,
    "useGetAboutUsPageDataQuery",
    ()=>useGetAboutUsPageDataQuery,
    "useGetHomeDataQuery",
    ()=>useGetHomeDataQuery,
    "useGetProductSectionDataQuery",
    ()=>useGetProductSectionDataQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-client] (ecmascript)");
;
const username = ("TURBOPACK compile-time value", "API.afford");
const password = ("TURBOPACK compile-time value", "Admin@afford");
const apiUrl = ("TURBOPACK compile-time value", "http://localhost:3002/api");
const authHeader = ("TURBOPACK compile-time truthy", 1) ? "Basic " + btoa(`${username}:${password}`) : "TURBOPACK unreachable";
const homeAPISlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: "homeAPI",
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchBaseQuery"])({
        baseUrl: `${apiUrl}/home`,
        credentials: "include",
        prepareHeaders: (headers)=>{
            if ("TURBOPACK compile-time truthy", 1) {
                headers.set("Authorization", authHeader);
            }
            return headers;
        }
    }),
    tagTypes: [
        "Home"
    ],
    endpoints: (builder)=>({
            getHomeData: builder.query({
                query: ()=>`/all-homedata`,
                providesTags: [
                    {
                        type: "Home",
                        id: "LIST"
                    }
                ]
            }),
            getProductSectionData: builder.query({
                query: ()=>"/all-product",
                providesTags: [
                    {
                        type: "Home",
                        id: "LIST"
                    }
                ]
            }),
            getAboutUsPageData: builder.query({
                query: ()=>"/all-aboutusdata",
                providesTags: [
                    {
                        type: "Home",
                        id: "ABOUT_US"
                    }
                ]
            })
        })
});
const { useGetHomeDataQuery, useGetProductSectionDataQuery, useGetAboutUsPageDataQuery } = homeAPISlice;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/store/backendSlice/masterAPISlice.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "masterAPISlice",
    ()=>masterAPISlice,
    "useGetCareerPageDataQuery",
    ()=>useGetCareerPageDataQuery,
    "useGetMediaPageDataQuery",
    ()=>useGetMediaPageDataQuery,
    "useGetPartnerPageDataQuery",
    ()=>useGetPartnerPageDataQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-client] (ecmascript)");
;
const username = ("TURBOPACK compile-time value", "API.afford");
const password = ("TURBOPACK compile-time value", "Admin@afford");
const apiUrl = ("TURBOPACK compile-time value", "http://localhost:3002/api");
const authHeader = ("TURBOPACK compile-time truthy", 1) ? "Basic " + btoa(`${username}:${password}`) : "TURBOPACK unreachable";
const masterAPISlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: "masterAPI",
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchBaseQuery"])({
        baseUrl: `${apiUrl}/master`,
        credentials: "include",
        prepareHeaders: (headers)=>{
            if ("TURBOPACK compile-time truthy", 1) {
                headers.set("Authorization", authHeader);
            }
            return headers;
        }
    }),
    tagTypes: [
        "Master",
        "Media",
        "Job"
    ],
    endpoints: (builder)=>({
            getPartnerPageData: builder.query({
                query: ()=>"/all-partnerdata",
                providesTags: [
                    {
                        type: "Master",
                        id: "PARTNER_PAGE"
                    }
                ]
            }),
            getMediaPageData: builder.query({
                query: (params)=>({
                        url: "/all-mediadata",
                        params: params || {}
                    }),
                providesTags: [
                    {
                        type: "Media",
                        id: "Media"
                    }
                ]
            }),
            getCareerPageData: builder.query({
                query: ()=>"/all-jobdata",
                providesTags: [
                    {
                        type: "Job",
                        id: "Job"
                    }
                ]
            })
        })
});
const { useGetPartnerPageDataQuery, useGetMediaPageDataQuery, useGetCareerPageDataQuery } = masterAPISlice;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/store/backendSlice/productAPISlice.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "productAPISlice",
    ()=>productAPISlice,
    "useDeleteProductMutation",
    ()=>useDeleteProductMutation,
    "useDeleteSectionItemMutation",
    ()=>useDeleteSectionItemMutation,
    "useGetActiveProductsQuery",
    ()=>useGetActiveProductsQuery,
    "useGetProductByIdQuery",
    ()=>useGetProductByIdQuery,
    "useGetProductsQuery",
    ()=>useGetProductsQuery,
    "useGetSectionItemsQuery",
    ()=>useGetSectionItemsQuery,
    "useSaveOrUpdateProductMutation",
    ()=>useSaveOrUpdateProductMutation,
    "useSaveOrUpdateSectionItemMutation",
    ()=>useSaveOrUpdateSectionItemMutation,
    "useUpdateProductStatusMutation",
    ()=>useUpdateProductStatusMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-client] (ecmascript)");
;
const username = ("TURBOPACK compile-time value", "API.afford");
const password = ("TURBOPACK compile-time value", "Admin@afford");
const apiUrl = ("TURBOPACK compile-time value", "http://localhost:3002/api");
const authHeader = ("TURBOPACK compile-time truthy", 1) ? "Basic " + btoa(`${username}:${password}`) : "TURBOPACK unreachable";
const productAPISlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: "productAPI",
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchBaseQuery"])({
        baseUrl: `${apiUrl}/product`,
        credentials: "include",
        prepareHeaders: (headers)=>{
            if ("TURBOPACK compile-time truthy", 1) {
                headers.set("Authorization", authHeader);
            }
            return headers;
        }
    }),
    tagTypes: [
        "Product",
        "SectionItem"
    ],
    endpoints: (builder)=>({
            // Product endpoints
            getProducts: builder.query({
                query: ()=>`/all-products`,
                providesTags: (result)=>result ? [
                        ...result.map(({ ProductId })=>({
                                type: "Product",
                                id: ProductId
                            })),
                        {
                            type: "Product",
                            id: "LIST"
                        }
                    ] : [
                        {
                            type: "Product",
                            id: "LIST"
                        }
                    ]
            }),
            getActiveProducts: builder.query({
                query: ()=>`/get-activeProducts`,
                providesTags: (result)=>result?.products ? [
                        ...result.products.map(({ ProductId })=>({
                                type: "Product",
                                id: ProductId
                            })),
                        {
                            type: "Product",
                            id: "ACTIVE_LIST"
                        }
                    ] : [
                        {
                            type: "Product",
                            id: "ACTIVE_LIST"
                        }
                    ]
            }),
            getProductById: builder.query({
                query: (id)=>`/fill-product-data?ProductId=${id}`,
                providesTags: (result, error, id)=>[
                        {
                            type: "Product",
                            id
                        }
                    ]
            }),
            saveOrUpdateProduct: builder.mutation({
                query: (formData)=>({
                        url: `/save-or-update-product`,
                        method: "POST",
                        body: formData
                    }),
                invalidatesTags: [
                    {
                        type: "Product",
                        id: "LIST"
                    }
                ]
            }),
            deleteProduct: builder.mutation({
                query: (ProductId)=>({
                        url: `/delete-product/${ProductId}`,
                        method: "DELETE"
                    }),
                invalidatesTags: (result, error, ProductId)=>[
                        {
                            type: "Product",
                            id: ProductId
                        },
                        {
                            type: "Product",
                            id: "LIST"
                        }
                    ]
            }),
            updateProductStatus: builder.mutation({
                query: ({ ProductId, ActiveStatus })=>({
                        url: `/update-status`,
                        method: "POST",
                        body: {
                            ProductId,
                            ActiveStatus
                        }
                    }),
                invalidatesTags: (result, error, { ProductId })=>[
                        {
                            type: "Product",
                            id: ProductId
                        }
                    ]
            }),
            // Section Item endpoints
            getSectionItems: builder.query({
                query: ({ ProductId, SectionNumber })=>`/section-items?ProductId=${ProductId}&SectionNumber=${SectionNumber}`,
                providesTags: (result, error, { ProductId, SectionNumber })=>result?.data ? [
                        ...result.data.map(({ ItemId })=>({
                                type: "SectionItem",
                                id: ItemId
                            })),
                        {
                            type: "SectionItem",
                            id: `${ProductId}-${SectionNumber}`
                        }
                    ] : [
                        {
                            type: "SectionItem",
                            id: `${ProductId}-${SectionNumber}`
                        }
                    ]
            }),
            saveOrUpdateSectionItem: builder.mutation({
                query: (formData)=>({
                        url: `/save-or-update-section-item`,
                        method: "POST",
                        body: formData,
                        formData: true
                    }),
                invalidatesTags: (result, error, formData)=>{
                    const ProductId = formData.get('ProductId');
                    const SectionNumber = formData.get('SectionNumber');
                    return [
                        {
                            type: "SectionItem",
                            id: `${ProductId}-${SectionNumber}`
                        }
                    ];
                }
            }),
            deleteSectionItem: builder.mutation({
                query: (ItemId)=>({
                        url: `/delete-section-item/${ItemId}`,
                        method: "DELETE"
                    }),
                invalidatesTags: (result, error, ItemId)=>[
                        {
                            type: "SectionItem",
                            id: ItemId
                        }
                    ]
            })
        })
});
const { useGetProductsQuery, useGetProductByIdQuery, useSaveOrUpdateProductMutation, useDeleteProductMutation, useUpdateProductStatusMutation, useGetSectionItemsQuery, useSaveOrUpdateSectionItemMutation, useDeleteSectionItemMutation, useGetActiveProductsQuery } = productAPISlice;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/store/frontendStore.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "frontendStore",
    ()=>frontendStore
]);
// store/frontendStore.js
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$frontendSlice$2f$metaAPISlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/frontendSlice/metaAPISlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$contactUsAPISlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/backendSlice/contactUsAPISlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$homeAPISlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/backendSlice/homeAPISlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$masterAPISlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/backendSlice/masterAPISlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$productAPISlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/backendSlice/productAPISlice.js [app-client] (ecmascript)");
;
;
;
;
;
;
const frontendStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: {
        [__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$frontendSlice$2f$metaAPISlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["metaAPISlice"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$frontendSlice$2f$metaAPISlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["metaAPISlice"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$contactUsAPISlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactUsAPISlice"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$contactUsAPISlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactUsAPISlice"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$homeAPISlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["homeAPISlice"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$homeAPISlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["homeAPISlice"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$masterAPISlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["masterAPISlice"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$masterAPISlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["masterAPISlice"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$productAPISlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["productAPISlice"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$productAPISlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["productAPISlice"].reducer
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$frontendSlice$2f$metaAPISlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["metaAPISlice"].middleware, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$contactUsAPISlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactUsAPISlice"].middleware, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$homeAPISlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["homeAPISlice"].middleware, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$masterAPISlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["masterAPISlice"].middleware, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$productAPISlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["productAPISlice"].middleware)
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/store/ReduxProviderFront.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReduxProviderFront",
    ()=>ReduxProviderFront
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$frontendStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/frontendStore.js [app-client] (ecmascript)");
'use client';
;
;
;
function ReduxProviderFront({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$frontendStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frontendStore"],
        children: children
    }, void 0, false, {
        fileName: "[project]/store/ReduxProviderFront.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = ReduxProviderFront;
var _c;
__turbopack_context__.k.register(_c, "ReduxProviderFront");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/context/CountryContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CountryProvider",
    ()=>CountryProvider,
    "useCountry",
    ()=>useCountry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const locationContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])();
const useCountry = ()=>{
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(locationContext);
};
_s(useCountry, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
const CountryProvider = ({ children })=>{
    _s1();
    // ✅ Initialize state directly from localStorage or fallback
    const [countryDetails, setCountryDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CountryProvider.useEffect": ()=>{
            const storedCountry = localStorage.getItem("country");
            if (storedCountry) setCountryDetails(JSON.parse(storedCountry));
        }
    }["CountryProvider.useEffect"], []);
    // ✅ Function to update country
    const updateCountry = (newCountry)=>{
        // if (!newCountry?.CountryID || !newCountry?.CountryName) {
        //   toast.error("Invalid country details");
        //   return;
        // }
        const countryURL = newCountry.CountryNameURL || "/";
        const updated = [
            {
                CountryID: newCountry.CountryID,
                CountryName: newCountry.CountryName,
                CountryNameURL: countryURL
            }
        ];
        setCountryDetails(updated);
        if ("TURBOPACK compile-time truthy", 1) {
            localStorage.setItem("country", JSON.stringify(updated));
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Country updated to ${newCountry.CountryName}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(locationContext.Provider, {
        value: {
            countryDetails,
            setCountryDetails,
            updateCountry
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/context/CountryContext.js",
        lineNumber: 44,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(CountryProvider, "MoeyJCUsj0ccKtBf3RzQ9t2KM1g=");
_c = CountryProvider;
var _c;
__turbopack_context__.k.register(_c, "CountryProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/context/SearchContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SearchProvider",
    ()=>SearchProvider,
    "useSearch",
    ()=>useSearch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const SearchContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])();
const useSearch = ()=>{
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(SearchContext);
};
_s(useSearch, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
const SearchProvider = ({ children })=>{
    _s1();
    const [searchFilters, setSearchFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const updateSearchFilters = (filters)=>{
        setSearchFilters(filters);
        if ("TURBOPACK compile-time truthy", 1) {
            localStorage.setItem("searchFilters", JSON.stringify(filters));
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Search filters updated!");
    };
    const clearSearchFilters = ()=>{
        setSearchFilters({});
        if ("TURBOPACK compile-time truthy", 1) {
            localStorage.removeItem("searchFilters");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SearchContext.Provider, {
        value: {
            searchFilters,
            updateSearchFilters,
            clearSearchFilters
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/context/SearchContext.js",
        lineNumber: 28,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(SearchProvider, "2frIZ/U6D91JKkpp3Xpz9prGzJk=");
_c = SearchProvider;
var _c;
__turbopack_context__.k.register(_c, "SearchProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/store/modalStore.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useModalStore",
    ()=>useModalStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const useModalStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>{
    const closeAll = ()=>set({
            isHamOpen: false,
            isEnquireOpen: false,
            isVideoOpen: false,
            isTeamPopOpen: false,
            isPositionsOpen: false,
            isThankyouOpen: false,
            selectedTeamMember: null,
            selectedPosition: null
        });
    return {
        isHamOpen: false,
        isEnquireOpen: false,
        isVideoOpen: false,
        isTeamPopOpen: false,
        isPositionsOpen: false,
        isThankyouOpen: false,
        selectedTeamMember: null,
        selectedPosition: null,
        openHam: ()=>{
            closeAll();
            set({
                isHamOpen: true
            });
        },
        closeHam: ()=>set({
                isHamOpen: false
            }),
        openEnquire: ()=>{
            closeAll();
            set({
                isEnquireOpen: true
            });
        },
        closeEnquire: ()=>set({
                isEnquireOpen: false
            }),
        openVideo: ()=>{
            closeAll();
            set({
                isVideoOpen: true
            });
        },
        closeVideo: ()=>set({
                isVideoOpen: false
            }),
        openTeamPop: (memberData)=>{
            closeAll();
            set({
                isTeamPopOpen: true,
                selectedTeamMember: memberData
            });
        },
        closeTeamPop: ()=>set({
                isTeamPopOpen: false,
                selectedTeamMember: null
            }),
        openPositionsPop: (positionData)=>{
            closeAll();
            set({
                isPositionsOpen: true,
                selectedPosition: positionData
            });
        },
        closePositionsPop: ()=>set({
                isPositionsOpen: false,
                selectedPosition: null
            }),
        openThankyouPop: ()=>{
            closeAll();
            set({
                isThankyouOpen: true
            });
        },
        closeThankyouPop: ()=>set({
                isThankyouOpen: false
            }),
        closeAll
    };
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/frontendcomponents/organisms/Overlay.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Overlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$modalStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/modalStore.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Overlay() {
    _s();
    const isHamOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$modalStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalStore"])({
        "Overlay.useModalStore[isHamOpen]": (state)=>state.isHamOpen
    }["Overlay.useModalStore[isHamOpen]"]);
    const isEnquireOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$modalStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalStore"])({
        "Overlay.useModalStore[isEnquireOpen]": (state)=>state.isEnquireOpen
    }["Overlay.useModalStore[isEnquireOpen]"]);
    const isVideoOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$modalStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalStore"])({
        "Overlay.useModalStore[isVideoOpen]": (state)=>state.isVideoOpen
    }["Overlay.useModalStore[isVideoOpen]"]);
    const isTeamPopOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$modalStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalStore"])({
        "Overlay.useModalStore[isTeamPopOpen]": (state)=>state.isTeamPopOpen
    }["Overlay.useModalStore[isTeamPopOpen]"]);
    const isPositionsOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$modalStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalStore"])({
        "Overlay.useModalStore[isPositionsOpen]": (state)=>state.isPositionsOpen
    }["Overlay.useModalStore[isPositionsOpen]"]);
    const isThankyouOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$modalStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalStore"])({
        "Overlay.useModalStore[isThankyouOpen]": (state)=>state.isThankyouOpen
    }["Overlay.useModalStore[isThankyouOpen]"]);
    const closeAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$modalStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalStore"])({
        "Overlay.useModalStore[closeAll]": (state)=>state.closeAll
    }["Overlay.useModalStore[closeAll]"]);
    const isAnyOpen = isHamOpen || isEnquireOpen || isVideoOpen || isTeamPopOpen || isPositionsOpen || isThankyouOpen;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Overlay.useEffect": ()=>{
            if (isAnyOpen) {
                document.body.classList.add('overflow-hidden');
            } else {
                document.body.classList.remove('overflow-hidden');
            }
            return ({
                "Overlay.useEffect": ()=>document.body.classList.remove('overflow-hidden')
            })["Overlay.useEffect"];
        }
    }["Overlay.useEffect"], [
        isAnyOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `overlay ${isAnyOpen ? 'is-open' : ''}`,
        onClick: closeAll
    }, void 0, false, {
        fileName: "[project]/components/frontendcomponents/organisms/Overlay.jsx",
        lineNumber: 26,
        columnNumber: 9
    }, this);
}
_s(Overlay, "gX7HOmjGdUodbDice4//mkioLLI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$modalStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$modalStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$modalStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$modalStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$modalStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$modalStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$modalStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalStore"]
    ];
});
_c = Overlay;
var _c;
__turbopack_context__.k.register(_c, "Overlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/frontendcomponents/molecules/ThanksPop.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThanksPop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$modalStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/modalStore.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ThanksPop() {
    _s();
    const isThankyouOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$modalStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalStore"])({
        "ThanksPop.useModalStore[isThankyouOpen]": (state)=>state.isThankyouOpen
    }["ThanksPop.useModalStore[isThankyouOpen]"]);
    const closeThankyouPop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$modalStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalStore"])({
        "ThanksPop.useModalStore[closeThankyouPop]": (state)=>state.closeThankyouPop
    }["ThanksPop.useModalStore[closeThankyouPop]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `model thank-you ${isThankyouOpen ? "is-open" : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "close",
                onClick: closeThankyouPop,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: 24,
                    height: 24,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M0.75 0.75L23.25 23.25M0.75 23.25L23.25 0.75",
                        stroke: "black",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/components/frontendcomponents/molecules/ThanksPop.jsx",
                        lineNumber: 17,
                        columnNumber: 17
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/frontendcomponents/molecules/ThanksPop.jsx",
                    lineNumber: 10,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/frontendcomponents/molecules/ThanksPop.jsx",
                lineNumber: 9,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "model-body",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "thankyou_wrapper",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Thank You"
                        }, void 0, false, {
                            fileName: "[project]/components/frontendcomponents/molecules/ThanksPop.jsx",
                            lineNumber: 27,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Thank you for contacting us. Our team is reviewing your request and will respond at the earliest."
                        }, void 0, false, {
                            fileName: "[project]/components/frontendcomponents/molecules/ThanksPop.jsx",
                            lineNumber: 28,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/frontendcomponents/molecules/ThanksPop.jsx",
                    lineNumber: 26,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/frontendcomponents/molecules/ThanksPop.jsx",
                lineNumber: 25,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/frontendcomponents/molecules/ThanksPop.jsx",
        lineNumber: 8,
        columnNumber: 9
    }, this);
}
_s(ThanksPop, "HER4DkGN8ZwyF6rOHoo8dAJZFck=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$modalStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$modalStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalStore"]
    ];
});
_c = ThanksPop;
var _c;
__turbopack_context__.k.register(_c, "ThanksPop");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/frontendcomponents/molecules/ServiceCol.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServiceCol
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
;
;
function ServiceCol({ mediaType = "", mediaSrc = "", linkHref = "", classname = "", title = "", desc = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: linkHref,
        className: `service_col item-md ${classname}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                children: mediaType === "video" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                    src: mediaSrc,
                    autoPlay: true,
                    muted: true,
                    loop: true,
                    playsInline: true
                }, void 0, false, {
                    fileName: "[project]/components/frontendcomponents/molecules/ServiceCol.jsx",
                    lineNumber: 11,
                    columnNumber: 25
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: mediaSrc,
                    width: "800",
                    height: "600",
                    alt: "Service Image"
                }, void 0, false, {
                    fileName: "[project]/components/frontendcomponents/molecules/ServiceCol.jsx",
                    lineNumber: 13,
                    columnNumber: 25
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/frontendcomponents/molecules/ServiceCol.jsx",
                lineNumber: 8,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/frontendcomponents/molecules/ServiceCol.jsx",
                        lineNumber: 18,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: desc
                    }, void 0, false, {
                        fileName: "[project]/components/frontendcomponents/molecules/ServiceCol.jsx",
                        lineNumber: 19,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn white",
                        children: "Explore More"
                    }, void 0, false, {
                        fileName: "[project]/components/frontendcomponents/molecules/ServiceCol.jsx",
                        lineNumber: 20,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/frontendcomponents/molecules/ServiceCol.jsx",
                lineNumber: 17,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/frontendcomponents/molecules/ServiceCol.jsx",
        lineNumber: 7,
        columnNumber: 9
    }, this);
}
_c = ServiceCol;
var _c;
__turbopack_context__.k.register(_c, "ServiceCol");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/frontendcomponents/atoms/Button.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
function Button({ classname = "", linkHref = "", buttonText = "", onClick, ...rest }) {
    const isLink = Boolean(linkHref);
    const classList = classname.split(" ");
    const downArrow = classList.includes("down");
    const rightArrow = classList.includes("right");
    const topRightArrow = classList.includes("top-right");
    const Component = isLink ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] : "button";
    const componentProps = {
        className: `btn ${classname}`,
        onClick: !isLink ? onClick : undefined,
        ...isLink ? {
            href: linkHref
        } : {
            type: "button"
        },
        ...rest
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Component, {
        ...componentProps,
        children: [
            buttonText,
            downArrow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "20px",
                height: "22px",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 1.2,
                    d: "M12 5v14m0 0l6-6m-6 6l-6-6"
                }, void 0, false, {
                    fileName: "[project]/components/frontendcomponents/atoms/Button.jsx",
                    lineNumber: 22,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/frontendcomponents/atoms/Button.jsx",
                lineNumber: 21,
                columnNumber: 17
            }, this),
            rightArrow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "18px",
                height: "18px",
                viewBox: "0 0 25 25",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "currentColor",
                    d: "M21.08 12.519a.75.75 0 0 1-.22.51l-5.996 6.001a.75.75 0 0 1-1.061-1.06l4.72-4.724H4.328a.75.75 0 0 1 0-1.5h14.188L13.803 7.03a.75.75 0 1 1 1.06-1.06l5.95 5.953a.75.75 0 0 1 .266.596"
                }, void 0, false, {
                    fileName: "[project]/components/frontendcomponents/atoms/Button.jsx",
                    lineNumber: 27,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/frontendcomponents/atoms/Button.jsx",
                lineNumber: 26,
                columnNumber: 17
            }, this),
            topRightArrow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "20px",
                height: "20px",
                viewBox: "0 0 1024 1024",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        fill: "currentColor",
                        d: "M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0z"
                    }, void 0, false, {
                        fileName: "[project]/components/frontendcomponents/atoms/Button.jsx",
                        lineNumber: 32,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        fill: "currentColor",
                        d: "M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312z"
                    }, void 0, false, {
                        fileName: "[project]/components/frontendcomponents/atoms/Button.jsx",
                        lineNumber: 33,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/frontendcomponents/atoms/Button.jsx",
                lineNumber: 31,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/frontendcomponents/atoms/Button.jsx",
        lineNumber: 17,
        columnNumber: 9
    }, this);
}
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/frontendcomponents/organisms/Header.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$modalStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/modalStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$frontendcomponents$2f$molecules$2f$ServiceCol$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/frontendcomponents/molecules/ServiceCol.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$frontendcomponents$2f$atoms$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/frontendcomponents/atoms/Button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$homeAPISlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/backendSlice/homeAPISlice.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function Header() {
    _s();
    const [headerFixed, setHeaderFixed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openLang, setOpenLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const openHam = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$modalStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalStore"])({
        "Header.useModalStore[openHam]": (state)=>state.openHam
    }["Header.useModalStore[openHam]"]);
    const { data, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$homeAPISlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetProductSectionDataQuery"])();
    const categoriesWithProducts = Array.isArray(data) ? data : data?.data || [];
    const validCategories = categoriesWithProducts.filter((category)=>category?.products && category.products.length > 0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const langDropdown = document.querySelector(".lang_select");
            const handleBodyClick = {
                "Header.useEffect.handleBodyClick": (e)=>{
                    if (langDropdown && !langDropdown.contains(e.target)) {
                        setOpenLang(false);
                    }
                }
            }["Header.useEffect.handleBodyClick"];
            document.body.addEventListener("click", handleBodyClick);
            const handleScroll = {
                "Header.useEffect.handleScroll": ()=>{
                    setHeaderFixed(window.scrollY > 100);
                }
            }["Header.useEffect.handleScroll"];
            handleScroll();
            window.addEventListener("scroll", handleScroll);
            return ({
                "Header.useEffect": ()=>{
                    window.removeEventListener("scroll", handleScroll);
                    document.body.removeEventListener("click", handleBodyClick);
                }
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const solutionsLi = document.querySelectorAll(".solutions_li");
            const handleMouseEnter = {
                "Header.useEffect.handleMouseEnter": (e)=>{
                    solutionsLi.forEach({
                        "Header.useEffect.handleMouseEnter": (li)=>li.classList.remove("active")
                    }["Header.useEffect.handleMouseEnter"]);
                    e.currentTarget.classList.add("active");
                }
            }["Header.useEffect.handleMouseEnter"];
            solutionsLi.forEach({
                "Header.useEffect": (li)=>{
                    li.addEventListener("mouseenter", handleMouseEnter);
                }
            }["Header.useEffect"]);
            return ({
                "Header.useEffect": ()=>{
                    solutionsLi.forEach({
                        "Header.useEffect": (li)=>{
                            li.removeEventListener("mouseenter", handleMouseEnter);
                        }
                    }["Header.useEffect"]);
                }
            })["Header.useEffect"];
        }
    }["Header.useEffect"], [
        validCategories
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: `${headerFixed ? "header-fixed" : ""}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-fluid",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "header-container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "colA",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "logo",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/assets/logo.svg",
                                width: 300,
                                height: 55,
                                alt: "Logo"
                            }, void 0, false, {
                                fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                                lineNumber: 67,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                            lineNumber: 66,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                        lineNumber: 65,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "colB",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "nav-items",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/about-us",
                                        children: "About Us"
                                    }, void 0, false, {
                                        fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                                        lineNumber: 78,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                                    lineNumber: 77,
                                    columnNumber: 29
                                }, this),
                                !isLoading && validCategories.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "hasDropdown",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/solution-listing",
                                            children: "Solutions"
                                        }, void 0, false, {
                                            fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                                            lineNumber: 82,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "icon"
                                        }, void 0, false, {
                                            fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                                            lineNumber: 83,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "dropdown-menu",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "dropdown-menu-wrap",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "colA-md",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "solutions_ul",
                                                        children: validCategories.map((category, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: `solutions_li ${index === 0 ? "active" : ""}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "solution_cat",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "cat_ico",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                    src: `/OnlineImages/CategoryImages/${category.categoryImage}`,
                                                                                    width: 36,
                                                                                    height: 48,
                                                                                    alt: category.categoryName || "Category icon"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                                                                                    lineNumber: 95,
                                                                                    columnNumber: 69
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                                                                                lineNumber: 94,
                                                                                columnNumber: 65
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                children: category.categoryName
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                                                                                lineNumber: 102,
                                                                                columnNumber: 65
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                width: "18px",
                                                                                height: "18px",
                                                                                viewBox: "0 0 24 24",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                    fill: "currentColor",
                                                                                    d: "M4 12h12.25L11 6.75l.66-.75l6.5 6.5l-6.5 6.5l-.66-.75L16.25 13H4z"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                                                                                    lineNumber: 109,
                                                                                    columnNumber: 69
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                                                                                lineNumber: 103,
                                                                                columnNumber: 65
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                                                                        lineNumber: 93,
                                                                        columnNumber: 61
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "solution_submenu",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "submenu_wrapper",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "heading",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                                            children: category.categoryName
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                                                                                            lineNumber: 118,
                                                                                            columnNumber: 73
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            children: category.categoryDescription
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                                                                                            lineNumber: 119,
                                                                                            columnNumber: 73
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                                                                                    lineNumber: 117,
                                                                                    columnNumber: 69
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "submenu_grid",
                                                                                    children: category.products.map((product, pIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$frontendcomponents$2f$molecules$2f$ServiceCol$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                            classname: "no_anchor",
                                                                                            linkHref: `/${product.productNameURL}`,
                                                                                            mediaType: product.productImage?.endsWith(".mp4") ? "video" : "image",
                                                                                            mediaSrc: `/OnlineImages/ProductImages/${product.productImage}`,
                                                                                            title: product.productName,
                                                                                            desc: product.productDescription
                                                                                        }, product.productId || pIndex, false, {
                                                                                            fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                                                                                            lineNumber: 123,
                                                                                            columnNumber: 77
                                                                                        }, this))
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                                                                                    lineNumber: 121,
                                                                                    columnNumber: 69
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                                                                            lineNumber: 116,
                                                                            columnNumber: 65
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                                                                        lineNumber: 115,
                                                                        columnNumber: 61
                                                                    }, this)
                                                                ]
                                                            }, category.categoryId || index, true, {
                                                                fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                                                                lineNumber: 89,
                                                                columnNumber: 57
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                                                        lineNumber: 87,
                                                        columnNumber: 49
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                                                    lineNumber: 86,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                                                lineNumber: 85,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                                            lineNumber: 84,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                                    lineNumber: 81,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/partners",
                                        children: "Partners"
                                    }, void 0, false, {
                                        fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                                        lineNumber: 149,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                                    lineNumber: 148,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/media",
                                        children: "Media room"
                                    }, void 0, false, {
                                        fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                                        lineNumber: 152,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                                    lineNumber: 151,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/contact-us",
                                        children: "Contact us"
                                    }, void 0, false, {
                                        fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                                        lineNumber: 155,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                                    lineNumber: 154,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "ham-btn",
                                        onClick: openHam,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                                                lineNumber: 159,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                                                lineNumber: 160,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                                        lineNumber: 158,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                                    lineNumber: 157,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                            lineNumber: 76,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                        lineNumber: 75,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "colC",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `lang_select ${openLang ? "open" : ""}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "selected_lang",
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                            setOpenLang(!openLang);
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "icon",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: 20,
                                                    height: 20,
                                                    viewBox: "0 0 28 28",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "#000",
                                                        d: "M14 3.5c.985 0 2.11.885 3.033 2.862c.416.892.762 1.953 1.014 3.138H9.953c.252-1.185.598-2.246 1.014-3.138C11.89 4.385 13.015 3.5 14 3.5M9.608 5.728C9.102 6.812 8.698 8.09 8.422 9.5H4.51a10.53 10.53 0 0 1 6.062-5.428a10 10 0 0 0-.964 1.656M8.183 11c-.12.96-.183 1.966-.183 3s.063 2.04.183 3H3.935a10.5 10.5 0 0 1-.435-3c0-1.043.152-2.05.435-3zm.239 7.5c.276 1.41.68 2.688 1.186 3.772c.28.599.601 1.16.964 1.656A10.53 10.53 0 0 1 4.51 18.5zm1.53 0h8.095c-.252 1.185-.598 2.246-1.014 3.138C16.11 23.615 14.985 24.5 14 24.5s-2.11-.885-3.033-2.862c-.416-.892-.762-1.953-1.014-3.138m8.353-1.5h-8.61a23 23 0 0 1-.195-3c0-1.045.069-2.051.195-3h8.61c.127.949.195 1.955.195 3s-.069 2.051-.195 3m1.273 1.5h3.912a10.53 10.53 0 0 1-6.062 5.428a10 10 0 0 0 .964-1.656c.506-1.084.91-2.363 1.186-3.772m4.487-1.5h-4.248c.12-.96.183-1.966.183-3s-.063-2.04-.183-3h4.248c.283.95.435 1.957.435 3s-.152 2.05-.435 3M17.428 4.072A10.53 10.53 0 0 1 23.49 9.5h-3.912c-.276-1.41-.68-2.688-1.186-3.772a10 10 0 0 0-.964-1.656M14 26c6.627 0 12-5.373 12-12S20.627 2 14 2S2 7.373 2 14s5.373 12 12 12",
                                                        strokeWidth: 0.1,
                                                        stroke: "#fff"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                                                        lineNumber: 181,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                                                    lineNumber: 175,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                                                lineNumber: 174,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "show_lan",
                                                children: "EN"
                                            }, void 0, false, {
                                                fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                                                lineNumber: 189,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "icon",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: 20,
                                                    height: 20,
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "#000",
                                                        d: "M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569z",
                                                        strokeWidth: 0.1,
                                                        stroke: "#fff"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                                                        lineNumber: 197,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                                                    lineNumber: 191,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                                                lineNumber: 190,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                                        lineNumber: 167,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "dropdown_list",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "English"
                                            }, void 0, false, {
                                                fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                                                lineNumber: 207,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Hindi"
                                            }, void 0, false, {
                                                fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                                                lineNumber: 208,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Kannada"
                                            }, void 0, false, {
                                                fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                                                lineNumber: 209,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Tamil"
                                            }, void 0, false, {
                                                fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                                                lineNumber: 210,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Telugu"
                                            }, void 0, false, {
                                                fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                                                lineNumber: 211,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Bengali"
                                            }, void 0, false, {
                                                fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                                                lineNumber: 212,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Marathi"
                                            }, void 0, false, {
                                                fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                                                lineNumber: 213,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                                        lineNumber: 206,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                                lineNumber: 166,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$frontendcomponents$2f$atoms$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                buttonText: "Sign in"
                            }, void 0, false, {
                                fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                                lineNumber: 216,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                        lineNumber: 165,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
                lineNumber: 64,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
            lineNumber: 63,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/frontendcomponents/organisms/Header.jsx",
        lineNumber: 62,
        columnNumber: 9
    }, this);
}
_s(Header, "rMwi7YsXhECh/Tz0onGI2C6HQu8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$modalStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$homeAPISlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetProductSectionDataQuery"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_b75bc7a3._.js.map