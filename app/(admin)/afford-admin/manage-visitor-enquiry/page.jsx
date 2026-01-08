'use client';
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import DataTable from "react-data-table-component";
import toast from "react-hot-toast";
import { useCheckLoginQuery } from "@/store/backendSlice/authAPISlice";
import { useGetAllLeadsQuery, useDeleteEnquiryMutation, } from "@/store/backendSlice/contactUsAPISlice";
import ServiceSkeleton from "@/components/backendcomponents/listskeleton";
const PAGE_STORAGE_KEY = 'current_page_name';
const PAGINATION_PREFIX = 'pagination_';

const getStorageKey = (pathname) => {
  const [path] = pathname.split('?');
  const match = path.match(/\/afford-admin\/(manage-[^\/]+|addupd-[^\/]+)/);
  if (match) {
    const pageIdentifier = match[1];
    const normalizedKey = pageIdentifier.replace('addupd-', 'manage-');
    return `${PAGINATION_PREFIX}${normalizedKey}`;
  }
  return null;
};


export default function ManageVisitorEnquiry() {
  const router = useRouter();
  const { data: checkData, isSuccess } = useCheckLoginQuery(undefined, { refetchOnMountOrArgChange: true, pollingInterval: 10000, });
  const [filterText, setFilterText] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);


  const { data: leadData = [], isLoading, refetch } = useGetAllLeadsQuery();
  const [deleteEnquiry] = useDeleteEnquiryMutation();

  const openMessagePopup = (user) => {
    setSelectedUser(user);
    setIsPopupOpen(true);
  };


  const [rowsPerPage, setRowsPerPage] = useState(() => {
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname;
      const storageKey = getStorageKey(currentPath);
      if (storageKey) {
        const stored = localStorage.getItem(storageKey);
        return stored ? parseInt(stored, 10) : 10;
      }
    }
    return 10;
  });
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname;
      const currentStorageKey = getStorageKey(currentPath);
      if (currentStorageKey) {
        Object.keys(localStorage).forEach(key => {
          if (key.startsWith(PAGINATION_PREFIX)) {
            localStorage.removeItem(key);
          }
        });
        localStorage.setItem(PAGE_STORAGE_KEY, currentStorageKey);
      }
    }
    return () => {
      if (typeof window !== 'undefined') {
        const currentPath = window.location.pathname;
        const storageKey = getStorageKey(currentPath);
        if (!storageKey) {
          Object.keys(localStorage).forEach(key => {
            if (key.startsWith(PAGINATION_PREFIX) || key === PAGE_STORAGE_KEY) {
              localStorage.removeItem(key);
            }
          });
        }
      }
    };
  }, []);

  const handlePerRowsChange = (newPerPage) => {
    setRowsPerPage(newPerPage);
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname;
      const storageKey = getStorageKey(currentPath);
      if (storageKey) {
        localStorage.setItem(storageKey, newPerPage.toString());
      }
    }
  };

  useEffect(() => {
    if (isSuccess && !checkData?.loggedIn) {
      router.push("/afford-admin/login");
    }
  }, [isSuccess, checkData, router]);


  const columns = [
    {
      name: "S.No.",
      sortable: true,
      cell: (row) => (
        <div className="user-image-none">{row.SerialNo}</div>
      ),
      width: "80px",
    },
    {
      name: "Name",
      selector: (row) => row.FullName,
      sortable: true,
      width: "25%"
    },
    {
      name: "Phone",
      selector: (row) => row.PhoneNo,
      sortable: true,
      width: "150px"
    },
    {
      name: "Email",
      selector: (row) => row.EmailID,
      sortable: true,
      width: "250px"
    },
    {
      name: "Enquiry Type",
      selector: (row) => row.EnquiryType,
      sortable: true,
      width: "150px",
    },
    {
      name: "Enquiry For",
      selector: (row) => row.EnquiryFor,
      sortable: true,
      width: "250px",
    },
    {
      name: "Message",
      cell: (row) => (
        <button onClick={() => openMessagePopup(row)} className="message-btn">
          Show
        </button>
      ),
      width: "150px",
    },
    {
      name: "Date",
      selector: (row) => row.PostedDate,
      sortable: true,
      width: "150px",
    },
    {
      name: "Delete",
      cell: (row) => (
        <button onClick={() => handleDelete(row.ContactID)} className="edit-icon">
          🗑️
        </button>
      ),
      width: "100px",
    },
  ];

  const filteredData = (leadData || []).filter((item) => {
    const searchText = filterText.toLowerCase();
    const fullName = item.FullName?.toLowerCase() || "";
    const matchesText =
      fullName.includes(searchText) ||
      item.EmailID?.toLowerCase().includes(searchText) ||
      item.PhoneNo?.toLowerCase().includes(searchText);
    const matchesOption = !selectedOption || item.EnquiryType === selectedOption;
    return matchesText && matchesOption;
  });



  const subHeaderComponent = (
    <div className="subheader-container">
      <div className="colA">
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="dropdown"
        >
          <option value="">Select Type</option>
          {Array.from(new Set((leadData || []).map(item => item.EnquiryType || "")))
            .filter((type) => type)
            .sort()
            .map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
        </select>
        <input
          type="text"
          placeholder="Search Keywords"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          className="searchinput"
        />
      </div>
    </div>
  );


  const handleDelete = async (ContactID) => {
    const confirmed = confirm("Are you sure you want to delete this enquiry?");
    if (!confirmed) return;
    try {
      const res = await deleteEnquiry(ContactID).unwrap();
      if (res.success) {
        toast.success("Visitor Enquiry deleted successfully");
        refetch();
      } else {
        toast.error("Error deleting Enquiry.");
      }
    } catch (error) {
      //console.error(error);
      toast.error("An unexpected error occurred.");
    }
  };


  const SkeletonLoader = () => (
    <div>
      {[...Array(10)].map((_, i) => (
        <ServiceSkeleton key={i} />
      ))}
    </div>
  );


  return (
    <>
      <main>
        <DataTable
          title="Manage Visitor Enquiry"
          columns={columns}
          data={filteredData}
          striped
          pagination
          highlightOnHover
          selectableRowsHighlight
          subHeader
          paginationRowsPerPageOptions={[10, 30, 50, 100]}
          paginationPerPage={rowsPerPage}
          onChangeRowsPerPage={handlePerRowsChange}
          subHeaderComponent={subHeaderComponent}
          subHeaderWrap
          responsive
          progressPending={isLoading}
          progressComponent={< SkeletonLoader />}
        />
      </main>
      {isPopupOpen && selectedUser && (
        <div className="popup-overlay">
          <div className="popup-box">
            <button className="close-btn" onClick={() => setIsPopupOpen(false)}>×</button>
            <h2>{selectedUser.EnquiryType}, Posted on {selectedUser.PostedDate}</h2>
            <div style={{ marginBottom: "10px" }}>
              <p><strong>Name:</strong> {selectedUser.FullName}</p>
              <p><strong>Email:</strong> {selectedUser.EmailID}</p>
              <p><strong>Phone No:</strong> {selectedUser.PhoneNo}</p>
              <p><strong>Enquiry Type:</strong> {selectedUser.EnquiryType}</p>
              <p><strong>Enquiry For:</strong> {selectedUser.EnquiryFor}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
