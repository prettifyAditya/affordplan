"use client"
import Image from "next/image"
import { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation} from "swiper/modules";
import "swiper/css"; 
import "swiper/css/navigation"
import SwiperButton from "@/components/atoms/SwiperButton"
import Button from "@/components/atoms/Button";

export default function MaternitySec({ onClick }){
    const swiperRef = useRef(null);
    return(
        <section>
            <div className="swasth-secD sec-pad-all">
                <div className="container">
                    <div className="maternity_wrapper">
                        <video src="/assets/video/maternity_banner.mp4" poster="/assets/video/maternity_banner_poster.png" autoPlay muted loop playsInline></video>
                        <div className="content">
                            <div className="heading">
                                <h2>Comprehensive Financial Support for <span>Maternity Care.</span></h2>
                                <p>Financial stress is eliminated across the maternity journey—from prenatal checkups and scans to delivery and postnatal care. Dedicated plans provide the necessary coverage and cashback to ensure the primary focus remains on health and family.</p>
                            </div>
                            <div className="benefits_wrapper">
                                <h6>Benefits</h6>
                                <div className="benefits_slider_wrap">
                                    <div className="benefits-nav swiper-nav center-full no-bg">
                                        <SwiperButton classname="benefits-prev swiper-prev" />
                                        <SwiperButton classname="benefits-next swiper-next" />
                                    </div>
                                    <Swiper
                                        ref={swiperRef}
                                        className="benefits_slider"
                                        modules={[Navigation]}
                                        speed={1000}
                                        navigation={{
                                            prevEl: ".benefits-prev",
                                            nextEl: ".benefits-next"
                                        }}
                                        breakpoints={{
                                            0: {
                                            slidesPerView: 1.3,
                                            spaceBetween: 10,
                                            },
                                            540: {
                                            slidesPerView: 2,
                                            spaceBetween: 10,
                                            }
                                        }}
                                        onSwiper={(swiper) => (swiperRef.current = swiper)}>
                                        <SwiperSlide>
                                            <div className="maternity_col">
                                                <div className="info">
                                                    <h5>Pre-Natal Savings Fund</h5>
                                                    <p>Early saving opportunities with dedicated rewards on routine checkups and diagnostic expenses</p>
                                                </div>
                                                <div className="count">01</div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="maternity_col">
                                                <div className="info">
                                                    <h5>Pre-Natal Savings Fund</h5>
                                                    <p>Early saving opportunities with dedicated rewards on routine checkups and diagnostic expenses</p>
                                                </div>
                                                <div className="count">02</div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="maternity_col">
                                                <div className="info">
                                                    <h5>Pre-Natal Savings Fund</h5>
                                                    <p>Early saving opportunities with dedicated rewards on routine checkups and diagnostic expenses</p>
                                                </div>
                                                <div className="count">02</div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="maternity_col">
                                                <div className="info">
                                                    <h5>Pre-Natal Savings Fund</h5>
                                                    <p>Early saving opportunities with dedicated rewards on routine checkups and diagnostic expenses</p>
                                                </div>
                                                <div className="count">02</div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                                <Button classname="white down" onClick={onClick} buttonText="Know More" />
                            </div>
                        </div>
                        <figure className="logo_icon">
                            <Image src="/assets/logo-vector.svg" width="80" height="60" alt="Logo Icon"></Image>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}