"use client"
import Image from "next/image"
import { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination  } from "swiper/modules";
import "swiper/css"; 
import "swiper/css/navigation"
import "swiper/css/pagination"
import SwiperButton from "@/components/atoms/SwiperButton";

export default function LifeOrganisation(){
    const swiperRef = useRef(null);
    return(
        <section>
            <div className="life_org_sec sec-pad-all">
                <div className="container">
                    <div className="heading">
                        <h2>Life at the <span>Organization</span></h2>
                        <p>Innovation thrives where talent feels valued. A glimpse into an environment where collaboration, learning, and celebration are part of the daily routine.</p>
                    </div>
                </div>
                <div className="life_wrapper">
                    <Swiper
                        ref={swiperRef}
                        className="life_slider"
                        modules={[Navigation, Pagination]}
                        speed={1000}
                        navigation={{
                            prevEl: ".life-prev",
                            nextEl: ".life-next"
                        }}
                        pagination= {{
                            enabled: true, 
                            el: '.progressbar',
                            type: 'progressbar'
                        }}
                        centeredSlides={true}
                        breakpoints={{
                            0: {
                                slidesPerView: 1.3,
                                spaceBetween: 15,
                            },
                            768: {
                                slidesPerView: 1.8,
                                spaceBetween: 30,
                            },
                            991: {
                                slidesPerView: 2.5,
                                spaceBetween: 20,
                            }
                        }}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}>
                            <SwiperSlide>
                                <figure>
                                    <Image src="/assets/images/career/career1.jpg" width="550" height="430" alt="Career"></Image>
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide>
                                <figure>
                                    <Image src="/assets/images/career/career1.jpg" width="550" height="430" alt="Career"></Image>
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide>
                                <figure>
                                    <Image src="/assets/images/career/career1.jpg" width="550" height="430" alt="Career"></Image>
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide>
                                <figure>
                                    <Image src="/assets/images/career/career1.jpg" width="550" height="430" alt="Career"></Image>
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide>
                                <figure>
                                    <Image src="/assets/images/career/career1.jpg" width="550" height="430" alt="Career"></Image>
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide>
                                <figure>
                                    <Image src="/assets/images/career/career1.jpg" width="550" height="430" alt="Career"></Image>
                                </figure>
                            </SwiperSlide>
                    </Swiper>
                    <div className="nav_wrapper swiper-nav black-border">
                        <SwiperButton classname="life-prev swiper-prev" />
                        <div className="progressbar"></div>
                        <SwiperButton classname="life-next swiper-next" />
                    </div>
                </div>
            </div>
        </section>
    )
}