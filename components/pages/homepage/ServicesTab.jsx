"use client"
import Image from "next/image"
import Link from "next/link"
import { useState, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation} from "swiper/modules";
import "swiper/css"; 
import "swiper/css/navigation"

export default function ServicesTab() {
    const swiperRef = useRef(null);
    const [activeService, setActiveService] = useState('service-tab1')
    return(
        <div className="home-secB sec-pad">
            <div className="container">
                <div className="heading">
                    <h2>Tracking Healthcare <span>Ecosystems for</span></h2>
                </div>
                <div className="services_wrapper">
                    <div className="tab-nav">
                        <li className={`${activeService === "service-tab1" ? "active" : ""}`} onClick={() => setActiveService("service-tab1")}>
                            <div className="icon">
                                <Image src="/assets/images/other/service1.svg" width="31" height="31" alt="Service Icon"></Image>
                            </div>
                            <p>Families</p>
                        </li>
                        <li className={`${activeService === "service-tab2" ? "active" : ""}`} onClick={() => setActiveService("service-tab2")}>
                            <div className="icon">
                                <Image src="/assets/images/other/service2.svg" width="31" height="31" alt="Service Icon"></Image>
                            </div>
                            <p>Hospitals</p>
                        </li>
                        <li className={`${activeService === "service-tab3" ? "active" : ""}`} onClick={() => setActiveService("service-tab3")}>
                            <div className="icon">
                                <Image src="/assets/images/other/service3.svg" width="31" height="31" alt="Service Icon"></Image>
                            </div>
                            <p>Pharmaceutical companies</p>
                        </li>
                        <li className={`${activeService === "service-tab4" ? "active" : ""}`} onClick={() => setActiveService("service-tab4")}>
                            <div className="icon">
                                <Image src="/assets/images/other/service4.svg" width="31" height="31" alt="Service Icon"></Image>
                            </div>
                            <p>Wellness Brands</p>
                        </li>
                    </div>
                    <div className="tab-nav-content">
                        <div className={`tabs ${activeService === "service-tab1" ? "active" : ""}`}>
                            <div className="service_container">
                                <div className="service-nav swiper-nav center-full white">
                                    <button className="service-prev swiper-prev">
                                        <Image src="/assets/icon/next-black.svg" width="30" height="30" alt="Swiper Buttons"></Image>
                                    </button>
                                    <button className="service-next swiper-next">
                                        <Image src="/assets/icon/next-black.svg" width="30" height="30" alt="Swiper Buttons"></Image>
                                    </button>
                                </div>
                                <Swiper
                                    ref={swiperRef}
                                    className="service_slider"
                                    modules={[Navigation]}
                                    speed={600}
                                    navigation={{
                                        prevEl: ".service-prev",
                                        nextEl: ".service-next"
                                    }}
                                    breakpoints={{
                                        0: {
                                        slidesPerView: 1.3,
                                        spaceBetween: 10,
                                        },
                                        540: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                        }
                                    }}
                                    onSwiper={(swiper) => (swiperRef.current = swiper)}>
                                    <SwiperSlide>
                                        <div className="service_col item-md">
                                            <figure>
                                                <video src="/assets/video/service1.mp4" autoPlay muted loop playsInline></video>
                                            </figure>
                                            <figcaption>
                                                <h4>Swasth for families</h4>
                                                <p>The Swasth Card delivers dependable Cashback, access to simple loans, comprehensive insurance, and dedicated rewards</p>
                                                <Link className="btn white" href="">Explore More</Link>
                                            </figcaption>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="service_col item-md">
                                            <figure>
                                                <img src="/assets/video/service4.jpg" alt="" />
                                            </figure>
                                            <figcaption>
                                                <h4>Amaya Wellness</h4>
                                                <p>A curated platform for sustained health, specializing in prevention, recovery, and chronic care support.</p>
                                                <Link className="btn white" href="">Explore More</Link>
                                            </figcaption>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="service_col item-md">
                                            <figure>
                                                <video src="/assets/video/service1.mp4" autoPlay muted loop playsInline></video>
                                            </figure>
                                            <figcaption>
                                                <h4>Swasth for families</h4>
                                                <p>The Swasth Card delivers dependable Cashback, access to simple loans, comprehensive insurance, and dedicated rewards</p>
                                                <Link className="btn white" href="">Explore More</Link>
                                            </figcaption>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div className={`tabs ${activeService === "service-tab2" ? "active" : ""}`}>
                            <div className="service_container">
                                <div className="service-nav swiper-nav center-full white">
                                    <button className="service-prev swiper-prev">
                                        <Image src="/assets/icon/next-black.svg" width="30" height="30" alt="Swiper Buttons"></Image>
                                    </button>
                                    <button className="service-next swiper-next">
                                        <Image src="/assets/icon/next-black.svg" width="30" height="30" alt="Swiper Buttons"></Image>
                                    </button>
                                </div>
                                <Swiper
                                    ref={swiperRef}
                                    className="service_slider"
                                    modules={[Navigation]}
                                    speed={600}
                                    navigation={{
                                        prevEl: ".service-prev",
                                        nextEl: ".service-next"
                                    }}
                                    breakpoints={{
                                        0: {
                                        slidesPerView: 1.3,
                                        spaceBetween: 10,
                                        },
                                        540: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                        }
                                    }}
                                    onSwiper={(swiper) => (swiperRef.current = swiper)}>
                                    <SwiperSlide>
                                        <div className="service_col item-md">
                                            <figure>
                                                <video src="/assets/video/service1.mp4" autoPlay muted loop playsInline></video>
                                            </figure>
                                            <figcaption>
                                                <h4>Swasth for families</h4>
                                                <p>The Swasth Card delivers dependable Cashback, access to simple loans, comprehensive insurance, and dedicated rewards</p>
                                                <Link className="btn white" href="">Explore More</Link>
                                            </figcaption>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="service_col item-md">
                                            <figure>
                                                <img src="/assets/video/service4.jpg" alt="" />
                                            </figure>
                                            <figcaption>
                                                <h4>Amaya Wellness</h4>
                                                <p>A curated platform for sustained health, specializing in prevention, recovery, and chronic care support.</p>
                                                <Link className="btn white" href="">Explore More</Link>
                                            </figcaption>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="service_col item-md">
                                            <figure>
                                                <video src="/assets/video/service1.mp4" autoPlay muted loop playsInline></video>
                                            </figure>
                                            <figcaption>
                                                <h4>Swasth for families</h4>
                                                <p>The Swasth Card delivers dependable Cashback, access to simple loans, comprehensive insurance, and dedicated rewards</p>
                                                <Link className="btn white" href="">Explore More</Link>
                                            </figcaption>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div className={`tabs ${activeService === "service-tab3" ? "active" : ""}`}>
                            <div className="service_container">
                                <div className="service-nav swiper-nav center-full white">
                                    <button className="service-prev swiper-prev">
                                        <Image src="/assets/icon/next-black.svg" width="30" height="30" alt="Swiper Buttons"></Image>
                                    </button>
                                    <button className="service-next swiper-next">
                                        <Image src="/assets/icon/next-black.svg" width="30" height="30" alt="Swiper Buttons"></Image>
                                    </button>
                                </div>
                                <Swiper
                                    ref={swiperRef}
                                    className="service_slider"
                                    modules={[Navigation]}
                                    speed={600}
                                    navigation={{
                                        prevEl: ".service-prev",
                                        nextEl: ".service-next"
                                    }}
                                    breakpoints={{
                                        0: {
                                        slidesPerView: 1.3,
                                        spaceBetween: 10,
                                        },
                                        540: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                        }
                                    }}
                                    onSwiper={(swiper) => (swiperRef.current = swiper)}>
                                    <SwiperSlide>
                                        <div className="service_col item-md">
                                            <figure>
                                                <video src="/assets/video/service1.mp4" autoPlay muted loop playsInline></video>
                                            </figure>
                                            <figcaption>
                                                <h4>Swasth for families</h4>
                                                <p>The Swasth Card delivers dependable Cashback, access to simple loans, comprehensive insurance, and dedicated rewards</p>
                                                <Link className="btn white" href="">Explore More</Link>
                                            </figcaption>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="service_col item-md">
                                            <figure>
                                                <img src="/assets/video/service4.jpg" alt="" />
                                            </figure>
                                            <figcaption>
                                                <h4>Amaya Wellness</h4>
                                                <p>A curated platform for sustained health, specializing in prevention, recovery, and chronic care support.</p>
                                                <Link className="btn white" href="">Explore More</Link>
                                            </figcaption>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="service_col item-md">
                                            <figure>
                                                <video src="/assets/video/service1.mp4" autoPlay muted loop playsInline></video>
                                            </figure>
                                            <figcaption>
                                                <h4>Swasth for families</h4>
                                                <p>The Swasth Card delivers dependable Cashback, access to simple loans, comprehensive insurance, and dedicated rewards</p>
                                                <Link className="btn white" href="">Explore More</Link>
                                            </figcaption>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div className={`tabs ${activeService === "service-tab4" ? "active" : ""}`}>
                            <div className="service_container">
                                <div className="service-nav swiper-nav center-full white">
                                    <button className="service-prev swiper-prev">
                                        <Image src="/assets/icon/next-black.svg" width="30" height="30" alt="Swiper Buttons"></Image>
                                    </button>
                                    <button className="service-next swiper-next">
                                        <Image src="/assets/icon/next-black.svg" width="30" height="30" alt="Swiper Buttons"></Image>
                                    </button>
                                </div>
                                <Swiper
                                    ref={swiperRef}
                                    className="service_slider"
                                    modules={[Navigation]}
                                    speed={600}
                                    navigation={{
                                        prevEl: ".service-prev",
                                        nextEl: ".service-next"
                                    }}
                                    breakpoints={{
                                        0: {
                                        slidesPerView: 1.3,
                                        spaceBetween: 10,
                                        },
                                        540: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                        }
                                    }}
                                    onSwiper={(swiper) => (swiperRef.current = swiper)}>
                                    <SwiperSlide>
                                        <div className="service_col item-md">
                                            <figure>
                                                <video src="/assets/video/service1.mp4" autoPlay muted loop playsInline></video>
                                            </figure>
                                            <figcaption>
                                                <h4>Swasth for families</h4>
                                                <p>The Swasth Card delivers dependable Cashback, access to simple loans, comprehensive insurance, and dedicated rewards</p>
                                                <Link className="btn white" href="">Explore More</Link>
                                            </figcaption>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="service_col item-md">
                                            <figure>
                                                <img src="/assets/video/service4.jpg" alt="" />
                                            </figure>
                                            <figcaption>
                                                <h4>Amaya Wellness</h4>
                                                <p>A curated platform for sustained health, specializing in prevention, recovery, and chronic care support.</p>
                                                <Link className="btn white" href="">Explore More</Link>
                                            </figcaption>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="service_col item-md">
                                            <figure>
                                                <video src="/assets/video/service1.mp4" autoPlay muted loop playsInline></video>
                                            </figure>
                                            <figcaption>
                                                <h4>Swasth for families</h4>
                                                <p>The Swasth Card delivers dependable Cashback, access to simple loans, comprehensive insurance, and dedicated rewards</p>
                                                <Link className="btn white" href="">Explore More</Link>
                                            </figcaption>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}