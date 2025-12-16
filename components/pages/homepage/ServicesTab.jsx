"use client"
import Image from "next/image"
import { useState } from "react"

export default function ServicesTab() {
    const [activeService, setActiveService] = useState('service-tab1')
    return(
        <div className="home-secB sec-pad">
            <div className="container">
                <div className="services_wrapper">
                    <div className="tab-nav">
                        <li className={`${activeService === "service-tab1" ? "active" : ""}`} onClick={() => setActiveService("service-tab1")}>
                            <div className="icon">
                                <Image src="/assets/images/other/service1.svg" width="31" height="31" alt="Service Icon"></Image>
                            </div>
                            <p>Swasth for families</p>
                        </li>
                        <li className={`${activeService === "service-tab2" ? "active" : ""}`} onClick={() => setActiveService("service-tab2")}>
                            <div className="icon">
                                <Image src="/assets/images/other/service2.svg" width="31" height="31" alt="Service Icon"></Image>
                            </div>
                            <p>Swasth for Hospitals</p>
                        </li>
                        <li className={`${activeService === "service-tab3" ? "active" : ""}`} onClick={() => setActiveService("service-tab3")}>
                            <div className="icon">
                                <Image src="/assets/images/other/service3.svg" width="31" height="31" alt="Service Icon"></Image>
                            </div>
                            <p>Swasth for Corporates</p>
                        </li>
                        <li className={`${activeService === "service-tab4" ? "active" : ""}`} onClick={() => setActiveService("service-tab4")}>
                            <div className="icon">
                                <Image src="/assets/images/other/service4.svg" width="31" height="31" alt="Service Icon"></Image>
                            </div>
                            <p>Amaya Wellness</p>
                        </li>
                        <li className={`${activeService === "service-tab5" ? "active" : ""}`} onClick={() => setActiveService("service-tab5")}>
                            <div className="icon">
                                <Image src="/assets/images/other/service5.svg" width="31" height="31" alt="Service Icon"></Image>
                            </div>
                            <p>Procalyx</p>
                        </li>
                    </div>
                    <div className="tab-nav-content">
                        <div className={`tabs ${activeService === "service-tab1" ? "active" : ""}`}>
                            <div className="banner">
                                <div className="bg">
                                    <video src="/assets/video/service1.mp4" autoPlay muted loop playsInline></video>
                                    <div className="banner-wrapper">
                                        <h6>Our Services</h6>
                                        <div className="heading">
                                            <h2>A Single Card That Simplifies Your Family's <span>Financial Future.</span></h2>
                                            <p>The Swasth Card delivers dependable Cashback, access to simple loans, comprehensive insurance, and dedicated rewards</p>
                                            <a href="javascript:;" className="btn white">Explore More</a>
                                        </div>
                                    </div>
                                    <div className="logo-vector">
                                        <Image src="/assets/logo-vector.svg" width="90" height="70" alt="Logo Vector"></Image>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`tabs ${activeService === "service-tab2" ? "active" : ""}`}>
                            <div className="banner">
                                <div className="bg">
                                    <Image src='/assets/video/service2.jpg' width='1304' height="750" alt=""></Image>
                                    <div className="banner-wrapper">
                                        <h6>Our Services</h6>
                                        <div className="heading">
                                            <h2>Empowering hospitals for <span>exceptional patient care.</span></h2>
                                            <p>This solution is built to ease your financial operations, giving your hospital the time and resources to prioritize patient care. </p>
                                            <a href="javascript:;" className="btn white">Explore More</a>
                                        </div>
                                    </div>
                                    <div className="logo-vector">
                                        <Image src="/assets/logo-vector.svg" width="90" height="70" alt="Logo Vector"></Image>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`tabs ${activeService === "service-tab3" ? "active" : ""}`}>
                            <div className="banner">
                                <div className="bg">
                                    <Image src='/assets/video/service3.jpg' width='1304' height="750" alt=""></Image>
                                    <div className="banner-wrapper">
                                        <h6>Our Services</h6>
                                        <div className="heading">
                                            <h2>Elevating Employee Support Through <span>Predictable Financial Access.</span></h2>
                                            <p>Provide your team with the full power of the Swasth Corporate Card: Cashback on medical expenses.</p>
                                            <a href="javascript:;" className="btn white">Explore More</a>
                                        </div>
                                    </div>
                                    <div className="logo-vector">
                                        <Image src="/assets/logo-vector.svg" width="90" height="70" alt="Logo Vector"></Image>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`tabs ${activeService === "service-tab4" ? "active" : ""}`}>
                            <div className="banner">
                                <div className="bg">
                                    <Image src='/assets/video/service4.jpg' width='1304' height="750" alt=""></Image>
                                    <div className="banner-wrapper">
                                        <h6>Our Services</h6>
                                        <div className="heading">
                                            <h2>Bridging the Gap Between Clinical Care and <span>Everyday Wellness.</span></h2>
                                            <p>Amaya is your curated platform for sustained health, specializing in prevention, recovery, and chronic care support.</p>
                                            <a href="javascript:;" className="btn white">Explore More</a>
                                        </div>
                                    </div>
                                    <div className="logo-vector">
                                        <Image src="/assets/logo-vector.svg" width="90" height="70" alt="Logo Vector"></Image>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`tabs ${activeService === "service-tab5" ? "active" : ""}`}>
                            <div className="banner">
                                <div className="bg">
                                    <Image src='/assets/video/service5.jpg' width='1304' height="750" alt=""></Image>
                                    <div className="banner-wrapper">
                                        <h6>Our Services</h6>
                                        <div className="heading">
                                            <h2>From Reactive Purchasing to Strategic Decision-Making: <span>The AI-Driven Supply Chain.</span></h2>
                                            <p>A comprehensive suite of integrated tools that supports every aspect of the healthcare journey</p>
                                            <a href="javascript:;" className="btn white">Explore More</a>
                                        </div>
                                    </div>
                                    <div className="logo-vector">
                                        <Image src="/assets/logo-vector.svg" width="90" height="70" alt="Logo Vector"></Image>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}