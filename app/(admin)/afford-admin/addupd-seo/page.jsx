'use client';
export const dynamic = 'force-dynamic';
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";
import SunEditor from "../../../../components/backendcomponents/SunEditor";
import { useCheckLoginQuery } from "../../../../store/backendSlice/authAPISlice";
import { useGetSeoByIdQuery, useSaveOrUpdateSeoMutation } from "@/store/backendSlice/seoAPISlice";
import Loader from "@/app/loading";
import { validateFields } from "@/utils/validateFields";

export default function AddUpdSeoData() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const SeoID = searchParams.get("ID");

  const { data: checkData, isSuccess, refetch } = useCheckLoginQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 10000,
  });

  useEffect(() => {
    if (isSuccess && !checkData?.loggedIn) {
      router.push("/afford-admin/login");
    }
  }, [isSuccess, checkData, router]);

  const { data: seoData, error, } = useGetSeoByIdQuery(SeoID, {
    skip: !SeoID,
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
  });

  const [saveOrUpdateSeo, { isLoading }] = useSaveOrUpdateSeoMutation();

  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    SeoName: "",
    SeoNameURL: "",
    SeoBannerImage: null,
    SmallDescription: "",
    Description: "",
    ActiveStatus: false,
    MetaTitle: "",
    MetaKeywords: "",
    MetaDescriptions: "",
    MetaSchema: "",
  });

  const [previewBanner, setPreviewBanner] = useState("");
  const [selectedTagIDs, setSelectedTagIDs] = useState([]);

  useEffect(() => {
    if (seoData?.success) {
      const data = seoData.data;
      setFormData({
        SeoName: data.SeoName,
        SeoNameURL: data.SeoNameURL,
        SmallDescription: data.SmallDescription,
        Description: data.Description,
        ActiveStatus: data.ActiveStatus,
        MetaTitle: data.MetaTitle,
        MetaKeywords: data.MetaKeywords,
        MetaDescriptions: data.MetaDescriptions,
        MetaSchema: data.MetaSchema,
        SeoBannerImage: null,
      });
      setPreviewBanner(`/OnlineImages/SeoImages/${data.SeoBannerImage}`);
      if (Array.isArray(data.tags)) setSelectedTagIDs(data.tags);
    }

  }, [seoData]);

  const handleInput = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const generateSlug = (text) =>
    text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-");

  const handleFileRename = (file, nameSuffix) => {
    const ext = file.name.split(".").pop();
    const slug = formData.SeoNameURL?.replace(/\s+/g, "-");
    const randomNum = Math.floor(Math.random() * 90) + 10;
    const newFileName = `${slug}${nameSuffix}-${randomNum}.${ext}`;
    return new File([file], newFileName, { type: file.type });
  };


  const validationRules = {
    SeoName: {
      required: true,
      requiredMessage: "Please enter seo title."
    },
    SeoNameURL: {
      required: true,
      requiredMessage: "Please enter seo title url."
    },
    SmallDescription: {
      required: true,
      requiredMessage: "Please enter small description."
    },
    SeoBannerImage: {
      required: !SeoID,
      requiredMessage: "Please upload seo banner image."
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
      if (key === "SeoBannerImage" && value instanceof File) {
        data.append("SeoBannerImage", handleFileRename(value, "-banner"));
      } else if (key === "ActiveStatus") {
        data.append("ActiveStatus", value ? "1" : "0");
      } else if (typeof value === "string" || typeof value === "number") {
        data.append(key, value.toString());
      }
    });
    data.append("UpdatedBy", "Admin Panel");
    data.append("type", "seo");
    data.append("SelectedTags", JSON.stringify(selectedTagIDs));
    if (SeoID) data.append("SeoID", SeoID);

    try {
      const res = await saveOrUpdateSeo(data).unwrap();
      if (res.success) {
        toast.success(res.message);
        router.push("/afford-admin/manage-seo");
      } else {
        toast.error(res.message || "Save failed");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <main className="add_update container">
      <div className="form-box">
        <h1>Add/Update Seo Data</h1>
        <div className="form-group-row" style={{ marginBottom: "15px" }}>
          <div className="form-group">
            <label>Title*</label>
            <input
              type="text"
              value={formData.SeoName}
              placeholder="Affordable Healthcare Finance Plans in India"
              onChange={(e) => {
                const val = e.target.value;
                handleInput("SeoName", val);
                if (!SeoID) {
                  handleInput("SeoNameURL", generateSlug(val));
                  handleInput("MetaTitle", `${val} | AffordPlan`);
                }
                setFormErrors(prev => ({ ...prev, SeoName: "", SeoNameURL: "" }));
              }}
            />
            {formErrors.SeoName && <p className="error">{formErrors.SeoName}</p>}
          </div>
          <div className="form-group">
            <label>Title URL*</label>
            <input
              type="text"
              placeholder="affordable-healthcare-finance-plans-india"
              value={formData.SeoNameURL}
              onChange={(e) => {
                handleInput("SeoNameURL", e.target.value)
                setFormErrors(prev => ({ ...prev, SeoNameURL: "" }));
              }}
            />
            {formErrors.SeoNameURL && <p className="error">{formErrors.SeoNameURL}</p>}
          </div>
        </div>
        <div className="form-group-row file-uploade-sec" style={{ marginBottom: "15px" }}>
          <div className="colB">
            <div className="form-group">
              <label>Banner Image*</label>
              <input
                type="file"
                onChange={(e) => {
                  handleInput("SeoBannerImage", e.target.files?.[0] || null)
                  setFormErrors(prev => ({ ...prev, SeoBannerImage: "" }));
                }}
              />
              {formErrors.SeoBannerImage && <p className="error">{formErrors.SeoBannerImage}</p>}
            </div>
            {previewBanner && <img src={previewBanner} alt="Banner" height={50} />}
          </div>
          <div className="form-group">
            <label>Small Description*</label>
            <input
              type="text"
              placeholder="Get easy healthcare finance plans with low EMIs, zero-cost options, and instant approvals."
              value={formData.SmallDescription}
              onChange={(e) => {
                handleInput("SmallDescription", e.target.value)
                setFormErrors(prev => ({ ...prev, SmallDescription: "" }));
              }}
            />
            {formErrors.SmallDescription && <p className="error">{formErrors.SmallDescription}</p>}
          </div>
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
            value={formData.MetaTitle}
            placeholder="Affordable Healthcare Finance Plans in India | AffordPlan"
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
        <Link href="/afford-admin/manage-seo" className="back-btn">
          Back
        </Link>
      </div>
    </main>
  );
}