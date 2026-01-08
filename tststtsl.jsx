'use client';
export const dynamic = 'force-dynamic';

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";
import { useCheckLoginQuery } from "../../../../store/backendSlice/authAPISlice";
import {
    useGetMediaByIdQuery,
    useSaveOrUpdateMediaMutation,
    useGetMaxDisplayOrderQuery
} from "@/store/backendSlice/mediaAPISlice";
import { validateFields } from "@/utils/validateFields";

export default function AddUpdMediaData() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const MediaID = searchParams.get("ID");

    const { data: checkData, isSuccess } = useCheckLoginQuery(undefined, {
        refetchOnMountOrArgChange: true,
        pollingInterval: 10000,
    });

    useEffect(() => {
        if (isSuccess && !checkData?.loggedIn) {
            router.push("/afford-admin/login");
        }
    }, [isSuccess, checkData, router]);

    const { data: mediaData, error } = useGetMediaByIdQuery(MediaID, {
        skip: !MediaID,
        refetchOnMountOrArgChange: true,
    });

    const { data: maxOrderData, isLoading: isMaxOrderLoading } = useGetMaxDisplayOrderQuery(undefined, {
        refetchOnMountOrArgChange: true,
    });

    const [saveOrUpdateMedia, { isLoading }] = useSaveOrUpdateMediaMutation();

    const [formData, setFormData] = useState({
        Title: "",
        MediaDate: "",
        MediaImage: null,
        ThirdPartyLink: "",
        DisplayOrder: 0,
        ActiveStatus: false,
    });

    const [previewImage, setPreviewImage] = useState("");

    useEffect(() => {
        if (mediaData?.success) {
            const data = mediaData.data;
            const formattedDate = data.MediaDate ? new Date(data.MediaDate).toISOString().split('T')[0] : "";

            setFormData({
                Title: data.Title || "",
                MediaDate: formattedDate,
                MediaImage: data.MediaImage || null,
                ThirdPartyLink: data.ThirdPartyLink || "",
                DisplayOrder: data.DisplayOrder || 0,
                ActiveStatus: data.ActiveStatus
            });
            setPreviewImage(data.MediaImage ? `/OnlineImages/MediaImages/${data.MediaImage}` : "");
        } else if (!MediaID && maxOrderData?.maxOrder !== undefined) {
            setFormData((prev) => {
                if (prev.DisplayOrder !== maxOrderData.maxOrder + 1) {
                    return { ...prev, DisplayOrder: maxOrderData.maxOrder + 1 };
                }
                return prev;
            });
        }
    }, [mediaData, maxOrderData, MediaID]);

    const handleInput = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const generateSlug = (text) =>
        text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-");

    const handleFileRename = (file) => {
        const ext = file.name.split(".").pop();
        const slug = generateSlug(formData.Title) || "media";
        const randomNum = Math.floor(10 + Math.random() * 90);
        return new File([file], `${slug}-image-${randomNum}.${ext}`, { type: file.type });
    };

    const handleSubmit = async () => {
        const { Title, MediaDate, MediaImage, ThirdPartyLink } = formData;

        if (!Title?.trim()) return toast.error("Please enter media title.");
        if (!MediaDate?.trim()) return toast.error("Please select media date.");
        if (!ThirdPartyLink?.trim()) return toast.error("Please enter media third party link.");
        if (!MediaID && !MediaImage) return toast.error("Please select media image.");

        const data = new FormData();
        data.append("Title", formData.Title);
        data.append("MediaDate", formData.MediaDate);
        data.append("ThirdPartyLink", formData.ThirdPartyLink);
        data.append("DisplayOrder", formData.DisplayOrder);
        data.append("ActiveStatus", formData.ActiveStatus ? "1" : "0");
        data.append("UpdatedBy", "Admin Panel");

        if (formData.MediaImage instanceof File) {
            data.append("MediaImage", handleFileRename(formData.MediaImage));
        } else if (typeof formData.MediaImage === "string") {
            data.append("MediaImage", formData.MediaImage);
        }

        if (MediaID) {
            data.append("MediaID", String(MediaID));
        }

        try {
            const res = await saveOrUpdateMedia(data).unwrap();
            if (res.success) {
                toast.success(res.message);
                router.push("/afford-admin/manage-media");
            } else {
                toast.error(res.message || "Save failed");
            }
        } catch (error) {
            console.error("Submit error:", error);
            toast.error(error?.data?.message || "Something went wrong");
        }
    };

    return (
        <main className="add_update container">
            <div className="form-box">
                <h1>Add/Update Media Data</h1>

                <div className="form-group-row">
                    <div className="form-group">
                        <label>Media Title*</label>
                        <input
                            type="text"
                            value={formData.Title || ""}
                            placeholder="Affordplan targets Rs 1,000 crore in GTV by FY25"
                            onChange={(e) => handleInput("Title", e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Media Date*</label>
                        <input
                            type="date"
                            value={formData.MediaDate || ""}
                            onChange={(e) => handleInput("MediaDate", e.target.value)}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label>Third Party Link*</label>
                    <input
                        type="url"
                        value={formData.ThirdPartyLink || ""}
                        placeholder="https://example.com/article"
                        onChange={(e) => handleInput("ThirdPartyLink", e.target.value)}
                    />
                </div>

                <div className="form-group-row file-uploade-sec">
                    <div className="colA">
                        <div className="form-group">
                            <label>Media Image*</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => {
                                    const file = e.target.files?.[0] || null;
                                    handleInput("MediaImage", file);
                                    if (file) {
                                        setPreviewImage(URL.createObjectURL(file));
                                    }
                                }}
                            />
                        </div>
                        {previewImage && (
                            <img
                                src={previewImage}
                                alt="Media Preview"
                                height={80}
                                style={{ marginTop: "10px" }}
                            />
                        )}
                    </div>
                </div>

                <div className="form-group-row statusac">
                    <div className="form-group displayorder">
                        <label>Display Order</label>
                        <input
                            type="number"
                            placeholder="0"
                            value={formData.DisplayOrder || ""}
                            min="0"
                            onChange={(e) => handleInput("DisplayOrder", Number(e.target.value))}
                        />
                    </div>

                    <div className="form-group-row statusac">
                        <input
                            type="checkbox"
                            id="chkActiveStatus"
                            checked={formData.ActiveStatus || false}
                            onChange={(e) => handleInput("ActiveStatus", e.target.checked)}
                        />
                        <label htmlFor="chkActiveStatus">Status (Active/Inactive)</label>
                    </div>
                </div>

                <button
                    className="submit-btn"
                    onClick={handleSubmit}
                    disabled={isLoading}
                >
                    {isLoading && <Loader />} Submit
                </button>

                <Link href="/afford-admin/manage-media" className="back-btn">
                    Back
                </Link>
            </div>
        </main>
    );
}