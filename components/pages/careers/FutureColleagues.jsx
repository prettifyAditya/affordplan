"use client"
import Image from "next/image"
import { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation} from "swiper/modules";
import "swiper/css"; 
import "swiper/css/navigation"
import Link from "next/link"
import SwiperButton from "@/components/atoms/SwiperButton"

export default function FutureColleagues(){
    const swiperRef = useRef(null);
    return(
        <section>
            <div className="future_colleague_sec sec-pad-all">
                <div className="container">
                    <div className="future_wrapper">
                        <div className="colA">
                            <div className="heading">
                                <h2>Meet <span>Future Colleagues</span></h2>
                            </div>
                            <div className="career-nav swiper-nav group">
                                <SwiperButton classname="career-prev swiper-prev" />
                                <SwiperButton classname="career-next swiper-next" />
                            </div>
                            <div className="details">
                                <h6>Feel free to contact us directly:</h6>
                                <Link href="mailto:hellohr@affordplan.com">hellohr@affordplan.com</Link>
                                <Link href="tel:+91 99999 99999">+91 99999 99999</Link>
                            </div>
                        </div>
                        <div className="colB">
                            <Swiper
                                ref={swiperRef}
                                className="career_slider"
                                modules={[Navigation]}
                                speed={1000}
                                navigation={{
                                    prevEl: ".career-prev",
                                    nextEl: ".career-next"
                                }}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1.3,
                                        spaceBetween: 10,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 10,
                                    }
                                }}
                                onSwiper={(swiper) => (swiperRef.current = swiper)}>
                                    <SwiperSlide>
                                        <div className="future_col">
                                            <div className="user_icon">
                                                <Image src="/assets/images/career/user.jpg" width="85" height="85" alt="User"></Image>
                                            </div>
                                            <div className="desc">
                                                <p>This isn't just another job. We operate at the complex intersection of fintech and healthcare, solving challenges that have a direct, positive impact on millions of lives. If you are passionate about untangling complex problems and building solutions that truly matter, you will thrive here.</p>
                                            </div>
                                            <div className="details">
                                                <h6>First name last name</h6>
                                                <p>Sr. Mgr. Sales at Affordplan</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="future_col">
                                            <div className="user_icon">
                                                <Image src="/assets/images/career/user.jpg" width="85" height="85" alt="User"></Image>
                                            </div>
                                            <div className="desc">
                                                <p>This isn't just another job. We operate at the complex intersection of fintech and healthcare, solving challenges that have a direct, positive impact on millions of lives. If you are passionate about untangling complex problems and building solutions that truly matter, you will thrive here.</p>
                                            </div>
                                            <div className="details">
                                                <h6>First name last name</h6>
                                                <p>Sr. Mgr. Sales at Affordplan</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="future_col">
                                            <div className="user_icon">
                                                <Image src="/assets/images/career/user.jpg" width="85" height="85" alt="User"></Image>
                                            </div>
                                            <div className="desc">
                                                <p>This isn't just another job. We operate at the complex intersection of fintech and healthcare, solving challenges that have a direct, positive impact on millions of lives. If you are passionate about untangling complex problems and building solutions that truly matter, you will thrive here.</p>
                                            </div>
                                            <div className="details">
                                                <h6>First name last name</h6>
                                                <p>Sr. Mgr. Sales at Affordplan</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="future_col">
                                            <div className="user_icon">
                                                <Image src="/assets/images/career/user.jpg" width="85" height="85" alt="User"></Image>
                                            </div>
                                            <div className="desc">
                                                <p>This isn't just another job. We operate at the complex intersection of fintech and healthcare, solving challenges that have a direct, positive impact on millions of lives. If you are passionate about untangling complex problems and building solutions that truly matter, you will thrive here.</p>
                                            </div>
                                            <div className="details">
                                                <h6>First name last name</h6>
                                                <p>Sr. Mgr. Sales at Affordplan</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}