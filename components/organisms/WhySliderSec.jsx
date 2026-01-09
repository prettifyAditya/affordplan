"use client"
import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation} from "swiper/modules";
import "swiper/css"; 
import "swiper/css/navigation"
import "@/uploads/styles/component/component.css"

export default function WhySliderSec({ classname="", topHeading="", heading="", topImage="", whyData=[] }){
    const swiperRef = useRef(null);
    return(
        <section>
            <div className={`why_slider_sec sec-pad-all ${classname}`}>
                <div className="container">
                    <div className="main_wrapper">
                        <div className="upper_sec">
                            <div className="heading">
                                <h6>{topHeading}</h6>
                                <h2>{heading}</h2>
                            </div>
                            <figure>
                                <Image src={topImage} width="550" height="250" alt="Image"></Image>
                            </figure>
                        </div>
                        <div className="slider_wrapper">
                            <div className="why-nav swiper-nav center-full">
                                <button type="button" className="why-prev swiper-prev">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24">
                                        <path fill="none" stroke="currentColor" strokeWidth={1.7} d="m7 2l10 10L7 22"></path>
                                    </svg>
                                </button>
                                <button type="button" className="why-next swiper-next">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24">
                                        <path fill="none" stroke="currentColor" strokeWidth={1.7} d="m7 2l10 10L7 22"></path>
                                    </svg>
                                </button>
                            </div>
                            <Swiper
                                ref={swiperRef}
                                className="why_slider"
                                modules={[Navigation]}
                                speed={1000}
                                navigation={{
                                    prevEl: ".why-prev",
                                    nextEl: ".why-next"
                                }}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1.3,
                                        spaceBetween: 10,
                                    },
                                    540: {
                                        slidesPerView: 2,
                                        spaceBetween: 10,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 10,
                                    },
                                    991: {
                                        slidesPerView: 4,
                                        spaceBetween: 10,
                                    },
                                }}
                                onSwiper={(swiper) => (swiperRef.current = swiper)}>
                                {whyData.map((why) => (
                                    <SwiperSlide key={why.id}>
                                        <div className="why_col">
                                            <div className="top_nav">
                                                <div className="icon">
                                                    <Image src={why.iconSrc} width="48" height="48" alt="Why Icon"></Image>
                                                </div>
                                                <h6>{why.heading}</h6>
                                            </div>
                                            <div className="desc">
                                                <p>{why.desc}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}