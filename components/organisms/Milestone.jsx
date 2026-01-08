"use client"
import Image from "next/image";
import { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from "swiper/modules";
import "swiper/css"; 
import "swiper/css/navigation"
import SwiperButton from "@/components/atoms/SwiperButton";
import "@/uploads/styles/component/component.css"

export default function Milestone({ classname="" ,heading="" }){
    const swiperRef = useRef(null);
    return(
        <section>
            <div className={`milestone_sec sec-pad-all ${classname}`}>
                <div className="container">
                    <div className="heading">
                        <h2>{heading}</h2>
                    </div>
                    <div className="milestone_wrapper">
                        <div className="milestone-nav swiper-nav white-border group">
                            <SwiperButton classname="milestone-prev swiper-prev" />
                            <SwiperButton classname="milestone-next swiper-next" />
                        </div>
                        <div className="colA">
                            <Swiper
                                ref={swiperRef}
                                className="heading_slider"
                                loop = {true}
                                navigation={{
                                    prevEl: ".milestone-prev",
                                    nextEl: ".milestone-next"
                                }}
                                modules={[Navigation]}
                                direction="vertical"
                                speed={1000}
                                slidesPerView = {1}
                                onSwiper={(swiper) => (swiperRef.current = swiper)}
                            >
                                <SwiperSlide>
                                    <p>Excellence in healthcare innovation</p>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <p>Excellence in healthcare innovation</p>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <p>Excellence in healthcare innovation</p>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <p>Excellence in healthcare innovation</p>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <p>Excellence in healthcare innovation</p>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="colB">
                            <Swiper
                                className="milestone_trophy_slider"
                                loop = {true}
                                navigation={{
                                    prevEl: ".milestone-next",
                                    nextEl: ".milestone-prev"
                                }}
                                modules={[Navigation]}
                                direction="horizontal"
                                ref={swiperRef}
                                spaceBetween={20}
                                speed={1000}
                                slidesPerView = {1}
                                onSwiper={(swiper) => (swiperRef.current = swiper)}
                            >
                                <SwiperSlide>
                                    <figure>
                                        <Image src="/assets/images/home/trophy.png" width="215" height="500" alt="Trophy Image"></Image>
                                    </figure>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <figure>
                                        <Image src="/assets/images/home/trophy.png" width="215" height="500" alt="Trophy Image"></Image>
                                    </figure>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <figure>
                                        <Image src="/assets/images/home/trophy.png" width="215" height="500" alt="Trophy Image"></Image>
                                    </figure>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <figure>
                                        <Image src="/assets/images/home/trophy.png" width="215" height="500" alt="Trophy Image"></Image>
                                    </figure>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <figure>
                                        <Image src="/assets/images/home/trophy.png" width="215" height="500" alt="Trophy Image"></Image>
                                    </figure>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <figure>
                                        <Image src="/assets/images/home/trophy.png" width="215" height="500" alt="Trophy Image"></Image>
                                    </figure>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="colC">
                            <Swiper
                                ref={swiperRef}
                                className="description_slider"
                                loop = {true}
                                navigation={{
                                    prevEl: ".milestone-prev",
                                    nextEl: ".milestone-next"
                                }}
                                modules={[Navigation]}
                                direction="vertical"
                                speed={1000}
                                slidesPerView = {1}
                                onSwiper={(swiper) => (swiperRef.current = swiper)}
                            >
                                <SwiperSlide>
                                    <p>Recognizing groundbreaking ideas and technologies that are transforming patient care and shaping the future of healthcare.</p>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <p>Recognizing groundbreaking ideas and technologies that are transforming patient care and shaping the future of healthcare.</p>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <p>Recognizing groundbreaking ideas and technologies that are transforming patient care and shaping the future of healthcare.</p>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <p>Recognizing groundbreaking ideas and technologies that are transforming patient care and shaping the future of healthcare.</p>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <p>Recognizing groundbreaking ideas and technologies that are transforming patient care and shaping the future of healthcare.</p>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}