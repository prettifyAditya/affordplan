"use client";
export const dynamic = "force-dynamic";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import { useDispatch } from "react-redux";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useMemo, useState } from "react";
import { useGetDashboardDataQuery } from "@/store/backendSlice/admindashboardAPISlice";
import { useLogoutMutation, authAPISlice } from "@/store/backendSlice/authAPISlice";

export default function Dashboard() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { data, isLoading } = useGetDashboardDataQuery(undefined);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [logout] = useLogoutMutation();

  const dashboardData = useMemo(() => {
    if (!data?.data) {
      return {
        contacts: { list: [], monthly: [], total: 0, unread: 0, read: 0 },
        categories: { list: [], total: 0, active: 0, displayOnHome: 0, displayOnHeader: 0 },
        testimonials: { list: [], total: 0, active: 0 },
        team: { list: [], total: 0, active: 0 },
        jobCategories: { list: [], total: 0, active: 0 }
      };
    }
    return data.data;
  }, [data]);

  const openMessagePopup = (user) => {
    setSelectedUser(user);
    setIsPopupOpen(true);
  };

  const closeMessagePopup = () => {
    setSelectedUser(null);
    setIsPopupOpen(false);
  };

  const handleLogout = async () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (!confirmLogout) return;
    try {
      const result = await logout(undefined).unwrap();
      if (result.success) {
        dispatch(
          authAPISlice.util.updateQueryData("checkLogin", undefined, (draft) => {
            draft.loggedIn = false;
            draft.user = null;
          })
        );
        router.push("/afford-admin/login");
      } else {
        alert("Logout failed");
      }
    } catch (error) {
      console.error("Logout error:", error);
      alert("Something went wrong while logging out.");
    }
  };

  if (isLoading) {
    return (
      <main>
        <div className="main-wrap">
          <div className="title">
            <h4>Loading Dashboard...</h4>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div className="main-wrap">
        <div className="title">
          <h4>Dashboard</h4>
        </div>
        <div className="dashboard_wrapper">
          {/* First Row - Main Stats */}
          <div className="dashboard-secA flex card mt-15 mb-15">
            <Link className="col" href="/afford-admin/manage-visitor-enquiry">
              <div className="inf">
                <h5 className="count count-tab3">{dashboardData.contacts.total}</h5>
                <p className="gray">Total Enquiries</p>
              </div>
              <div className="ico">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em"
                  preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                  <path fill="currentColor" fillRule="evenodd"
                    d="M12.05 1.25h-.1c-.664 0-1.237 0-1.696.062c-.491.066-.963.215-1.345.597s-.531.854-.597 1.345c-.062.459-.062 1.032-.062 1.697v2.427a2.3 2.3 0 0 0-.75-.128h-3A2.25 2.25 0 0 0 2.25 9.5v11.75H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-.25V14.5a2.25 2.25 0 0 0-2.25-2.25h-3q-.396.002-.75.128V4.951c0-.665 0-1.238-.062-1.697c-.066-.491-.215-.963-.597-1.345s-.853-.531-1.345-.597c-.459-.062-1.032-.062-1.697-.062m8.2 20V14.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v6.75zm-6 0V5c0-.728-.002-1.2-.048-1.546c-.044-.325-.115-.427-.172-.484s-.159-.128-.484-.172c-.347-.046-.818-.048-1.546-.048s-1.2.002-1.546.048c-.325.044-.427.115-.484.172s-.128.159-.172.484c-.046.347-.048.818-.048 1.546v16.25zm-6 0V9.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v11.75z"
                    clipRule="evenodd"></path>
                </svg>
              </div>
            </Link>


            <Link className="col" href="/afford-admin/manage-category">
              <div className="inf">
                <h5 className="count count-tab3">{dashboardData.categories.total}</h5>
                <p className="gray">Total Categories</p>
              </div>
              <div className="ico">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em"
                  preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                  <path fill="currentColor" fillRule="evenodd"
                    d="M12.05 1.25h-.1c-.664 0-1.237 0-1.696.062c-.491.066-.963.215-1.345.597s-.531.854-.597 1.345c-.062.459-.062 1.032-.062 1.697v2.427a2.3 2.3 0 0 0-.75-.128h-3A2.25 2.25 0 0 0 2.25 9.5v11.75H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-.25V14.5a2.25 2.25 0 0 0-2.25-2.25h-3q-.396.002-.75.128V4.951c0-.665 0-1.238-.062-1.697c-.066-.491-.215-.963-.597-1.345s-.853-.531-1.345-.597c-.459-.062-1.032-.062-1.697-.062m8.2 20V14.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v6.75zm-6 0V5c0-.728-.002-1.2-.048-1.546c-.044-.325-.115-.427-.172-.484s-.159-.128-.484-.172c-.347-.046-.818-.048-1.546-.048s-1.2.002-1.546.048c-.325.044-.427.115-.484.172s-.128.159-.172.484c-.046.347-.048.818-.048 1.546v16.25zm-6 0V9.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v11.75z"
                    clipRule="evenodd"></path>
                </svg>
              </div>
            </Link>


            <Link className="col" href="/afford-admin/manage-testimonial">
              <div className="inf">
                <h5 className="count count-tab3">{dashboardData.testimonials.total}</h5>
                <p className="gray">Testimonials</p>
              </div>
              <div className="ico">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em"
                  preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                  <path fill="currentColor" fillRule="evenodd"
                    d="M12.05 1.25h-.1c-.664 0-1.237 0-1.696.062c-.491.066-.963.215-1.345.597s-.531.854-.597 1.345c-.062.459-.062 1.032-.062 1.697v2.427a2.3 2.3 0 0 0-.75-.128h-3A2.25 2.25 0 0 0 2.25 9.5v11.75H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-.25V14.5a2.25 2.25 0 0 0-2.25-2.25h-3q-.396.002-.75.128V4.951c0-.665 0-1.238-.062-1.697c-.066-.491-.215-.963-.597-1.345s-.853-.531-1.345-.597c-.459-.062-1.032-.062-1.697-.062m8.2 20V14.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v6.75zm-6 0V5c0-.728-.002-1.2-.048-1.546c-.044-.325-.115-.427-.172-.484s-.159-.128-.484-.172c-.347-.046-.818-.048-1.546-.048s-1.2.002-1.546.048c-.325.044-.427.115-.484.172s-.128.159-.172.484c-.046.347-.048.818-.048 1.546v16.25zm-6 0V9.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v11.75z"
                    clipRule="evenodd"></path>
                </svg>
              </div>
            </Link>
          </div>

          {/* Chart and Recent Enquiries Section */}
          <div className="order_wrapper evqniy mt-15 mb-20">
            <div className="flex">
              {dashboardData.contacts.monthly && dashboardData.contacts.monthly.length > 0 && (
                <div className="chart-wrapper mt-20 mb-20 card" style={{ width: "60%" }}>
                  <div className="title" style={{ padding: "22px 0px", textAlign: "center" }}>
                    <h4 className="f-bold black">Monthly Enquiries (Last 12 Months)</h4>
                  </div>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                      data={Array.from({ length: 12 }, (_, i) => {
                        const found = dashboardData.contacts.monthly?.find(d => d.month === i + 1);
                        return {
                          month: i + 1,
                          totalContacts: found ? found.totalContacts : 0,
                        };
                      })}
                      barCategoryGap="30%"
                      barGap={4}
                    >
                      <XAxis
                        dataKey="month"
                        ticks={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
                        tickFormatter={(month) =>
                          new Date(0, month - 1).toLocaleString("en-US", { month: "short" })
                        }
                      />
                      <YAxis />
                      <Tooltip
                        formatter={(value) => [value, "Total Enquiries"]}
                        labelFormatter={(label) =>
                          `Month: ${new Date(0, label - 1).toLocaleString("en-US", { month: "long" })}`
                        }
                      />
                      <Legend />
                      <Bar dataKey="totalContacts" fill="#4CAF50" radius={[10, 10, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              )}
              <div className="colB card">
                <div className="card-body">
                  <div className="title">
                    <p className="f-bold black">Recent Enquiries</p>
                  </div>
                  {dashboardData.contacts.list.length > 0 ? (
                    <div className="enquiry_list">
                      {dashboardData.contacts.list.slice(0, 5).map((contact, index) => (
                        <div className="enquiry" key={index}>
                          <div className="user-ico">
                            <span>
                              {contact.FullName
                                ? contact.FullName.split(" ")
                                  .map((w) => w[0])
                                  .join("")
                                  .toUpperCase()
                                  .substring(0, 2)
                                : "NA"}
                            </span>
                          </div>
                          <div className="info">
                            <h6>{contact.FullName || "No Name"}</h6>
                            <Link href={`mailto:${contact.EmailID || ""}`}>
                              {contact.EmailID || "No Email"}
                            </Link>
                            <Link href={`tel:${contact.PhoneNo || ""}`}>
                              {contact.PhoneNo || "No Phone"}
                            </Link>
                          </div>
                          <button
                            type="button"
                            className="message-btn"
                            onClick={() => openMessagePopup(contact)}
                          >
                            View
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="gray" style={{ textAlign: "center", padding: "20px" }}>
                      No recent enquiries
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Second Row - Team and Job Categories */}
          <div className="dashboard-secA flex card mt-15 mb-15">
            <Link className="col" href="/afford-admin/manage-team-member">
              <div className="inf">
                <h5 className="count count-tab3">{dashboardData.team.total}</h5>
                <p className="gray">Total Team Members</p>
              </div>
              <div className="ico">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em"
                  preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                  <path fill="currentColor" fillRule="evenodd"
                    d="M12.05 1.25h-.1c-.664 0-1.237 0-1.696.062c-.491.066-.963.215-1.345.597s-.531.854-.597 1.345c-.062.459-.062 1.032-.062 1.697v2.427a2.3 2.3 0 0 0-.75-.128h-3A2.25 2.25 0 0 0 2.25 9.5v11.75H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-.25V14.5a2.25 2.25 0 0 0-2.25-2.25h-3q-.396.002-.75.128V4.951c0-.665 0-1.238-.062-1.697c-.066-.491-.215-.963-.597-1.345s-.853-.531-1.345-.597c-.459-.062-1.032-.062-1.697-.062m8.2 20V14.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v6.75zm-6 0V5c0-.728-.002-1.2-.048-1.546c-.044-.325-.115-.427-.172-.484s-.159-.128-.484-.172c-.347-.046-.818-.048-1.546-.048s-1.2.002-1.546.048c-.325.044-.427.115-.484.172s-.128.159-.172.484c-.046.347-.048.818-.048 1.546v16.25zm-6 0V9.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v11.75z"
                    clipRule="evenodd"></path>
                </svg>
              </div>
            </Link>



            <Link className="col" href="/afford-admin/manage-job-category">
              <div className="inf">
                <h5 className="count count-tab3">{dashboardData.jobCategories.total}</h5>
                <p className="gray">Job Categories</p>
              </div>
              <div className="ico">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em"
                  preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                  <path fill="currentColor" fillRule="evenodd"
                    d="M12.05 1.25h-.1c-.664 0-1.237 0-1.696.062c-.491.066-.963.215-1.345.597s-.531.854-.597 1.345c-.062.459-.062 1.032-.062 1.697v2.427a2.3 2.3 0 0 0-.75-.128h-3A2.25 2.25 0 0 0 2.25 9.5v11.75H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-.25V14.5a2.25 2.25 0 0 0-2.25-2.25h-3q-.396.002-.75.128V4.951c0-.665 0-1.238-.062-1.697c-.066-.491-.215-.963-.597-1.345s-.853-.531-1.345-.597c-.459-.062-1.032-.062-1.697-.062m8.2 20V14.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v6.75zm-6 0V5c0-.728-.002-1.2-.048-1.546c-.044-.325-.115-.427-.172-.484s-.159-.128-.484-.172c-.347-.046-.818-.048-1.546-.048s-1.2.002-1.546.048c-.325.044-.427.115-.484.172s-.128.159-.172.484c-.046.347-.048.818-.048 1.546v16.25zm-6 0V9.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v11.75z"
                    clipRule="evenodd"></path>
                </svg>
              </div>
            </Link>

            <div className="col" style={{ cursor: "pointer" }} onClick={handleLogout}>
              <div className="inf">
                <h5 className="count count-tab3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--hugeicons"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                    style={{ color: "red" }}
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M7.023 5.5a9 9 0 1 0 9.953 0M12 2v8"
                    />
                  </svg>
                </h5>
                <p className="gray">Log Out</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup for Enquiry Details */}
      {isPopupOpen && selectedUser && (
        <div className="popup-overlay">
          <div className="popup-box">
            <button className="close-btn" onClick={closeMessagePopup}>
              ×
            </button>
            <h2>
              {selectedUser.EnquiryType || "Contact"} Enquiry, Posted on {selectedUser.PostedDate}
            </h2>
            <div style={{ marginBottom: "10px" }}>
              <p>
                <strong>Name:</strong> {selectedUser.FullName}
              </p>
              <p>
                <strong>Email:</strong> {selectedUser.EmailID}
              </p>
              <p>
                <strong>Phone No:</strong> {selectedUser.PhoneNo}
              </p>
              {selectedUser.CompanyName && (
                <p>
                  <strong>Company:</strong> {selectedUser.CompanyName}
                </p>
              )}
              {selectedUser.EnquiryFor && (
                <p>
                  <strong>Enquiry For:</strong> {selectedUser.EnquiryFor}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}