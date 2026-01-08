module.exports = [
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/loading.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/loading.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/(frontend)/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/(frontend)/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/store/frontendSlice/metaAPISlice.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
//metaAPISlice.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-rsc] (ecmascript)");
;
const username = ("TURBOPACK compile-time value", "API.afford");
const password = ("TURBOPACK compile-time value", "Admin@afford");
const apiUrl = ("TURBOPACK compile-time value", "http://localhost:3002/api"); // e.g. http://localhost:3002
// Universal Basic Auth header
function makeAuthHeader() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const raw = `${username}:${password}`;
    if ("TURBOPACK compile-time truthy", 1) {
        // server
        return "Basic " + Buffer.from(raw).toString("base64");
    } else //TURBOPACK unreachable
    ;
}
const authHeader = makeAuthHeader();
const baseQueryWithAuth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchBaseQuery"])({
    baseUrl: `${apiUrl}/page`,
    credentials: "include",
    prepareHeaders: (headers)=>{
        if (authHeader) headers.set("Authorization", authHeader);
        return headers;
    }
});
const metaAPISlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
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
}),
"[project]/components/frontendcomponents/pages/terms-of-use/index.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TermsConditionsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
;
function TermsConditionsPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "privacy-secA sec-pad-all mt-hdrfxd",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "website-content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: [
                                "Terms ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "& Conditions"
                                }, void 0, false, {
                                    fileName: "[project]/components/frontendcomponents/pages/terms-of-use/index.jsx",
                                    lineNumber: 9,
                                    columnNumber: 23
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/frontendcomponents/pages/terms-of-use/index.jsx",
                            lineNumber: 9,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Welcome to the Afford Plan website. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions. Please read them carefully. If you do not agree with any part of these terms, you must not use our website."
                        }, void 0, false, {
                            fileName: "[project]/components/frontendcomponents/pages/terms-of-use/index.jsx",
                            lineNumber: 10,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Use of Website"
                        }, void 0, false, {
                            fileName: "[project]/components/frontendcomponents/pages/terms-of-use/index.jsx",
                            lineNumber: 17,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: "Eligibility:"
                                        }, void 0, false, {
                                            fileName: "[project]/components/frontendcomponents/pages/terms-of-use/index.jsx",
                                            lineNumber: 20,
                                            columnNumber: 17
                                        }, this),
                                        " You must be at least 18 years old to use this website."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/frontendcomponents/pages/terms-of-use/index.jsx",
                                    lineNumber: 19,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: "License:"
                                        }, void 0, false, {
                                            fileName: "[project]/components/frontendcomponents/pages/terms-of-use/index.jsx",
                                            lineNumber: 24,
                                            columnNumber: 17
                                        }, this),
                                        " We grant you a limited, non-exclusive, non-transferable license to access and use the website for personal and non-commercial purposes."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/frontendcomponents/pages/terms-of-use/index.jsx",
                                    lineNumber: 23,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: "Prohibited Conduct:"
                                        }, void 0, false, {
                                            fileName: "[project]/components/frontendcomponents/pages/terms-of-use/index.jsx",
                                            lineNumber: 29,
                                            columnNumber: 17
                                        }, this),
                                        " You agree not to use the website for any unlawful purpose, or to solicit others to perform or participate in any unlawful acts."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/frontendcomponents/pages/terms-of-use/index.jsx",
                                    lineNumber: 28,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/frontendcomponents/pages/terms-of-use/index.jsx",
                            lineNumber: 18,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Intellectual Property"
                        }, void 0, false, {
                            fileName: "[project]/components/frontendcomponents/pages/terms-of-use/index.jsx",
                            lineNumber: 34,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "All content on this website, including text, graphics, logos, images, and software, is the property of Afford Plan or its content suppliers and is protected by international copyright laws. You may not reproduce, distribute, or create derivative works from any of the material without our explicit permission."
                        }, void 0, false, {
                            fileName: "[project]/components/frontendcomponents/pages/terms-of-use/index.jsx",
                            lineNumber: 35,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Limitation of Liability"
                        }, void 0, false, {
                            fileName: "[project]/components/frontendcomponents/pages/terms-of-use/index.jsx",
                            lineNumber: 42,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Afford Plan will not be liable for any damages of any kind arising from the use of this website, including, but not limited to, direct, indirect, incidental, punitive, and consequential damages."
                        }, void 0, false, {
                            fileName: "[project]/components/frontendcomponents/pages/terms-of-use/index.jsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Changes to Terms"
                        }, void 0, false, {
                            fileName: "[project]/components/frontendcomponents/pages/terms-of-use/index.jsx",
                            lineNumber: 49,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "We reserve the right to modify these terms and conditions at any time. Any changes will be posted on this page. Your continued use of the website following the posting of changes constitutes your acceptance of those changes."
                        }, void 0, false, {
                            fileName: "[project]/components/frontendcomponents/pages/terms-of-use/index.jsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Governing Law"
                        }, void 0, false, {
                            fileName: "[project]/components/frontendcomponents/pages/terms-of-use/index.jsx",
                            lineNumber: 56,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "These terms and conditions are governed by the laws of India, Haryana. Any disputes arising from the use of this website will be resolved in the courts of India, Haryana."
                        }, void 0, false, {
                            fileName: "[project]/components/frontendcomponents/pages/terms-of-use/index.jsx",
                            lineNumber: 57,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/frontendcomponents/pages/terms-of-use/index.jsx",
                    lineNumber: 8,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/frontendcomponents/pages/terms-of-use/index.jsx",
                lineNumber: 7,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/frontendcomponents/pages/terms-of-use/index.jsx",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/frontendcomponents/pages/terms-of-use/index.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/(frontend)/terms-of-use/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/page.tsx
__turbopack_context__.s([
    "default",
    ()=>BlogListing,
    "generateMetadata",
    ()=>generateMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$frontendSlice$2f$metaAPISlice$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/frontendSlice/metaAPISlice.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$frontendcomponents$2f$pages$2f$terms$2d$of$2d$use$2f$index$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/frontendcomponents/pages/terms-of-use/index.jsx [app-rsc] (ecmascript)");
;
;
;
const API_ID = 7;
const CANONICAL_URL = ("TURBOPACK compile-time value", "https://www.afford.com") ?? "http://localhost:3000";
async function generateMetadata() {
    try {
        const meta = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$frontendSlice$2f$metaAPISlice$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchMetaDataById"])(API_ID);
        const defaultTitle = "afford";
        return {
            title: meta?.MetaTitle || defaultTitle,
            description: meta?.MetaDescriptions || "",
            keywords: meta?.MetaKeywords || "",
            alternates: {
                canonical: `${CANONICAL_URL}/policy-of-use`
            },
            openGraph: {
                type: "website",
                url: `${CANONICAL_URL}/policy-of-use`,
                title: meta?.MetaTitle || defaultTitle,
                description: meta?.MetaDescriptions || "",
                images: [
                    {
                        url: "/logo.svg",
                        width: 1200,
                        height: 630,
                        alt: "afford"
                    }
                ]
            },
            twitter: {
                card: "summary_large_image",
                title: meta?.MetaTitle || defaultTitle,
                description: meta?.MetaDescriptions || "",
                images: [
                    "/logo.svg"
                ]
            },
            icons: {
                icon: "/favicon.ico"
            }
        };
    } catch (err) {
        console.error("Meta fetch failed", err);
        return {
            title: "afford",
            description: ""
        };
    }
}
function BlogListing() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$frontendcomponents$2f$pages$2f$terms$2d$of$2d$use$2f$index$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/app/(frontend)/terms-of-use/page.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/(frontend)/terms-of-use/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/(frontend)/terms-of-use/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__de8f5029._.js.map