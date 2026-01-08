"use client"
import Image from "next/image"
import { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import Link from "next/link"
import SwiperButton from "@/components/frontendcomponents/atoms/SwiperButton"

export default function FutureColleagues({ testimonials }) {
    const swiperRef = useRef(null);

    if (!testimonials || testimonials.length === 0) return null;

    return (
        <section>
            <div className="future_colleague_sec sec-pad">
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
                                    0: { slidesPerView: 1.3, spaceBetween: 10 },
                                    768: { slidesPerView: 2, spaceBetween: 10 }
                                }}
                                onSwiper={(swiper) => (swiperRef.current = swiper)}
                            >
                                {testimonials.map((item) => (
                                    <SwiperSlide key={item.TestimonialID}>
                                        <div className="future_col">
                                            <div className="user_icon">
                                                <Image
                                                    src={`/OnlineImages/TestimonialImages/${item.TestimonialImage}`}
                                                    width={85}
                                                    height={85}
                                                    alt={item.TestimonialName}
                                                />
                                            </div>
                                            <div className="desc">
                                                <p>{item.Description}</p>
                                            </div>
                                            <div className="details">
                                                <h6>{item.TestimonialName}</h6>
                                                <p>{item.Location}</p>
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
