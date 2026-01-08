'use client';
export const dynamic = 'force-dynamic';

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";
import { useCheckLoginQuery } from "../../../../store/backendSlice/authAPISlice";
import {
  useGetProductByIdQuery,
  useSaveOrUpdateProductMutation,
  useGetSectionItemsQuery,
  useSaveOrUpdateSectionItemMutation,
  useDeleteSectionItemMutation
} from "@/store/backendSlice/productAPISlice";
import Loader from "@/app/loading";

export default function AddUpdProduct() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const ProductId = searchParams.get("ID");

  const { data: checkData, isSuccess } = useCheckLoginQuery(undefined, { refetchOnMountOrArgChange: true, pollingInterval: 10000, });
  const { data: productData } = useGetProductByIdQuery(ProductId, { skip: !ProductId, refetchOnMountOrArgChange: true });
  const { data: section3Data } = useGetSectionItemsQuery({ ProductId, SectionNumber: 3 }, { skip: !ProductId });
  const { data: section4Data } = useGetSectionItemsQuery({ ProductId, SectionNumber: 4 }, { skip: !ProductId });

  const [saveOrUpdateProduct, { isLoading }] = useSaveOrUpdateProductMutation();
  const [saveOrUpdateSectionItem] = useSaveOrUpdateSectionItemMutation();
  const [deleteSectionItem] = useDeleteSectionItemMutation();

  const [previewImages, setPreviewImages] = useState(["", "", "", ""]);
  const [formErrors, setFormErrors] = useState({});

  const [formData, setFormData] = useState({
    ProductName: "",
    ProductNameURL: "",
    ProductType: "",
    Section1Title: "",
    Section1Subtitle: "",
    Section1Description: "",
    Section1MediaUrl: null,
    Section1ButtonText: "",
    Section2Title: "",
    Section2Subtitle: "",
    Section2Description: "",
    Section2MediaUrl: null,
    Section2ButtonText: "",
    Section3Title: "",
    Section3Subtitle: "",
    Section3MediaUrl: null,
    Section4Title: "",
    Section4Subtitle: "",
    Section4Description: "",
    Section4MediaUrl: null,
    Section4ButtonText: "",
    ActiveStatus: false,
    DisplayOnHome: false,
    DisplayOnHeader: false,
  });

  const [section3Items, setSection3Items] = useState([{
    ItemId: "",
    ItemTitle: "",
    ItemDescription: "",
    ItemIconUrl: null,
    DisplayOrder: 0,
    ActiveStatus: true,
    previewImage: ""
  }]);

  const [section4Items, setSection4Items] = useState([{
    ItemId: "",
    ItemTitle: "",
    ItemDescription: "",
    DisplayOrder: 0,
    ActiveStatus: true,
  }]);

  useEffect(() => {
    if (isSuccess && !checkData?.loggedIn) {
      router.push("/afford-admin/login");
    }
  }, [isSuccess, checkData, router]);

  useEffect(() => {
    if (productData?.success) {
      const data = productData.data;
      setFormData({
        ProductName: data.ProductName,
        ProductNameURL: data.ProductNameURL,
        ProductType: data.ProductType,
        Section1Title: data.Section1Title,
        Section1Subtitle: data.Section1Subtitle,
        Section1Description: data.Section1Description,
        Section1MediaUrl: null,
        Section1ButtonText: data.Section1ButtonText,
        Section2Title: data.Section2Title,
        Section2Subtitle: data.Section2Subtitle,
        Section2Description: data.Section2Description,
        Section2MediaUrl: null,
        Section2ButtonText: data.Section2ButtonText,
        Section3Title: data.Section3Title,
        Section3Subtitle: data.Section3Subtitle,
        Section3MediaUrl: null,
        Section4Title: data.Section4Title,
        Section4Subtitle: data.Section4Subtitle,
        Section4Description: data.Section4Description,
        Section4MediaUrl: null,
        Section4ButtonText: data.Section4ButtonText,
        ActiveStatus: data.ActiveStatus,
        DisplayOnHome: data.DisplayOnHome,
        DisplayOnHeader: data.DisplayOnHeader,
      });
      setPreviewImages([
        data.Section1MediaUrl ? `/OnlineImages/ProductImages/${data.Section1MediaUrl}` : "",
        data.Section2MediaUrl ? `/OnlineImages/ProductImages/${data.Section2MediaUrl}` : "",
        data.Section3MediaUrl ? `/OnlineImages/ProductImages/${data.Section3MediaUrl}` : "",
        data.Section4MediaUrl ? `/OnlineImages/ProductImages/${data.Section4MediaUrl}` : "",
      ]);
    }
  }, [productData]);

  useEffect(() => {
    if (section3Data?.success && section3Data.data.length > 0) {
      setSection3Items(section3Data.data.map(item => ({
        ItemId: item.ItemId,
        ItemTitle: item.ItemTitle,
        ItemDescription: item.ItemDescription,
        ItemIconUrl: null,
        DisplayOrder: item.DisplayOrder,
        ActiveStatus: item.ActiveStatus,
        previewImage: item.ItemIconUrl ? `/OnlineImages/ProductImages/${item.ItemIconUrl}` : ""
      })));
    }
  }, [section3Data]);

  useEffect(() => {
    if (section4Data?.success && section4Data.data.length > 0) {
      setSection4Items(section4Data.data.map(item => ({
        ItemId: item.ItemId,
        ItemTitle: item.ItemTitle,
        ItemDescription: item.ItemDescription,
        DisplayOrder: item.DisplayOrder,
        ActiveStatus: item.ActiveStatus,
      })));
    }
  }, [section4Data]);

  const handleInput = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setFormErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const generateSlug = (text) =>
    text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-");

  const handleFileRename = (file, nameSuffix) => {
    if (!file || !file.name) return null;
    const ext = file.name.split('.').pop();
    const baseName = formData.ProductName?.replace(/\s+/g, '-').toLowerCase() || file.name.split('.')[0];
    const randomNum = Math.floor(10 + Math.random() * 90);
    const newFileName = `${baseName}${nameSuffix}_${randomNum}.${ext}`;
    return new File([file], newFileName, { type: file.type });
  };

  const addSectionItem = (section) => {
    const items = section === 3 ? section3Items : section4Items;
    const lastItem = items[items.length - 1];

    // Validation: Check if last item is filled
    if (section === 3) {
      if (!lastItem.ItemTitle?.trim() || !lastItem.ItemDescription?.trim() || !lastItem.ItemIconUrl) {
        toast.error("Please fill all fields (Title, Description, and Icon) in the previous item before adding more.");
        return;
      }
    } else {
      if (!lastItem.ItemTitle?.trim() || !lastItem.ItemDescription?.trim()) {
        toast.error("Please fill all fields (Title and Description) in the previous item before adding more.");
        return;
      }
    }

    const newItem = section === 3 
      ? {
          ItemId: "",
          ItemTitle: "",
          ItemDescription: "",
          ItemIconUrl: null,
          DisplayOrder: section3Items.length,
          ActiveStatus: true,
          previewImage: ""
        }
      : {
          ItemId: "",
          ItemTitle: "",
          ItemDescription: "",
          DisplayOrder: section4Items.length,
          ActiveStatus: true,
        };

    if (section === 3) {
      setSection3Items([...section3Items, newItem]);
    } else {
      setSection4Items([...section4Items, newItem]);
    }
  };

  const removeSectionItem = async (section, index) => {
    const items = section === 3 ? section3Items : section4Items;
    const item = items[index];
    
    if (item.ItemId) {
      const confirmed = confirm("Are you sure you want to delete this item?");
      if (!confirmed) return;
      try {
        const res = await deleteSectionItem(item.ItemId).unwrap();
        if (res.success) {
          toast.success("Item deleted successfully");
        }
      } catch (error) {
        console.error(error);
        toast.error("Error deleting item");
        return;
      }
    }
    
    if (section === 3) {
      setSection3Items(section3Items.filter((_, i) => i !== index));
    } else {
      setSection4Items(section4Items.filter((_, i) => i !== index));
    }
  };

  const updateSectionItem = (section, index, field, value) => {
    if (section === 3) {
      const updated = [...section3Items];
      updated[index][field] = value;
      if (field === "ItemIconUrl" && value instanceof File) {
        updated[index].previewImage = URL.createObjectURL(value);
      }
      setSection3Items(updated);
    } else {
      const updated = [...section4Items];
      updated[index][field] = value;
      setSection4Items(updated);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.ProductName?.trim()) errors.ProductName = "Product name is required";
    if (!formData.ProductNameURL?.trim()) errors.ProductNameURL = "Product URL is required";
    if (!formData.ProductType) errors.ProductType = "Product type is required";
    if (!formData.Section1Title?.trim()) errors.Section1Title = "Section 1 title is required";
    if (!formData.Section1Subtitle?.trim()) errors.Section1Subtitle = "Section 1 subtitle is required";
    if (!formData.Section1Description?.trim()) errors.Section1Description = "Section 1 description is required";
    if (!ProductId && !formData.Section1MediaUrl) errors.Section1MediaUrl = "Section 1 media is required";
    if (!formData.Section1ButtonText?.trim()) errors.Section1ButtonText = "Section 1 button text is required";
    if (!formData.Section2Title?.trim()) errors.Section2Title = "Section 2 title is required";
    if (!formData.Section2Subtitle?.trim()) errors.Section2Subtitle = "Section 2 subtitle is required";
    if (!formData.Section2Description?.trim()) errors.Section2Description = "Section 2 description is required";
    if (!ProductId && !formData.Section2MediaUrl) errors.Section2MediaUrl = "Section 2 media is required";
    if (!formData.Section2ButtonText?.trim()) errors.Section2ButtonText = "Section 2 button text is required";
    if (!formData.Section3Title?.trim()) errors.Section3Title = "Section 3 title is required";
    if (!formData.Section3Subtitle?.trim()) errors.Section3Subtitle = "Section 3 subtitle is required";
    if (!ProductId && !formData.Section3MediaUrl) errors.Section3MediaUrl = "Section 3 media is required";
    if (!formData.Section4Title?.trim()) errors.Section4Title = "Section 4 title is required";
    if (!formData.Section4Subtitle?.trim()) errors.Section4Subtitle = "Section 4 subtitle is required";
    if (!formData.Section4Description?.trim()) errors.Section4Description = "Section 4 description is required";
    if (!ProductId && !formData.Section4MediaUrl) errors.Section4MediaUrl = "Section 4 media is required";
    if (!formData.Section4ButtonText?.trim()) errors.Section4ButtonText = "Section 4 button text is required";

    // Validate Section 3 items
    const validSection3Items = section3Items.filter(item => 
      item.ItemTitle?.trim() || item.ItemDescription?.trim() || item.ItemIconUrl
    );
    
    if (validSection3Items.length === 0) {
      errors.section3Items = "At least one section 3 item is required";
    } else {
      for (let i = 0; i < validSection3Items.length; i++) {
        const item = validSection3Items[i];
        if (!item.ItemTitle?.trim() || !item.ItemDescription?.trim() || !item.ItemIconUrl) {
          errors.section3Items = "All section 3 items must have Title, Description, and Icon filled";
          break;
        }
      }
    }

    // Validate Section 4 items
    const validSection4Items = section4Items.filter(item => 
      item.ItemTitle?.trim() || item.ItemDescription?.trim()
    );
    
    if (validSection4Items.length === 0) {
      errors.section4Items = "At least one section 4 item is required";
    } else {
      for (let i = 0; i < validSection4Items.length; i++) {
        const item = validSection4Items[i];
        if (!item.ItemTitle?.trim() || !item.ItemDescription?.trim()) {
          errors.section4Items = "All section 4 items must have Title and Description filled";
          break;
        }
      }
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleItemIconRename = (file, productSlug, suffix) => {
    const ext = file.name.split(".").pop();
    const slug = productSlug?.replace(/\s+/g, "-");
    const randomNum = Math.floor(10 + Math.random() * 90);
    return new File([file], `${slug}${suffix}_${randomNum}.${ext}`, { type: file.type });
  };

  async function urlToFile(url, filename) {
    const res = await fetch(url);
    const blob = await res.blob();
    return new File([blob], filename, { type: blob.type });
  }
    if (!validateForm()) {
      return;
    }
    
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key.includes("MediaUrl") && value instanceof File) {
        const suffix = key.replace("Section", "-section").replace("MediaUrl", "");
        data.append(key, handleFileRename(value, suffix));
      } else if (key === "ActiveStatus" || key === "DisplayOnHome" || key === "DisplayOnHeader") {
        data.append(key, value ? "1" : "0");
      } else if (typeof value === "string" || typeof value === "number") {
        data.append(key, value.toString());
      }
    });
    
    if (ProductId) data.append("ProductId", ProductId);

    try {
      const res = await saveOrUpdateProduct(data).unwrap();
      if (res.success) {
        const finalProductId = res.ProductId || ProductId;
        
  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }
    
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key.includes("MediaUrl") && value instanceof File) {
        const suffix = key.replace("Section", "-section").replace("MediaUrl", "");
        data.append(key, handleFileRename(value, suffix));
      } else if (key === "ActiveStatus" || key === "DisplayOnHome" || key === "DisplayOnHeader") {
        data.append(key, value ? "1" : "0");
      } else if (typeof value === "string" || typeof value === "number") {
        data.append(key, value.toString());
      }
    });
    
    if (ProductId) data.append("ProductId", ProductId);

    try {
      const res = await saveOrUpdateProduct(data).unwrap();
      if (res.success) {
        const finalProductId = res.ProductId || ProductId;
        
        let section3Success = true;
        for (const item of section3Items) {
          if (item.ItemTitle?.trim() && item.ItemDescription?.trim() && item.ItemIconUrl) {
            const itemData = new FormData();
            if (item.ItemId) itemData.append("ItemId", item.ItemId);
            itemData.append("ProductId", finalProductId);
            itemData.append("ItemTitle", item.ItemTitle);
            itemData.append("ItemDescription", item.ItemDescription);
            itemData.append("SectionNumber", "3");
            itemData.append("DisplayOrder", item.DisplayOrder.toString());
            itemData.append("ActiveStatus", item.ActiveStatus ? "1" : "0");
            
            if (item.ItemIconUrl instanceof File) {
              itemData.append("ItemIconUrl", handleItemIconRename(item.ItemIconUrl, item.ItemTitle, "-section3"));
            } else if (typeof item.ItemIconUrl === "string" && item.ItemIconUrl.startsWith("http")) {
              const realFile = await urlToFile(item.ItemIconUrl, "section3.png");
              itemData.append("ItemIconUrl", handleItemIconRename(realFile, item.ItemTitle, "-section3"));
            }
            
            try {
              await saveOrUpdateSectionItem(itemData).unwrap();
            } catch (error) {
              console.error("Error saving section 3 item:", error);
              section3Success = false;
            }
          }
        }

        let section4Success = true;
        for (const item of section4Items) {
          if (item.ItemTitle?.trim() && item.ItemDescription?.trim()) {
            const itemData = new FormData();
            if (item.ItemId) itemData.append("ItemId", item.ItemId);
            itemData.append("ProductId", finalProductId);
            itemData.append("ItemTitle", item.ItemTitle);
            itemData.append("ItemDescription", item.ItemDescription);
            itemData.append("SectionNumber", "4");
            itemData.append("DisplayOrder", item.DisplayOrder.toString());
            itemData.append("ActiveStatus", item.ActiveStatus ? "1" : "0");
            
            try {
              await saveOrUpdateSectionItem(itemData).unwrap();
            } catch (error) {
              console.error("Error saving section 4 item:", error);
              section4Success = false;
            }
          }
        }

        if (section3Success && section4Success) {
          toast.success("Product and all items saved successfully!");
          router.push("/afford-admin/manage-product");
        } else {
          toast.warning("Product saved but some items failed to save");
        }
      } else {
        toast.error(res.message || "Save failed");
      }
    } catch (error) {
      console.error("Submit error:", error);
      toast.error("Something went wrong");
    }
  };

  const renderImageUploader = (label, index, field, hint) => (
    <div className="form-group">
      <label>{label}*</label>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0] || null;
          handleInput(field, file);
          if (file) {
            const newPreviews = [...previewImages];
            newPreviews[index] = URL.createObjectURL(file);
            setPreviewImages(newPreviews);
          }
        }}
      />
      <span className="hint-text">{hint}</span>
      {formErrors[field] && <p className="error">{formErrors[field]}</p>}
      {previewImages[index] && (
        <div className="file-image-sec">
          <img src={previewImages[index]} alt={`Preview ${label}`} width={150} />
        </div>
      )}
    </div>
  );

  return (
    <main className="add_update container">
      <div className="form-box">
        <h1>Add/Update Product</h1>
        
        {/* Basic Information */}
        <h2>Basic Information</h2>
        <hr />
        <div className="form-group-row">
          <div className="form-group">
            <label>Product Name*</label>
            <input
              type="text"
              placeholder="Enter product name"
              value={formData.ProductName}
              onChange={(e) => {
                const val = e.target.value;
                handleInput("ProductName", val);
                if (!ProductId) {
                  handleInput("ProductNameURL", generateSlug(val));
                }
              }}
            />
            {formErrors.ProductName && <p className="error">{formErrors.ProductName}</p>}
          </div>
          <div className="form-group">
            <label>Product URL*</label>
            <input
              type="text"
              placeholder="product-url"
              value={formData.ProductNameURL}
              onChange={(e) => handleInput("ProductNameURL", e.target.value)}
            />
            {formErrors.ProductNameURL && <p className="error">{formErrors.ProductNameURL}</p>}
          </div>
          <div className="form-group">
            <label>Product Type*</label>
            <select
              value={formData.ProductType}
              onChange={(e) => handleInput("ProductType", e.target.value)}
            >
              <option value="">Select Type</option>
              <option value="Type1">Type 1</option>
              <option value="Type2">Type 2</option>
              <option value="Type3">Type 3</option>
            </select>
            {formErrors.ProductType && <p className="error">{formErrors.ProductType}</p>}
          </div>
        </div>
        
        <div className="form-group-row">
          <div className="form-group-row statusac">
            <input
              type="checkbox"
              id="chkActiveStatus"
              checked={formData.ActiveStatus}
              onChange={(e) => handleInput("ActiveStatus", e.target.checked)}
            />
            <label htmlFor="chkActiveStatus">Active Status</label>
          </div>
          <div className="form-group-row statusac">
            <input
              type="checkbox"
              id="chkDisplayOnHome"
              checked={formData.DisplayOnHome}
              onChange={(e) => handleInput("DisplayOnHome", e.target.checked)}
            />
            <label htmlFor="chkDisplayOnHome">Display On Home</label>
          </div>
          <div className="form-group-row statusac">
            <input
              type="checkbox"
              id="chkDisplayOnHeader"
              checked={formData.DisplayOnHeader}
              onChange={(e) => handleInput("DisplayOnHeader", e.target.checked)}
            />
            <label htmlFor="chkDisplayOnHeader">Display On Header</label>
          </div>
        </div>

        {/* Section 1 */}
        <h2 style={{ marginTop: "30px" }}>Section 1</h2>
        <hr />
        <div className="form-group-row">
          <div className="form-group">
            <label>Title*</label>
            <input
              type="text"
              value={formData.Section1Title}
              onChange={(e) => handleInput("Section1Title", e.target.value)}
            />
            {formErrors.Section1Title && <p className="error">{formErrors.Section1Title}</p>}
          </div>
          <div className="form-group">
            <label>Subtitle*</label>
            <input
              type="text"
              value={formData.Section1Subtitle}
              onChange={(e) => handleInput("Section1Subtitle", e.target.value)}
            />
            {formErrors.Section1Subtitle && <p className="error">{formErrors.Section1Subtitle}</p>}
          </div>
          <div className="form-group">
            <label>Button Text*</label>
            <input
              type="text"
              value={formData.Section1ButtonText}
              onChange={(e) => handleInput("Section1ButtonText", e.target.value)}
            />
            {formErrors.Section1ButtonText && <p className="error">{formErrors.Section1ButtonText}</p>}
          </div>
          {renderImageUploader("Media", 0, "Section1MediaUrl", "Upload image/video")}
        </div>
        <div className="form-group">
          <label>Description*</label>
          <textarea
            rows="4"
            value={formData.Section1Description}
            onChange={(e) => handleInput("Section1Description", e.target.value)}
          />
          {formErrors.Section1Description && <p className="error">{formErrors.Section1Description}</p>}
        </div>

        {/* Section 2 */}
        <h2 style={{ marginTop: "30px" }}>Section 2</h2>
        <hr />
        <div className="form-group-row">
          <div className="form-group">
            <label>Title*</label>
            <input
              type="text"
              value={formData.Section2Title}
              onChange={(e) => handleInput("Section2Title", e.target.value)}
            />
            {formErrors.Section2Title && <p className="error">{formErrors.Section2Title}</p>}
          </div>
          <div className="form-group">
            <label>Subtitle*</label>
            <input
              type="text"
              value={formData.Section2Subtitle}
              onChange={(e) => handleInput("Section2Subtitle", e.target.value)}
            />
            {formErrors.Section2Subtitle && <p className="error">{formErrors.Section2Subtitle}</p>}
          </div>
          <div className="form-group">
            <label>Button Text*</label>
            <input
              type="text"
              value={formData.Section2ButtonText}
              onChange={(e) => handleInput("Section2ButtonText", e.target.value)}
            />
            {formErrors.Section2ButtonText && <p className="error">{formErrors.Section2ButtonText}</p>}
          </div>
          {renderImageUploader("Media", 1, "Section2MediaUrl", "Upload image/video")}
        </div>
        <div className="form-group">
          <label>Description*</label>
          <textarea
            rows="4"
            value={formData.Section2Description}
            onChange={(e) => handleInput("Section2Description", e.target.value)}
          />
          {formErrors.Section2Description && <p className="error">{formErrors.Section2Description}</p>}
        </div>

        {/* Section 3 */}
        <h2 style={{ marginTop: "30px" }}>Section 3 - Items List</h2>
        <hr />
        <div className="form-group-row">
          <div className="form-group">
            <label>Title*</label>
            <input
              type="text"
              value={formData.Section3Title}
              onChange={(e) => handleInput("Section3Title", e.target.value)}
            />
            {formErrors.Section3Title && <p className="error">{formErrors.Section3Title}</p>}
          </div>
          <div className="form-group">
            <label>Subtitle*</label>
            <input
              type="text"
              value={formData.Section3Subtitle}
              onChange={(e) => handleInput("Section3Subtitle", e.target.value)}
            />
            {formErrors.Section3Subtitle && <p className="error">{formErrors.Section3Subtitle}</p>}
          </div>
          {renderImageUploader("Media", 2, "Section3MediaUrl", "Upload image")}
        </div>
        
        <h3 style={{ marginTop: "20px", marginBottom: "15px" }}>Section 3 Items*</h3>
        {formErrors.section3Items && <p className="error">{formErrors.section3Items}</p>}
        {section3Items.map((item, index) => (
          <div key={index} style={{ marginBottom: "15px" }}>
            <div className="form-group-row" style={{ alignItems: "flex-start" }}>
              <div className="form-group" style={{ flex: 1 }}>
                <label>Item Title {index + 1}*</label>
                <input
                  type="text"
                  value={item.ItemTitle}
                  onChange={(e) => updateSectionItem(3, index, "ItemTitle", e.target.value)}
                />
              </div>
              <div className="form-group" style={{ flex: 2 }}>
                <label>Item Description*</label>
                <input
                  type="text"
                  value={item.ItemDescription}
                  onChange={(e) => updateSectionItem(3, index, "ItemDescription", e.target.value)}
                />
              </div>
              <div className="form-group" style={{ flex: 1 }}>
                <label>Item Icon*</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => updateSectionItem(3, index, "ItemIconUrl", e.target.files?.[0] || null)}
                />
                {item.previewImage && (
                  <div className="file-image-sec" style={{ marginTop: "10px" }}>
                    <img src={item.previewImage} alt={`Icon ${index + 1}`} width={80} />
                  </div>
                )}
              </div>
              {index > 0 && (
                <button
                  type="button"
                  onClick={() => removeSectionItem(3, index)}
                  className="submit-btn"
                  style={{ background: "#dc3545", marginTop: "24px" }}
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        ))}
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "20px" }}>
          <button
            type="button"
            onClick={() => addSectionItem(3)}
            className="submit-btn"
          >
            + Add More Items
          </button>
        </div>

        {/* Section 4 */}
        <h2 style={{ marginTop: "30px" }}>Section 4 - Items List</h2>
        <hr />
        <div className="form-group-row">
          <div className="form-group">
            <label>Title*</label>
            <input
              type="text"
              value={formData.Section4Title}
              onChange={(e) => handleInput("Section4Title", e.target.value)}
            />
            {formErrors.Section4Title && <p className="error">{formErrors.Section4Title}</p>}
          </div>
          <div className="form-group">
            <label>Subtitle*</label>
            <input
              type="text"
              value={formData.Section4Subtitle}
              onChange={(e) => handleInput("Section4Subtitle", e.target.value)}
            />
            {formErrors.Section4Subtitle && <p className="error">{formErrors.Section4Subtitle}</p>}
          </div>
          <div className="form-group">
            <label>Button Text*</label>
            <input
              type="text"
              value={formData.Section4ButtonText}
              onChange={(e) => handleInput("Section4ButtonText", e.target.value)}
            />
            {formErrors.Section4ButtonText && <p className="error">{formErrors.Section4ButtonText}</p>}
          </div>
          {renderImageUploader("Media", 3, "Section4MediaUrl", "Upload image")}
        </div>
        <div className="form-group">
          <label>Description*</label>
          <textarea
            rows="4"
            value={formData.Section4Description}
            onChange={(e) => handleInput("Section4Description", e.target.value)}
          />
          {formErrors.Section4Description && <p className="error">{formErrors.Section4Description}</p>}
        </div>
        
        <h3 style={{ marginTop: "20px", marginBottom: "15px" }}>Section 4 Items*</h3>
        {formErrors.section4Items && <p className="error">{formErrors.section4Items}</p>}
        {section4Items.map((item, index) => (
          <div key={index} style={{ marginBottom: "15px" }}>
            <div className="form-group-row" style={{ alignItems: "flex-start" }}>
              <div className="form-group" style={{ flex: 1 }}>
                <label>Item Title {index + 1}*</label>
                <input
                  type="text"
                  value={item.ItemTitle}
                  onChange={(e) => updateSectionItem(4, index, "ItemTitle", e.target.value)}
                />
              </div>
              <div className="form-group" style={{ flex: 2 }}>
                <label>Item Description*</label>
                <input
                  type="text"
                  value={item.ItemDescription}
                  onChange={(e) => updateSectionItem(4, index, "ItemDescription", e.target.value)}
                />
              </div>
              {index > 0 && (
                <button
                  type="button"
                  onClick={() => removeSectionItem(4, index)}
                  className="submit-btn"
                  style={{ background: "#dc3545", marginTop: "24px" }}
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        ))}
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "20px" }}>
          <button
            type="button"
            onClick={() => addSectionItem(4)}
            className="submit-btn"
          >
            + Add More Items
          </button>
        </div>

        <button className="submit-btn" onClick={handleSubmit} disabled={isLoading}>
          {isLoading && <Loader />} Submit
        </button>
        <Link href="/afford-admin/manage-product" className="back-btn">
          Back
        </Link>
      </div>
    </main>
  );
}