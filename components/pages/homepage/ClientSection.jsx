"use client"
import { useRef } from "react"
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

export default function ClientSection() {
    const swiperRef = useRef(null);
    return (
        <section>
            <div className="home-secD sec-pad">
                <div className="container">
                <div className="main_wrapper">
                    <div className="heading">
                    <h2>
                        Our Ecosystem is Built on Unwavering
                        <span> Institutional Partnership.</span>
                    </h2>
                    <div className="desc">
                        <p>
                        Mutual trust within a vast network forms the foundation of the ecosystem. Collaboration with institutions committed to long-term financial predictability ensures continuous value for every participant and partner.
                        </p>
                    </div>
                    </div>
                    <div className="client_sec">
                        <div className="colA">
                            <Swiper
                                className="client_slider"
                                loop = {true}
                                ref={swiperRef}
                                modules={[Autoplay]}
                                slidesPerView={1}
                                spaceBetween={40}
                                speed={2000}
                                autoplay = {{
                                    delay: 0,
                                    disableOnInteraction: false,
                                }}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 2.2,
                                        spaceBetween: 10,
                                    },
                                    540: {
                                        slidesPerView: 3,
                                        spaceBetween: 10,
                                    },
                                    991: {
                                        slidesPerView: 4,
                                        spaceBetween: 15,
                                    },
                                }}
                                onSwiper={(swiper) => (swiperRef.current = swiper)}
                            >
                                <SwiperSlide>
                                    <figure>
                                        <Image src="/assets/images/other/client1.svg" alt="Client Logo" width="200" height="110"></Image>
                                    </figure>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <figure>
                                        <Image src="/assets/images/other/client2.svg" alt="Client Logo" width="200" height="110"></Image>
                                    </figure>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <figure>
                                        <Image src="/assets/images/other/client3.svg" alt="Client Logo" width="200" height="110"></Image>
                                    </figure>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <figure>
                                        <Image src="/assets/images/other/client4.svg" alt="Client Logo" width="200" height="110"></Image>
                                    </figure>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <figure>
                                        <Image src="/assets/images/other/client5.svg" alt="Client Logo" width="200" height="110"></Image>
                                    </figure>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <figure>
                                        <Image src="/assets/images/other/client1.svg" alt="Client Logo" width="200" height="110"></Image>
                                    </figure>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <figure>
                                        <Image src="/assets/images/other/client2.svg" alt="Client Logo" width="200" height="110"></Image>
                                    </figure>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <figure>
                                        <Image src="/assets/images/other/client3.svg" alt="Client Logo" width="200" height="110"></Image>
                                    </figure>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <figure>
                                        <Image src="/assets/images/other/client4.svg" alt="Client Logo" width="200" height="110"></Image>
                                    </figure>
                                </SwiperSlide>
                            </Swiper>
                            <Swiper
                                className="client_slider"
                                loop = {true}
                                ref={swiperRef}
                                modules={[Autoplay]}
                                dir="rtl"
                                slidesPerView={1}
                                spaceBetween={40}
                                speed={2000}
                                autoplay = {{
                                    delay: 0,
                                    disableOnInteraction: false,
                                }}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 2.2,
                                        spaceBetween: 10,
                                    },
                                    540: {
                                        slidesPerView: 3,
                                        spaceBetween: 10,
                                    },
                                    991: {
                                        slidesPerView: 4,
                                        spaceBetween: 15,
                                    },
                                }}
                                onSwiper={(swiper) => (swiperRef.current = swiper)}
                            >
                                <SwiperSlide>
                                    <figure>
                                        <Image src="/assets/images/other/client1.svg" alt="Client Logo" width="200" height="110"></Image>
                                    </figure>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <figure>
                                        <Image src="/assets/images/other/client2.svg" alt="Client Logo" width="200" height="110"></Image>
                                    </figure>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <figure>
                                        <Image src="/assets/images/other/client3.svg" alt="Client Logo" width="200" height="110"></Image>
                                    </figure>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <figure>
                                        <Image src="/assets/images/other/client4.svg" alt="Client Logo" width="200" height="110"></Image>
                                    </figure>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <figure>
                                        <Image src="/assets/images/other/client5.svg" alt="Client Logo" width="200" height="110"></Image>
                                    </figure>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <figure>
                                        <Image src="/assets/images/other/client1.svg" alt="Client Logo" width="200" height="110"></Image>
                                    </figure>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <figure>
                                        <Image src="/assets/images/other/client2.svg" alt="Client Logo" width="200" height="110"></Image>
                                    </figure>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <figure>
                                        <Image src="/assets/images/other/client3.svg" alt="Client Logo" width="200" height="110"></Image>
                                    </figure>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <figure>
                                        <Image src="/assets/images/other/client4.svg" alt="Client Logo" width="200" height="110"></Image>
                                    </figure>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="colB">
                            <div className="logo-vector">
                                <video src="/assets/video/vector-video.mp4" autoPlay muted loop playsInline></video>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}