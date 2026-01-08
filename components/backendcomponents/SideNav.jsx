'use client';
import AdminStaticData from './AdminStaticData.json';
import { useEffect, useState } from "react";
import parse from "html-react-parser";
import { usePathname, useRouter } from 'next/navigation';
import Link from "next/link";
import axios from "axios";
import { useLogoutMutation, authAPISlice } from "../../store/backendSlice/authAPISlice";
import { useDispatch } from "react-redux";
import { useCheckLoginQuery } from "../../store/backendSlice/authAPISlice";
const username = process.env.NEXT_PUBLIC_BASIC_AUTH_USER;
const password = process.env.NEXT_PUBLIC_BASIC_AUTH_PASS;
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const authHeader = "Basic " + btoa(`${username}:${password}`); // browser-safe base64

export default function SideNav() {
  const [logout] = useLogoutMutation();
  const [openIndex, setOpenIndex] = useState(null);
  const dispatch = useDispatch();
  const Menu = AdminStaticData.Menu.items;
  const pathname = usePathname();
  const [allowedMenu, setAllowedMenu] = useState([]);
  const router = useRouter();
  const { data: checkData, isSuccess, refetch } = useCheckLoginQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 10000,
  });

  useEffect(() => {
    let hideBtn = document.querySelector('.hide_menu');
    let sideMenu = document.getElementsByTagName('aside');
    const menuToggle = () => {
      hideBtn?.classList.toggle('collapse');
      Array.from(sideMenu).forEach(item => item.classList.toggle('collapse'));
    };

    hideBtn?.addEventListener('click', menuToggle);

    return () => {
      hideBtn?.removeEventListener('click', menuToggle);
    };
  }, []);

  useEffect(() => {
    const storedPermissions = checkData?.user?.permissions || [];
    const storedUser = checkData?.user || [];
    let filtered = [];
    if (storedUser?.loginID === 1) {
      filtered = Menu;
    } else {
      Menu.forEach((item) => {
        const perm = storedPermissions.find((p) => p.PageID === item.PageID);
        const allowedSubItems = item.MoreItem
          ? item.MoreItem.filter((sub) => {
            const subPerm = storedPermissions.find((p) => p.PageID === sub.PageID);
            return (
              subPerm &&
              (subPerm.CanRead === 1 ||
                subPerm.CanWrite === 1 ||
                subPerm.CanAdd === 1 ||
                subPerm.CanDelete === 1)
            );
          })
          : [];
        if (
          perm &&
          (perm.CanRead === 1 ||
            perm.CanWrite === 1 ||
            perm.CanAdd === 1 ||
            perm.CanDelete === 1)
        ) {
          filtered.push({ ...item, MoreItem: allowedSubItems });
        }
        else if (allowedSubItems.length > 0) {
          filtered.push(...allowedSubItems);
        }
      });
    }
    setAllowedMenu(filtered);
  }, [isSuccess, checkData, router, pathname]);



  const handleLogout = async () => {
    try {
      const result = await logout().unwrap();

      if (result.success) {
        dispatch(
          authAPISlice.util.updateQueryData("checkLogin", undefined, (draft) => {
            draft.loggedIn = false;
            draft.user = null;
            draft.permissions = null;
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


  return (
    <aside className="">
      <div className="aside-wrap">
        <div className="aside-col">
          <ul className="Header_nav_Active">
            {allowedMenu
              .filter((item) => item.Show === "1") // ✅ parent only if Show=1
              .map((item, index) => {
                const subItems =
                  item.MoreItem?.filter((sub) => sub.Show === "1") || []; // ✅ only sub menu Show=1
                const subUrls = subItems.flatMap((sub) => [sub.url, sub.addurl]) || [];
                const isActive =
                  pathname === item.url ||
                  pathname === item.addurl ||
                  subUrls.includes(pathname);
                const isDropdownOpen = openIndex === index;

                return (
                  <li
                    key={index}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setOpenIndex(openIndex === index ? null : index);
                    }}
                  >
                    <div
                      className={`nav-item-wrap ${subItems.length > 0 ? "hasDropdown" : ""}`}
                    >
                      <Link href={item.url} className={isActive ? "active" : ""}>
                        {parse(item.icon)} {item.title}
                      </Link>
                    </div>

                    {subItems.length > 0 && (
                      <ul className={`aside-dropdown ${isDropdownOpen ? "open" : ""}`}>
                        {subItems.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              href={subItem.url}
                              className={pathname === subItem.url ? "active" : ""}
                            >
                              {subItem.icon && parse(subItem.icon)}
                              {subItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            <li>
              <a onClick={handleLogout}>
                <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' aria-hidden='true' role='img' className='iconify iconify--hugeicons' width='1em' height='1em' preserveAspectRatio='xMidYMid meet' viewBox='0 0 24 24' data-icon='hugeicons:logout-04'><path fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M7.023 5.5a9 9 0 1 0 9.953 0M12 2v8' color='currentColor'></path></svg>
                Log Out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}






