"use client"
import Image from "next/image"
import { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation} from "swiper/modules";
import "swiper/css"; 
import "swiper/css/navigation"
import SwiperButton from "@/components/atoms/SwiperButton";

export default function TrendsSec(){
    const swiperRef = useRef(null);
    return(
        <section>
            <div className="trends_sec sec-pad-all">
                <div className="container">
                    <div className="heading">
                        <h2>Insights & Trends <span>The future of healthcare</span></h2>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="trends_wrapper">
                        <div className="trends-nav swiper-nav group">
                            <SwiperButton classname="trends-prev swiper-prev" />
                            <SwiperButton classname="trends-next swiper-next" />
                        </div>
                        <Swiper
                            ref={swiperRef}
                            className="trends_slider"
                            modules={[Navigation]}
                            speed={1000}
                            navigation={{
                                prevEl: ".trends-prev",
                                nextEl: ".trends-next"
                            }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1.3,
                                    spaceBetween: 15,
                                },
                                768: {
                                    slidesPerView: 1.2,
                                    spaceBetween: 40,
                                }
                            }}
                            onSwiper={(swiper) => (swiperRef.current = swiper)}>
                                <SwiperSlide>
                                    <div className="trends_col">
                                        <figure>    
                                            <Image src="/assets/images/media/trends1.jpg" width="550" height="500" alt="Trends Image"></Image>
                                        </figure>
                                        <figcaption>
                                            <div className="desc">
                                                <h6>Empowering Affordable Healthcare An Exclusive Interview with Dr. Pruthvinath  Kancherla, Co-Founder of Affordplan®</h6>
                                                <p className="date">June, 2025</p>
                                            </div>
                                        </figcaption>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="trends_col">
                                        <figure>    
                                            <Image src="/assets/images/media/trends2.jpg" width="550" height="500" alt="Trends Image"></Image>
                                        </figure>
                                        <figcaption>
                                            <div className="desc">
                                                <h6>Empowering Affordable Healthcare An Exclusive Interview with Dr. Pruthvinath  Kancherla, Co-Founder of Affordplan®</h6>
                                                <p className="date">June, 2025</p>
                                            </div>
                                        </figcaption>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="trends_col">
                                        <figure>    
                                            <Image src="/assets/images/media/trends1.jpg" width="550" height="500" alt="Trends Image"></Image>
                                        </figure>
                                        <figcaption>
                                            <div className="desc">
                                                <h6>Empowering Affordable Healthcare An Exclusive Interview with Dr. Pruthvinath  Kancherla, Co-Founder of Affordplan®</h6>
                                                <p className="date">June, 2025</p>
                                            </div>
                                        </figcaption>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="trends_col">
                                        <figure>    
                                            <Image src="/assets/images/media/trends2.jpg" width="550" height="500" alt="Trends Image"></Image>
                                        </figure>
                                        <figcaption>
                                            <div className="desc">
                                                <h6>Empowering Affordable Healthcare An Exclusive Interview with Dr. Pruthvinath  Kancherla, Co-Founder of Affordplan®</h6>
                                                <p className="date">June, 2025</p>
                                            </div>
                                        </figcaption>
                                    </div>
                                </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}