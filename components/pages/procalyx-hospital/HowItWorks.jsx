"use client"
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation} from "swiper/modules";
import "swiper/css"; 
import "swiper/css/navigation"

export default function HowItWorks(){
    const swiperRef = useRef(null);
    return (
      <section>
        <div className="how_it_works sec-pad-all procal_hospital">
          <div className="container-fluid">
            <div className="heading">
              <h2>How It Works</h2>
              <p>
                The true coherence of ProCalyx™ lies in its ability to serve two distinct needs through shared intelligence
              </p>
            </div>
            <div className="how_wrapper">
              <div className="how-nav swiper-nav center-full">
                <button type="button" className="how-prev swiper-prev">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18px"
                    height="18px"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.7}
                      d="m7 2l10 10L7 22"
                    ></path>
                  </svg>
                </button>
                <button type="button" className="how-next swiper-next">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18px"
                    height="18px"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.7}
                      d="m7 2l10 10L7 22"
                    ></path>
                  </svg>
                </button>
              </div>
              <Swiper
                ref={swiperRef}
                className="how_slider"
                modules={[Navigation]}
                centeredSlides={true}
                loop={true}
                speed={1000}
                navigation={{
                  prevEl: ".how-prev",
                  nextEl: ".how-next",
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1.3,
                    spaceBetween: 10,
                  },
                  540: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  991: {
                    slidesPerView: 1.5,
                    spaceBetween: 50,
                  },
                }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
              >
                <SwiperSlide>
                  <div className="how_col">
                    <figcaption>
                      <h3>For Hospitals</h3>
                      <p>
                        Data-Driven Market Penetration Gain granular consumption
                        intelligence that transforms your account management
                        strategies. Our platform enables you to efficiently
                        identify opportunities, allocate resources, and build
                        stronger, data-backed hospital partnerships across
                        diverse Indian markets.
                      </p>
                      <Link href="" className="btn">
                        Book a demo{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20px"
                          height="22px"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.2}
                            d="M12 5v14m0 0l6-6m-6 6l-6-6"
                          ></path>
                        </svg>
                      </Link>
                    </figcaption>
                    <figure>
                        <Image src="/assets/images/procalyx/hospital_how1.jpg" width="410" height="340" alt="How Works"></Image>
                    </figure>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="how_col">
                    <figcaption>
                      <h3>For Hospitals</h3>
                      <p>
                        Data-Driven Market Penetration Gain granular consumption
                        intelligence that transforms your account management
                        strategies. Our platform enables you to efficiently
                        identify opportunities, allocate resources, and build
                        stronger, data-backed hospital partnerships across
                        diverse Indian markets.
                      </p>
                      <Link href="" className="btn">
                        Book a demo{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20px"
                          height="22px"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.2}
                            d="M12 5v14m0 0l6-6m-6 6l-6-6"
                          ></path>
                        </svg>
                      </Link>
                    </figcaption>
                    <figure>
                        <Image src="/assets/images/procalyx/hospital_how1.jpg" width="410" height="340" alt="How Works"></Image>
                    </figure>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="how_col">
                    <figcaption>
                      <h3>For Hospitals</h3>
                      <p>
                        Data-Driven Market Penetration Gain granular consumption
                        intelligence that transforms your account management
                        strategies. Our platform enables you to efficiently
                        identify opportunities, allocate resources, and build
                        stronger, data-backed hospital partnerships across
                        diverse Indian markets.
                      </p>
                      <Link href="" className="btn">
                        Book a demo{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20px"
                          height="22px"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.2}
                            d="M12 5v14m0 0l6-6m-6 6l-6-6"
                          ></path>
                        </svg>
                      </Link>
                    </figcaption>
                    <figure>
                        <Image src="/assets/images/procalyx/hospital_how1.jpg" width="410" height="340" alt="How Works"></Image>
                    </figure>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="how_col">
                    <figcaption>
                      <h3>For Hospitals</h3>
                      <p>
                        Data-Driven Market Penetration Gain granular consumption
                        intelligence that transforms your account management
                        strategies. Our platform enables you to efficiently
                        identify opportunities, allocate resources, and build
                        stronger, data-backed hospital partnerships across
                        diverse Indian markets.
                      </p>
                      <Link href="" className="btn">
                        Book a demo{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20px"
                          height="22px"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.2}
                            d="M12 5v14m0 0l6-6m-6 6l-6-6"
                          ></path>
                        </svg>
                      </Link>
                    </figcaption>
                    <figure>
                        <Image src="/assets/images/procalyx/hospital_how1.jpg" width="410" height="340" alt="How Works"></Image>
                    </figure>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    );
}