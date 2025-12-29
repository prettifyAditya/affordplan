"use client"
import { useRef } from "react"
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

export default function Milestone(){
    const swiperRef = useRef(null);
    return(
        <div className="home-secG sec-pad-all">
            <div className="container">
                <div className="heading">
                    <h2>Milestones Defining <span>The Path of Innovation.</span></h2>
                </div>
                <div className="milestone_wrapper">
                    <div className="colA">
                        <Swiper
                            ref={swiperRef}
                            className="heading_slider"
                            loop = {true}
                            direction="vertical"
                            spaceBetween={20}
                            speed={2000}
                            autoplay = {{
                                delay: 0,
                                disableOnInteraction: false,
                            }}
                            slidesPerView = {1}
                            modules={[Autoplay]}
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
                            ref={swiperRef}
                            modules={[Autoplay]}
                            spaceBetween={20}
                            speed={2000}
                            autoplay = {{
                                delay: 0,
                                disableOnInteraction: false,
                            }}
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
                            direction="vertical"
                            spaceBetween={20}
                            speed={2000}
                            autoplay = {{
                                delay: 0,
                                disableOnInteraction: false,
                            }}
                            slidesPerView = {1}
                            modules={[Autoplay]}
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
    )
}