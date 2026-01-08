'use client';
export const dynamic = 'force-dynamic';
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";
import { useCheckLoginQuery } from "../../../../store/backendSlice/authAPISlice";
import { useGetTestimonialByIdQuery, useSaveOrUpdateTestimonialMutation, useGetMaxDisplayOrderQuery } from "@/store/backendSlice/testimonialAPISlice";
import Loader from "@/app/loading";
import { validateFields } from "@/utils/validateFields";

export default function AddUpdTestimonialData() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const TestimonialID = searchParams.get("ID");
  const { data: checkData, isSuccess } = useCheckLoginQuery();
  const { data: maxOrderData, isLoading: isMaxOrderLoading } = useGetMaxDisplayOrderQuery(undefined, { refetchOnMountOrArgChange: true, });
  const { data: testimonialData, error } = useGetTestimonialByIdQuery(TestimonialID, { skip: !TestimonialID, refetchOnMountOrArgChange: true, });
  const [saveOrUpdateTestimonial, { isLoading }] = useSaveOrUpdateTestimonialMutation();

  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    if (isSuccess && !checkData?.loggedIn) {
      router.push("/afford-admin/login");
    }
  }, [isSuccess, checkData, router]);

  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    TestimonialType: "",
    TestimonialName: "",
    TestimonialNameURL: "",
    TestimonialImage: null,
    Location: "",
    Description: "",
    ActiveStatus: false,
    DisplayOrder: 0
  });



  useEffect(() => {
    if (testimonialData?.success) {
      const data = testimonialData.data;
      setFormData({
        TestimonialType: data.TestimonialType || "",
        TestimonialName: data.TestimonialName || "",
        TestimonialNameURL: data.TestimonialNameURL || "",
        TestimonialImage: null,
        Location: data.Location || "",
        Description: data.Description || "",
        ActiveStatus: data.ActiveStatus === 1,
        DisplayOrder: data.DisplayOrder ?? 0,
      });
      if (data.TestimonialImage) {
        setPreviewImage(`/OnlineImages/TestimonialImages/${data.TestimonialImage}`);
      } else {
        setPreviewImage(null);
      }
    }
    else if (!TestimonialID && maxOrderData?.maxOrder !== undefined) {
      setFormData((prev) => ({
        ...prev,
        DisplayOrder: maxOrderData.maxOrder + 1,
      }));
    }
  }, [testimonialData, maxOrderData]);

  const handleInput = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const generateSlug = (text) =>
    text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-");

  const handleFileRename = (file, nameSuffix) => {
    const ext = file.name.split(".").pop();
    const slug = formData.TestimonialNameURL?.replace(/\s+/g, "-");
    return new File([file], `${slug}${nameSuffix}.${ext}`, { type: file.type });
  };

  const validationRules = {
    TestimonialName: {
      required: true,
      requiredMessage: "Please enter testimonial name."
    },
    Location: {
      required: true,
      requiredMessage: "Please enter location / designation first."
    },
    TestimonialImage: {
      required: !TestimonialID,
      requiredMessage: "Please upload testimonial image."
    },
    TestimonialType: {
      required: true,
      requiredMessage: "Please select testimonial type."
    },
    Description: {
      required: true,
      requiredMessage: "Please enter description."
    }
  };

  const handleSubmit = async () => {
    const errors = validateFields(formData, validationRules);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "TestimonialImage" && value instanceof File) {
        data.append("TestimonialImage", handleFileRename(value, ""));
      } else if (key === "ActiveStatus") {
        data.append("ActiveStatus", value ? "1" : "0");
      } else if (typeof value === "string" || typeof value === "number") {
        data.append(key, value.toString());
      }
    });
    data.append("UpdatedBy", "Admin Panel");
    data.append("type", "testimonial");
    if (TestimonialID) data.append("TestimonialID", TestimonialID);
    try {
      const res = await saveOrUpdateTestimonial(data).unwrap();
      if (res.success) {
        toast.success(res.message);
        router.push("/afford-admin/manage-testimonial");
      } else {
        toast.error(res.message || "Save failed");
      }
    } catch (error) {
      //console.error("Submit error:", error);
      toast.error("Something went wrong");
    }
  };


  return (
    <main className="add_update container">
      <div className="form-box">
        <h1>Add/Update Testimonial Data</h1>
        <div className="form-group-row" style={{ marginBottom: "20px" }}>
          <div className="form-group displayorder">
            <label>Testimonial Type*</label>
            <select
              value={formData.TestimonialType || ""}
              onChange={(e) => {
                handleInput("TestimonialType", e.target.value);
                setFormErrors(prev => ({ ...prev, TestimonialType: "" }));
              }}
            >
              <option value="">Select Testimonial Type</option>
              <option value="Home">Home</option>
              <option value="Partner">Partner</option>
              <option value="Career">Careers</option>
            </select>
            {formErrors.TestimonialType && <p className="error">{formErrors.TestimonialType}</p>}
          </div>
          <div className="form-group displayorder">
            <label>Title*</label>
            <input
              type="text"
              value={formData.TestimonialName}
              placeholder="Luca Ferraro"
              onChange={(e) => {
                const val = e.target.value;
                handleInput("TestimonialName", val);
                if (!TestimonialID) {
                  handleInput("TestimonialNameURL", generateSlug(val));
                }
                setFormErrors(prev => ({ ...prev, TestimonialName: "" }));
              }}
            />
            {formErrors.TestimonialName && <p className="error">{formErrors.TestimonialName}</p>}
          </div>
          <div className="form-group" style={{ display: "none" }}>
            <label>Title URL*</label>
            <input
              type="text"
              value={formData.TestimonialNameURL}
              onChange={(e) => handleInput("TestimonialNameURL", e.target.value)}
            />
          </div>
          <div className="form-group ">
            <label>Location OR Designation*</label>
            <input
              type="text"
              placeholder="Aldershot Town FC stadium at the EBB Stadium OR Senior Expert"
              value={formData.Location}
              onChange={(e) => {
                handleInput("Location", e.target.value)
                setFormErrors(prev => ({ ...prev, Location: "" }));
              }}
            />
            {formErrors.Location && <p className="error">{formErrors.Location}</p>}
          </div>
          <div className="form-group">
            <label>Image*</label>
            <input
              type="file"
              onChange={(e) => {
                handleInput("TestimonialImage", e.target.files?.[0] || null)
                setFormErrors(prev => ({ ...prev, TestimonialImage: "" }));
              }}
            />
            {formErrors.TestimonialImage && <p className="error">{formErrors.TestimonialImage}</p>}
          </div>
          {previewImage && <img src={previewImage} alt="Testimonial" width={70} height={70} />}
        </div>
        <div className="form-group-row row" style={{ marginBottom: "20px" }}>
          <div className="form-group" >
            <label>Description * </label>
            <input
              type="text"
              placeholder="Hotels are comfortable, but they are often the most expensive choice."
              value={formData.Description}
              onChange={(e) => {
                handleInput("Description", e.target.value)
                setFormErrors(prev => ({ ...prev, Description: "" }));
              }}
            />
            {formErrors.Description && <p className="error">{formErrors.Description}</p>}
          </div>
          <div className="form-group displayorder">
            <label>Display Order</label>
            <input
              type="text"
              placeholder="0"
              value={formData.DisplayOrder || ""}
              onChange={(e) =>
                handleInput(
                  "DisplayOrder",
                  e.target.value === "" ? "" : Number(e.target.value)
                )
              }
            />
          </div>
          <div className="form-group-row statusac">
            <input type="checkbox" id="chkActiveStatus" checked={formData.ActiveStatus} onChange={(e) => handleInput("ActiveStatus", e.target.checked)} />
            <label htmlFor="chkActiveStatus">Status (Active/Inactive)</label>
          </div>

        </div>

        <button className="submit-btn" onClick={handleSubmit} disabled={isLoading}>
          {isLoading && <Loader />} Submit
        </button>
        <Link href="/afford-admin/manage-testimonial" className="back-btn">
          Back
        </Link>
      </div>
    </main>
  );
}
