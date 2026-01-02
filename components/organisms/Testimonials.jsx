"use client"
import Image from "next/image"
import { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation} from "swiper/modules";
import "swiper/css"; 
import "swiper/css/navigation"
import SwiperButton from "@/components/atoms/SwiperButton";
import "@/uploads/styles/component/component.css"
export default function Testimonials(){
    const swiperRef = useRef(null);
    return(
        <section>
            <div className="home-secF sec-pad">
                <div className="container">
                    <div className="upper_sec">
                        <div className="heading">
                            <h2>Voices of the <span>Swasth Community</span></h2>
                        </div>
                        <div className="testimonial-nav swiper-nav">
                            <SwiperButton classname="testimonial-prev swiper-prev" />
                            <SwiperButton classname="testimonial-next swiper-next" />
                        </div>
                    </div>
                    <div className="testimonial_wrapper">
                        <Swiper
                            ref={swiperRef}
                            className="testimonial_slider"
                            modules={[Navigation]}
                            speed={1000}
                            navigation={{
                                prevEl: ".testimonial-prev",
                                nextEl: ".testimonial-next"
                            }}
                            breakpoints={{
                                0: {
                                slidesPerView: 1.3,
                                spaceBetween: 15,
                                },
                                540: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                                },
                                768: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                                }
                            }}
                            onSwiper={(swiper) => (swiperRef.current = swiper)}>
                            <SwiperSlide>
                                <div className="testimonial_col">
                                    <div className="icon">
                                        <Image src="/assets/images/other/testimony.jpg" width="81" height="81" alt="Testimony Image"></Image>
                                    </div>
                                    <div className="desc">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                    <div className="desgn">
                                        <p className="name">Name Here</p>
                                        <p className="loc">Gurugram</p>
                                    </div>
                                    <div className="quote">
                                        <Image src="/assets/icon/quote.svg" width="70" height="70" alt="Quote Icon"></Image>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial_col">
                                    <div className="icon">
                                        <Image src="/assets/images/other/testimony.jpg" width="81" height="81" alt="Testimony Image"></Image>
                                    </div>
                                    <div className="desc">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                    <div className="desgn">
                                        <p className="name">Name Here</p>
                                        <p className="loc">Gurugram</p>
                                    </div>
                                    <div className="quote">
                                        <Image src="/assets/icon/quote.svg" width="70" height="70" alt="Quote Icon"></Image>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial_col">
                                    <div className="icon">
                                        <Image src="/assets/images/other/testimony.jpg" width="81" height="81" alt="Testimony Image"></Image>
                                    </div>
                                    <div className="desc">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                    <div className="desgn">
                                        <p className="name">Name Here</p>
                                        <p className="loc">Gurugram</p>
                                    </div>
                                    <div className="quote">
                                        <Image src="/assets/icon/quote.svg" width="70" height="70" alt="Quote Icon"></Image>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial_col">
                                    <div className="icon">
                                        <Image src="/assets/images/other/testimony.jpg" width="81" height="81" alt="Testimony Image"></Image>
                                    </div>
                                    <div className="desc">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                    <div className="desgn">
                                        <p className="name">Name Here</p>
                                        <p className="loc">Gurugram</p>
                                    </div>
                                    <div className="quote">
                                        <Image src="/assets/icon/quote.svg" width="70" height="70" alt="Quote Icon"></Image>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}