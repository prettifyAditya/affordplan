"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useModalStore } from "@/store/modalStore";
import "@/uploads/styles/header/header.css"

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
  return (
    <>
      <div className="marque">
        <div className="container">
          <div className="items flex">
            <div className="colA">
              <Link className="cta" href="tel:+919250050501">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="#fff"
                    strokeLinejoin="round"
                    strokeWidth={1.2}
                    d="M7.829 16.171a20.9 20.9 0 0 1-4.846-7.614c-.573-1.564-.048-3.282 1.13-4.46l.729-.728a2.11 2.11 0 0 1 2.987 0l1.707 1.707a2.11 2.11 0 0 1 0 2.987l-.42.42a1.81 1.81 0 0 0 0 2.56l3.84 3.841a1.81 1.81 0 0 0 2.56 0l.421-.42a2.11 2.11 0 0 1 2.987 0l1.707 1.707a2.11 2.11 0 0 1 0 2.987l-.728.728c-1.178 1.179-2.896 1.704-4.46 1.131a20.9 20.9 0 0 1-7.614-4.846Z"
                  ></path>
                </svg>
                +91 92500 50501
              </Link>
              <Link className="cta" href="mailto:swasth@affordplan.com">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.2}
                  >
                    <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <path d="m3 7l9 6l9-6"></path>
                  </g>
                </svg>
                swasth@affordplan.com
              </Link>
            </div>
            <div className="colB">
              <Link className="action_a" href="">Download App</Link>
              <Link className="action_a svg" href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#fff"
                    d="m3.637 3.434l8.74 8.571l-8.675 8.65a2.1 2.1 0 0 1-.326-.613a2.5 2.5 0 0 1 0-.755V4.567c-.026-.395.065-.79.26-1.133m12.506 4.833l-2.853 2.826L4.653 2.6c.28-.097.58-.124.873-.078c.46.126.899.32 1.302.573l7.816 4.325c.508.273 1.003.56 1.498.847M13.29 12.93l2.839 2.788l-2.058 1.146l-6.279 3.49c-.52.287-1.042.561-1.55.874a1.8 1.8 0 0 1-1.472.195zm7.36-.925a1.92 1.92 0 0 1-.99 1.72l-2.346 1.302l-3.087-3.022l3.1-3.074c.795.443 1.577.886 2.358 1.303a1.89 1.89 0 0 1 .964 1.771"
                    strokeWidth={0.1}
                    stroke="#fff"
                  ></path>
                </svg>
              </Link>
              <Link className="action_a svg" href="">
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
                    <path fill="#fff" d="M17.05 20.28c-.98.95-2.05.8-3.08.35c-1.09-.46-2.09-.48-3.24 0c-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8c1.18-.24 2.31-.93 3.57-.84c1.51.12 2.65.72 3.4 1.8c-3.12 1.87-2.38 5.98.48 7.13c-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25c.29 2.58-2.34 4.5-3.74 4.25" strokeWidth={0.1} stroke="#fff"></path>
                </svg>
              </Link>
              <div className={`lang_select ${openLang ? "open" : ""}`}>
                <div className="selected_lang" onClick={(e) => {
                    e.stopPropagation();
                    setOpenLang(!openLang);
                }}>
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 28 28">
                            <path fill="#fff" d="M14 3.5c.985 0 2.11.885 3.033 2.862c.416.892.762 1.953 1.014 3.138H9.953c.252-1.185.598-2.246 1.014-3.138C11.89 4.385 13.015 3.5 14 3.5M9.608 5.728C9.102 6.812 8.698 8.09 8.422 9.5H4.51a10.53 10.53 0 0 1 6.062-5.428a10 10 0 0 0-.964 1.656M8.183 11c-.12.96-.183 1.966-.183 3s.063 2.04.183 3H3.935a10.5 10.5 0 0 1-.435-3c0-1.043.152-2.05.435-3zm.239 7.5c.276 1.41.68 2.688 1.186 3.772c.28.599.601 1.16.964 1.656A10.53 10.53 0 0 1 4.51 18.5zm1.53 0h8.095c-.252 1.185-.598 2.246-1.014 3.138C16.11 23.615 14.985 24.5 14 24.5s-2.11-.885-3.033-2.862c-.416-.892-.762-1.953-1.014-3.138m8.353-1.5h-8.61a23 23 0 0 1-.195-3c0-1.045.069-2.051.195-3h8.61c.127.949.195 1.955.195 3s-.069 2.051-.195 3m1.273 1.5h3.912a10.53 10.53 0 0 1-6.062 5.428a10 10 0 0 0 .964-1.656c.506-1.084.91-2.363 1.186-3.772m4.487-1.5h-4.248c.12-.96.183-1.966.183-3s-.063-2.04-.183-3h4.248c.283.95.435 1.957.435 3s-.152 2.05-.435 3M17.428 4.072A10.53 10.53 0 0 1 23.49 9.5h-3.912c-.276-1.41-.68-2.688-1.186-3.772a10 10 0 0 0-.964-1.656M14 26c6.627 0 12-5.373 12-12S20.627 2 14 2S2 7.373 2 14s5.373 12 12 12" strokeWidth={0.1} stroke="#fff"></path>
                        </svg>
                    </div>
                    <div className="show_lan">EN</div>
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
                            <path fill="#fff" d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569z" strokeWidth={0.1} stroke="#fff"></path>
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
            </div>
          </div>
        </div>
      </div>
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
                        <Link href="/product-listing">Products</Link>
                        <div className="icon"></div>
                        <div className="dropdown-menu">
                            <ul className="dropdown-menu-wrap">
                                <li>
                                    <Link href="" className="head_service">
                                        <figure>
                                            <Image src="/assets/images/home/header1.svg" width="50" height="50" alt="Products"></Image>
                                        </figure>
                                        <figcaption>
                                            <h6>Swasth for families</h6>
                                            <p>A complete ecosystem for health and wellness</p>
                                        </figcaption>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="" className="head_service">
                                        <figure>
                                            <Image src="/assets/images/home/header2.svg" width="50" height="50" alt="Products"></Image>
                                        </figure>
                                        <figcaption>
                                            <h6>Swasth for Hospitals</h6>
                                            <p>Empowering hospitals for exceptional patient care</p>
                                        </figcaption>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="" className="head_service">
                                        <figure>
                                            <Image src="/assets/images/home/header3.svg" width="50" height="50" alt="Products"></Image>
                                        </figure>
                                        <figcaption>
                                            <h6>Swasth for Corporates</h6>
                                            <p>Elevating Employee Support Through Predictable Financial Access.</p>
                                        </figcaption>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="" className="head_service">
                                        <figure>
                                            <Image src="/assets/images/home/header4.svg" width="50" height="50" alt="Products"></Image>
                                        </figure>
                                        <figcaption>
                                            <h6>Amaya Wellness</h6>
                                            <p>Bridging the Gap Between Clinical Care and Everyday Wellness.</p>
                                        </figcaption>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="" className="head_service">
                                        <figure>
                                            <Image src="/assets/images/home/header5.svg" width="50" height="50" alt="Products"></Image>
                                        </figure>
                                        <figcaption>
                                            <h6>Procalyx</h6>
                                            <p>From Reactive Purchasing to Strategic Decision-Making: The AI-Driven Supply Chain.</p>
                                        </figcaption>
                                    </Link>
                                </li>
                            </ul>
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
                <div className="colc">
                    <button type="button" className="btn">Sign in</button>
                </div>
            </div>
        </div>
      </header>
    </>
  );
}
