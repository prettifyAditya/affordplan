"use client"
import Image from "next/image"
import { useState, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation} from "swiper/modules";
import "swiper/css"; 
import "swiper/css/navigation"
import SwiperButton from "@/components/atoms/SwiperButton"
import ServiceCol from "@/components/molecules/ServiceCol"

export default function ServicesTab() {
    const swiperRef = useRef(null);
    const [activeService, setActiveService] = useState('service-tab1')
    return(
        <section>
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
                                        <SwiperButton classname="service-prev swiper-prev" />
                                        <SwiperButton classname="service-next swiper-next" />
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
                                            768: {
                                                slidesPerView: 2,
                                                spaceBetween: 20,
                                            }
                                        }}
                                        onSwiper={(swiper) => (swiperRef.current = swiper)}>
                                        <SwiperSlide>
                                            <ServiceCol
                                                linkHref="/swasth-for-families"
                                                mediaSrc="/assets/images/other/swasth-families.jpg"
                                                title="Swasth for families"
                                                desc="The Swasth Card delivers dependable Cashback, access to simple loans, comprehensive insurance, and dedicated rewards"
                                            />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <ServiceCol
                                                linkHref="/amya-wellness"
                                                mediaSrc="/assets/images/other/amaya-wellness.jpg"
                                                title="Amaya Wellness"
                                                desc="A curated platform for sustained health, specializing in prevention, recovery, and chronic care support."
                                            />
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                            <div className={`tabs ${activeService === "service-tab2" ? "active" : ""}`}>
                                <div className="service_container">
                                    <div className="service-nav swiper-nav center-full white">
                                        <SwiperButton classname="service-prev swiper-prev" />
                                        <SwiperButton classname="service-next swiper-next" />
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
                                            768: {
                                                slidesPerView: 2,
                                                spaceBetween: 20,
                                            }
                                        }}
                                        onSwiper={(swiper) => (swiperRef.current = swiper)}>
                                        <SwiperSlide>
                                            <ServiceCol
                                                linkHref="swasth-for-hospitals"
                                                mediaSrc="/assets/images/other/swasth-hospitals.jpg"
                                                title="Swasth for Hospitals"
                                                desc="Solutions built to streamline financial operations, allowing hospitals to prioritize patient care above all else."
                                            />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <ServiceCol
                                                linkHref="swasth-for-corporates"
                                                mediaSrc="/assets/images/other/swasth-corporate.jpg"
                                                title="Swasth for Corporates"
                                                desc="Solutions built to streamline financial operations, allowing hospitals to prioritize patient care above all else."
                                            />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <ServiceCol
                                                linkHref="procalyx"
                                                mediaSrc="/assets/images/other/procalyx.jpg"
                                                title="Procalyx™"
                                                desc="A strategic intelligence platform designed for manufacturers and healthcare providers to optimize procurement, enhance market penetration, and ensure financial transparency."
                                            />
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                            <div className={`tabs ${activeService === "service-tab3" ? "active" : ""}`}>
                                <div className="service_container">
                                    <div className="service-nav swiper-nav center-full white">
                                        <SwiperButton classname="service-prev swiper-prev" />
                                        <SwiperButton classname="service-next swiper-next" />
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
                                            768: {
                                                slidesPerView: 2,
                                                spaceBetween: 20,
                                            }
                                        }}
                                        onSwiper={(swiper) => (swiperRef.current = swiper)}>
                                        <SwiperSlide>
                                            <ServiceCol
                                                linkHref="procalyx"
                                                mediaSrc="/assets/images/other/procalyx.jpg"
                                                title="Procalyx™"
                                                desc="A strategic intelligence platform designed for manufacturers and healthcare providers to optimize procurement, enhance market penetration, and ensure financial transparency."
                                            />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <ServiceCol
                                                linkHref="/amya-wellness"
                                                mediaSrc="/assets/images/other/amaya-wellness.jpg"
                                                title="Amaya Wellness"
                                                desc="A curated platform for sustained health, specializing in prevention, recovery, and chronic care support."
                                            />
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                            <div className={`tabs ${activeService === "service-tab4" ? "active" : ""}`}>
                                <div className="service_container">
                                    <div className="service-nav swiper-nav center-full white">
                                        <SwiperButton classname="service-prev swiper-prev" />
                                        <SwiperButton classname="service-next swiper-next" />
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
                                            768: {
                                                slidesPerView: 2,
                                                spaceBetween: 20,
                                            }
                                        }}
                                        onSwiper={(swiper) => (swiperRef.current = swiper)}>
                                        <SwiperSlide>
                                            <ServiceCol
                                                linkHref="/amya-wellness"
                                                mediaSrc="/assets/images/other/amaya-wellness.jpg"
                                                title="Amaya Wellness"
                                                desc="A curated platform for sustained health, specializing in prevention, recovery, and chronic care support."
                                            />
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}