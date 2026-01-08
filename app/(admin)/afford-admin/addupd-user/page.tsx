"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";
import AdminStaticData from "@/components/backendcomponents/AdminStaticData.json";
import { useSignInMutation, useGetUserByIdQuery } from "../../../../store/backendSlice/authAPISlice";

interface Permissions {
  CanRead: number;
  CanWrite: number;
  CanDelete: number;
  CanAdd: number;
}
type Page = {
  PageID: number;
  Header: string;
  PageName: string;
  PageIcon: string;
  PageRoute: string;
};

interface UserFormData {
  FullName: string;
  EmailID: string;
  PhoneNumber: string;
  UserName: string;
  Role: string;
  ProfileImage: string;
  Passwords: string;
  ActiveStatus: boolean;
  permissions: {
    [pageName: string]: Permissions;
  };
}

const defaultPermissions: { [pageName: string]: Permissions } = {};
export default function AddUpdUser() {
  const router = useRouter();
  const [pages, setPages] = useState<Page[]>([]);
  const [loading, setLoading] = useState(true);
  const Menu = AdminStaticData.Menu.items;
  const searchParams = useSearchParams();
  const loginID = searchParams ? searchParams.get("loginID") : null;
  const [register, { isLoading }] = useSignInMutation();
  const { data: userData } = useGetUserByIdQuery(loginID, {
    skip: !loginID,
  });
  const [formData, setFormData] = useState<UserFormData>({
    FullName: "",
    EmailID: "",
    PhoneNumber: "",
    Role: "",
    ProfileImage: "",
    UserName: "",
    Passwords: "",
    ActiveStatus: false,
    permissions: defaultPermissions,
  });
  useEffect(() => {
    if (loginID && userData) {
      if (userData.success) {
        const data = userData.data;
        let perms: { [pageId: string]: Permissions } = {};
        if (data.Permissions) {
          try {
            perms = JSON.parse(data.Permissions) as { [pageId: string]: Permissions };
          } catch {
            perms = {};
          }
        }
        setFormData({
          FullName: data.FullName || "",
          EmailID: data.EmailID || "",
          PhoneNumber: data.PhoneNumber || "",
          Role: data.Role || "",
          ProfileImage: data.ProfileImage || "",
          UserName: data.UserName || "",
          Passwords: data.Passwords || "",
          ActiveStatus: data.ActiveStatus === 1,
          permissions: perms,
        });
      } else {
        toast.error("Failed to fetch user details.");
      }
    }
  }, [loginID, userData]);

  useEffect(() => {
    const mappedPages: Page[] = Menu.flatMap((item) => {
      const basePage: Page = {
        PageID: item.PageID,
        Header: "",
        PageName: item.title,
        PageIcon: item.icon,
        PageRoute: item.url,
      };
      const childPages: Page[] =
        item.MoreItem?.map((sub) => ({
          PageID: sub.PageID,
          Header: item.title,
          PageName: sub.title,
          PageIcon: sub.icon,
          PageRoute: sub.url,
        })) || [];
      return [basePage, ...childPages];
    });
    setPages(mappedPages);
    setLoading(false);
  }, [loginID, Menu]);

  // useEffect(() => {
  //   if (loginID) {
  //     const fetchUser = async () => {
  //       try {
  //         const res = await fetch(`${apiUrl}/auth/fill-user-data?loginID=${loginID}`);
  //         const result = await res.json();
  //         if (result.success) {
  //           const data = result.data;
  //           let perms = defaultPermissions;
  //           if (data.Permissions) {
  //             try {
  //               perms = JSON.parse(data.Permissions);
  //             } catch {
  //               perms = defaultPermissions;
  //             }
  //           }
  //           setFormData({
  //             FullName: data.FullName || "",
  //             EmailID: data.EmailID || "",
  //             PhoneNumber: data.PhoneNumber || "",
  //             Role: data.Role || "",
  //             ProfileImage: data.ProfileImage || "",
  //             UserName: data.UserName || "",
  //             Passwords: data.Passwords || "",
  //             ActiveStatus: data.ActiveStatus === 1,
  //             permissions: perms,
  //           });
  //         } else {
  //           toast.error("Failed to fetch user details.");
  //         }
  //       } catch (error) {
  //         console.error("Error fetching user:", error);
  //         toast.error("Error fetching user");
  //       }
  //     };
  //     fetchUser();
  //   }
  // }, [loginID]);

  const handleInput = (field: keyof UserFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePermissionChange = (page: string, perm: keyof Permissions, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      permissions: {
        ...prev.permissions,
        [page]: {
          ...prev.permissions[page],
          [perm]: checked ? 1 : 0,
        },
      },
    }));
  };

  const handleSubmit = async () => {
    if (!formData.Role.trim()) return toast.error("Please select type.");
    if (!formData.FullName.trim()) return toast.error("Please enter name.");
    if (!formData.EmailID.trim()) return toast.error("Please enter email.");
    const normalizedPermissions: any = {};
    Object.entries(formData.permissions).forEach(([pageId, p]: any) => {
      normalizedPermissions[pageId] = {
        CanRead: p.CanRead ?? 0,
        CanWrite: p.CanWrite ?? 0,
        CanDelete: p.CanDelete ?? 0,
        CanAdd: p.CanAdd ?? 0,
      };
    });
    const generatePassword = () => {
      return Math.floor(100000 + Math.random() * 900000).toString();
    };
    const formDataToSend = new FormData();
    let finalPassword = formData.Passwords;
    if (!loginID && !finalPassword.trim()) {
      finalPassword = generatePassword();
    }
    if (!loginID && !finalPassword.trim()) {
      finalPassword = generatePassword();
    }
    if (finalPassword.length < 6) {
      return toast.error("Password must be at least 6 digits.");
    }
    formDataToSend.append("FullName", formData.FullName);
    formDataToSend.append("EmailID", formData.EmailID);
    formDataToSend.append("PhoneNumber", formData.PhoneNumber);
    formDataToSend.append("Role", formData.Role);
    formDataToSend.append(
      "UserName",
      formData.FullName
        ? `${formData.FullName.trim().replace(/\s+/g, ".")}.afford`
        : ""
    );
    formDataToSend.append("Passwords", finalPassword);
    formDataToSend.append("ActiveStatus", formData.ActiveStatus ? "1" : "0");
    formDataToSend.append("UpdatedBy", "Admin Panel");
    formDataToSend.append("permissions", JSON.stringify(normalizedPermissions));
    if (formData.ProfileImage) {
      formDataToSend.append("ProfileImage", formData.ProfileImage);
    }
    if (loginID) {
      formDataToSend.append("LoginID", loginID);
    }
    try {
      const result = await register(formDataToSend).unwrap();
      if (result.success) {
        toast.success(result.message);
        setFormData({
          FullName: "",
          EmailID: "",
          PhoneNumber: "",
          Role: "",
          ProfileImage: "",
          UserName: "",
          Passwords: "",
          ActiveStatus: true,
          permissions: {},
        });
        router.push("/afford-admin/manage-user");
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
        <h1>{loginID ? "Edit User" : "Add User"}</h1>
        <div className="form-group-row" style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
          <div className="form-group" style={{ flex: 1 }}>
            <label>User Role</label>
            <select
              value={formData.Role}
              onChange={(e) => handleInput("Role", e.target.value)}
              className="form-group"
            >
              <option value="">Select User Type</option>
              <option value="Admin">Admin</option>
              <option value="PropertyOwner">Property Owner</option>
              <option value="Agent">Agent / Broker</option>
              <option value="Builder">Builder / Developer</option>
              <option value="Customer">Customer / Buyer</option>
              <option value="Tenant">Tenant / Renter</option>
            </select>
          </div>
          <div className="form-group" style={{ flex: 1 }}>
            <label>FullName*</label>
            <input type="text" value={formData.FullName} onChange={(e) => handleInput("FullName", e.target.value)} />
          </div>
          <div className="form-group" style={{ flex: 1 }}>
            <label>EmailID*</label>
            <input type="email" value={formData.EmailID} onChange={(e) => handleInput("EmailID", e.target.value)} />
          </div>
          <div className="form-group" style={{ flex: 1 }}>
            <label>Phone Number</label>
            <input type="tel" value={formData.PhoneNumber} onChange={(e) => handleInput("PhoneNumber", e.target.value)} />
          </div>
        </div>
        <div className="form-group-row" style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
          <div className="form-group" style={{ flex: 1 }}>
            <label>Profile Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleInput("ProfileImage", e.target.files?.[0])}
            />
          </div>
          {loginID && (
            <div className="form-group" style={{ flex: 1 }}>
              <label>
                UserName* <span className="hint-text">(auto generate)</span>
              </label>
              <input
                type="text"
                autoComplete="off"
                value={formData.UserName}
                disabled
                onChange={(e) => handleInput("UserName", e.target.value)}
              />
            </div>
          )}
          {loginID && (
            <div className="form-group" style={{ flex: 1 }}>
              <label>{loginID ? "New Password " : "Password*"}</label>
              <input
                type="password"
                autoComplete="new-password"
                minLength={6}
                value={formData.Passwords}
                onChange={(e) => handleInput("Passwords", e.target.value)}
              />
            </div>
          )}
          <div className="form-group-row statusac" style={{ marginBottom: "1rem" }}>
            <input type="checkbox" id="chkActiveStatus" checked={formData.ActiveStatus} onChange={(e) => handleInput("ActiveStatus", e.target.checked)} style={{ marginRight: "0.5rem" }} />
            <label htmlFor="chkActiveStatus">Status (Active/Inactive)</label>
          </div>
        </div>
        <table className="inputTable" style={{ width: "100%", borderCollapse: "collapse", marginBottom: "2rem" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>PageName</th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>CanRead</th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>CanWrite</th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>CanDelete</th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>CanAdd</th>
            </tr>
          </thead>
          <tbody>
            {pages
              .filter((page) => page.PageRoute !== "#")
              .map((page) => {
                const perms = formData.permissions[page.PageID.toString()] || { CanRead: 0, CanWrite: 0, CanDelete: 0, CanAdd: 0 };
                return (
                  <tr key={`${page.PageID}-${Math.random()}`}>
                    <td style={{ border: "1px solid #ccc", padding: "8px" }}>{page.PageName}</td>
                    <td style={{ border: "1px solid #ccc", padding: "8px", textAlign: "center" }}>
                      <input type="checkbox" checked={perms.CanRead === 1} onChange={(e) => handlePermissionChange(page.PageID.toString(), "CanRead", e.target.checked)} />
                    </td>
                    <td style={{ border: "1px solid #ccc", padding: "8px", textAlign: "center" }}>
                      <input type="checkbox" checked={perms.CanWrite === 1} onChange={(e) => handlePermissionChange(page.PageID.toString(), "CanWrite", e.target.checked)} />
                    </td>
                    <td style={{ border: "1px solid #ccc", padding: "8px", textAlign: "center" }}>
                      <input type="checkbox" checked={perms.CanDelete === 1} onChange={(e) => handlePermissionChange(page.PageID.toString(), "CanDelete", e.target.checked)} />
                    </td>
                    <td style={{ border: "1px solid #ccc", padding: "8px", textAlign: "center" }}>
                      <input type="checkbox" checked={perms.CanAdd === 1} onChange={(e) => handlePermissionChange(page.PageID.toString(), "CanAdd", e.target.checked)} />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <button className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
        <Link href="/afford-admin/manage-user" className="back-btn" style={{ marginLeft: "1rem" }}>
          Back
        </Link>
      </div>
    </main>
  );
}
