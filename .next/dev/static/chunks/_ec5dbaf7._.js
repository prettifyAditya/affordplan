(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/frontendcomponents/molecules/MySelect.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MySelect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$select$2f$dist$2f$react$2d$select$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-select/dist/react-select.esm.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const customStyles = {
    control: (base, state)=>({
            ...base,
            width: "100%",
            height: "100%",
            backgroundColor: "#FBFBFB",
            color: "#818181",
            border: "none",
            padding: "0 10px",
            borderRadius: "5px",
            cursor: "pointer",
            boxShadow: state.isFocused ? "none" : "none"
        }),
    label: (base, state)=>({
            ...base,
            display: "none"
        }),
    valueContainer: (base, state)=>({
            ...base,
            height: "100%",
            color: state.isFocused ? "#000" : "#000",
            padding: 0
        }),
    input: (base, state)=>({
            ...base,
            width: "100%",
            height: "41px",
            color: "#000",
            padding: 0,
            minHeight: "100%",
            minWidth: "100%"
        }),
    placeholder: (base, state)=>({
            ...base,
            color: "#818181",
            fontSize: "16px"
        }),
    option: (base, state)=>({
            ...base,
            width: "100%",
            minWidth: "fit-content",
            background: state.isFocused ? "#fff" : "#fff",
            lineHeight: "18px",
            marginBottom: "5px",
            fontSize: "14px",
            padding: "6px 10px",
            color: state.isFocused ? "#666" : "#666",
            "&:hover": {
                background: "#000",
                color: "#fff"
            },
            transition: ".3s ease"
        }),
    singleValue: (base, state)=>({
            ...base,
            color: "#000",
            fontSize: "16px",
            overflow: "visible"
        }),
    menu: (base)=>({
            ...base,
            zIndex: 10,
            minWidth: "max-content"
        })
};
function MySelect({ id, placeholder, options, selectedValue, classname = "", onValueChange, styles: overrideStyles, components: overrideComponents }) {
    _s();
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MySelect.useEffect": ()=>{
            setIsClient(true);
        }
    }["MySelect.useEffect"], []);
    const mergedStyles = {};
    Object.keys(customStyles).forEach((key)=>{
        mergedStyles[key] = (base, state)=>{
            const custom = customStyles[key]?.(base, state) || base;
            const override = overrideStyles?.[key]?.(custom, state) || {};
            return {
                ...custom,
                ...override
            };
        };
    });
    const selectedOption = options.find((opt)=>opt.value === selectedValue?.value || opt.value === selectedValue) || null;
    if (!isClient) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$select$2f$dist$2f$react$2d$select$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        className: classname,
        inputId: id,
        placeholder: placeholder,
        options: options,
        value: selectedOption,
        onChange: onValueChange,
        styles: mergedStyles,
        components: {
            IndicatorSeparator: ()=>null,
            ...overrideComponents || {}
        }
    }, void 0, false, {
        fileName: "[project]/components/frontendcomponents/molecules/MySelect.jsx",
        lineNumber: 100,
        columnNumber: 5
    }, this);
}
_s(MySelect, "k460N28PNzD7zo1YW47Q9UigQis=");
_c = MySelect;
var _c;
__turbopack_context__.k.register(_c, "MySelect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/loading.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Loader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Loader() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Loader.useEffect": ()=>{
            setLoading(true);
            const timer = setTimeout({
                "Loader.useEffect.timer": ()=>{
                    setLoading(false);
                }
            }["Loader.useEffect.timer"], 5000);
            return ({
                "Loader.useEffect": ()=>clearTimeout(timer)
            })["Loader.useEffect"];
        }
    }["Loader.useEffect"], [
        pathname
    ]);
    if (!loading) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
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
_s(Loader, "eZDbfncWkca8c12jW1WiEIJNjf4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Loader;
var _c;
__turbopack_context__.k.register(_c, "Loader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/frontendcomponents/pages/contact-us/ContactForm.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$frontendcomponents$2f$molecules$2f$MySelect$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/frontendcomponents/molecules/MySelect.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$contactUsAPISlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/backendSlice/contactUsAPISlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$modalStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/modalStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/loading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$productAPISlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/backendSlice/productAPISlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$frontendcomponents$2f$atoms$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/frontendcomponents/atoms/Button.jsx [app-client] (ecmascript)");
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
;
;
function ContactForm() {
    _s();
    const openThankyouPop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$modalStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalStore"])({
        "ContactForm.useModalStore[openThankyouPop]": (state)=>state.openThankyouPop
    }["ContactForm.useModalStore[openThankyouPop]"]);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [project, setProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [submitIsLoading, setSubmitIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formErrors, setFormErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [touched, setTouched] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const { data: productData, isLoading: productsLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$productAPISlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetActiveProductsQuery"])();
    const optionsProject = (productData?.products || []).map((p)=>({
            value: p.ProductName,
            label: p.ProductName
        }));
    const [formValues, setFormValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        phone: "",
        city: "",
        state: "",
        pincode: ""
    });
    const [saveEnquiry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$contactUsAPISlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSaveEnquiryMutation"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContactForm.useEffect": ()=>{
            const inputBoxes = document.querySelectorAll(".form-control");
            const handleFocus = {
                "ContactForm.useEffect.handleFocus": function() {
                    this.closest(".form-group")?.classList.add("active");
                    this.classList.add("valid");
                }
            }["ContactForm.useEffect.handleFocus"];
            const handleBlur = {
                "ContactForm.useEffect.handleBlur": function() {
                    if (!this.value.trim()) {
                        this.closest(".form-group")?.classList.remove("active");
                        this.classList.remove("valid");
                    }
                }
            }["ContactForm.useEffect.handleBlur"];
            inputBoxes.forEach({
                "ContactForm.useEffect": (inputBox)=>{
                    inputBox.addEventListener("focus", handleFocus);
                    inputBox.addEventListener("blur", handleBlur);
                }
            }["ContactForm.useEffect"]);
            return ({
                "ContactForm.useEffect": ()=>{
                    inputBoxes.forEach({
                        "ContactForm.useEffect": (inputBox)=>{
                            inputBox.removeEventListener("focus", handleFocus);
                            inputBox.removeEventListener("blur", handleBlur);
                        }
                    }["ContactForm.useEffect"]);
                }
            })["ContactForm.useEffect"];
        }
    }["ContactForm.useEffect"], []);
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormValues((prev)=>({
                ...prev,
                [name]: value
            }));
        if (touched[name] || formErrors[name]) {
            setFormErrors((prevErrors)=>{
                const newErrors = {
                    ...prevErrors
                };
                if (name === "name" && value.trim()) {
                    delete newErrors.name;
                }
                if (name === "email") {
                    if (value.trim()) {
                        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                        if (emailRegex.test(value.trim())) {
                            delete newErrors.email;
                        } else if (touched[name]) {
                            newErrors.email = "Email is not valid.";
                        }
                    }
                }
                if (name === "phone") {
                    if (value.trim()) {
                        const phoneRegex = /^[0-9]{14}$/;
                        if (phoneRegex.test(value.trim())) {
                            delete newErrors.phone;
                        } else if (touched[name]) {
                            newErrors.phone = "Phone must be 14 digits.";
                        }
                    }
                }
                if (name === "city" && value.trim()) {
                    delete newErrors.city;
                }
                if (name === "state" && value.trim()) {
                    delete newErrors.state;
                }
                if (name === "pincode") {
                    if (value.trim()) {
                        const pincodeRegex = /^[0-9]{6}$/;
                        if (pincodeRegex.test(value.trim())) {
                            delete newErrors.pincode;
                        } else if (touched[name]) {
                            newErrors.pincode = "Pincode must be 6 digits.";
                        }
                    }
                }
                return newErrors;
            });
        }
    };
    const handleBlur = (e)=>{
        const { name } = e.target;
        setTouched((prev)=>({
                ...prev,
                [name]: true
            }));
    };
    const handleProjectChange = (selected)=>{
        setProject(selected);
        setTouched((prev)=>({
                ...prev,
                project: true
            }));
        if (selected) {
            setFormErrors((prev)=>{
                const newErrors = {
                    ...prev
                };
                delete newErrors.project;
                return newErrors;
            });
        }
    };
    const validate = ()=>{
        const errors = {};
        if (!formValues.name.trim()) {
            errors.name = "Name is required.";
        }
        if (!formValues.email.trim()) {
            errors.email = "Email is required.";
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formValues.email.trim())) {
                errors.email = "Email is not valid.";
            }
        }
        if (!formValues.phone.trim()) {
            errors.phone = "Phone is required.";
        } else {
            const phoneRegex = /^[0-9]{14}$/;
            if (!phoneRegex.test(formValues.phone.trim())) {
                errors.phone = "Phone must be 14 digits.";
            }
        }
        if (!formValues.city.trim()) {
            errors.city = "City is required.";
        }
        if (!formValues.state.trim()) {
            errors.state = "State is required.";
        }
        if (!formValues.pincode.trim()) {
            errors.pincode = "Pincode is required.";
        } else {
            const pincodeRegex = /^[0-9]{6}$/;
            if (!pincodeRegex.test(formValues.pincode.trim())) {
                errors.pincode = "Pincode must be 6 digits.";
            }
        }
        if (!project) {
            errors.project = "Product selection is required.";
        }
        return errors;
    };
    const handleSubmit = async ()=>{
        setTouched({
            name: true,
            email: true,
            phone: true,
            city: true,
            state: true,
            pincode: true,
            project: true
        });
        const errors = validate();
        setFormErrors(errors);
        if (Object.keys(errors).length > 0) {
            return;
        }
        const payload = {
            FullName: formValues.name,
            EmailID: formValues.email,
            PhoneNo: formValues.phone,
            City: formValues.city,
            State: formValues.state,
            Pincode: formValues.pincode,
            Product: project?.value || "",
            Message: "",
            EnquiryType: "Normal Enquiry",
            EnquiryFor: project?.value || "",
            PageName: pathname
        };
        try {
            setSubmitIsLoading(true);
            const saveData = await saveEnquiry(payload).unwrap();
            if (saveData?.success) {
                openThankyouPop();
                setFormValues({
                    name: "",
                    email: "",
                    phone: "",
                    city: "",
                    state: "",
                    pincode: ""
                });
                setProject(null);
                setFormErrors({});
                setTouched({});
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(saveData?.message || "Failed to submit enquiry.");
            }
        } catch (err) {
            console.error(err);
            const msg = err?.data?.message || err?.error || "An error occurred while submitting enquiry.";
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(msg);
        } finally{
            setSubmitIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "contact_form sec-pad",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "main_wrapper flex",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "heading",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: [
                                        "Partnership & General ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Inquiry Form"
                                        }, void 0, false, {
                                            fileName: "[project]/components/frontendcomponents/pages/contact-us/ContactForm.jsx",
                                            lineNumber: 246,
                                            columnNumber: 55
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/frontendcomponents/pages/contact-us/ContactForm.jsx",
                                    lineNumber: 246,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "This centralized portal manages all general inquiries, including new business partnerships for Hospitals, ProCalyx, and Swasth for Corporates. Queries are routed to the relevant strategic lead immediately."
                                }, void 0, false, {
                                    fileName: "[project]/components/frontendcomponents/pages/contact-us/ContactForm.jsx",
                                    lineNumber: 247,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/frontendcomponents/pages/contact-us/ContactForm.jsx",
                            lineNumber: 245,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "form",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-grid",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `form-group border ${touched.name && formErrors.name ? 'has-error' : ''}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "name",
                                                    children: "Name*"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/frontendcomponents/pages/contact-us/ContactForm.jsx",
                                                    lineNumber: 252,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    id: "name",
                                                    name: "name",
                                                    className: "form-control no-focus",
                                                    placeholder: "Your Name",
                                                    value: formValues.name,
                                                    onChange: handleChange,
                                                    onBlur: handleBlur
                                                }, void 0, false, {
                                                    fileName: "[project]/components/frontendcomponents/pages/contact-us/ContactForm.jsx",
                                                    lineNumber: 253,
                                                    columnNumber: 37
                                                }, this),
                                                touched.name && formErrors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "error",
                                                    children: formErrors.name
                                                }, void 0, false, {
                                                    fileName: "[project]/components/frontendcomponents/pages/contact-us/ContactForm.jsx",
                                                    lineNumber: 264,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/frontendcomponents/pages/contact-us/ContactForm.jsx",
                                            lineNumber: 251,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `form-group border ${touched.email && formErrors.email ? 'has-error' : ''}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "email",
                                                    children: "Email Address*"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/frontendcomponents/pages/contact-us/ContactForm.jsx",
                                                    lineNumber: 268,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    id: "email",
                                                    name: "email",
                                                    className: "form-control no-focus",
                                                    placeholder: "email@example.com",
                                                    value: formValues.email,
                                                    onChange: handleChange,
                                                    onBlur: handleBlur
                                                }, void 0, false, {
                                                    fileName: "[project]/components/frontendcomponents/pages/contact-us/ContactForm.jsx",
                                                    lineNumber: 269,
                                                    columnNumber: 37
                                                }, this),
                                                touched.email && formErrors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "error",
                                                    children: formErrors.email
                                                }, void 0, false, {
                                                    fileName: "[project]/components/frontendcomponents/pages/contact-us/ContactForm.jsx",
                                                    lineNumber: 280,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/frontendcomponents/pages/contact-us/ContactForm.jsx",
                                            lineNumber: 267,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `form-group border ${touched.phone && formErrors.phone ? 'has-error' : ''}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "phone",
                                                    children: "Phone*"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/frontendcomponents/pages/contact-us/ContactForm.jsx",
                                                    lineNumber: 284,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "tel",
                                                    id: "phone",
                                                    name: "phone",
                                                    className: "form-control no-focus",
                                                    placeholder: "+91 99999 99999",
                                                    maxLength: "14",
                                                    value: formValues.phone,
                                                    onChange: handleChange,
                                                    onBlur: handleBlur
                                                }, void 0, false, {
                                                    fileName: "[project]/components/frontendcomponents/pages/contact-us/ContactForm.jsx",
                                                    lineNumber: 285,
                                                    columnNumber: 37
                                                }, this),
                                                touched.phone && formErrors.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "error",
                                                    children: formErrors.phone
                                                }, void 0, false, {
                                                    fileName: "[project]/components/frontendcomponents/pages/contact-us/ContactForm.jsx",
                                                    lineNumber: 297,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/frontendcomponents/pages/contact-us/ContactForm.jsx",
                                            lineNumber: 283,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `form-group border ${touched.city && formErrors.city ? 'has-error' : ''}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "city",
                                                    children: "City*"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/frontendcomponents/pages/contact-us/ContactForm.jsx",
                                                    lineNumber: 301,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    id: "city",
                                                    name: "city",
                                                    className: "form-control no-focus",
                                                    placeholder: "Gurugram",
                                                    value: formValues.city,
                                                    onChange: handleChange,
                                                    onBlur: handleBlur
                                                }, void 0, false, {
                                                    fileName: "[project]/components/frontendcomponents/pages/contact-us/ContactForm.jsx",
                                                    lineNumber: 302,
                                                    columnNumber: 37
                                                }, this),
                                                touched.city && formErrors.city && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "error",
                                                    children: formErrors.city
                                                }, void 0, false, {
                                                    fileName: "[project]/components/frontendcomponents/pages/contact-us/ContactForm.jsx",
                                                    lineNumber: 313,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/frontendcomponents/pages/contact-us/ContactForm.jsx",
                                            lineNumber: 300,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `form-group border ${touched.state && formErrors.state ? 'has-error' : ''}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "state",
                                                    children: "State*"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/frontendcomponents/pages/contact-us/ContactForm.jsx",
                                                    lineNumber: 317,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    id: "state",
                                                    name: "state",
                                                    className: "form-control no-focus",
                                                    placeholder: "State",
                                                    value: formValues.state,
                                                    onChange: handleChange,
                                                    onBlur: handleBlur
                                                }, void 0, false, {
                                                    fileName: "[project]/components/frontendcomponents/pages/contact-us/ContactForm.jsx",
                                                    lineNumber: 318,
                                                    columnNumber: 37
                                                }, this),
                                                touched.state && formErrors.state && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "error",
                                                    children: formErrors.state
                                                }, void 0, false, {
                                                    fileName: "[project]/components/frontendcomponents/pages/contact-us/ContactForm.jsx",
                                                    lineNumber: 329,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/frontendcomponents/pages/contact-us/ContactForm.jsx",
                                            lineNumber: 316,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `form-group border ${touched.pincode && formErrors.pincode ? 'has-error' : ''}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "pincode",
                                                    children: "Pincode*"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/frontendcomponents/pages/contact-us/ContactForm.jsx",
                                                    lineNumber: 333,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "tel",
                                                    id: "pincode",
                                                    name: "pincode",
                                                    className: "form-control no-focus",
                                                    placeholder: "XXXXXXXXXX",
                                                    maxLength: "6",
                                                    value: formValues.pincode,
                                                    onChange: handleChange,
                                                    onBlur: handleBlur
                                                }, void 0, false, {
                                                    fileName: "[project]/components/frontendcomponents/pages/contact-us/ContactForm.jsx",
                                                    lineNumber: 334,
                                                    columnNumber: 37
                                                }, this),
                                                touched.pincode && formErrors.pincode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "error",
                                                    children: formErrors.pincode
                                                }, void 0, false, {
                                                    fileName: "[project]/components/frontendcomponents/pages/contact-us/ContactForm.jsx",
                                                    lineNumber: 346,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/frontendcomponents/pages/contact-us/ContactForm.jsx",
                                            lineNumber: 332,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `form-group border full ${touched.project && formErrors.project ? 'has-error' : ''}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$frontendcomponents$2f$molecules$2f$MySelect$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    id: "selectProject",
                                                    placeholder: "Select Product",
                                                    options: optionsProject,
                                                    selectedValue: project,
                                                    onValueChange: handleProjectChange
                                                }, void 0, false, {
                                                    fileName: "[project]/components/frontendcomponents/pages/contact-us/ContactForm.jsx",
                                                    lineNumber: 350,
                                                    columnNumber: 37
                                                }, this),
                                                touched.project && formErrors.project && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "error",
                                                    children: formErrors.project
                                                }, void 0, false, {
                                                    fileName: "[project]/components/frontendcomponents/pages/contact-us/ContactForm.jsx",
                                                    lineNumber: 358,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/frontendcomponents/pages/contact-us/ContactForm.jsx",
                                            lineNumber: 349,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/frontendcomponents/pages/contact-us/ContactForm.jsx",
                                    lineNumber: 250,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "disclaim",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "By clicking on submit button, you are agreeing the ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/terms-of-use",
                                                children: "terms and conditions"
                                            }, void 0, false, {
                                                fileName: "[project]/components/frontendcomponents/pages/contact-us/ContactForm.jsx",
                                                lineNumber: 363,
                                                columnNumber: 87
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/frontendcomponents/pages/contact-us/ContactForm.jsx",
                                        lineNumber: 363,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/frontendcomponents/pages/contact-us/ContactForm.jsx",
                                    lineNumber: 362,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$frontendcomponents$2f$atoms$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    classname: "white",
                                    buttonText: "Submit",
                                    onClick: handleSubmit,
                                    disabled: submitIsLoading,
                                    children: submitIsLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "6px"
                                        },
                                        children: [
                                            "Submit ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                fileName: "[project]/components/frontendcomponents/pages/contact-us/ContactForm.jsx",
                                                lineNumber: 368,
                                                columnNumber: 48
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/frontendcomponents/pages/contact-us/ContactForm.jsx",
                                        lineNumber: 367,
                                        columnNumber: 37
                                    }, this) : "Submit"
                                }, void 0, false, {
                                    fileName: "[project]/components/frontendcomponents/pages/contact-us/ContactForm.jsx",
                                    lineNumber: 365,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/frontendcomponents/pages/contact-us/ContactForm.jsx",
                            lineNumber: 249,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/frontendcomponents/pages/contact-us/ContactForm.jsx",
                    lineNumber: 244,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/frontendcomponents/pages/contact-us/ContactForm.jsx",
                lineNumber: 243,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/frontendcomponents/pages/contact-us/ContactForm.jsx",
            lineNumber: 242,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/frontendcomponents/pages/contact-us/ContactForm.jsx",
        lineNumber: 241,
        columnNumber: 9
    }, this);
}
_s(ContactForm, "xgIgk8VDHnCUMdyJTaI9TdTv8nU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$modalStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$productAPISlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetActiveProductsQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$backendSlice$2f$contactUsAPISlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSaveEnquiryMutation"]
    ];
});
_c = ContactForm;
var _c;
__turbopack_context__.k.register(_c, "ContactForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_ec5dbaf7._.js.map