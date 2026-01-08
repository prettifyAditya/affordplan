"use client"
import Image from "next/image"
import { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css"; 
import "swiper/css/navigation"
import "swiper/css/autoplay";
import "swiper/css/pagination";
import SwiperButton from "@/components/frontendcomponents/atoms/SwiperButton";

const journeyData = [
    {
        year: "2016",
        title: "The Foundation",
        description:
            "The Foundation - Founded on the belief that financial barriers should not obstruct quality care. Affordplan was established to transform healthcare payments into predictable savings.",
        image: "/assets/images/about/journey1.jpg",
    },
    {
        year: "2017",
        title: "The Foundation",
        description:
            "The Foundation - Founded on the belief that financial barriers should not obstruct quality care. Affordplan was established to transform healthcare payments into predictable savings.",
        image: "/assets/images/about/journey1.jpg",
    },
    {
        year: "2018",
        title: "The Foundation",
        description:
            "The Foundation - Founded on the belief that financial barriers should not obstruct quality care. Affordplan was established to transform healthcare payments into predictable savings.",
        image: "/assets/images/about/journey1.jpg",
    },
    {
        year: "2019",
        title: "The Foundation",
        description:
            "The Foundation - Founded on the belief that financial barriers should not obstruct quality care. Affordplan was established to transform healthcare payments into predictable savings.",
        image: "/assets/images/about/journey1.jpg",
    },
    {
        year: "2020",
        title: "The Foundation",
        description:
            "The Foundation - Founded on the belief that financial barriers should not obstruct quality care. Affordplan was established to transform healthcare payments into predictable savings.",
        image: "/assets/images/about/journey1.jpg",
    },
    {
        year: "2021",
        title: "The Foundation",
        description:
            "The Foundation - Founded on the belief that financial barriers should not obstruct quality care. Affordplan was established to transform healthcare payments into predictable savings.",
        image: "/assets/images/about/journey1.jpg",
    },
    {
        year: "2022",
        title: "The Foundation",
        description:
            "The Foundation - Founded on the belief that financial barriers should not obstruct quality care. Affordplan was established to transform healthcare payments into predictable savings.",
        image: "/assets/images/about/journey1.jpg",
    },
    {
        year: "2023",
        title: "The Foundation",
        description:
            "The Foundation - Founded on the belief that financial barriers should not obstruct quality care. Affordplan was established to transform healthcare payments into predictable savings.",
        image: "/assets/images/about/journey1.jpg",
    },
];

export default function JourneySec(){
    function updateJourneyBullets(activeIndex) {
        const bullets = document.querySelectorAll(
            ".about-journey-pagination .journey-btn"
        );

        bullets.forEach((btn, index) => {
            btn.classList.remove("prev", "next");

            if (index < activeIndex) btn.classList.add("prev");
            if (index > activeIndex) btn.classList.add("next");
        });
    }
    return(
        <section>
            <div className="journey_sec sec-pad-all">
                <div className="container">
                    <div className="main_wrapper">
                        <div className="heading">
                            <h2>
                                A Decade of Bridging the Gap Between{" "}
                                <span>Healthcare</span> and{" "}
                                <span>Affordability.</span>
                            </h2>
                        </div>

                        <div className="navigation_wrap">
                            <div className="about-journey-pagination"></div>
                        </div>

                        <div className="about_journey_wrap">
                            {/* Navigation */}
                            <div className="journey-nav swiper-nav center-full">
                                <button type="button" className="about-journey-prev swiper-prev">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24">
                                        <path fill="none" stroke="#fff" strokeWidth={1.7} d="m7 2l10 10L7 22"></path>
                                    </svg>
                                </button>
                                <button type="button" className="about-journey-next swiper-next">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24">
                                        <path fill="none" stroke="#fff" strokeWidth={1.7} d="m7 2l10 10L7 22"></path>
                                    </svg>
                                </button>
                            </div>

                            <Swiper
                                modules={[Navigation, Autoplay, Pagination]}
                                className="about_journey_slider"
                                slidesPerView={1}
                                spaceBetween={20}
                                speed={1500}
                                loop={false}
                                // autoplay={{
                                //     delay: 2000,
                                //     pauseOnMouseEnter: true,
                                //     disableOnInteraction: false,
                                // }}
                                navigation={{
                                    prevEl: ".about-journey-prev",
                                    nextEl: ".about-journey-next",
                                }}
                                pagination={{
                                    el: ".about-journey-pagination",
                                    clickable: true,
                                    bulletClass: "journey-btn",
                                    bulletActiveClass: "active",
                                    renderBullet: (index, className) => `
                                        <button type="button" class="${className}">
                                            <span></span>
                                            <p>${journeyData[index].year}</p>
                                        </button>
                                    `,
                                }}
                                onInit={(swiper) => {
                                    updateJourneyBullets(swiper.activeIndex);
                                }}
                                onSlideChange={(swiper) => {
                                    updateJourneyBullets(swiper.activeIndex);
                                }}
                            >
                                {journeyData.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="year" data-year={item.year}>
                                            <figcaption>
                                                <div className="content">
                                                    <h5>{item.year}</h5>
                                                    <p>{item.description}</p>
                                                </div>
                                            </figcaption>
                                            <figure>
                                                <Image
                                                    src={item.image}
                                                    width={450}
                                                    height={320}
                                                    alt={`Journey ${item.year}`}
                                                />
                                            </figure>
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