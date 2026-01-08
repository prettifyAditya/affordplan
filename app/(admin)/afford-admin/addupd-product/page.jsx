'use client';
export const dynamic = 'force-dynamic';

import { useEffect, useState, useRef } from "react";
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
import { useGetCategorysQuery } from "@/store/backendSlice/categoryAPISlice";
import Loader from "@/app/loading";

export default function AddUpdProduct() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const ProductId = searchParams.get("ID");

  const { data: checkData, isSuccess } = useCheckLoginQuery(undefined, { refetchOnMountOrArgChange: true, pollingInterval: 10000 });
  const { data: productData } = useGetProductByIdQuery(ProductId, { skip: !ProductId, refetchOnMountOrArgChange: true });
  const { data: section3Data } = useGetSectionItemsQuery({ ProductId, SectionNumber: 3 }, { skip: !ProductId });
  const { data: section4Data } = useGetSectionItemsQuery({ ProductId, SectionNumber: 4 }, { skip: !ProductId });
  const { data: categoryData = [] } = useGetCategorysQuery();

  const [saveOrUpdateProduct, { isLoading }] = useSaveOrUpdateProductMutation();
  const [saveOrUpdateSectionItem] = useSaveOrUpdateSectionItemMutation();
  const [deleteSectionItem] = useDeleteSectionItemMutation();

  const [previewImages, setPreviewImages] = useState(["", "", "", ""]);
  const [formErrors, setFormErrors] = useState({});
  const [openCategory, setOpenCategory] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const dropdownRef = useRef(null);

  const [formData, setFormData] = useState({
    ProductName: "",
    ProductNameURL: "",
    ProductSmallDescription: "",
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
        ProductSmallDescription: data.ProductSmallDescription || "",
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

      if (Array.isArray(data?.ProductCategories)) {
        setSelectedCategories(data.ProductCategories);
      }
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenCategory(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInput = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setFormErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const generateSlug = (text) =>
    text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-");

  const handleFileRename = (file, nameSuffix) => {
    if (!file || !file.name) return null;
    const ext = file.name.split('.').pop();
    const firstWord = file.name.split(/[\s._-]/)[0];
    const randomNum = Math.floor(10 + Math.random() * 90);
    const newFileName = `${firstWord}${nameSuffix}_${randomNum}.${ext}`;
    return new File([file], newFileName, { type: file.type });
  };

  const handleRemoveCategory = (categoryId) => {
    setSelectedCategories(selectedCategories.filter((id) => id !== categoryId));
  };

  const addSectionItem = (section) => {
    const items = section === 3 ? section3Items : section4Items;
    const lastItem = items[items.length - 1];
    if (section === 3) {
      if (!lastItem.ItemTitle?.trim() || (!lastItem.ItemIconUrl && !lastItem.previewImage)) {
        toast.error("Please fill Title and Icon in the previous item before adding more.");
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
    if (!formData.ProductSmallDescription?.trim()) errors.ProductSmallDescription = "Product small description is required";
    if (selectedCategories.length === 0) errors.ProductCategory = "Please select at least one category";
    if (!formData.Section1Title?.trim()) errors.Section1Title = "Section 1 title is required";
    if (!formData.Section1Subtitle?.trim()) errors.Section1Subtitle = "Section 1 subtitle is required";
    if (!formData.Section1Description?.trim()) errors.Section1Description = "Section 1 description is required";
    if (!ProductId && !formData.Section1MediaUrl) errors.Section1MediaUrl = "Section 1 media is required";
    if (ProductId && !formData.Section1MediaUrl && !previewImages[0]) errors.Section1MediaUrl = "Section 1 media is required";
    if (!formData.Section1ButtonText?.trim()) errors.Section1ButtonText = "Section 1 button text is required";
    if (!formData.Section2Title?.trim()) errors.Section2Title = "Section 2 title is required";
    if (!formData.Section2Subtitle?.trim()) errors.Section2Subtitle = "Section 2 subtitle is required";
    if (!formData.Section2Description?.trim()) errors.Section2Description = "Section 2 description is required";
    if (!ProductId && !formData.Section2MediaUrl) errors.Section2MediaUrl = "Section 2 media is required";
    if (ProductId && !formData.Section2MediaUrl && !previewImages[1]) errors.Section2MediaUrl = "Section 2 media is required";
    if (!formData.Section2ButtonText?.trim()) errors.Section2ButtonText = "Section 2 button text is required";
    if (!formData.Section3Title?.trim()) errors.Section3Title = "Section 3 title is required";
    if (!formData.Section3Subtitle?.trim()) errors.Section3Subtitle = "Section 3 subtitle is required";
    if (!ProductId && !formData.Section3MediaUrl) errors.Section3MediaUrl = "Section 3 media is required";
    if (ProductId && !formData.Section3MediaUrl && !previewImages[2]) errors.Section3MediaUrl = "Section 3 media is required";
    if (!formData.Section4Title?.trim()) errors.Section4Title = "Section 4 title is required";
    if (!formData.Section4Subtitle?.trim()) errors.Section4Subtitle = "Section 4 subtitle is required";
    if (!formData.Section4Description?.trim()) errors.Section4Description = "Section 4 description is required";
    if (!ProductId && !formData.Section4MediaUrl) errors.Section4MediaUrl = "Section 4 media is required";
    if (ProductId && !formData.Section4MediaUrl && !previewImages[3]) errors.Section4MediaUrl = "Section 4 media is required";
    if (!formData.Section4ButtonText?.trim()) errors.Section4ButtonText = "Section 4 button text is required";
    const validSection3Items = section3Items.filter(item =>
      item.ItemTitle?.trim() || item.ItemIconUrl || item.previewImage
    );
    if (validSection3Items.length === 0) {
      errors.section3Items = "At least one section 3 item is required";
    } else {
      for (let i = 0; i < validSection3Items.length; i++) {
        const item = validSection3Items[i];
        if (!item.ItemTitle?.trim()) {
          errors.section3Items = "All section 3 items must have Title filled";
          break;
        }
        if (!item.ItemId && !item.ItemIconUrl) {
          errors.section3Items = "All new section 3 items must have an Icon";
          break;
        }
      }
    }
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


  const handleItemIconRename = (file, suffix) => {
    const ext = file.name.split(".").pop();
    const firstWord = file.name.split(/[\s._-]/)[0];
    const randomNum = Math.floor(10 + Math.random() * 90);
    return new File([file], `${firstWord}${suffix}_${randomNum}.${ext}`, { type: file.type });
  };


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
    data.append("ProductCategory", JSON.stringify(selectedCategories));
    if (ProductId) data.append("ProductId", ProductId);
    try {
      const res = await saveOrUpdateProduct(data).unwrap();
      if (res.success) {
        const finalProductId = res.ProductId || ProductId;
        let section3Success = true;
        for (const item of section3Items) {
          if (item.ItemTitle?.trim()) {
            const itemData = new FormData();
            if (item.ItemId) itemData.append("ItemId", item.ItemId);
            itemData.append("ProductId", finalProductId);
            itemData.append("ItemTitle", item.ItemTitle);
            itemData.append("ItemDescription", item.ItemDescription || "");
            itemData.append("SectionNumber", "3");
            itemData.append("DisplayOrder", item.DisplayOrder.toString());
            itemData.append("ActiveStatus", item.ActiveStatus ? "1" : "0");
            if (item.ItemIconUrl instanceof File) {
              itemData.append("ItemIconUrl", handleItemIconRename(item.ItemIconUrl, "-section3"));
            }
            try {
              await saveOrUpdateSectionItem(itemData).unwrap();
            } catch (error) {
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
      toast.error("Something went wrong");
    }
  };

  
  const getFileType = (file) => {
    if (file instanceof File) {
      return file.type.startsWith('video/') ? 'video' : 'image';
    }
    if (typeof file === 'string') {
      const ext = file.split('.').pop().toLowerCase();
      return ['mp4', 'webm', 'ogg', 'mov'].includes(ext) ? 'video' : 'image';
    }
    return 'image';
  };

  const renderMediaAndDescription = (sectionNum, mediaField, descField, mediaLabel, descLabel) => {
    const index = sectionNum - 1;
    return (
      <div className="form-group-row" style={{ alignItems: "flex-start" }}>
        <div className="colB" style={{ flex: 1 }}>
          <div className="form-group">
            <label>{descLabel}*</label>
            <input
              type="text"
              value={formData[descField]}
              onChange={(e) => handleInput(descField, e.target.value)}
            />
            {formErrors[descField] && <p className="error">{formErrors[descField]}</p>}
          </div>
        </div>
        <div className="colA" style={{ flex: 1 }}>
          <div className="form-group">
            <label>{mediaLabel}*</label>
            <input
              type="file"
              accept="image/*,video/*"
              onChange={(e) => {
                const file = e.target.files?.[0] || null;
                handleInput(mediaField, file);
                if (file) {
                  const newPreviews = [...previewImages];
                  newPreviews[index] = URL.createObjectURL(file);
                  setPreviewImages(newPreviews);
                }
              }}
            />
            <span className="hint-text">Upload image/video</span>
            {formErrors[mediaField] && <p className="error">{formErrors[mediaField]}</p>}
          </div>
        </div>
        {previewImages[index] && (
          <div style={{ marginTop: "10px" }}>
            {getFileType(previewImages[index]) === 'video' ? (
              <video src={previewImages[index]} width={100} controls />
            ) : (
              <img src={previewImages[index]} alt={`Preview ${mediaLabel}`} width={80} />
            )}
          </div>
        )}

      </div>
    );
  };





  return (
    <main className="add_update container">
      <div className="form-box">
        <h1>Add/Update Product</h1>
        <br />
        <h2>Basic Information</h2>
        <hr />
        <div className="form-group-row">
          <div className="selectCat form-group mb-0">
            <label>Category*</label>
            <div
              className="input_wrap placeholder"
              onClick={() => setOpenCategory((prev) => !prev)}
            >
              <input
                type="text"
                placeholder="Select Categories"
                value={
                  selectedCategories.length > 0
                    ? selectedCategories
                      .map((id) =>
                        categoryData.find((c) => c.CategoryID === id)?.CategoryName
                      )
                      .filter(Boolean)
                      .join(", ")
                    : ""
                }
                readOnly
              />
            </div>
            <div
              className={`dropdown__wrap ${openCategory ? "active" : ""}`}
              ref={dropdownRef}
            >
              <div className="dropdown_menu">
                {(categoryData || []).map((cat) => (
                  <div className="options" key={cat.CategoryID}>
                    <input
                      id={`cat-${cat.CategoryID}`}
                      type="checkbox"
                      name="category"
                      checked={selectedCategories.includes(cat.CategoryID)}
                      onChange={(e) => {
                        const newSelected = e.target.checked
                          ? [...selectedCategories, cat.CategoryID]
                          : selectedCategories.filter((id) => id !== cat.CategoryID);
                        setSelectedCategories(newSelected);
                      }}
                    />
                    <div className="in-bx"></div>
                    <span>{cat.CategoryName}</span>
                  </div>
                ))}
              </div>
            </div>
            {formErrors.ProductCategory && <p className="error">{formErrors.ProductCategory}</p>}
          </div>
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
            <label>Product Small Description*</label>
            <input
              type="text"
              placeholder="Enter small description"
              value={formData.ProductSmallDescription}
              onChange={(e) => handleInput("ProductSmallDescription", e.target.value)}
            />
            {formErrors.ProductSmallDescription && <p className="error">{formErrors.ProductSmallDescription}</p>}
          </div>

        </div>
        <div className="form-group-row selected_group mb-0">
          <div className="selectCategoryWrap">
            {selectedCategories.length > 0 && (
              <div className="selectCategoryWrap">
                {selectedCategories.map((id) => {
                  const selected = categoryData.find((cat) => cat.CategoryID === id);
                  return (
                    selected && (
                      <div key={id} className="selected-item">
                        <span>{selected.CategoryName}</span>
                        <button
                          type="button"
                          onClick={() => handleRemoveCategory(id)}
                          className="remove-btn"
                        >
                          X
                        </button>
                      </div>
                    )
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div className="form-group-row" style={{ marginTop: "12px" }}>
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
        <div style={{ background: "#ebebeb", padding: "1px 21px", borderRadius: "17px", marginTop: "19px" }}>
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
          </div>
          {renderMediaAndDescription(1, "Section1MediaUrl", "Section1Description", "Media", "Description")}
        </div>
        <div style={{ background: "#ebebeb", padding: "1px 21px", borderRadius: "17px", marginTop: "19px" }}>
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
          </div>
          {renderMediaAndDescription(2, "Section2MediaUrl", "Section2Description", "Media", "Description")}
        </div>
        <div style={{ background: "#ebebeb", padding: "1px 21px", borderRadius: "17px", marginTop: "19px" }}>
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
            <div className="colA" style={{ flex: 1 }}>
              <div className="form-group">
                <label>Media*</label>
                <input
                  type="file"
                  accept="image/*,video/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0] || null;
                    handleInput("Section3MediaUrl", file);
                    if (file) {
                      const newPreviews = [...previewImages];
                      newPreviews[2] = URL.createObjectURL(file);
                      setPreviewImages(newPreviews);
                    }
                  }}
                />
                <span className="hint-text">Upload image/video</span>
                {formErrors.Section3MediaUrl && <p className="error">{formErrors.Section3MediaUrl}</p>}
              </div>
            </div>
            {previewImages[2] && (
              <div style={{ marginTop: "10px" }}>
                {getFileType(previewImages[2]) === 'video' ? (
                  <video src={previewImages[2]} width={100} controls />
                ) : (
                  <img src={previewImages[2]} alt="Preview Section 3 Media" width={100} />
                )}
              </div>
            )}
          </div>
          <h2 style={{ marginTop: "20px", marginBottom: "15px" }}>Section 3 Sub Items*</h2>
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
                <div className="form-group" style={{ flex: 1 }}>
                  <label>Item Icon*</label>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => updateSectionItem(3, index, "ItemIconUrl", e.target.files?.[0] || null)}
                      style={{ flex: 1 }}
                    />
                  </div>
                </div>
                {item.previewImage && (
                  <img src={item.previewImage} alt={`Icon ${index + 1}`} width={60} height={60} style={{ objectFit: "cover", borderRadius: "4px" }} />
                )}
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
        </div>
        <div style={{ background: "#ebebeb", padding: "1px 21px", borderRadius: "17px", marginTop: "19px" }}>
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
          </div>
          {renderMediaAndDescription(4, "Section4MediaUrl", "Section4Description", "Media", "Description")}
          <h2 style={{ marginTop: "20px", marginBottom: "15px" }}>Section 4 Sub Items*</h2>
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