module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/store/backendSlice/authAPISlice.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authAPISlice",
    ()=>authAPISlice,
    "useCheckLoginQuery",
    ()=>useCheckLoginQuery,
    "useGetUserByIdQuery",
    ()=>useGetUserByIdQuery,
    "useGetUsersQuery",
    ()=>useGetUsersQuery,
    "useLoginMutation",
    ()=>useLoginMutation,
    "useLogoutMutation",
    ()=>useLogoutMutation,
    "useSignInMutation",
    ()=>useSignInMutation,
    "useUpdateUserStatusMutation",
    ()=>useUpdateUserStatusMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-ssr] (ecmascript)");
;
const username = ("TURBOPACK compile-time value", "API.afford");
const password = ("TURBOPACK compile-time value", "Admin@afford");
const apiUrl = ("TURBOPACK compile-time value", "http://localhost:3002/api");
const authHeader = "Basic " + btoa(`${username}:${password}`);
const authAPISlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: "authAPISlice",
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchBaseQuery"])({
        baseUrl: apiUrl,
        credentials: "include",
        prepareHeaders: (headers, { endpoint })=>{
            headers.set("Authorization", authHeader);
            if (endpoint !== "signIn") {
                headers.set("Content-Type", "application/json");
            }
            return headers;
        }
    }),
    tagTypes: [
        "User"
    ],
    endpoints: (builder)=>({
            getUsers: builder.query({
                query: ()=>({
                        url: "/auth/all-user",
                        method: "GET"
                    }),
                providesTags: [
                    "User"
                ]
            }),
            login: builder.mutation({
                query: (body)=>({
                        url: "/auth/login",
                        method: "POST",
                        body
                    })
            }),
            signIn: builder.mutation({
                query: (formData)=>({
                        url: "/auth/save-or-update-user",
                        method: "POST",
                        body: formData
                    }),
                invalidatesTags: [
                    "User"
                ]
            }),
            checkLogin: builder.query({
                query: ()=>({
                        url: "/auth/check-login",
                        method: "GET"
                    }),
                providesTags: [
                    "User"
                ]
            }),
            logout: builder.mutation({
                query: ()=>({
                        url: "/auth/logout",
                        method: "POST"
                    })
            }),
            getUserById: builder.query({
                query: (id)=>`/auth/fill-user-data?loginID=${id}`,
                providesTags: (result, error, id)=>[
                        {
                            type: "User",
                            id
                        }
                    ]
            }),
            updateUserStatus: builder.mutation({
                query: ({ UserID, ActiveStatus })=>({
                        url: `/update-status`,
                        method: "POST",
                        body: {
                            UserID,
                            ActiveStatus
                        }
                    }),
                invalidatesTags: (result, error, { UserID })=>[
                        {
                            type: "User",
                            id: UserID
                        }
                    ]
            })
        })
});
const { useGetUserByIdQuery, useGetUsersQuery, useUpdateUserStatusMutation, useSignInMutation, useLoginMutation, useCheckLoginQuery, useLogoutMutation } = authAPISlice;
}),
"[project]/components/backendcomponents/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$authAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/backendSlice/authAPISlice.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function Header() {
    const [userName, setUserName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [userRole, setUserRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [profileImage, setProfileImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const { data: checkData, isSuccess, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$authAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCheckLoginQuery"])(undefined, {
        refetchOnMountOrArgChange: true,
        pollingInterval: 10000
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const user = checkData?.user;
        if (user) {
            setUserName(user.FullName || "");
            setUserRole(user.Role || "");
            setProfileImage(user.ProfileImage || "");
        }
    }, [
        checkData
    ]);
    const getInitials = (name)=>{
        if (!name) return "U";
        const words = name.trim().split(" ");
        if (words.length === 1) return words[0][0].toUpperCase();
        return (words[0][0] + words[words.length - 1][0]).toUpperCase();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                rel: "stylesheet",
                href: "/admin-assets/fonts/font.css"
            }, void 0, false, {
                fileName: "[project]/components/backendcomponents/Header.tsx",
                lineNumber: 30,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "header-wrapper",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "colA",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/afford-admin/dashboard",
                                className: "logo",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/admin-assets/img/logo.svg",
                                    alt: "",
                                    style: {
                                        maxWidth: "80%"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/backendcomponents/Header.tsx",
                                    lineNumber: 35,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/backendcomponents/Header.tsx",
                                lineNumber: 34,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/backendcomponents/Header.tsx",
                            lineNumber: 33,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "colB",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "dropdown-wrap inline-flex align-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "user-ico",
                                                children: profileImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: `/OnlineImages/AuthImages/${profileImage}`,
                                                    alt: userName || "User",
                                                    className: "user-image"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/backendcomponents/Header.tsx",
                                                    lineNumber: 44,
                                                    columnNumber: 45
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "user-ico",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: getInitials(userName)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/backendcomponents/Header.tsx",
                                                        lineNumber: 46,
                                                        columnNumber: 71
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/backendcomponents/Header.tsx",
                                                    lineNumber: 46,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/backendcomponents/Header.tsx",
                                                lineNumber: 42,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-dropdown": true,
                                                className: "admin_de",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "title",
                                                        children: userName || "Guest"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/backendcomponents/Header.tsx",
                                                        lineNumber: 50,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "design-ekgrgb",
                                                        children: userRole || "Role"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/backendcomponents/Header.tsx",
                                                        lineNumber: 51,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/backendcomponents/Header.tsx",
                                                lineNumber: 49,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/backendcomponents/Header.tsx",
                                        lineNumber: 41,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/backendcomponents/Header.tsx",
                                    lineNumber: 40,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/backendcomponents/Header.tsx",
                                lineNumber: 39,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/backendcomponents/Header.tsx",
                            lineNumber: 38,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/backendcomponents/Header.tsx",
                    lineNumber: 32,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/backendcomponents/Header.tsx",
                lineNumber: 31,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/components/backendcomponents/AdminStaticData.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"Menu":{"items":[{"PageID":1,"title":"Home","icon":"<svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' aria-hidden='true' role='img' className='iconify iconify--eva' width='24' height='24' preserveAspectRatio='xMidYMid meet' viewBox='0 0 24 24' data-icon='eva:home-outline'><path fill='currentColor' d='M20.42 10.18L12.71 2.3a1 1 0 0 0-1.42 0l-7.71 7.89A2 2 0 0 0 3 11.62V20a2 2 0 0 0 1.89 2h14.22A2 2 0 0 0 21 20v-8.38a2.07 2.07 0 0 0-.58-1.44M10 20v-6h4v6Zm9 0h-3v-7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H5v-8.42l7-7.15l7 7.19Z'></path></svg>","url":"/afford-admin/dashboard","addurl":"","Show":"1"},{"PageID":14,"title":"Add Category","url":"/afford-admin/manage-category","icon":"<svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' width='2.2em' height='1.8em'><g clip-path='url(#clip0_429_11052)'><circle cx='17' cy='7' r='3' stroke='currentColor' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'></circle><circle cx='7' cy='17' r='3' stroke='currentColor' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'></circle><path d='M14 14H20V19C20 19.5523 19.5523 20 19 20H15C14.4477 20 14 19.5523 14 19V14Z' stroke='currentColor' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'></path><path d='M4 4H10V9C10 9.55228 9.55228 10 9 10H5C4.44772 10 4 9.55228 4 9V4Z' stroke='currentColor' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'></path></g><defs><clipPath id='clip0_429_11052'><rect width='24' height='24' fill='white'></rect></clipPath></defs></svg>","addurl":"/afford-admin/addupd-category","Show":"1"},{"PageID":14,"title":"Add Product","url":"/afford-admin/manage-product","icon":"<svg xmlns='http://www.w3.org/2000/svg' width='26' height='26' viewBox='0 0 2048 2048'><path fill='currentColor' d='m960 120l832 416v1040l-832 415l-832-415V536zm625 456L960 264L719 384l621 314zM960 888l238-118l-622-314l-241 120zM256 680v816l640 320v-816zm768 1136l640-320V680l-640 320z'/></svg>","addurl":"/afford-admin/addupd-product","Show":"1"},{"PageID":14,"title":"Partners Logo","icon":"<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path fill='currentColor' d='M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-4.86 8.86l-3 3.87L9 13.14L6 17h12z'/></svg>","url":"/afford-admin/manage-partner-logo","addurl":"/afford-admin/addupd-partner-logo","Show":"1"},{"PageID":15,"title":"Team Member","icon":"<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 24 24'><path fill='currentColor' d='M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z'/></svg>","url":"/afford-admin/manage-team-member","addurl":"/afford-admin/addupd-team-member","Show":"1"},{"PageID":16,"title":"Media Room","icon":"<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path fill='currentColor' fill-rule='evenodd' d='M1 3h22v16H1zm2 2v12h18V5zm13 18H8v-2h8zM8 8.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0' clip-rule='evenodd'/></svg>","url":"/afford-admin/manage-media","addurl":"/afford-admin/addupd-media","Show":"1"},{"PageID":15,"title":"Milestones","icon":"<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 24 24'><g fill='currentColor' fill-rule='evenodd' clip-rule='evenodd'><path d='M12 6.25a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5M10.25 9.5a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0'/><path d='M12 2.25a7.25 7.25 0 0 0-6.063 11.226l-2.587 4.48a.75.75 0 0 0 .795 1.11l2.614-.514l.861 2.52a.75.75 0 0 0 1.36.133l2.58-4.468a7 7 0 0 0 .88 0l2.58 4.468a.75.75 0 0 0 1.36-.134l.858-2.526l2.616.52a.75.75 0 0 0 .796-1.11l-2.586-4.479A7.25 7.25 0 0 0 12 2.25M6.25 9.5a5.75 5.75 0 1 1 11.5 0a5.75 5.75 0 0 1-11.5 0m3.734 6.966a7.24 7.24 0 0 1-3.027-1.757l-1.482 2.567l1.637-.322a.75.75 0 0 1 .854.493l.54 1.579zm5.508 2.556l-1.476-2.556a7.24 7.24 0 0 0 3.027-1.757l1.48 2.563l-1.638-.326a.75.75 0 0 0-.856.495z'/></g></svg>","url":"/afford-admin/manage-milestone","addurl":"/afford-admin/addupd-milestone","Show":"1"},{"PageID":9,"title":"Career Master","icon":"<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path fill='none' stroke='currentColor' stroke-width='1' d='M10 2h4c1.1 0 2 .9 2 2v2h3c1.66 0 3 1.34 3 3v2H2V9c0-1.66 1.34-3 3-3h3V4c0-1.1.9-2 2-2m0 4h4V4h-4v2M2 12h20v7c0 1.66-1.34 3-3 3H5c-1.66 0-3-1.34-3-3v-7z'/></svg>","url":"#","addurl":"#","Show":"1","MoreItem":[{"PageID":11,"title":"Career Enquiry","icon":"","url":"/afford-admin/manage-career","addurl":"/afford-admin/addupd-manage-career","Show":"1"},{"PageID":10,"title":"Job Description","icon":"","url":"/afford-admin/manage-job-category","addurl":"/afford-admin/addupd-job-category","Show":"1"}]},{"PageID":10,"title":"Our Blogs","icon":"<svg xmlns='http://www.w3.org/2000/svg' width='27' height='27' viewBox='0 0 24 24'><path fill='currentColor' d='M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20C5 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27zm0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93z'/></svg>","url":"/afford-admin/manage-blog","addurl":"/afford-admin/addupd-blog","Show":"0"},{"PageID":10,"title":"SEO Page","icon":"<svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 25 24'><path fill='currentColor' d='M8.938 6.585c-.51 0-.92.147-1.208.462c-.286.306-.418.732-.418 1.254q-.001.584.262 1.062v.002c.174.309.473.646.887 1.01v.001c.32.279.528.509.636.692v.002q.158.255.159.615c0 .207-.043.325-.098.387c-.047.054-.126.093-.265.093c-.14 0-.22-.04-.27-.1c-.053-.063-.093-.175-.093-.362v-.582H7.294v.51c0 .533.129.966.407 1.279l.001.001c.283.31.692.454 1.2.454c.514 0 .929-.147 1.217-.462c.292-.313.427-.75.427-1.29q.002-.625-.252-1.105c-.168-.318-.469-.659-.889-1.024c-.32-.278-.531-.507-.646-.686a1.06 1.06 0 0 1-.157-.56c0-.184.038-.295.09-.357c.046-.057.122-.096.255-.096c.128 0 .204.039.253.098l.003.004c.048.055.089.166.089.369v.474h1.236v-.411c0-.532-.128-.963-.407-1.27c-.276-.317-.68-.464-1.183-.464'/><path fill='currentColor' fill-rule='evenodd' d='M16.024 6.585c-.515 0-.932.147-1.226.462c-.291.312-.427.743-.427 1.272v3.312c0 .529.136.96.428 1.272c.293.315.71.462 1.225.462s.932-.147 1.226-.462c.291-.312.427-.743.427-1.272V8.319c0-.53-.136-.96-.427-1.272c-.294-.315-.71-.462-1.226-.462m-.363 1.671c0-.19.04-.305.094-.37c.05-.06.13-.101.27-.101c.139 0 .219.04.268.1c.054.066.094.18.094.371v3.438c0 .19-.04.305-.094.37c-.05.06-.13.101-.269.101c-.14 0-.22-.04-.269-.1c-.054-.066-.094-.18-.094-.371z' clip-rule='evenodd'/><path fill='currentColor' d='M13.994 6.675h-3v6.6h3v-1.2h-1.71V10.44h1.359v-1.2h-1.36V7.875h1.71z'/><path fill='currentColor' fill-rule='evenodd' d='M4.787 4.172a2.25 2.25 0 0 0-2.25 2.25v7.406a2.25 2.25 0 0 0 2.25 2.25h7v2.25h-2.25a.75.75 0 0 0 0 1.5h6a.75.75 0 1 0 0-1.5h-2.25v-2.25h7a2.25 2.25 0 0 0 2.25-2.25V6.422a2.25 2.25 0 0 0-2.25-2.25zm-.75 2.25a.75.75 0 0 1 .75-.75h15.5a.75.75 0 0 1 .75.75v7.406a.75.75 0 0 1-.75.75h-15.5a.75.75 0 0 1-.75-.75z' clip-rule='evenodd'/></svg>","url":"/afford-admin/manage-seo","addurl":"/afford-admin/addupd-seo","Show":"0"},{"PageID":11,"title":"Web Pages","icon":"<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 16 16'><path fill='currentColor' fill-rule='evenodd' d='M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zm-9.736 7.35v3.999h-.791v-1.714H1.79v1.714H1V11.85h.791v1.626h1.682V11.85h.79Zm2.251.662v3.337h-.794v-3.337H4.588v-.662h3.064v.662zm2.176 3.337v-2.66h.038l.952 2.159h.516l.946-2.16h.038v2.661h.715V11.85h-.8l-1.14 2.596H9.93L8.79 11.85h-.805v3.999zm4.71-.674h1.696v.674H12.61V11.85h.79v3.325Z'/></svg>","url":"/afford-admin/manage-page","addurl":"/afford-admin/addupd-page","Show":"1"},{"PageID":18,"title":"Testimonial","icon":"<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path fill='currentColor' d='M3 20.59L6.59 17H18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2zM3 22H2V6a3 3 0 0 1 3-3h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H7z'/></svg>","url":"/afford-admin/manage-testimonial","addurl":"/afford-admin/addupd-testimonial","Show":"1"},{"PageID":12,"title":"Visitor Enquiry","icon":"<svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' aria-hidden='true' role='img' className='iconify iconify--solar' width='24' height='24' preserveAspectRatio='xMidYMid meet' viewBox='0 0 24 24' data-icon='solar:chart-linear'><g fill='none' stroke='currentColor' strokeWidth='1.5'><path strokeLinecap='round' d='M22 22H2'></path><path d='M21 22v-7.5a1.5 1.5 0 0 0-1.5-1.5h-3a1.5 1.5 0 0 0-1.5 1.5V22m0 0V5c0-1.414 0-2.121-.44-2.56C14.122 2 13.415 2 12 2s-2.121 0-2.56.44C9 2.878 9 3.585 9 5v17m0 0V9.5A1.5 1.5 0 0 0 7.5 8h-3A1.5 1.5 0 0 0 3 9.5V22'></path></g></svg>","url":"/afford-admin/manage-visitor-enquiry","addurl":"","Show":"1"}]}});}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/components/backendcomponents/SideNav.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SideNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$backendcomponents$2f$AdminStaticData$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/components/backendcomponents/AdminStaticData.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$react$2d$parser$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/html-react-parser/esm/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$authAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/backendSlice/authAPISlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
const username = ("TURBOPACK compile-time value", "API.afford");
const password = ("TURBOPACK compile-time value", "Admin@afford");
const apiUrl = ("TURBOPACK compile-time value", "http://localhost:3002/api");
const authHeader = "Basic " + btoa(`${username}:${password}`); // browser-safe base64
function SideNav() {
    const [logout] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$authAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLogoutMutation"])();
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDispatch"])();
    const Menu = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$backendcomponents$2f$AdminStaticData$2e$json__$28$json$29$__["default"].Menu.items;
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [allowedMenu, setAllowedMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { data: checkData, isSuccess, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$authAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCheckLoginQuery"])(undefined, {
        refetchOnMountOrArgChange: true,
        pollingInterval: 10000
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let hideBtn = document.querySelector('.hide_menu');
        let sideMenu = document.getElementsByTagName('aside');
        const menuToggle = ()=>{
            hideBtn?.classList.toggle('collapse');
            Array.from(sideMenu).forEach((item)=>item.classList.toggle('collapse'));
        };
        hideBtn?.addEventListener('click', menuToggle);
        return ()=>{
            hideBtn?.removeEventListener('click', menuToggle);
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const storedPermissions = checkData?.user?.permissions || [];
        const storedUser = checkData?.user || [];
        let filtered = [];
        if (storedUser?.loginID === 1) {
            filtered = Menu;
        } else {
            Menu.forEach((item)=>{
                const perm = storedPermissions.find((p)=>p.PageID === item.PageID);
                const allowedSubItems = item.MoreItem ? item.MoreItem.filter((sub)=>{
                    const subPerm = storedPermissions.find((p)=>p.PageID === sub.PageID);
                    return subPerm && (subPerm.CanRead === 1 || subPerm.CanWrite === 1 || subPerm.CanAdd === 1 || subPerm.CanDelete === 1);
                }) : [];
                if (perm && (perm.CanRead === 1 || perm.CanWrite === 1 || perm.CanAdd === 1 || perm.CanDelete === 1)) {
                    filtered.push({
                        ...item,
                        MoreItem: allowedSubItems
                    });
                } else if (allowedSubItems.length > 0) {
                    filtered.push(...allowedSubItems);
                }
            });
        }
        setAllowedMenu(filtered);
    }, [
        isSuccess,
        checkData,
        router,
        pathname
    ]);
    const handleLogout = async ()=>{
        try {
            const result = await logout().unwrap();
            if (result.success) {
                dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$authAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authAPISlice"].util.updateQueryData("checkLogin", undefined, (draft)=>{
                    draft.loggedIn = false;
                    draft.user = null;
                    draft.permissions = null;
                }));
                router.push("/afford-admin/login");
            } else {
                alert("Logout failed");
            }
        } catch (error) {
            console.error("Logout error:", error);
            alert("Something went wrong while logging out.");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "aside-wrap",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "aside-col",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "Header_nav_Active",
                    children: [
                        allowedMenu.filter((item)=>item.Show === "1") // ✅ parent only if Show=1
                        .map((item, index)=>{
                            const subItems = item.MoreItem?.filter((sub)=>sub.Show === "1") || []; // ✅ only sub menu Show=1
                            const subUrls = subItems.flatMap((sub)=>[
                                    sub.url,
                                    sub.addurl
                                ]) || [];
                            const isActive = pathname === item.url || pathname === item.addurl || subUrls.includes(pathname);
                            const isDropdownOpen = openIndex === index;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                onClick: (e)=>{
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setOpenIndex(openIndex === index ? null : index);
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `nav-item-wrap ${subItems.length > 0 ? "hasDropdown" : ""}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: item.url,
                                            className: isActive ? "active" : "",
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$react$2d$parser$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(item.icon),
                                                " ",
                                                item.title
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/backendcomponents/SideNav.jsx",
                                            lineNumber: 137,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/backendcomponents/SideNav.jsx",
                                        lineNumber: 134,
                                        columnNumber: 21
                                    }, this),
                                    subItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: `aside-dropdown ${isDropdownOpen ? "open" : ""}`,
                                        children: subItems.map((subItem, subIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: subItem.url,
                                                    className: pathname === subItem.url ? "active" : "",
                                                    children: [
                                                        subItem.icon && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$react$2d$parser$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(subItem.icon),
                                                        subItem.title
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/backendcomponents/SideNav.jsx",
                                                    lineNumber: 146,
                                                    columnNumber: 29
                                                }, this)
                                            }, subIndex, false, {
                                                fileName: "[project]/components/backendcomponents/SideNav.jsx",
                                                lineNumber: 145,
                                                columnNumber: 27
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/backendcomponents/SideNav.jsx",
                                        lineNumber: 143,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/components/backendcomponents/SideNav.jsx",
                                lineNumber: 126,
                                columnNumber: 19
                            }, this);
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                onClick: handleLogout,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        xmlnsXlink: "http://www.w3.org/1999/xlink",
                                        "aria-hidden": "true",
                                        role: "img",
                                        className: "iconify iconify--hugeicons",
                                        width: "1em",
                                        height: "1em",
                                        preserveAspectRatio: "xMidYMid meet",
                                        viewBox: "0 0 24 24",
                                        "data-icon": "hugeicons:logout-04",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "1.5",
                                            d: "M7.023 5.5a9 9 0 1 0 9.953 0M12 2v8",
                                            color: "currentColor"
                                        }, void 0, false, {
                                            fileName: "[project]/components/backendcomponents/SideNav.jsx",
                                            lineNumber: 162,
                                            columnNumber: 281
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/backendcomponents/SideNav.jsx",
                                        lineNumber: 162,
                                        columnNumber: 17
                                    }, this),
                                    "Log Out"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/backendcomponents/SideNav.jsx",
                                lineNumber: 161,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/backendcomponents/SideNav.jsx",
                            lineNumber: 160,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/backendcomponents/SideNav.jsx",
                    lineNumber: 112,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/backendcomponents/SideNav.jsx",
                lineNumber: 111,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/backendcomponents/SideNav.jsx",
            lineNumber: 110,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/backendcomponents/SideNav.jsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/backendcomponents/MainHeaderFooter.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MainHeaderFooter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$backendcomponents$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/backendcomponents/Header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$backendcomponents$2f$SideNav$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/backendcomponents/SideNav.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function MainHeaderFooter() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    // List of paths where layout should be hidden
    const hideLayout = [
        '/afford-admin/login'
    ];
    // Check if pathname matches or starts with any hidden route
    const shouldHideLayout = hideLayout.some((path)=>pathname.startsWith(path));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: !shouldHideLayout && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$backendcomponents$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/components/backendcomponents/MainHeaderFooter.tsx",
                    lineNumber: 19,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$backendcomponents$2f$SideNav$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/components/backendcomponents/MainHeaderFooter.tsx",
                    lineNumber: 20,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true)
    }, void 0, false);
}
}),
"[project]/store/backendSlice/dashboardAPISlice.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dashboardAPISlice",
    ()=>dashboardAPISlice,
    "useGetDashboardStatsQuery",
    ()=>useGetDashboardStatsQuery,
    "useGetRecentEnquiriesQuery",
    ()=>useGetRecentEnquiriesQuery,
    "useGetRevenueChartQuery",
    ()=>useGetRevenueChartQuery
]);
// store/backendSlice/dashboardAPISlice.js
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-ssr] (ecmascript)");
;
const dashboardAPISlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: "dashboardAPI",
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchBaseQuery"])({
        baseUrl: ("TURBOPACK compile-time value", "http://localhost:3002/api"),
        credentials: "include"
    }),
    endpoints: (builder)=>({
            getDashboardStats: builder.query({
                query: ()=>"/dashboard/stats"
            }),
            getRevenueChart: builder.query({
                query: ()=>"/dashboard/revenue"
            }),
            getRecentEnquiries: builder.query({
                query: ()=>"/dashboard/recent-enquiries"
            })
        })
});
const { useGetDashboardStatsQuery, useGetRevenueChartQuery, useGetRecentEnquiriesQuery } = dashboardAPISlice;
}),
"[project]/store/backendSlice/blogAPISlice.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "blogAPISlice",
    ()=>blogAPISlice,
    "useDeleteBlogMutation",
    ()=>useDeleteBlogMutation,
    "useGetBlogByIdQuery",
    ()=>useGetBlogByIdQuery,
    "useGetBlogsQuery",
    ()=>useGetBlogsQuery,
    "useSaveOrUpdateBlogMutation",
    ()=>useSaveOrUpdateBlogMutation,
    "useUpdateBlogStatusMutation",
    ()=>useUpdateBlogStatusMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-ssr] (ecmascript)");
;
const username = ("TURBOPACK compile-time value", "API.afford");
const password = ("TURBOPACK compile-time value", "Admin@afford");
const apiUrl = ("TURBOPACK compile-time value", "http://localhost:3002/api");
// ✅ Browser-safe basic auth header
const authHeader = ("TURBOPACK compile-time truthy", 1) ? "Basic " + btoa(`${username}:${password}`) : "TURBOPACK unreachable";
const blogAPISlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: "blogAPI",
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchBaseQuery"])({
        baseUrl: `${apiUrl}/blog`,
        credentials: "include",
        prepareHeaders: (headers)=>{
            if ("TURBOPACK compile-time truthy", 1) {
                headers.set("Authorization", authHeader);
            }
            return headers;
        }
    }),
    tagTypes: [
        "Blog"
    ],
    endpoints: (builder)=>({
            getBlogs: builder.query({
                query: ()=>`/all-blogs`,
                providesTags: (result)=>result ? [
                        ...result.map(({ BlogID })=>({
                                type: "Blog",
                                id: BlogID
                            })),
                        {
                            type: "Blog",
                            id: "LIST"
                        }
                    ] : [
                        {
                            type: "Blog",
                            id: "LIST"
                        }
                    ]
            }),
            getBlogById: builder.query({
                query: (id)=>`/fill-blog-data?BlogID=${id}`,
                providesTags: (result, error, id)=>[
                        {
                            type: "Blog",
                            id
                        }
                    ]
            }),
            saveOrUpdateBlog: builder.mutation({
                query: (formData)=>({
                        url: `/save-or-update-blog`,
                        method: "POST",
                        body: formData
                    }),
                invalidatesTags: [
                    {
                        type: "Blog",
                        id: "LIST"
                    }
                ]
            }),
            deleteBlog: builder.mutation({
                query: (BlogID)=>({
                        url: `/delete-blog/${BlogID}`,
                        method: "DELETE"
                    }),
                invalidatesTags: (result, error, BlogID)=>[
                        {
                            type: "Blog",
                            id: BlogID
                        },
                        {
                            type: "Blog",
                            id: "LIST"
                        }
                    ]
            }),
            updateBlogStatus: builder.mutation({
                query: ({ BlogID, ActiveStatus })=>({
                        url: `/update-status`,
                        method: "POST",
                        body: {
                            BlogID,
                            ActiveStatus
                        }
                    }),
                invalidatesTags: (result, error, { BlogID })=>[
                        {
                            type: "Blog",
                            id: BlogID
                        }
                    ]
            })
        })
});
const { useGetBlogsQuery, useGetBlogByIdQuery, useSaveOrUpdateBlogMutation, useDeleteBlogMutation, useUpdateBlogStatusMutation } = blogAPISlice;
}),
"[project]/store/backendSlice/staticAPISlice.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "staticAPISlice",
    ()=>staticAPISlice,
    "useDeleteStaticMutation",
    ()=>useDeleteStaticMutation,
    "useGetMetaDataByIdQuery",
    ()=>useGetMetaDataByIdQuery,
    "useGetStaticByIdQuery",
    ()=>useGetStaticByIdQuery,
    "useGetStaticsQuery",
    ()=>useGetStaticsQuery,
    "useSaveOrUpdateStaticMutation",
    ()=>useSaveOrUpdateStaticMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-ssr] (ecmascript)");
;
const username = ("TURBOPACK compile-time value", "API.afford");
const password = ("TURBOPACK compile-time value", "Admin@afford");
const apiUrl = ("TURBOPACK compile-time value", "http://localhost:3002/api");
// ✅ Browser-safe basic auth header
const authHeader = ("TURBOPACK compile-time truthy", 1) ? "Basic " + btoa(`${username}:${password}`) : "TURBOPACK unreachable";
const staticAPISlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: "staticAPI",
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchBaseQuery"])({
        baseUrl: `${apiUrl}/page`,
        credentials: "include",
        prepareHeaders: (headers)=>{
            if ("TURBOPACK compile-time truthy", 1) {
                headers.set("Authorization", authHeader);
            }
            return headers;
        }
    }),
    tagTypes: [
        "Static"
    ],
    endpoints: (builder)=>({
            // ✅ Get all statics
            getStatics: builder.query({
                query: ()=>`/all-statics`,
                providesTags: (result)=>result ? [
                        ...result.map(({ StaticID })=>({
                                type: "Static",
                                id: StaticID
                            })),
                        {
                            type: "Static",
                            id: "LIST"
                        }
                    ] : [
                        {
                            type: "Static",
                            id: "LIST"
                        }
                    ]
            }),
            // ✅ Get static by ID
            getStaticById: builder.query({
                query: (id)=>`/fill-static-data?StaticID=${id}`,
                providesTags: (result, error, id)=>[
                        {
                            type: "Static",
                            id
                        }
                    ]
            }),
            // ✅ Save or update static (with image upload support)
            saveOrUpdateStatic: builder.mutation({
                query: (formData)=>({
                        url: `/save-or-update-static`,
                        method: "POST",
                        body: formData
                    }),
                invalidatesTags: [
                    {
                        type: "Static",
                        id: "LIST"
                    }
                ]
            }),
            // ✅ Delete static
            deleteStatic: builder.mutation({
                query: (StaticID)=>({
                        url: `/delete-static/${StaticID}`,
                        method: "DELETE"
                    }),
                invalidatesTags: (result, error, StaticID)=>[
                        {
                            type: "Static",
                            id: StaticID
                        },
                        {
                            type: "Static",
                            id: "LIST"
                        }
                    ]
            }),
            // ✅ Get Meta Data for frontend
            getMetaDataById: builder.query({
                query: (id)=>`/meta_data/${id}`,
                providesTags: (result, error, id)=>[
                        {
                            type: "Static",
                            id
                        }
                    ]
            })
        })
});
const { useGetStaticsQuery, useGetStaticByIdQuery, useSaveOrUpdateStaticMutation, useDeleteStaticMutation, useGetMetaDataByIdQuery } = staticAPISlice;
}),
"[project]/store/backendSlice/contactUsAPISlice.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
// contactUsAPISlice.js
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-ssr] (ecmascript)");
;
const username = ("TURBOPACK compile-time value", "API.afford");
const password = ("TURBOPACK compile-time value", "Admin@afford");
const apiUrl = ("TURBOPACK compile-time value", "http://localhost:3002/api");
// ✅ Browser-safe basic auth header
const authHeader = ("TURBOPACK compile-time truthy", 1) ? "Basic " + btoa(`${username}:${password}`) : "TURBOPACK unreachable";
const contactUsAPISlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: "contactUsAPI",
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchBaseQuery"])({
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
}),
"[project]/store/backendSlice/testimonialAPISlice.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "testimonialAPISlice",
    ()=>testimonialAPISlice,
    "useDeleteTestimonialMutation",
    ()=>useDeleteTestimonialMutation,
    "useGetAllTestimonialsQuery",
    ()=>useGetAllTestimonialsQuery,
    "useGetMaxDisplayOrderQuery",
    ()=>useGetMaxDisplayOrderQuery,
    "useGetTestimonialByIdQuery",
    ()=>useGetTestimonialByIdQuery,
    "useSaveOrUpdateTestimonialMutation",
    ()=>useSaveOrUpdateTestimonialMutation,
    "useUpdateDisplayOrderMutation",
    ()=>useUpdateDisplayOrderMutation,
    "useUpdateTestimonialStatusMutation",
    ()=>useUpdateTestimonialStatusMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-ssr] (ecmascript)");
;
const username = ("TURBOPACK compile-time value", "API.afford");
const password = ("TURBOPACK compile-time value", "Admin@afford");
const apiUrl = ("TURBOPACK compile-time value", "http://localhost:3002/api");
const authHeader = ("TURBOPACK compile-time truthy", 1) ? "Basic " + btoa(`${username}:${password}`) : "TURBOPACK unreachable";
const testimonialAPISlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: "testimonialAPI",
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchBaseQuery"])({
        baseUrl: `${apiUrl}/testimonial`,
        credentials: "include",
        prepareHeaders: (headers)=>{
            if ("TURBOPACK compile-time truthy", 1) {
                headers.set("Authorization", authHeader);
            }
            return headers;
        }
    }),
    tagTypes: [
        "Testimonial"
    ],
    endpoints: (builder)=>({
            getAllTestimonials: builder.query({
                query: ()=>`/all-testimonials`,
                providesTags: (result)=>result ? [
                        ...result.map(({ TestimonialID })=>({
                                type: "Testimonial",
                                id: TestimonialID
                            })),
                        {
                            type: "Testimonial",
                            id: "LIST"
                        }
                    ] : [
                        {
                            type: "Testimonial",
                            id: "LIST"
                        }
                    ]
            }),
            getTestimonialById: builder.query({
                query: (id)=>`/fill-testimonial-data?TestimonialID=${id}`,
                providesTags: (result, error, id)=>[
                        {
                            type: "Testimonial",
                            id
                        }
                    ]
            }),
            saveOrUpdateTestimonial: builder.mutation({
                query: (formData)=>({
                        url: `/save-or-update-testimonial`,
                        method: "POST",
                        body: formData
                    }),
                invalidatesTags: [
                    {
                        type: "Testimonial",
                        id: "LIST"
                    }
                ]
            }),
            deleteTestimonial: builder.mutation({
                query: (TestimonialID)=>({
                        url: `/delete-testimonial/${TestimonialID}`,
                        method: "DELETE"
                    }),
                invalidatesTags: (result, error, TestimonialID)=>[
                        {
                            type: "Testimonial",
                            id: TestimonialID
                        },
                        {
                            type: "Testimonial",
                            id: "LIST"
                        }
                    ]
            }),
            updateDisplayOrder: builder.mutation({
                query: (data)=>({
                        url: `/update-display-order`,
                        method: "POST",
                        body: data
                    }),
                invalidatesTags: [
                    {
                        type: "Testimonial",
                        id: "LIST"
                    }
                ]
            }),
            getMaxDisplayOrder: builder.query({
                query: ()=>`/max-display-order`,
                providesTags: [
                    {
                        type: "Testimonial",
                        id: "LIST"
                    }
                ]
            }),
            updateTestimonialStatus: builder.mutation({
                query: ({ TestimonialID, ActiveStatus })=>({
                        url: `/update-status`,
                        method: "POST",
                        body: {
                            TestimonialID,
                            ActiveStatus
                        }
                    }),
                invalidatesTags: (result, error, { TestimonialID })=>[
                        {
                            type: "Testimonial",
                            id: TestimonialID
                        }
                    ]
            })
        })
});
const { useGetAllTestimonialsQuery, useGetTestimonialByIdQuery, useSaveOrUpdateTestimonialMutation, useDeleteTestimonialMutation, useUpdateDisplayOrderMutation, useGetMaxDisplayOrderQuery, useUpdateTestimonialStatusMutation } = testimonialAPISlice;
}),
"[project]/store/backendSlice/seoAPISlice.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "seoAPISlice",
    ()=>seoAPISlice,
    "useDeleteSeoMutation",
    ()=>useDeleteSeoMutation,
    "useGetAllActiveSeosQuery",
    ()=>useGetAllActiveSeosQuery,
    "useGetSeoByIdQuery",
    ()=>useGetSeoByIdQuery,
    "useGetSeosQuery",
    ()=>useGetSeosQuery,
    "useSaveOrUpdateSeoMutation",
    ()=>useSaveOrUpdateSeoMutation,
    "useUpdateSeoStatusMutation",
    ()=>useUpdateSeoStatusMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-ssr] (ecmascript)");
;
const username = ("TURBOPACK compile-time value", "API.afford");
const password = ("TURBOPACK compile-time value", "Admin@afford");
const apiUrl = ("TURBOPACK compile-time value", "http://localhost:3002/api");
// ✅ Browser-safe basic auth header
const authHeader = ("TURBOPACK compile-time truthy", 1) ? "Basic " + btoa(`${username}:${password}`) : "TURBOPACK unreachable";
const seoAPISlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: "seoAPI",
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchBaseQuery"])({
        baseUrl: `${apiUrl}/seo`,
        credentials: "include",
        prepareHeaders: (headers)=>{
            if ("TURBOPACK compile-time truthy", 1) {
                headers.set("Authorization", authHeader);
            }
            return headers;
        }
    }),
    tagTypes: [
        "Seo"
    ],
    endpoints: (builder)=>({
            getSeos: builder.query({
                query: ()=>`/all-seos`,
                providesTags: (result)=>result ? [
                        ...result.map(({ SeoID })=>({
                                type: "Seo",
                                id: SeoID
                            })),
                        {
                            type: "Seo",
                            id: "LIST"
                        }
                    ] : [
                        {
                            type: "Seo",
                            id: "LIST"
                        }
                    ]
            }),
            getSeoById: builder.query({
                query: (id)=>`/fill-seo-data?SeoID=${id}`,
                providesTags: (result, error, id)=>[
                        {
                            type: "Seo",
                            id
                        }
                    ]
            }),
            saveOrUpdateSeo: builder.mutation({
                query: (formData)=>({
                        url: `/save-or-update-seo`,
                        method: "POST",
                        body: formData
                    }),
                invalidatesTags: [
                    {
                        type: "Seo",
                        id: "LIST"
                    }
                ]
            }),
            deleteSeo: builder.mutation({
                query: (SeoID)=>({
                        url: `/delete-seo/${SeoID}`,
                        method: "DELETE"
                    }),
                invalidatesTags: (result, error, SeoID)=>[
                        {
                            type: "Seo",
                            id: SeoID
                        },
                        {
                            type: "Seo",
                            id: "LIST"
                        }
                    ]
            }),
            updateSeoStatus: builder.mutation({
                query: ({ SeoID, ActiveStatus })=>({
                        url: `/update-status`,
                        method: "POST",
                        body: {
                            SeoID,
                            ActiveStatus
                        }
                    }),
                invalidatesTags: (result, error, { SeoID })=>[
                        {
                            type: "Seo",
                            id: SeoID
                        }
                    ]
            }),
            getAllActiveSeos: builder.query({
                query: ()=>`/seos`,
                providesTags: [
                    {
                        type: "Seo",
                        id: "LIST"
                    }
                ]
            })
        })
});
const { useGetSeosQuery, useGetSeoByIdQuery, useSaveOrUpdateSeoMutation, useDeleteSeoMutation, useUpdateSeoStatusMutation, useGetAllActiveSeosQuery } = seoAPISlice;
}),
"[project]/store/backendSlice/serviceAPISlice.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "serviceAPISlice",
    ()=>serviceAPISlice,
    "useDeleteServiceMutation",
    ()=>useDeleteServiceMutation,
    "useGetAllServicesQuery",
    ()=>useGetAllServicesQuery,
    "useGetMaxDisplayOrderQuery",
    ()=>useGetMaxDisplayOrderQuery,
    "useGetServiceByIdQuery",
    ()=>useGetServiceByIdQuery,
    "useSaveOrUpdateServiceMutation",
    ()=>useSaveOrUpdateServiceMutation,
    "useUpdateDisplayOrderMutation",
    ()=>useUpdateDisplayOrderMutation,
    "useUpdateServiceStatusMutation",
    ()=>useUpdateServiceStatusMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-ssr] (ecmascript)");
;
const username = ("TURBOPACK compile-time value", "API.afford");
const password = ("TURBOPACK compile-time value", "Admin@afford");
const apiUrl = ("TURBOPACK compile-time value", "http://localhost:3002/api");
const authHeader = ("TURBOPACK compile-time truthy", 1) ? "Basic " + btoa(`${username}:${password}`) : "TURBOPACK unreachable";
const serviceAPISlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: "serviceAPI",
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchBaseQuery"])({
        baseUrl: `${apiUrl}/service`,
        credentials: "include",
        prepareHeaders: (headers)=>{
            if ("TURBOPACK compile-time truthy", 1) {
                headers.set("Authorization", authHeader);
            }
            return headers;
        }
    }),
    tagTypes: [
        "Service"
    ],
    endpoints: (builder)=>({
            getAllServices: builder.query({
                query: ()=>`/all-services`,
                providesTags: (result)=>result ? [
                        ...result.map(({ ServiceID })=>({
                                type: "Service",
                                id: ServiceID
                            })),
                        {
                            type: "Service",
                            id: "LIST"
                        }
                    ] : [
                        {
                            type: "Service",
                            id: "LIST"
                        }
                    ]
            }),
            getServiceById: builder.query({
                query: (id)=>`/fill-service-data?ServiceID=${id}`,
                providesTags: (result, error, id)=>[
                        {
                            type: "Service",
                            id
                        }
                    ]
            }),
            saveOrUpdateService: builder.mutation({
                query: (formData)=>({
                        url: `/save-or-update-service`,
                        method: "POST",
                        body: formData
                    }),
                invalidatesTags: [
                    {
                        type: "Service",
                        id: "LIST"
                    }
                ]
            }),
            deleteService: builder.mutation({
                query: (ServiceID)=>({
                        url: `/delete-service/${ServiceID}`,
                        method: "DELETE"
                    }),
                invalidatesTags: (result, error, ServiceID)=>[
                        {
                            type: "Service",
                            id: ServiceID
                        },
                        {
                            type: "Service",
                            id: "LIST"
                        }
                    ]
            }),
            updateDisplayOrder: builder.mutation({
                query: (formData)=>({
                        url: `/update-display-order`,
                        method: "POST",
                        body: formData,
                        formData: true
                    }),
                invalidatesTags: [
                    {
                        type: "Service",
                        id: "LIST"
                    }
                ]
            }),
            updateServiceStatus: builder.mutation({
                query: ({ ServiceID, ActiveStatus })=>({
                        url: `/update-status`,
                        method: "POST",
                        body: {
                            ServiceID,
                            ActiveStatus
                        }
                    }),
                invalidatesTags: (result, error, { ServiceID })=>[
                        {
                            type: "Service",
                            id: ServiceID
                        }
                    ]
            }),
            getMaxDisplayOrder: builder.query({
                query: ()=>`/max-display-order`,
                providesTags: [
                    {
                        type: "Service",
                        id: "MAX_ORDER"
                    }
                ]
            })
        })
});
const { useGetAllServicesQuery, useGetServiceByIdQuery, useSaveOrUpdateServiceMutation, useDeleteServiceMutation, useUpdateDisplayOrderMutation, useUpdateServiceStatusMutation, useGetMaxDisplayOrderQuery } = serviceAPISlice;
}),
"[project]/store/backendSlice/categoryAPISlice.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "categoryAPISlice",
    ()=>categoryAPISlice,
    "useDeleteCategoryMutation",
    ()=>useDeleteCategoryMutation,
    "useGetAllCategoryDataQuery",
    ()=>useGetAllCategoryDataQuery,
    "useGetCategoryByIdQuery",
    ()=>useGetCategoryByIdQuery,
    "useGetCategorysQuery",
    ()=>useGetCategorysQuery,
    "useGetMaxDisplayOrderQuery",
    ()=>useGetMaxDisplayOrderQuery,
    "useSaveOrUpdateCategoryMutation",
    ()=>useSaveOrUpdateCategoryMutation,
    "useUpdateCategoryStatusMutation",
    ()=>useUpdateCategoryStatusMutation,
    "useUpdateDisplayOrderMutation",
    ()=>useUpdateDisplayOrderMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-ssr] (ecmascript)");
;
const username = ("TURBOPACK compile-time value", "API.afford");
const password = ("TURBOPACK compile-time value", "Admin@afford");
const apiUrl = ("TURBOPACK compile-time value", "http://localhost:3002/api");
const authHeader = ("TURBOPACK compile-time truthy", 1) ? "Basic " + btoa(`${username}:${password}`) : "TURBOPACK unreachable";
const categoryAPISlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: "categoryAPI",
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchBaseQuery"])({
        baseUrl: `${apiUrl}/category`,
        credentials: "include",
        prepareHeaders: (headers)=>{
            if ("TURBOPACK compile-time truthy", 1) {
                headers.set("Authorization", authHeader);
            }
            return headers;
        }
    }),
    tagTypes: [
        "Category"
    ],
    endpoints: (builder)=>({
            getCategorys: builder.query({
                query: ()=>`/all-categorys`,
                providesTags: (result)=>result ? [
                        ...result.map(({ CategoryID })=>({
                                type: "Category",
                                id: CategoryID
                            })),
                        {
                            type: "Category",
                            id: "LIST"
                        }
                    ] : [
                        {
                            type: "Category",
                            id: "LIST"
                        }
                    ]
            }),
            saveOrUpdateCategory: builder.mutation({
                query: (formData)=>({
                        url: `/save-or-update-category`,
                        method: "POST",
                        body: formData
                    }),
                invalidatesTags: [
                    {
                        type: "Category",
                        id: "LIST"
                    }
                ]
            }),
            getCategoryById: builder.query({
                query: (id)=>`/fill-Category-data?CategoryID=${id}`,
                providesTags: (result, error, id)=>[
                        {
                            type: "Category",
                            id
                        }
                    ]
            }),
            deleteCategory: builder.mutation({
                query: (CategoryID)=>({
                        url: `/delete-category/${CategoryID}`,
                        method: "DELETE"
                    }),
                invalidatesTags: (result, error, CategoryID)=>[
                        {
                            type: "Category",
                            id: CategoryID
                        },
                        {
                            type: "Category",
                            id: "LIST"
                        }
                    ]
            }),
            updateDisplayOrder: builder.mutation({
                query: (formData)=>({
                        url: `/update-display-order`,
                        method: "POST",
                        body: formData,
                        formData: true
                    }),
                invalidatesTags: [
                    {
                        type: "Category",
                        id: "LIST"
                    }
                ]
            }),
            updateCategoryStatus: builder.mutation({
                query: ({ CategoryID, ActiveStatus })=>({
                        url: `/update-status`,
                        method: "POST",
                        body: {
                            CategoryID,
                            ActiveStatus
                        }
                    }),
                invalidatesTags: (result, error, { CategoryID })=>[
                        {
                            type: "Category",
                            id: CategoryID
                        }
                    ]
            }),
            getMaxDisplayOrder: builder.query({
                query: ()=>`/max-display-order`,
                providesTags: [
                    {
                        type: "Category",
                        id: "MAX_ORDER"
                    }
                ]
            }),
            getAllCategoryData: builder.query({
                query: ()=>`/all-categoryData`,
                providesTags: [
                    "Category"
                ]
            })
        })
});
const { useGetCategorysQuery, useGetCategoryByIdQuery, useSaveOrUpdateCategoryMutation, useUpdateDisplayOrderMutation, useDeleteCategoryMutation, useUpdateCategoryStatusMutation, useGetMaxDisplayOrderQuery, useGetAllCategoryDataQuery } = categoryAPISlice;
}),
"[project]/store/backendSlice/partnerLogoAPISlice.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "partnerLogoAPISlice",
    ()=>partnerLogoAPISlice,
    "useDeletePartnerLogoMutation",
    ()=>useDeletePartnerLogoMutation,
    "useGetMaxDisplayOrderQuery",
    ()=>useGetMaxDisplayOrderQuery,
    "useGetPartnerLogoByIdQuery",
    ()=>useGetPartnerLogoByIdQuery,
    "useGetPartnerLogosQuery",
    ()=>useGetPartnerLogosQuery,
    "useSaveOrUpdatePartnerLogoMutation",
    ()=>useSaveOrUpdatePartnerLogoMutation,
    "useUpdateDisplayOrderMutation",
    ()=>useUpdateDisplayOrderMutation,
    "useUpdatePartnerLogoStatusMutation",
    ()=>useUpdatePartnerLogoStatusMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-ssr] (ecmascript)");
;
const username = ("TURBOPACK compile-time value", "API.afford");
const password = ("TURBOPACK compile-time value", "Admin@afford");
const apiUrl = ("TURBOPACK compile-time value", "http://localhost:3002/api");
const authHeader = ("TURBOPACK compile-time truthy", 1) ? "Basic " + btoa(`${username}:${password}`) : "TURBOPACK unreachable";
const partnerLogoAPISlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: "partnerLogoAPI",
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchBaseQuery"])({
        baseUrl: `${apiUrl}/partnerLogo`,
        credentials: "include",
        prepareHeaders: (headers)=>{
            if ("TURBOPACK compile-time truthy", 1) {
                headers.set("Authorization", authHeader);
            }
            return headers;
        }
    }),
    tagTypes: [
        "PartnerLogo"
    ],
    endpoints: (builder)=>({
            getPartnerLogos: builder.query({
                query: ()=>`/all-partnerLogos`,
                providesTags: (result)=>result ? [
                        ...result.map(({ PartnerLogoID })=>({
                                type: "PartnerLogo",
                                id: PartnerLogoID
                            })),
                        {
                            type: "PartnerLogo",
                            id: "LIST"
                        }
                    ] : [
                        {
                            type: "PartnerLogo",
                            id: "LIST"
                        }
                    ]
            }),
            getPartnerLogoById: builder.query({
                query: (id)=>`/fill-partnerLogo-data?PartnerLogoID=${id}`,
                providesTags: (result, error, id)=>[
                        {
                            type: "PartnerLogo",
                            id
                        }
                    ]
            }),
            saveOrUpdatePartnerLogo: builder.mutation({
                query: (formData)=>({
                        url: `/save-or-update-partnerLogo`,
                        method: "POST",
                        body: formData
                    }),
                invalidatesTags: [
                    {
                        type: "PartnerLogo",
                        id: "LIST"
                    }
                ]
            }),
            deletePartnerLogo: builder.mutation({
                query: (PartnerLogoID)=>({
                        url: `/delete-partnerLogo/${PartnerLogoID}`,
                        method: "DELETE"
                    }),
                invalidatesTags: (result, error, PartnerLogoID)=>[
                        {
                            type: "PartnerLogo",
                            id: PartnerLogoID
                        },
                        {
                            type: "PartnerLogo",
                            id: "LIST"
                        }
                    ]
            }),
            updatePartnerLogoStatus: builder.mutation({
                query: ({ PartnerLogoID, ActiveStatus })=>({
                        url: `/update-status`,
                        method: "POST",
                        body: {
                            PartnerLogoID,
                            ActiveStatus
                        }
                    }),
                invalidatesTags: (result, error, { PartnerLogoID })=>[
                        {
                            type: "PartnerLogo",
                            id: PartnerLogoID
                        }
                    ]
            }),
            getMaxDisplayOrder: builder.query({
                query: ()=>`/max-display-order`,
                providesTags: [
                    {
                        type: "PartnerLogo",
                        id: "MAX_ORDER"
                    }
                ]
            }),
            updateDisplayOrder: builder.mutation({
                query: (formData)=>({
                        url: `/update-display-order`,
                        method: "POST",
                        body: formData,
                        formData: true
                    }),
                invalidatesTags: [
                    {
                        type: "PartnerLogo",
                        id: "LIST"
                    }
                ]
            })
        })
});
const { useGetPartnerLogosQuery, useGetPartnerLogoByIdQuery, useSaveOrUpdatePartnerLogoMutation, useDeletePartnerLogoMutation, useUpdatePartnerLogoStatusMutation, useUpdateDisplayOrderMutation, useGetMaxDisplayOrderQuery } = partnerLogoAPISlice;
}),
"[project]/store/backendSlice/careerEnquiryApi.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "careerEnquiryApi",
    ()=>careerEnquiryApi,
    "useDeleteCareerEnquiryMutation",
    ()=>useDeleteCareerEnquiryMutation,
    "useFetchCareerEnquiriesQuery",
    ()=>useFetchCareerEnquiriesQuery,
    "useSubmitCareerEnquiryMutation",
    ()=>useSubmitCareerEnquiryMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-ssr] (ecmascript)");
;
const apiUrl = ("TURBOPACK compile-time value", "http://localhost:3002/api");
const username = ("TURBOPACK compile-time value", "API.afford");
const password = ("TURBOPACK compile-time value", "Admin@afford");
const authHeader = ("TURBOPACK compile-time truthy", 1) ? "Basic " + btoa(`${username}:${password}`) : "TURBOPACK unreachable";
const careerEnquiryApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: "careerEnquiryApi",
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchBaseQuery"])({
        baseUrl: apiUrl,
        credentials: "include",
        prepareHeaders: (headers)=>{
            if ("TURBOPACK compile-time truthy", 1) {
                headers.set("Authorization", authHeader);
            }
            return headers;
        }
    }),
    tagTypes: [
        "CareerEnquiry"
    ],
    endpoints: (builder)=>({
            fetchCareerEnquiries: builder.query({
                query: ()=>`/careerEnquiry/all-careerdata`,
                providesTags: [
                    "CareerEnquiry"
                ]
            }),
            deleteCareerEnquiry: builder.mutation({
                query: (CareerID)=>({
                        url: `/careerEnquiry/delete-career/${CareerID}`,
                        method: "DELETE"
                    }),
                invalidatesTags: [
                    "CareerEnquiry"
                ]
            }),
            submitCareerEnquiry: builder.mutation({
                query: (formData)=>({
                        url: `/careerEnquiry/save-career-enquiry`,
                        method: "POST",
                        body: formData,
                        formData: true
                    }),
                invalidatesTags: [
                    "CareerEnquiry"
                ]
            })
        })
});
const { useFetchCareerEnquiriesQuery, useDeleteCareerEnquiryMutation, useSubmitCareerEnquiryMutation } = careerEnquiryApi;
}),
"[project]/store/backendSlice/careerAPISlice.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "careerApi",
    ()=>careerApi,
    "useDeleteCareerMutation",
    ()=>useDeleteCareerMutation,
    "useFetchAdminCareersQuery",
    ()=>useFetchAdminCareersQuery,
    "useFetchCareerByIdQuery",
    ()=>useFetchCareerByIdQuery,
    "useFetchCareersDataQuery",
    ()=>useFetchCareersDataQuery,
    "useFetchCareersQuery",
    ()=>useFetchCareersQuery,
    "useGetMaxDisplayOrderQuery",
    ()=>useGetMaxDisplayOrderQuery,
    "useSubmitCareerMutation",
    ()=>useSubmitCareerMutation,
    "useUpdateCareerStatusMutation",
    ()=>useUpdateCareerStatusMutation,
    "useUpdateDisplayOrderMutation",
    ()=>useUpdateDisplayOrderMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-ssr] (ecmascript)");
;
const apiUrl = ("TURBOPACK compile-time value", "http://localhost:3002/api");
const username = ("TURBOPACK compile-time value", "API.afford");
const password = ("TURBOPACK compile-time value", "Admin@afford");
const authHeader = ("TURBOPACK compile-time truthy", 1) ? "Basic " + btoa(`${username}:${password}`) : "TURBOPACK unreachable";
const careerApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: "careerApi",
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchBaseQuery"])({
        baseUrl: apiUrl,
        credentials: "include",
        prepareHeaders: (headers)=>{
            if ("TURBOPACK compile-time truthy", 1) {
                headers.set("Authorization", authHeader);
            }
            return headers;
        }
    }),
    tagTypes: [
        "Career"
    ],
    endpoints: (builder)=>({
            fetchCareers: builder.query({
                query: ()=>`/career/all-career`,
                providesTags: [
                    "Career"
                ]
            }),
            fetchCareerById: builder.query({
                query: (JobCategoryID)=>`/career/fill-career-data?JobCategoryID=${JobCategoryID}`,
                providesTags: [
                    "Career"
                ]
            }),
            deleteCareer: builder.mutation({
                query: (JobCategoryID)=>({
                        url: `/career/delete-career/${JobCategoryID}`,
                        method: "DELETE"
                    }),
                invalidatesTags: [
                    "Career"
                ]
            }),
            submitCareer: builder.mutation({
                query: (formData)=>({
                        url: `/career/save-or-update-career`,
                        method: "POST",
                        body: formData,
                        formData: true
                    }),
                invalidatesTags: [
                    "Career"
                ]
            }),
            updateDisplayOrder: builder.mutation({
                query: (formData)=>({
                        url: `/career/update-display-order`,
                        method: "POST",
                        body: formData,
                        formData: true
                    }),
                invalidatesTags: [
                    "Career"
                ]
            }),
            updateCareerStatus: builder.mutation({
                query: ({ JobCategoryID, ActiveStatus })=>({
                        url: `/career/update-status`,
                        method: "POST",
                        body: {
                            JobCategoryID,
                            ActiveStatus
                        }
                    }),
                invalidatesTags: [
                    "Career"
                ]
            }),
            getMaxDisplayOrder: builder.query({
                query: ()=>`/career/max-display-order`,
                providesTags: [
                    {
                        type: "Career",
                        id: "MAX_ORDER"
                    }
                ]
            }),
            fetchCareersData: builder.query({
                query: ()=>`/career/all-careerdata`,
                providesTags: [
                    "Career"
                ]
            }),
            fetchAdminCareers: builder.query({
                query: ()=>`/career/all-careeradmindata`,
                providesTags: [
                    "Career"
                ]
            })
        })
});
const { useFetchCareersQuery, useFetchCareerByIdQuery, useDeleteCareerMutation, useSubmitCareerMutation, useUpdateDisplayOrderMutation, useUpdateCareerStatusMutation, useGetMaxDisplayOrderQuery, useFetchCareersDataQuery, useFetchAdminCareersQuery } = careerApi;
}),
"[project]/store/backendSlice/teamAPISlice.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "teamAPISlice",
    ()=>teamAPISlice,
    "useDeleteTeamMemberMutation",
    ()=>useDeleteTeamMemberMutation,
    "useGetAllTeamMembersQuery",
    ()=>useGetAllTeamMembersQuery,
    "useGetMaxDisplayOrderQuery",
    ()=>useGetMaxDisplayOrderQuery,
    "useGetTeamMemberByIdQuery",
    ()=>useGetTeamMemberByIdQuery,
    "useSaveOrUpdateTeamMemberMutation",
    ()=>useSaveOrUpdateTeamMemberMutation,
    "useUpdateDisplayOrderMutation",
    ()=>useUpdateDisplayOrderMutation,
    "useUpdateTeamMemberStatusMutation",
    ()=>useUpdateTeamMemberStatusMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-ssr] (ecmascript)");
;
const username = ("TURBOPACK compile-time value", "API.afford");
const password = ("TURBOPACK compile-time value", "Admin@afford");
const apiUrl = ("TURBOPACK compile-time value", "http://localhost:3002/api");
const authHeader = ("TURBOPACK compile-time truthy", 1) ? "Basic " + btoa(`${username}:${password}`) : "TURBOPACK unreachable";
const teamAPISlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: "teamAPI",
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchBaseQuery"])({
        baseUrl: `${apiUrl}/team`,
        credentials: "include",
        prepareHeaders: (headers)=>{
            if ("TURBOPACK compile-time truthy", 1) {
                headers.set("Authorization", authHeader);
            }
            return headers;
        }
    }),
    tagTypes: [
        "Team"
    ],
    endpoints: (builder)=>({
            getAllTeamMembers: builder.query({
                query: ()=>`/all-team-members`,
                providesTags: (result)=>result ? [
                        ...result.map(({ TeamID })=>({
                                type: "Team",
                                id: TeamID
                            })),
                        {
                            type: "Team",
                            id: "LIST"
                        }
                    ] : [
                        {
                            type: "Team",
                            id: "LIST"
                        }
                    ]
            }),
            getTeamMemberById: builder.query({
                query: (id)=>`/fill-team-data?TeamID=${id}`,
                providesTags: (result, error, id)=>[
                        {
                            type: "Team",
                            id
                        }
                    ]
            }),
            saveOrUpdateTeamMember: builder.mutation({
                query: (formData)=>({
                        url: `/save-or-update-team`,
                        method: "POST",
                        body: formData
                    }),
                invalidatesTags: [
                    {
                        type: "Team",
                        id: "LIST"
                    }
                ]
            }),
            deleteTeamMember: builder.mutation({
                query: (TeamID)=>({
                        url: `/delete-team/${TeamID}`,
                        method: "DELETE"
                    }),
                invalidatesTags: (result, error, TeamID)=>[
                        {
                            type: "Team",
                            id: TeamID
                        },
                        {
                            type: "Team",
                            id: "LIST"
                        }
                    ]
            }),
            updateDisplayOrder: builder.mutation({
                query: (formData)=>({
                        url: `/update-display-order`,
                        method: "POST",
                        body: formData,
                        formData: true
                    }),
                invalidatesTags: [
                    {
                        type: "Team",
                        id: "LIST"
                    }
                ]
            }),
            updateTeamMemberStatus: builder.mutation({
                query: ({ TeamID, ActiveStatus })=>({
                        url: `/update-status`,
                        method: "POST",
                        body: {
                            TeamID,
                            ActiveStatus
                        }
                    }),
                invalidatesTags: (result, error, { TeamID })=>[
                        {
                            type: "Team",
                            id: TeamID
                        }
                    ]
            }),
            getMaxDisplayOrder: builder.query({
                query: ()=>`/max-display-order`,
                providesTags: [
                    {
                        type: "Team",
                        id: "MAX_ORDER"
                    }
                ]
            })
        })
});
const { useGetAllTeamMembersQuery, useGetTeamMemberByIdQuery, useSaveOrUpdateTeamMemberMutation, useDeleteTeamMemberMutation, useUpdateDisplayOrderMutation, useUpdateTeamMemberStatusMutation, useGetMaxDisplayOrderQuery } = teamAPISlice;
}),
"[project]/store/backendSlice/milestoneAPISlice.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "milestoneAPISlice",
    ()=>milestoneAPISlice,
    "useDeleteMilestoneMutation",
    ()=>useDeleteMilestoneMutation,
    "useGetAllMilestonesQuery",
    ()=>useGetAllMilestonesQuery,
    "useGetMilestoneByIdQuery",
    ()=>useGetMilestoneByIdQuery,
    "useSaveOrUpdateMilestoneMutation",
    ()=>useSaveOrUpdateMilestoneMutation,
    "useUpdateMilestoneStatusMutation",
    ()=>useUpdateMilestoneStatusMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-ssr] (ecmascript)");
;
const username = ("TURBOPACK compile-time value", "API.afford");
const password = ("TURBOPACK compile-time value", "Admin@afford");
const apiUrl = ("TURBOPACK compile-time value", "http://localhost:3002/api");
const authHeader = ("TURBOPACK compile-time truthy", 1) ? "Basic " + btoa(`${username}:${password}`) : "TURBOPACK unreachable";
const milestoneAPISlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: "milestoneAPI",
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchBaseQuery"])({
        baseUrl: `${apiUrl}/milestone`,
        credentials: "include",
        prepareHeaders: (headers)=>{
            if ("TURBOPACK compile-time truthy", 1) {
                headers.set("Authorization", authHeader);
            }
            return headers;
        }
    }),
    tagTypes: [
        "Milestone"
    ],
    endpoints: (builder)=>({
            getAllMilestones: builder.query({
                query: ()=>`/all-milestones`,
                providesTags: (result)=>result ? [
                        ...result.map(({ MilestoneID })=>({
                                type: "Milestone",
                                id: MilestoneID
                            })),
                        {
                            type: "Milestone",
                            id: "LIST"
                        }
                    ] : [
                        {
                            type: "Milestone",
                            id: "LIST"
                        }
                    ]
            }),
            getMilestoneById: builder.query({
                query: (id)=>`/fill-milestone-data?MilestoneID=${id}`,
                providesTags: (result, error, id)=>[
                        {
                            type: "Milestone",
                            id
                        }
                    ]
            }),
            saveOrUpdateMilestone: builder.mutation({
                query: (formData)=>({
                        url: `/save-or-update-milestone`,
                        method: "POST",
                        body: formData
                    }),
                invalidatesTags: [
                    {
                        type: "Milestone",
                        id: "LIST"
                    }
                ]
            }),
            deleteMilestone: builder.mutation({
                query: (MilestoneID)=>({
                        url: `/delete-milestone/${MilestoneID}`,
                        method: "DELETE"
                    }),
                invalidatesTags: (result, error, MilestoneID)=>[
                        {
                            type: "Milestone",
                            id: MilestoneID
                        },
                        {
                            type: "Milestone",
                            id: "LIST"
                        }
                    ]
            }),
            updateMilestoneStatus: builder.mutation({
                query: ({ MilestoneID, ActiveStatus })=>({
                        url: `/update-status`,
                        method: "POST",
                        body: {
                            MilestoneID,
                            ActiveStatus
                        }
                    }),
                invalidatesTags: (result, error, { MilestoneID })=>[
                        {
                            type: "Milestone",
                            id: MilestoneID
                        }
                    ]
            })
        })
});
const { useGetAllMilestonesQuery, useGetMilestoneByIdQuery, useSaveOrUpdateMilestoneMutation, useDeleteMilestoneMutation, useUpdateMilestoneStatusMutation } = milestoneAPISlice;
}),
"[project]/store/backendSlice/admindashboardAPISlice.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "admindashboardAPISlice",
    ()=>admindashboardAPISlice,
    "useGetDashboardDataQuery",
    ()=>useGetDashboardDataQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-ssr] (ecmascript)");
;
const username = ("TURBOPACK compile-time value", "API.afford");
const password = ("TURBOPACK compile-time value", "Admin@afford");
const apiUrl = ("TURBOPACK compile-time value", "http://localhost:3002/api");
const authHeader = ("TURBOPACK compile-time truthy", 1) ? "Basic " + btoa(`${username}:${password}`) : "TURBOPACK unreachable";
const admindashboardAPISlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: "dashboardAPI",
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchBaseQuery"])({
        baseUrl: `${apiUrl}/dashboard`,
        credentials: "include",
        prepareHeaders: (headers)=>{
            if ("TURBOPACK compile-time truthy", 1) {
                headers.set("Authorization", authHeader);
            }
            return headers;
        }
    }),
    endpoints: (builder)=>({
            getDashboardData: builder.query({
                query: ()=>`/all_dashboardData_data`
            })
        })
});
const { useGetDashboardDataQuery } = admindashboardAPISlice;
}),
"[project]/store/backendSlice/mediaAPISlice.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mediaAPISlice",
    ()=>mediaAPISlice,
    "useDeleteMediaMutation",
    ()=>useDeleteMediaMutation,
    "useGetAllMediaAdminQuery",
    ()=>useGetAllMediaAdminQuery,
    "useGetAllMediaQuery",
    ()=>useGetAllMediaQuery,
    "useGetMaxDisplayOrderQuery",
    ()=>useGetMaxDisplayOrderQuery,
    "useGetMediaByIdQuery",
    ()=>useGetMediaByIdQuery,
    "useSaveOrUpdateMediaMutation",
    ()=>useSaveOrUpdateMediaMutation,
    "useUpdateDisplayOrderMutation",
    ()=>useUpdateDisplayOrderMutation,
    "useUpdateMediaStatusMutation",
    ()=>useUpdateMediaStatusMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-ssr] (ecmascript)");
;
const username = ("TURBOPACK compile-time value", "API.afford");
const password = ("TURBOPACK compile-time value", "Admin@afford");
const apiUrl = ("TURBOPACK compile-time value", "http://localhost:3002/api");
const authHeader = ("TURBOPACK compile-time truthy", 1) ? "Basic " + btoa(`${username}:${password}`) : "TURBOPACK unreachable";
const mediaAPISlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: "mediaAPI",
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchBaseQuery"])({
        baseUrl: `${apiUrl}/media`,
        credentials: "include",
        prepareHeaders: (headers)=>{
            if ("TURBOPACK compile-time truthy", 1) {
                headers.set("Authorization", authHeader);
            }
            return headers;
        }
    }),
    tagTypes: [
        "Media"
    ],
    endpoints: (builder)=>({
            getAllMedia: builder.query({
                query: ()=>`/all-media`,
                providesTags: (result)=>result ? [
                        ...result.map(({ MediaID })=>({
                                type: "Media",
                                id: MediaID
                            })),
                        {
                            type: "Media",
                            id: "LIST"
                        }
                    ] : [
                        {
                            type: "Media",
                            id: "LIST"
                        }
                    ]
            }),
            getAllMediaAdmin: builder.query({
                query: ()=>`/all-media-admin`,
                providesTags: (result)=>result ? [
                        ...result.map(({ MediaID })=>({
                                type: "Media",
                                id: MediaID
                            })),
                        {
                            type: "Media",
                            id: "ADMIN_LIST"
                        }
                    ] : [
                        {
                            type: "Media",
                            id: "ADMIN_LIST"
                        }
                    ]
            }),
            getMediaById: builder.query({
                query: (id)=>`/fill-media-data?MediaID=${id}`,
                providesTags: (result, error, id)=>[
                        {
                            type: "Media",
                            id
                        }
                    ]
            }),
            saveOrUpdateMedia: builder.mutation({
                query: (formData)=>({
                        url: `/save-or-update-media`,
                        method: "POST",
                        body: formData
                    }),
                invalidatesTags: [
                    {
                        type: "Media",
                        id: "LIST"
                    },
                    {
                        type: "Media",
                        id: "ADMIN_LIST"
                    }
                ]
            }),
            deleteMedia: builder.mutation({
                query: (MediaID)=>({
                        url: `/delete-media/${MediaID}`,
                        method: "DELETE"
                    }),
                invalidatesTags: (result, error, MediaID)=>[
                        {
                            type: "Media",
                            id: MediaID
                        },
                        {
                            type: "Media",
                            id: "LIST"
                        },
                        {
                            type: "Media",
                            id: "ADMIN_LIST"
                        }
                    ]
            }),
            updateMediaStatus: builder.mutation({
                query: ({ MediaID, ActiveStatus })=>({
                        url: `/update-status`,
                        method: "POST",
                        body: {
                            MediaID,
                            ActiveStatus
                        }
                    }),
                invalidatesTags: (result, error, { MediaID })=>[
                        {
                            type: "Media",
                            id: MediaID
                        },
                        {
                            type: "Media",
                            id: "LIST"
                        },
                        {
                            type: "Media",
                            id: "ADMIN_LIST"
                        }
                    ]
            }),
            updateDisplayOrder: builder.mutation({
                query: (formData)=>({
                        url: `/update-display-order`,
                        method: "POST",
                        body: formData,
                        formData: true
                    }),
                invalidatesTags: [
                    {
                        type: "Media",
                        id: "LIST"
                    }
                ]
            }),
            getMaxDisplayOrder: builder.query({
                query: ()=>`/max-display-order`,
                providesTags: [
                    {
                        type: "Media",
                        id: "MAX_ORDER"
                    }
                ]
            })
        })
});
const { useGetAllMediaQuery, useGetAllMediaAdminQuery, useGetMediaByIdQuery, useSaveOrUpdateMediaMutation, useDeleteMediaMutation, useUpdateMediaStatusMutation, useUpdateDisplayOrderMutation, useGetMaxDisplayOrderQuery } = mediaAPISlice;
}),
"[project]/store/backendSlice/productAPISlice.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-ssr] (ecmascript)");
;
const username = ("TURBOPACK compile-time value", "API.afford");
const password = ("TURBOPACK compile-time value", "Admin@afford");
const apiUrl = ("TURBOPACK compile-time value", "http://localhost:3002/api");
const authHeader = ("TURBOPACK compile-time truthy", 1) ? "Basic " + btoa(`${username}:${password}`) : "TURBOPACK unreachable";
const productAPISlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: "productAPI",
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchBaseQuery"])({
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
}),
"[project]/store/backendStore.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "backendStore",
    ()=>backendStore
]);
// store/backendStore.js
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$authAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/backendSlice/authAPISlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$dashboardAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/backendSlice/dashboardAPISlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$blogAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/backendSlice/blogAPISlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$staticAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/backendSlice/staticAPISlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$contactUsAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/backendSlice/contactUsAPISlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$testimonialAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/backendSlice/testimonialAPISlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$seoAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/backendSlice/seoAPISlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$serviceAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/backendSlice/serviceAPISlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$categoryAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/backendSlice/categoryAPISlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$partnerLogoAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/backendSlice/partnerLogoAPISlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$careerEnquiryApi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/backendSlice/careerEnquiryApi.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$careerAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/backendSlice/careerAPISlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$teamAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/backendSlice/teamAPISlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$milestoneAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/backendSlice/milestoneAPISlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$admindashboardAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/backendSlice/admindashboardAPISlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$mediaAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/backendSlice/mediaAPISlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$productAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/backendSlice/productAPISlice.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const backendStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: {
        [__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$authAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authAPISlice"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$authAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authAPISlice"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$dashboardAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dashboardAPISlice"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$dashboardAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dashboardAPISlice"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$blogAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blogAPISlice"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$blogAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blogAPISlice"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$staticAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["staticAPISlice"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$staticAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["staticAPISlice"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$contactUsAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contactUsAPISlice"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$contactUsAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contactUsAPISlice"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$testimonialAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["testimonialAPISlice"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$testimonialAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["testimonialAPISlice"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$seoAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["seoAPISlice"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$seoAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["seoAPISlice"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$serviceAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serviceAPISlice"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$serviceAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serviceAPISlice"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$categoryAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["categoryAPISlice"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$categoryAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["categoryAPISlice"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$partnerLogoAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["partnerLogoAPISlice"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$partnerLogoAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["partnerLogoAPISlice"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$careerEnquiryApi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["careerEnquiryApi"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$careerEnquiryApi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["careerEnquiryApi"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$careerAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["careerApi"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$careerAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["careerApi"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$teamAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["teamAPISlice"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$teamAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["teamAPISlice"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$admindashboardAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["admindashboardAPISlice"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$admindashboardAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["admindashboardAPISlice"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$milestoneAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["milestoneAPISlice"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$milestoneAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["milestoneAPISlice"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$mediaAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mediaAPISlice"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$mediaAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mediaAPISlice"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$productAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["productAPISlice"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$productAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["productAPISlice"].reducer
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$authAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authAPISlice"].middleware, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$blogAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blogAPISlice"].middleware, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$staticAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["staticAPISlice"].middleware, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$contactUsAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contactUsAPISlice"].middleware, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$testimonialAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["testimonialAPISlice"].middleware, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$seoAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["seoAPISlice"].middleware, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$serviceAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serviceAPISlice"].middleware, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$categoryAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["categoryAPISlice"].middleware, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$partnerLogoAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["partnerLogoAPISlice"].middleware, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$careerEnquiryApi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["careerEnquiryApi"].middleware, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$careerAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["careerApi"].middleware, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$teamAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["teamAPISlice"].middleware, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$admindashboardAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["admindashboardAPISlice"].middleware, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$milestoneAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["milestoneAPISlice"].middleware, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$mediaAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mediaAPISlice"].middleware, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$productAPISlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["productAPISlice"].middleware)
});
}),
"[project]/store/ReduxProvider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReduxProvider",
    ()=>ReduxProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/backendStore.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function ReduxProvider({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Provider"], {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["backendStore"],
        children: children
    }, void 0, false, {
        fileName: "[project]/store/ReduxProvider.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
}),
"[project]/app/loading.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Loader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function Loader() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setLoading(true);
        const timer = setTimeout(()=>{
            setLoading(false);
        }, 5000);
        return ()=>clearTimeout(timer);
    }, [
        pathname
    ]);
    if (!loading) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(255,255,255,0.7)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    border: "4px solid #ccc",
                    borderTopColor: "#4d3664",
                    animation: "spin 0.7s linear infinite"
                }
            }, void 0, false, {
                fileName: "[project]/app/loading.tsx",
                lineNumber: 29,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `@keyframes spin { to { transform: rotate(360deg); } }`
            }, void 0, false, {
                fileName: "[project]/app/loading.tsx",
                lineNumber: 37,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/loading.tsx",
        lineNumber: 20,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5c3a531e._.js.map