"use client"
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation} from "swiper/modules";
import "swiper/css"; 
import "swiper/css/navigation"
import SwiperButton from "@/components/atoms/SwiperButton";
import Button from "@/components/atoms/Button";

const valueData = [
    {
        id: 1,
        heading: "Corporates",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        id: 2,
        heading: "RWA",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        id: 3,
        heading: "Upcoming Product",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        id: 4,
        heading: "Corporates",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        id: 5,
        heading: "RWA",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
]

export default function ValueAddons(){
    const swiperRef = useRef(null);
    return (
      <section>
        <div className="value_add_sec sec-pad">
          <div className="container">
            <div className="heading">
              <h2>
                Value Adons <span>Products</span>
              </h2>
            </div>
            <div className="value_wrapper">
                <div className="value-nav swiper-nav center-full white">
                    <SwiperButton classname="value-prev swiper-prev" />
                    <SwiperButton classname="value-next swiper-next" />
                </div>
                <Swiper
                    ref={swiperRef}
                    className="value_slider"
                    modules={[Navigation]}
                    speed={1000}
                    navigation={{
                        prevEl: ".value-prev",
                        nextEl: ".value-next"
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1.3,
                            spaceBetween: 10,
                        },
                        540: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                        },
                    }}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}>
                    {valueData.map((value) => (
                        <SwiperSlide key={value.id}>
                            <div className="value_col">
                                <div className="top_nav">
                                    <h6>{value.heading}</h6>
                                    <div className="count">
                                        <span>{value.id}</span>
                                    </div>
                                </div>
                                <div className="desc">
                                    <p>{value.desc}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="btn_wrap">
                <Button buttonText="For more detail get in touch" classname="down" />
              </div>
          </div>
        </div>
      </section>
    );
}