"use client"
import Image from "next/image"
import { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation} from "swiper/modules";
import "swiper/css"; 
import "swiper/css/navigation"
import SwiperButton from "@/components/atoms/SwiperButton"

const trustedData = [
    {
        id: 1,
        imgSrc: "/assets/images/other/user_testimony.jpg",
        desc: "Their solutions were practical, well-planned, and easy to implement. We’ve seen clear improvements in efficiency and coordination across teams.",
        name: "Sunil Kumar",
        location: "Director, West Hospital",
    },
    {
        id: 2,
        imgSrc: "/assets/images/other/user_testimony.jpg",
        desc: "What stood out most was their ability to listen and turn our goals into actionable outcomes. The collaboration felt seamless from start to finish.",
        name: "Aisha Khan",
        location: "CEO, Health Innovations",
    },
    {
        id: 3,
        imgSrc: "/assets/images/other/user_testimony.jpg",
        desc: "The team remained professional, transparent, and responsive throughout the engagement. Their focus on long-term value made them a trusted partner.",
        name: "Raj Patel",
        location: "CTO, MediTech Solutions",
    },
    {
        id: 4,
        imgSrc: "/assets/images/other/user_testimony.jpg",
        desc: "Their solutions were practical, well-planned, and easy to implement. We’ve seen clear improvements in efficiency and coordination across teams.",
        name: "Sunil Kumar",
        location: "Director, West Hospital",
    },
    {
        id: 5,
        imgSrc: "/assets/images/other/user_testimony.jpg",
        desc: "What stood out most was their ability to listen and turn our goals into actionable outcomes. The collaboration felt seamless from start to finish.",
        name: "Aisha Khan",
        location: "CEO, Health Innovations",
    },
]


export default function TrustedClients(){
    const swiperRef = useRef(null);
    return(
        <section>
            <div className="trusted_clients sec-pad-all">
                <div className="container">
                    <div className="upper_sec">
                        <div className="heading">
                            <h2>Trusted by Our <span>Clients</span></h2>
                            <p>Hear directly from the people who’ve experienced our commitment to quality, reliability, and long-term value.</p>
                        </div>
                        <div className="trusted-nav swiper-nav group">
                            <SwiperButton classname="trusted-prev swiper-prev" />
                            <SwiperButton classname="trusted-next swiper-next" />
                        </div>
                    </div>
                    <div className="trusted_wapper">
                        <Swiper
                            ref={swiperRef}
                            className="trusted_slider"
                            modules={[Navigation]}
                            speed={1000}
                            navigation={{
                                prevEl: ".trusted-prev",
                                nextEl: ".trusted-next"
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
                                {trustedData.map((trusted) => (
                                    <SwiperSlide key={trusted.id}>
                                        <div className="trusted_col">
                                            <div className="quote">
                                                <Image src="/assets/icon/quote_grad.svg" width="70" height="70" alt="Quote Icon"></Image>
                                            </div>
                                            <div className="desc">
                                                <p>{trusted.desc}</p>
                                            </div>
                                            <div className="details">
                                                <div className="icon">
                                                    <Image src={trusted.imgSrc} width="81" height="81" alt="trusted Image"></Image>
                                                </div>
                                                <div className="desgn">
                                                    <p className="name">{trusted.name}</p>
                                                    <p className="loc">{trusted.location}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}