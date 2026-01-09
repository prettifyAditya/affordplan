"use client"

import Image from "next/image"
import { useState, useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules";
import "swiper/css"; 
import "swiper/css/autoplay"

const flowData = [
    {
        id: 1,
        title: "Client Onboarding & Enrollment",
        desc: "Simplified patient enrollment via financial counsellor or hospital staff."
    },
    {
        id: 2,
        title: "Seamless Digital Payment",
        desc: "Simplified patient enrollment via financial counsellor or hospital staff."
    },
    {
        id: 3,
        title: "Instantaneous Reconciliation",
        desc: "Simplified patient enrollment via financial counsellor or hospital staff."
    },
    {
        id: 4,
        title: "Full Transaction Visibility",
        desc: "Simplified patient enrollment via financial counsellor or hospital staff."
    },
    {
        id: 5,
        title: "Centralized Operations Management",
        desc: "Simplified patient enrollment via financial counsellor or hospital staff."
    },
]

export default function OperationalFlow(){
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(1);
    const toggleAccordion = useCallback(
        (index) => {
            setActiveIndex((prev) => (prev === index ? null : index));
        },
        []
    );
    return(
        <section>
            <div className="operational_flow_sec sec-pad">
                <div className="container">
                    <div className="heading">
                        <h2>Streamlined <span>Operational Flow</span></h2>
                    </div>
                    <div className="operational_wrapper">
                        <div className="colA">
                            <div className="hand_wrapper">
                                <Image src="/assets/images/swasth/hand_vector.svg" width="400" height="700" alt="Hand Vector"></Image>
                                <Swiper
                                    ref={swiperRef}
                                    className="hand_slider"
                                    direction="vertical"
                                    modules={[Autoplay]}
                                    autoplay = {{
                                        delay: 1000,
                                        disableOnInteraction: false,
                                        pauseOnMouseEnter: true
                                    }}
                                    speed={1000}
                                    slidesPerView={1}
                                    onSwiper={(swiper) => (swiperRef.current = swiper)}>
                                        <SwiperSlide>
                                            <div className="hand_col">
                                                <div className="icon">
                                                    <Image src="/assets/images/swasth/hand_slide1.svg" width="56" height="56" alt="Hand Icon"></Image>
                                                </div>
                                                <h6>Seamless Digital Payment</h6>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="hand_col">
                                                <div className="icon">
                                                    <Image src="/assets/images/swasth/hand_slide1.svg" width="56" height="56" alt="Hand Icon"></Image>
                                                </div>
                                                <h6>Seamless Digital Payment</h6>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="hand_col">
                                                <div className="icon">
                                                    <Image src="/assets/images/swasth/hand_slide1.svg" width="56" height="56" alt="Hand Icon"></Image>
                                                </div>
                                                <h6>Seamless Digital Payment</h6>
                                            </div>
                                        </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div className="colB">
                            <div className="flow_details">
                                {flowData.map((data) => {
                                    const isOpen = activeIndex === data.id;
                                    return(
                                        <div key={data.id} className={`flow_col ${isOpen ? "active" : ""}`} onClick={() => toggleAccordion(data.id)}>
                                            <div className="circle">
                                                <div className="icon"></div>
                                            </div>
                                            <div className="flow_content">
                                                <h6>{data.title}</h6>
                                                <div className="desc">
                                                    <p>{data.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}