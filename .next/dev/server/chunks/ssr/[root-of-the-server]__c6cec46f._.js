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
"[project]/components/frontendcomponents/pages/careers/index.jsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/frontendcomponents/pages/careers/index.jsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/frontendcomponents/pages/careers/index.jsx <module evaluation>", "default");
}),
"[project]/components/frontendcomponents/pages/careers/index.jsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/frontendcomponents/pages/careers/index.jsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/frontendcomponents/pages/careers/index.jsx", "default");
}),
"[project]/components/frontendcomponents/pages/careers/index.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$frontendcomponents$2f$pages$2f$careers$2f$index$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/frontendcomponents/pages/careers/index.jsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$frontendcomponents$2f$pages$2f$careers$2f$index$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/frontendcomponents/pages/careers/index.jsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$frontendcomponents$2f$pages$2f$careers$2f$index$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/(frontend)/careers/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/page.tsx
__turbopack_context__.s([
    "default",
    ()=>CareersPageData,
    "generateMetadata",
    ()=>generateMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$frontendSlice$2f$metaAPISlice$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/frontendSlice/metaAPISlice.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$frontendcomponents$2f$pages$2f$careers$2f$index$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/frontendcomponents/pages/careers/index.jsx [app-rsc] (ecmascript)");
;
;
;
const API_ID = 11;
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
                canonical: `${CANONICAL_URL}/about-us`
            },
            openGraph: {
                type: "website",
                url: `${CANONICAL_URL}/about-us`,
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
function CareersPageData() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$frontendcomponents$2f$pages$2f$careers$2f$index$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/app/(frontend)/careers/page.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/(frontend)/careers/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/(frontend)/careers/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c6cec46f._.js.map