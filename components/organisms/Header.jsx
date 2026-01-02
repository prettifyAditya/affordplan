"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useModalStore } from "@/store/modalStore";
import "@/uploads/styles/header/header.css"
import ServiceCol from "../molecules/ServiceCol";

export default function Header() {
  const [headerFixed, setHeaderFixed] = useState(false);
  const [openLang, setOpenLang] = useState(false);
  const openHam = useModalStore((state) => state.openHam)
  useEffect(() => {
    const langDropdown = document.querySelector('.lang_select')
    const handleBodyClick = (e) => {
        if (langDropdown && !langDropdown.contains(e.target)) {
        setOpenLang(false);
    }
    };
    document.body.addEventListener("click", handleBodyClick);
    const handleScroll = () => {
      setHeaderFixed(window.scrollY > 100);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
        document.body.removeEventListener("click", handleBodyClick);
    };
  }, []);
  useEffect(() => {
    const solutionsLi = document.querySelectorAll('.solutions_li');

    const handleMouseEnter = (e) => {
        solutionsLi.forEach(li => li.classList.remove('active'));
        e.currentTarget.classList.add('active');
    };

    solutionsLi.forEach(li => {
        li.addEventListener('mouseenter', handleMouseEnter);
    });

    return () => {
        solutionsLi.forEach(li => {
        li.removeEventListener('mouseenter', handleMouseEnter);
        });
    };
    }, []);
  return (
      <header className={`${headerFixed ? "header-fixed" : ""}`}>
        <div className="container-fluid">
            <div className="header-container">
                <div className="colA">
                    <Link href="/" className="logo">
                    <Image src="/assets/logo.svg" width={300} height={55} alt="Logo"></Image>
                    </Link>
                </div>
                <div className="colB">
                    <ul className="nav-items">
                    <li>
                        <Link href="/about-us">About Us</Link>
                    </li>
                    <li className="hasDropdown">
                        <Link href="/solution-listing">Solutions</Link>
                        <div className="icon"></div>
                        <div className="dropdown-menu">
                            <div className="dropdown-menu-wrap">
                                <div className="colA-md">
                                    <ul className="solutions_ul">
                                        <li className="solutions_li active">
                                            <div className="solution_cat">
                                                <div className="cat_ico">
                                                    <Image src="/assets/images/header/head_icon1.svg" width="36" height="48" alt="Category icon"></Image>
                                                </div>
                                                <p>Families</p>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M4 12h12.25L11 6.75l.66-.75l6.5 6.5l-6.5 6.5l-.66-.75L16.25 13H4z"></path>
                                                </svg>
                                            </div>
                                            <div className="solution_submenu">
                                                <div className="submenu_wrapper">
                                                    <div className="heading">
                                                        <h2>Families</h2>
                                                        <p>Swasth Card, families gain access to dependable cashback, comprehensive insurance, and meaningful rewards.</p>
                                                    </div>
                                                    <div className="submenu_grid">
                                                        <ServiceCol
                                                            classname="no_anchor"
                                                            mediaType="video"
                                                            mediaSrc="/assets/video/service1.mp4"
                                                            title="Swasth for families"
                                                            desc="A complete ecosystem for health and wellness"
                                                        />
                                                        <ServiceCol
                                                            classname="no_anchor"
                                                            mediaSrc="/assets/video/service4.jpg"
                                                            title="Amaya Wellness"
                                                            desc="Bridging the Gap Between Clinical Care and Everyday Wellness."
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="solutions_li">
                                            <div className="solution_cat">
                                                <div className="cat_ico">
                                                    <Image src="/assets/images/header/head_icon2.svg" width="36" height="48" alt="Category icon"></Image>
                                                </div>
                                                <p>Hospitals</p>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M4 12h12.25L11 6.75l.66-.75l6.5 6.5l-6.5 6.5l-.66-.75L16.25 13H4z"></path>
                                                </svg>
                                            </div>
                                            <div className="solution_submenu">
                                                <div className="submenu_wrapper">
                                                    <div className="heading">
                                                        <h2>Hospitals</h2>
                                                        <p>Hospitals benefit from integrated solutions that enhance patient care, operational efficiency, and long-term outcomes.</p>
                                                    </div>
                                                    <div className="submenu_grid">
                                                        <ServiceCol
                                                            classname="no_anchor"
                                                            mediaType="video"
                                                            mediaSrc="/assets/video/service1.mp4"
                                                            title="Swasth for families"
                                                            desc="A complete ecosystem for health and wellness"
                                                        />
                                                        <ServiceCol
                                                            classname="no_anchor"
                                                            mediaSrc="/assets/video/service4.jpg"
                                                            title="Amaya Wellness"
                                                            desc="Bridging the Gap Between Clinical Care and Everyday Wellness."
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="solutions_li">
                                            <div className="solution_cat">
                                                <div className="cat_ico">
                                                    <Image src="/assets/images/header/head_icon3.svg" width="36" height="48" alt="Category icon"></Image>
                                                </div>
                                                <p>Pharmaceutical companies</p>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M4 12h12.25L11 6.75l.66-.75l6.5 6.5l-6.5 6.5l-.66-.75L16.25 13H4z"></path>
                                                </svg>
                                            </div>
                                            <div className="solution_submenu">
                                                <div className="submenu_wrapper">
                                                    <div className="heading">
                                                        <h2>Pharmaceutical companies</h2>
                                                        <p>Pharma Companies & Manufacturing are supported through solutions designed to strengthen innovation, production, and delivery at scale.</p>
                                                    </div>
                                                    <div className="submenu_grid">
                                                        <ServiceCol
                                                            classname="no_anchor"
                                                            mediaType="video"
                                                            mediaSrc="/assets/video/service1.mp4"
                                                            title="Swasth for families"
                                                            desc="A complete ecosystem for health and wellness"
                                                        />
                                                        <ServiceCol
                                                            classname="no_anchor"
                                                            mediaSrc="/assets/video/service4.jpg"
                                                            title="Amaya Wellness"
                                                            desc="Bridging the Gap Between Clinical Care and Everyday Wellness."
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="solutions_li">
                                            <div className="solution_cat">
                                                <div className="cat_ico">
                                                    <Image src="/assets/images/header/head_icon4.svg" width="36" height="48" alt="Category icon"></Image>
                                                </div>
                                                <p>Wellness Brand</p>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M4 12h12.25L11 6.75l.66-.75l6.5 6.5l-6.5 6.5l-.66-.75L16.25 13H4z"></path>
                                                </svg>
                                            </div>
                                            <div className="solution_submenu">
                                                <div className="submenu_wrapper">
                                                    <div className="heading">
                                                        <h2>Wellness Brand</h2>
                                                        <p>Swasth Card, families gain access to dependable cashback, comprehensive insurance, and meaningful rewards.</p>
                                                    </div>
                                                    <div className="submenu_grid">
                                                        <ServiceCol
                                                            classname="no_anchor"
                                                            mediaType="video"
                                                            mediaSrc="/assets/video/service1.mp4"
                                                            title="Swasth for families"
                                                            desc="A complete ecosystem for health and wellness"
                                                        />
                                                        <ServiceCol
                                                            classname="no_anchor"
                                                            mediaSrc="/assets/video/service4.jpg"
                                                            title="Amaya Wellness"
                                                            desc="Bridging the Gap Between Clinical Care and Everyday Wellness."
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <Link href="/partners">Partners</Link>
                    </li>
                    <li>
                        <Link href="/media-room">Media room</Link>
                    </li>
                    <li>
                        <Link href="/contact-us">Contact us</Link>
                    </li>
                    <li>
                        <button type="button" className="ham-btn" onClick={openHam}>
                        <span></span>
                        <span></span>
                        </button>
                    </li>
                    </ul>
                </div>
                <div className="colC">
                  <div className={`lang_select ${openLang ? "open" : ""}`}>
                    <div className="selected_lang" onClick={(e) => {
                        e.stopPropagation();
                        setOpenLang(!openLang);
                    }}>
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 28 28">
                                <path fill="#000" d="M14 3.5c.985 0 2.11.885 3.033 2.862c.416.892.762 1.953 1.014 3.138H9.953c.252-1.185.598-2.246 1.014-3.138C11.89 4.385 13.015 3.5 14 3.5M9.608 5.728C9.102 6.812 8.698 8.09 8.422 9.5H4.51a10.53 10.53 0 0 1 6.062-5.428a10 10 0 0 0-.964 1.656M8.183 11c-.12.96-.183 1.966-.183 3s.063 2.04.183 3H3.935a10.5 10.5 0 0 1-.435-3c0-1.043.152-2.05.435-3zm.239 7.5c.276 1.41.68 2.688 1.186 3.772c.28.599.601 1.16.964 1.656A10.53 10.53 0 0 1 4.51 18.5zm1.53 0h8.095c-.252 1.185-.598 2.246-1.014 3.138C16.11 23.615 14.985 24.5 14 24.5s-2.11-.885-3.033-2.862c-.416-.892-.762-1.953-1.014-3.138m8.353-1.5h-8.61a23 23 0 0 1-.195-3c0-1.045.069-2.051.195-3h8.61c.127.949.195 1.955.195 3s-.069 2.051-.195 3m1.273 1.5h3.912a10.53 10.53 0 0 1-6.062 5.428a10 10 0 0 0 .964-1.656c.506-1.084.91-2.363 1.186-3.772m4.487-1.5h-4.248c.12-.96.183-1.966.183-3s-.063-2.04-.183-3h4.248c.283.95.435 1.957.435 3s-.152 2.05-.435 3M17.428 4.072A10.53 10.53 0 0 1 23.49 9.5h-3.912c-.276-1.41-.68-2.688-1.186-3.772a10 10 0 0 0-.964-1.656M14 26c6.627 0 12-5.373 12-12S20.627 2 14 2S2 7.373 2 14s5.373 12 12 12" strokeWidth={0.1} stroke="#fff"></path>
                            </svg>
                        </div>
                        <div className="show_lan">EN</div>
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
                                <path fill="#000" d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569z" strokeWidth={0.1} stroke="#fff"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="dropdown_list">
                        <li>English</li>
                        <li>Hindi</li>
                        <li>Kannada</li>
                        <li>Tamil</li>
                        <li>Telugu</li>
                        <li>Bengali</li>
                        <li>Marathi</li>
                    </div>
                  </div>
                    <button type="button" className="btn">Sign in</button>
                </div>
            </div>
        </div>
      </header>
  );
}
