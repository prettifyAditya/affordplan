'use client';
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";
import { useGetStaticByIdQuery, useSaveOrUpdateStaticMutation, } from "@/store/backendSlice/staticAPISlice";
import Loader from "@/app/loading";


export default function AddUpdStaticData() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const StaticID = searchParams.get("ID");

  const { data: staticResponse, isSuccess } = useGetStaticByIdQuery(StaticID, { skip: !StaticID, refetchOnMountOrArgChange: true, });
  const [saveOrUpdateStatic, { isLoading: isSaving }] = useSaveOrUpdateStaticMutation();

  const [previewImage, setPreviewImage] = useState("");
  const [previewBanner, setPreviewBanner] = useState("");


  // useEffect(() => {
  //   if (!StaticID || isNaN(Number(StaticID))) {
  //     router.push("/afford-admin/manage-page");
  //   }
  // }, [StaticID, router]);

  const [formData, setFormData] = useState({
    StaticName: "",
    StaticNameURL: "",
    StaticImage: null,
    StaticBannerImage: null,
    SmallDescription: "",
    Description: "",
    ActiveStatus: false,
    MetaTitle: "",
    MetaKeywords: "",
    MetaDescriptions: "",
    MetaSchema: "",
  });

  useEffect(() => {
    if (isSuccess && staticResponse?.success) {
      const data = staticResponse.data;
      setFormData({
        StaticName: data.StaticName,
        StaticNameURL: data.StaticNameURL,
        SmallDescription: data.SmallDescription,
        Description: data.Description,
        ActiveStatus: data.ActiveStatus === 1,
        MetaTitle: data.MetaTitle,
        MetaKeywords: data.MetaKeywords,
        MetaDescriptions: data.MetaDescriptions,
        MetaSchema: data.MetaSchema,
        StaticImage: null,
        StaticBannerImage: null,
      });

      setPreviewImage(`/OnlineImages/PageImages/${data.StaticImage}`);
      setPreviewBanner(data.StaticBannerImage);
    }
  }, [isSuccess, staticResponse]);

  const handleInput = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const generateSlug = (text) =>
    text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-");

  const handleFileRename = (file, nameSuffix) => {
    const ext = file.name.split(".").pop();
    const slug = formData.StaticNameURL?.replace(/\s+/g, "-");
    const newName = `${slug}${nameSuffix}.${ext}`;
    return new File([file], newName, { type: file.type });
  };

  const handleSubmit = async () => {
    const { StaticName, StaticNameURL, SmallDescription, StaticImage, StaticBannerImage } = formData;
    if (!StaticName.trim())
      return toast.error("Please enter static title.");
    if (!StaticNameURL.trim())
      return toast.error("Please enter static title url.");
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "StaticImage" && value instanceof File) {
        data.append("StaticImage", handleFileRename(value, ""));
      } else if (key === "StaticBannerImage" && value instanceof File) {
        data.append("StaticBannerImage", handleFileRename(value, "-banner"));
      } else if (key === "ActiveStatus") {
        data.append("ActiveStatus", value ? "1" : "0");
      } else if (typeof value === "string" || typeof value === "number") {
        data.append(key, value.toString());
      }
    });
    data.append("UpdatedBy", "Admin Panel");
    data.append("type", "static");
    if (StaticID && !isNaN(parseInt(StaticID))) {
      data.append("StaticID", StaticID);
    }
    try {
      const result = await saveOrUpdateStatic(data).unwrap();
      if (result.success) {
        toast.success(result.message);
        router.push("/afford-admin/manage-page");
      } else {
        toast.error(result.message || "Save failed");
      }
    } catch (error) {
      console.error("Submit error:", error);
      toast.error("Something went wrong");
    }
  };

  return (
    <main className="add_update container">
      <div className="form-box">
        <h1>Add/Update Static Data</h1>

        <div className="form-group-row">
          <div className="form-group displayorder">
            <label>Title*</label>
            <input
              type="text"
              name="StaticName"
              placeholder="About Company"
              value={formData.StaticName}
              onChange={(e) => {
                const val = e.target.value;
                handleInput("StaticName", val);
                if (!StaticID) {
                  handleInput("StaticNameURL", generateSlug(val));
                  handleInput("MetaTitle", `${val} | AffordPlan`);
                }
              }}
            />
          </div>
          <div className="form-group" style={{ display: "none" }}>
            <label>Title URL*</label>
            <input
              type="text"
              placeholder="About Us"
              value={formData.StaticNameURL}
              onChange={(e) => handleInput("StaticNameURL", e.target.value)}
            />
          </div>
          <div className="form-group" style={{ display: "none" }}>
            <label>Small Description*</label>
            <input
              type="text"
              placeholder="About Us afford projects. "
              value={formData.SmallDescription}
              onChange={(e) => handleInput("SmallDescription", e.target.value)}
            />
          </div>
        </div>
        <div className="form-group-row file-uploade-sec" style={{ display: "none" }}>
          <div className="colA">
            <div className="form-group">
              <label>*Poster Image</label>
              <input
                type="file"
                onChange={(e) =>
                  handleInput("StaticImage", e.target.files?.[0] || null)
                }
              />
              <span className="hint-text">(Image Size 385px X 263px)</span>
            </div>
            {previewImage && (
              <div className="file-image-sec">
                <img src={previewImage} alt="Static" width={150} />
              </div>
            )}
          </div>
          <div className="colB">
            <div className="form-group">
              <label>Video*</label>
              <input
                type="file"
                onChange={(e) =>
                  handleInput("StaticBannerImage", e.target.files?.[0] || null)
                }
              />
              <span className="hint-text">(Image Size 385px X 263px)</span>
            </div>
            {previewBanner && (
              <div className="file-image-sec">
                <video
                  src={`/OnlineImages/PageImages/${previewBanner}`}
                  width="100"
                  height="100"
                  autoPlay
                  muted
                  loop
                  controls
                />
              </div>
            )}
          </div>
        </div>
        <div className="form-group" style={{ display: "none" }}>
          <label>Other Description</label>
          <input
            type="text"
            placeholder="About Us afford projects."
            value={formData.Description}
            onChange={(e) => handleInput("Description", e.target.value)}
          />
        </div>
        <div className="form-group-row" style={{ display: "none" }}>
          <div className="form-group-row statusac">
            <input
              type="checkbox"
              id="chkActiveStatus"
              checked={formData.ActiveStatus}
              onChange={(e) => handleInput("ActiveStatus", e.target.checked)}
            />
            <label htmlFor="chkActiveStatus">Status (Active/Inactive)</label>
          </div>
        </div>
        <h2>Only for SEO Purpose</h2>
        <hr />
        <div className="form-group">
          <label className="block-label">MetaTitle</label>
          <input
            type="text"
            value={formData.MetaTitle}
            onChange={(e) => handleInput("MetaTitle", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="block-label">Meta Keywords</label>
          <input
            type="text"
            value={formData.MetaKeywords}
            onChange={(e) => handleInput("MetaKeywords", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="block-label">Meta Descriptions</label>
          <input
            type="text"
            value={formData.MetaDescriptions}
            onChange={(e) => handleInput("MetaDescriptions", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="block-label">Meta Schema</label>
          <input
            type="text"
            value={formData.MetaSchema}
            onChange={(e) => handleInput("MetaSchema", e.target.value)}
          />
        </div>
        <button
          className="submit-btn"
          onClick={handleSubmit}
          disabled={isSaving}
        >
          {isSaving && <Loader />} Submit
        </button>
        <Link href="/afford-admin/manage-page" className="back-btn">
          Back
        </Link>
      </div>
    </main>
  );
}
