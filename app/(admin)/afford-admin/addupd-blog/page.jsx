'use client';
export const dynamic = 'force-dynamic';

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";
import SunEditor from "../../../../components/backendcomponents/SunEditor";
import { useCheckLoginQuery } from "../../../../store/backendSlice/authAPISlice";
import { useGetBlogByIdQuery, useSaveOrUpdateBlogMutation } from "@/store/backendSlice/blogAPISlice";
import Loader from "@/app/loading";
import { validateFields } from "@/utils/validateFields";

export default function AddUpdBlogData() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const BlogID = searchParams.get("ID");
  const { data: checkData, isSuccess, refetch } = useCheckLoginQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 10000,
  });
  const { data: blogData, error, } = useGetBlogByIdQuery(BlogID, { skip: !BlogID, refetchOnMountOrArgChange: true, refetchOnFocus: true, });
  const [saveOrUpdateBlog, { isLoading }] = useSaveOrUpdateBlogMutation();

  const [previewImage, setPreviewImage] = useState("");
  const [previewBanner, setPreviewBanner] = useState("");
  const [selectedTagIDs, setSelectedTagIDs] = useState([]);


  useEffect(() => {
    if (isSuccess && !checkData?.loggedIn) {
      router.push("/afford-admin/login");
    }
  }, [isSuccess, checkData, router]);

  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    BlogName: "",
    BlogNameURL: "",
    BlogImage: null,
    BlogBannerImage: null,
    SmallDescription: "",
    Description: "",
    ActiveStatus: false,
    MetaTitle: "",
    MetaKeywords: "",
    MetaDescriptions: "",
    MetaSchema: "",
  });




  useEffect(() => {
    if (blogData?.success) {
      const data = blogData.data;
      setFormData({
        BlogName: data.BlogName,
        BlogNameURL: data.BlogNameURL,
        SmallDescription: data.SmallDescription,
        Description: data.Description,
        ActiveStatus: data.ActiveStatus,
        MetaTitle: data.MetaTitle,
        MetaKeywords: data.MetaKeywords,
        MetaDescriptions: data.MetaDescriptions,
        MetaSchema: data.MetaSchema,
        BlogImage: null,
        BlogBannerImage: null,
      });
      setPreviewImage(`/OnlineImages/BlogImages/${data.BlogImage}`);
      setPreviewBanner(`/OnlineImages/BlogImages/${data.BlogBannerImage}`);
      if (Array.isArray(data.tags)) setSelectedTagIDs(data.tags);
    }
  }, [blogData]);

  const handleInput = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const generateSlug = (text) =>
    text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-");

  const handleFileRename = (file, nameSuffix) => {
    const ext = file.name.split(".").pop();
    const slug = formData.BlogNameURL?.replace(/\s+/g, "-");
    return new File([file], `${slug}${nameSuffix}.${ext}`, { type: file.type });
  };


  const validationRules = {
    BlogName: {
      required: true,
      requiredMessage: "Please enter blog title."
    },
    BlogNameURL: {
      required: true,
      requiredMessage: "Please enter blog title URL."
    },
    SmallDescription: {
      required: true,
      requiredMessage: "Please enter small description."
    },
    BlogImage: {
      required: !BlogID,
      requiredMessage: "Please upload blog image."
    },
    BlogBannerImage: {
      required: !BlogID,
      requiredMessage: "Please upload blog banner image."
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
      if (key === "BlogImage" && value instanceof File) {
        data.append("BlogImage", handleFileRename(value, ""));
      } else if (key === "BlogBannerImage" && value instanceof File) {
        data.append("BlogBannerImage", handleFileRename(value, "-banner"));
      } else if (key === "ActiveStatus") {
        data.append("ActiveStatus", value ? "1" : "0");
      } else if (typeof value === "string" || typeof value === "number") {
        data.append(key, value.toString());
      }
    });
    data.append("UpdatedBy", "Admin Panel");
    data.append("type", "blog");
    data.append("SelectedTags", JSON.stringify(selectedTagIDs));
    if (BlogID) data.append("BlogID", BlogID);

    try {
      const res = await saveOrUpdateBlog(data).unwrap();
      if (res.success) {
        toast.success(res.message);
        router.push("/afford-admin/manage-blog");
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
        <h1>Add/Update Blog Data</h1>
        <div className="form-group-row" style={{ marginBottom: "15px" }}>
          <div className="form-group">
            <label>Title*</label>
            <input
              type="text"
              value={formData.BlogName}
              placeholder="Choose Hostels, Homestays, or Rentals"
              onChange={(e) => {
                const val = e.target.value;
                handleInput("BlogName", val);
                if (!BlogID) {
                  handleInput("BlogNameURL", generateSlug(val));
                  handleInput("MetaTitle", `${val} | Afford`);
                }
                setFormErrors(prev => ({ ...prev, BlogName: "", BlogNameURL: "" }));
              }}
            />
            {formErrors.BlogName && <p className="error">{formErrors.BlogName}</p>}
          </div>
          <div className="form-group">
            <label>Title URL*</label>
            <input
              type="text"
              placeholder="choose-hostels-homestays-or-rentals"
              value={formData.BlogNameURL}
              onChange={(e) => {
                handleInput("BlogNameURL", e.target.value)
                setFormErrors(prev => ({ ...prev, BlogNameURL: "" }));
              }}
            />
            {formErrors.BlogNameURL && <p className="error">{formErrors.BlogNameURL}</p>}
          </div>
        </div>
        <div className="form-group-row file-uploade-sec" style={{ marginBottom: "15px" }}>
          <div className="colA">
            <div className="form-group">
              <label>Image*</label>
              <input
                type="file"
                onChange={(e) => {
                  handleInput("BlogImage", e.target.files?.[0] || null)
                  setFormErrors(prev => ({ ...prev, BlogImage: "" }));
                }}
              />
              {formErrors.BlogImage && <p className="error">{formErrors.BlogImage}</p>}
            </div>
            {previewImage && <img src={previewImage} alt="Blog" height={50} />}
          </div>
          <div className="colB">
            <div className="form-group">
              <label>Banner Image*</label>
              <input
                type="file"
                onChange={(e) => {
                  handleInput("BlogBannerImage", e.target.files?.[0] || null)
                  setFormErrors(prev => ({ ...prev, BlogBannerImage: "" }));
                }}
              />
              {formErrors.BlogBannerImage && <p className="error">{formErrors.BlogBannerImage}</p>}
            </div>
            {previewBanner && <img src={previewBanner} alt="Banner" height={50} />}
          </div>
        </div>
        <div className="form-group" style={{ marginBottom: "20px" }}>
          <label>Small Description*</label>
          <input
            type="text"
            placeholder="Hotels are comfortable, but they are often the most expensive choice."
            value={formData.SmallDescription}
            onChange={(e) => {
              handleInput("SmallDescription", e.target.value)
              setFormErrors(prev => ({ ...prev, SmallDescription: "" }));
            }}
          />
          {formErrors.SmallDescription && <p className="error">{formErrors.SmallDescription}</p>}
        </div>
        <div className="form-group">
          <label>Description</label>
          <SunEditor value={formData.Description} onChange={(val) => handleInput("Description", val)} />
        </div>
        <div className="form-group-row statusac">
          <input type="checkbox" id="chkActiveStatus" checked={formData.ActiveStatus} onChange={(e) => handleInput("ActiveStatus", e.target.checked)} />
          <label htmlFor="chkActiveStatus">Status (Active/Inactive)</label>
        </div>
        <h2>SEO</h2>
        <hr />
        <div className="form-group">
          <label>Meta Title</label>
          <input
            type="text"
            placeholder="Choose Hostels, Homestays, or Rentals | afford"
            value={formData.MetaTitle}
            onChange={(e) => handleInput("MetaTitle", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Meta Keywords</label>
          <input
            type="text"
            value={formData.MetaKeywords}
            onChange={(e) => handleInput("MetaKeywords", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Meta Descriptions</label>
          <input
            type="text"
            value={formData.MetaDescriptions}
            onChange={(e) => handleInput("MetaDescriptions", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Meta Schema</label>
          <input
            type="text"
            value={formData.MetaSchema}
            onChange={(e) => handleInput("MetaSchema", e.target.value)}
          />
        </div>
        <button className="submit-btn" onClick={handleSubmit} disabled={isLoading}>
          {isLoading && <Loader />} Submit
        </button>
        <Link href="/afford-admin/manage-blog" className="back-btn">
          Back
        </Link>
      </div>
    </main>
  );
}


