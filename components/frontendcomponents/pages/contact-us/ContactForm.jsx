"use client"
import Link from "next/link"
import { useState, useEffect } from "react";
import MySelect from "@/components/frontendcomponents/molecules/MySelect"
import { useSaveEnquiryMutation } from "@/store/backendSlice/contactUsAPISlice";
import { useRouter, usePathname } from "next/navigation";
import { useModalStore } from "@/store/modalStore";
import toast from "react-hot-toast";
import Loading from "@/app/loading";
import { useGetActiveProductsQuery } from "@/store/backendSlice/productAPISlice";
import Button from "@/components/frontendcomponents/atoms/Button";


export default function ContactForm() {
    const openThankyouPop = useModalStore((state) => state.openThankyouPop)
    const router = useRouter();
    const pathname = usePathname();
    const [project, setProject] = useState(null);
    const [submitIsLoading, setSubmitIsLoading] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const [touched, setTouched] = useState({});
    const { data: productData, isLoading: productsLoading } = useGetActiveProductsQuery();

    const optionsProject = (productData?.products || []).map((p) => ({
        value: p.ProductName,
        label: p.ProductName,
    }));

    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
        state: "",
        pincode: "",
    });

    const [saveEnquiry] = useSaveEnquiryMutation();

    useEffect(() => {
        const inputBoxes = document.querySelectorAll(".form-control");
        const handleFocus = function () {
            this.closest(".form-group")?.classList.add("active");
            this.classList.add("valid");
        };
        const handleBlur = function () {
            if (!this.value.trim()) {
                this.closest(".form-group")?.classList.remove("active");
                this.classList.remove("valid");
            }
        };
        inputBoxes.forEach((inputBox) => {
            inputBox.addEventListener("focus", handleFocus);
            inputBox.addEventListener("blur", handleBlur);
        });
        return () => {
            inputBoxes.forEach((inputBox) => {
                inputBox.removeEventListener("focus", handleFocus);
                inputBox.removeEventListener("blur", handleBlur);
            });
        };
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prev) => ({ ...prev, [name]: value }));

        if (touched[name] || formErrors[name]) {
            setFormErrors((prevErrors) => {
                const newErrors = { ...prevErrors };

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

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
    };

    const handleProjectChange = (selected) => {
        setProject(selected);
        setTouched(prev => ({ ...prev, project: true }));

        if (selected) {
            setFormErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors.project;
                return newErrors;
            });
        }
    };

    const validate = () => {
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

    const handleSubmit = async () => {
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
            PageName: pathname,
        };
        try {
            setSubmitIsLoading(true);
            const saveData = await saveEnquiry(payload).unwrap();
            if (saveData?.success) {
                openThankyouPop()
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
                toast.error(saveData?.message || "Failed to submit enquiry.");
            }
        } catch (err) {
            console.error(err);
            const msg = err?.data?.message || err?.error || "An error occurred while submitting enquiry.";
            toast.error(msg);
        } finally {
            setSubmitIsLoading(false);
        }
    };

    return (
        <section>
            <div className="contact_form sec-pad">
                <div className="container">
                    <div className="main_wrapper flex">
                        <div className="heading">
                            <h2>Partnership & General <span>Inquiry Form</span></h2>
                            <p>This centralized portal manages all general inquiries, including new business partnerships for Hospitals, ProCalyx, and Swasth for Corporates. Queries are routed to the relevant strategic lead immediately.</p>
                        </div>
                        <div className="form">
                            <div className="form-grid">
                                <div className={`form-group border ${touched.name && formErrors.name ? 'has-error' : ''}`}>
                                    <label htmlFor="name">Name*</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="form-control no-focus"
                                        placeholder="Your Name"
                                        value={formValues.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.name && formErrors.name && (
                                        <div className="error">{formErrors.name}</div>
                                    )}
                                </div>
                                <div className={`form-group border ${touched.email && formErrors.email ? 'has-error' : ''}`}>
                                    <label htmlFor="email">Email Address*</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="form-control no-focus"
                                        placeholder="email@example.com"
                                        value={formValues.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.email && formErrors.email && (
                                        <div className="error">{formErrors.email}</div>
                                    )}
                                </div>
                                <div className={`form-group border ${touched.phone && formErrors.phone ? 'has-error' : ''}`}>
                                    <label htmlFor="phone">Phone*</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="form-control no-focus"
                                        placeholder="+91 99999 99999"
                                        maxLength="14"
                                        value={formValues.phone}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.phone && formErrors.phone && (
                                        <div className="error">{formErrors.phone}</div>
                                    )}
                                </div>
                                <div className={`form-group border ${touched.city && formErrors.city ? 'has-error' : ''}`}>
                                    <label htmlFor="city">City*</label>
                                    <input
                                        type="text"
                                        id="city"
                                        name="city"
                                        className="form-control no-focus"
                                        placeholder="Gurugram"
                                        value={formValues.city}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.city && formErrors.city && (
                                        <div className="error">{formErrors.city}</div>
                                    )}
                                </div>
                                <div className={`form-group border ${touched.state && formErrors.state ? 'has-error' : ''}`}>
                                    <label htmlFor="state">State*</label>
                                    <input
                                        type="text"
                                        id="state"
                                        name="state"
                                        className="form-control no-focus"
                                        placeholder="State"
                                        value={formValues.state}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.state && formErrors.state && (
                                        <div className="error">{formErrors.state}</div>
                                    )}
                                </div>
                                <div className={`form-group border ${touched.pincode && formErrors.pincode ? 'has-error' : ''}`}>
                                    <label htmlFor="pincode">Pincode*</label>
                                    <input
                                        type="tel"
                                        id="pincode"
                                        name="pincode"
                                        className="form-control no-focus"
                                        placeholder="XXXXXXXXXX"
                                        maxLength="6"
                                        value={formValues.pincode}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.pincode && formErrors.pincode && (
                                        <div className="error">{formErrors.pincode}</div>
                                    )}
                                </div>
                                <div className={`form-group border full ${touched.project && formErrors.project ? 'has-error' : ''}`}>
                                    <MySelect
                                        id="selectProject"
                                        placeholder="Select Product"
                                        options={optionsProject}
                                        selectedValue={project}
                                        onValueChange={handleProjectChange}
                                    />
                                    {touched.project && formErrors.project && (
                                        <div className="error">{formErrors.project}</div>
                                    )}
                                </div>
                            </div>
                            <div className="disclaim">
                                <p>By clicking on submit button, you are agreeing the <Link href="/terms-of-use">terms and conditions</Link></p>
                            </div>
                            <Button classname="white" buttonText="Submit" onClick={handleSubmit} disabled={submitIsLoading}>
                                {submitIsLoading ? (
                                    <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                        Submit <Loading />
                                    </span>
                                ) : (
                                    "Submit"
                                )}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}