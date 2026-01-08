"use client"
import Button from "@/components/atoms/Button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function GlobalSuccess(){
    const [activeSuccess, setActiveSuccess] = useState("success-tab1")
    return(
        <section>
            <div className="home-secE sec-pad">
                <div className="container">
                    <div className="heading">
                        <h2>Verified Success: <span>Global Perspective.</span></h2>
                    </div>
                    <div className="top_sucess">
                        <div className="success_col">
                            <figure>
                                <Image src="/assets/images/home/success1.jpg" width="120" height="110" alt="Client Image" />
                            </figure>
                            <figcaption>
                                <p>Mother's Day 2024: Ten financial tips for empowering mothers on this day, May 12</p>
                                <span className="date">01 Nov, 2025</span>
                            </figcaption>
                        </div>
                        <div className="success_col">
                            <figure>
                                <Image src="/assets/images/home/success2.jpg" width="120" height="110" alt="Client Image" />
                            </figure>
                            <figcaption>
                                <p>Mother's Day 2024: Ten financial tips for empowering mothers on this day, May 12</p>
                                <span className="date">01 Nov, 2025</span>
                            </figcaption>
                        </div>
                        <div className="success_col">
                            <figure>
                                <Image src="/assets/images/home/success3.jpg" width="120" height="110" alt="Client Image" />
                            </figure>
                            <figcaption>
                                <p>Mother's Day 2024: Ten financial tips for empowering mothers on this day, May 12</p>
                                <span className="date">01 Nov, 2025</span>
                            </figcaption>
                        </div>
                    </div>
                    <div className="success_wrapper">
                        <div className="flex main_wrap">
                            <div className="success_media tab-nav-content">
                                <div className={`tabs ${activeSuccess === "success-tab1" ? "active" : ""}`}>
                                    <div className="banner success_banner">
                                        <div className="bg">
                                            <Image src="/assets/images/home/success_bg.jpg" width="780" height="609" alt="banner Image"></Image>
                                            <div className="banner-wrapper">
                                                <h4>Empowering Affordable Healthcare An Exclusive Interview with Dr. Pruthvinath  Kancherla, Co-Founder of Affordplan®</h4>
                                                <Button classname="white" linkHref="" buttonText="Read More" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`tabs ${activeSuccess === "success-tab2" ? "active" : ""}`}>
                                    <div className="banner success_banner">
                                        <div className="bg">
                                            <Image src="/assets/images/home/success_bg.jpg" width="780" height="609" alt="banner Image"></Image>
                                            <div className="banner-wrapper">
                                                <h4>Empowering Affordable Healthcare An Exclusive Interview with Dr. Pruthvinath  Kancherla, Co-Founder of Affordplan®</h4>
                                                <Button classname="white" linkHref="" buttonText="Read More" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`tabs ${activeSuccess === "success-tab3" ? "active" : ""}`}>
                                    <div className="banner success_banner">
                                        <div className="bg">
                                            <Image src="/assets/images/home/success_bg.jpg" width="780" height="609" alt="banner Image"></Image>
                                            <div className="banner-wrapper">
                                                <h4>Empowering Affordable Healthcare An Exclusive Interview with Dr. Pruthvinath  Kancherla, Co-Founder of Affordplan®</h4>
                                                <Button classname="white" linkHref="" buttonText="Read More" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`tabs ${activeSuccess === "success-tab4" ? "active" : ""}`}>
                                    <div className="banner success_banner">
                                        <div className="bg">
                                            <Image src="/assets/images/home/success_bg.jpg" width="780" height="609" alt="banner Image"></Image>
                                            <div className="banner-wrapper">
                                                <h4>Empowering Affordable Healthcare An Exclusive Interview with Dr. Pruthvinath  Kancherla, Co-Founder of Affordplan®</h4>
                                                <Button classname="white" linkHref="" buttonText="Read More" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="success_info tab-nav">
                                <div className={`info_col ${activeSuccess === "success-tab1" ? "active" : ""}`} onClick={() => setActiveSuccess("success-tab1")}>
                                    <div className="count">
                                        01
                                    </div>
                                    <div className="desc">
                                        <p>Empowering Affordable Healthcare An Exclusive Interview with Dr. Pruthvinath  Kancherla, Co-Founder of Affordplan®</p>
                                    </div>
                                </div>
                                <div className={`info_col ${activeSuccess === "success-tab2" ? "active" : ""}`} onClick={() => setActiveSuccess("success-tab2")}>
                                    <div className="count">
                                        02
                                    </div>
                                    <div className="desc">
                                        <p>Affordplan targets Rs 1,000 crore in GTV by FY25, aims to bridge healthcare affordability gap in India</p>
                                    </div>
                                </div>
                                <div className={`info_col ${activeSuccess === "success-tab3" ? "active" : ""}`} onClick={() => setActiveSuccess("success-tab3")}>
                                    <div className="count">
                                        03
                                    </div>
                                    <div className="desc">
                                        <p>Affordplan targets Rs 1,000 crore in GTV by FY25, aims to bridge healthcare affordability gap in India</p>
                                    </div>
                                </div>
                                <div className={`info_col ${activeSuccess === "success-tab4" ? "active" : ""}`} onClick={() => setActiveSuccess("success-tab4")}>
                                    <div className="count">
                                        04
                                    </div>
                                    <div className="desc">
                                        <p>Affordplan targets Rs 1,000 crore in GTV by FY25, aims to bridge healthcare affordability gap in India</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="btn_wrap">
                            <Button classname="top-right" linkHref="/media" buttonText="Explore all voices" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}