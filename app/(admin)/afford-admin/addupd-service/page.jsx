'use client';
export const dynamic = 'force-dynamic';

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";
import SunEditor from "../../../../components/backendcomponents/SunEditor";
import { useCheckLoginQuery } from "../../../../store/backendSlice/authAPISlice";
import { useGetServiceByIdQuery, useSaveOrUpdateServiceMutation, useGetMaxDisplayOrderQuery } from "@/store/backendSlice/serviceAPISlice";
import Loader from "@/app/loading";

export default function AddUpdServiceData() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const ServiceID = searchParams.get("ID");
  const { data: checkData, isSuccess, refetch } = useCheckLoginQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 10000,
  });


  useEffect(() => {
    if (isSuccess && !checkData?.loggedIn) {
      router.push("/afford-admin/login");
    }
  }, [isSuccess, checkData, router]);


  const { data: serviceData, error } = useGetServiceByIdQuery(ServiceID, {
    skip: !ServiceID,
    refetchOnMountOrArgChange: true,
  });

  const { data: maxOrderData, isLoading: isMaxOrderLoading } = useGetMaxDisplayOrderQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const [saveOrUpdateService, { isLoading }] = useSaveOrUpdateServiceMutation();

  const [formData, setFormData] = useState({
    ServiceName: "",
    ServiceNameURL: "",
    ServiceImage: null,
    ServiceBannerImage: null,
    SmallDescription: "",
    Description: "",
    ActiveStatus: false,
    DisplayOrder: 0,
    DisplayOnHome: false,
    MetaTitle: "",
    MetaKeywords: "",
    MetaDescriptions: "",
    MetaSchema: "",
  });


  const [previewImage, setPreviewImage] = useState("");
  const [previewBanner, setPreviewBanner] = useState("");

  useEffect(() => {
    if (serviceData?.success) {
      const data = serviceData.data;
      setFormData((prev) => ({
        ...prev,
        ServiceName: data.ServiceName,
        ServiceNameURL: data.ServiceNameURL,
        ServiceTagline: data.ServiceTagline,
        ServiceSize: data.ServiceSize,
        ServiceImage: data.ServiceImage,
        ServiceBannerImage: data.ServiceBannerImage,
        SmallDescription: data.SmallDescription,
        Description: data.Description,
        DisplayOrder: data.DisplayOrder,
        DisplayOnHome: data.DisplayOnHome,
        ActiveStatus: data.ActiveStatus,
        MetaTitle: data.MetaTitle,
        MetaKeywords: data.MetaKeywords,
        MetaDescriptions: data.MetaDescriptions,
        MetaSchema: data.MetaSchema,
      }));
      setPreviewImage(data.ServiceImage ? `/OnlineImages/ServiceImages/${data.ServiceImage}` : "");
      setPreviewBanner(data.ServiceBannerImage ? `/OnlineImages/ServiceImages/${data.ServiceBannerImage}` : "");
    } else if (!ServiceID && maxOrderData?.maxOrder !== undefined) {
      setFormData((prev) => {
        if (prev.DisplayOrder !== maxOrderData.maxOrder + 1) {
          return { ...prev, DisplayOrder: maxOrderData.maxOrder + 1 };
        }
        return prev;
      });
    }
  }, [serviceData, maxOrderData, ServiceID]);



  const handleInput = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const generateSlug = (text) =>
    text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-");

  const handleFileRename = (file, nameSuffix) => {
    const ext = file.name.split(".").pop();
    const slug = formData.ServiceNameURL?.replace(/\s+/g, "-");
    const randomNum = Math.floor(Math.random() * 90) + 10;
    const newName = `${slug}${nameSuffix}-${randomNum}.${ext}`;
    return new File([file], newName, { type: file.type });
  };


  const handleSubmit = async () => {
    const { ServiceName, ServiceNameURL, SmallDescription, ServiceImage, ServiceBannerImage } = formData;
    if (!ServiceName?.trim()) return toast.error("Please enter service title.");
    if (!ServiceNameURL?.trim()) return toast.error("Please enter service URL.");
    if (!SmallDescription?.trim()) return toast.error("Please enter small description.");
    if (!ServiceID && !ServiceImage) return toast.error("Please upload service image.");
    if (!ServiceID && !ServiceBannerImage) return toast.error("Please upload service banner image.");
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if ((key === "ServiceImage" || key === "ServiceBannerImage") && value instanceof File) {
        const suffix = key === "ServiceBannerImage" ? "-banner" : "";
        data.append(key, handleFileRename(value, suffix));
      } else if (key === "ActiveStatus" || key === "DisplayOnHome") {
        data.append(key, value ? "1" : "0");
      } else if (value !== null && value !== undefined) {
        data.append(key, value.toString());
      }
    });
    data.append("UpdatedBy", "Admin Panel");
    data.append("type", "service");
    if (ServiceID) data.append("ServiceID", ServiceID);
    try {
      const res = await saveOrUpdateService(data).unwrap();
      if (res.success) {
        toast.success(res.message);
        router.push("/afford-admin/manage-service");
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
        <h1>Add/Update Service Data</h1>
        <div className="form-group-row">
          <div className="form-group">
            <label>Title*</label>
            <input
              type="text"
              placeholder="Choose Hostels, Homestays, or Rentals"
              value={formData.ServiceName || ""}
              onChange={(e) => {
                const val = e.target.value;
                handleInput("ServiceName", val);
                if (!ServiceID) {
                  handleInput("ServiceNameURL", generateSlug(val));
                  handleInput("MetaTitle", `${val} | afford`);
                }
              }}
            />
          </div>
          <div className="form-group">
            <label>Title URL*</label>
            <input
              type="text"
              placeholder="choose-hostels-homestays-or-rentals"
              value={formData.ServiceNameURL || ""}
              onChange={(e) => handleInput("ServiceNameURL", e.target.value)}
            />
          </div>
        </div>
        <div className="form-group-row file-uploade-sec">
          <div className="colA">
            <div className="form-group">
              <label>Image*</label>
              <input
                type="file"
                onChange={(e) => handleInput("ServiceImage", e.target.files?.[0] || null)}
              />
            </div>
            {previewImage && <img src={previewImage} alt="Service" height={50} />}
          </div>
          <div className="colB">
            <div className="form-group">
              <label>Banner Image*</label>
              <input
                type="file"
                onChange={(e) => handleInput("ServiceBannerImage", e.target.files?.[0] || null)}
              />
            </div>
            {previewBanner && <img src={previewBanner} alt="Banner" height={50} />}
          </div>
        </div>
        <div className="form-group">
          <label>Small Description*</label>
          <input
            type="text"
            placeholder="Hotels are comfortable, but they are often the most expensive choice."
            value={formData.SmallDescription || ""}
            onChange={(e) => handleInput("SmallDescription", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <SunEditor value={formData.Description || ""} onChange={(val) => handleInput("Description", val)} />
        </div>
        <div className="form-group-row statusac">
          <div className="form-group displayorder">
            <label>Display Order</label>
            <input
              type="number"
              placeholder="0"
              value={formData.DisplayOrder || ""}
              onChange={(e) =>
                handleInput("DisplayOrder", Number(e.target.value))
              }
            />
          </div>
          <div className="form-group-row statusac">
            <input
              type="checkbox"
              id="chkActiveStatus"
              checked={formData.ActiveStatus || ""}
              onChange={(e) => handleInput("ActiveStatus", e.target.checked)}
            />
            <label htmlFor="chkActiveStatus">Status (Active/Inactive)</label>
          </div>
          <div className="form-group-row statusac">
            <input
              type="checkbox"
              id="chkDisplayOnHome"
              checked={formData.DisplayOnHome || ""}
              onChange={(e) =>
                handleInput("DisplayOnHome", e.target.checked)
              }
            />
            <label htmlFor="chkDisplayOnHome">
              Display On Home(Yes/No)
            </label>
          </div>
        </div>
        <h2>SEO Purpose</h2>
        <hr />
        <div className="form-group">
          <label>Meta Title</label>
          <input
            type="text"
            placeholder="Choose Hostels, Homestays, or Rentals | afford"
            value={formData.MetaTitle || ""}
            onChange={(e) => handleInput("MetaTitle", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Meta Keywords</label>
          <input
            type="text"
            value={formData.MetaKeywords || ""}
            onChange={(e) => handleInput("MetaKeywords", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Meta Descriptions</label>
          <input
            type="text"
            value={formData.MetaDescriptions || ""}
            onChange={(e) => handleInput("MetaDescriptions", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Meta Schema</label>
          <input
            type="text"
            value={formData.MetaSchema || ""}
            onChange={(e) => handleInput("MetaSchema", e.target.value)}
          />
        </div>
        <button className="submit-btn" onClick={handleSubmit} disabled={isLoading}>
          {isLoading && <Loader />} Submit
        </button>
        <Link href="/afford-admin/manage-service" className="back-btn">
          Back
        </Link>
      </div>
    </main>
  );
}


