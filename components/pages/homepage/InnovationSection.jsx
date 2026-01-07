"use client"
import Image from "next/image"
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function InnovationSection() {
    useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    /* ---------------- Sticky GSAP Section ---------------- */

    const stickyWraps = document.querySelectorAll(".sticky-wrap");
    const stickySection = document.querySelector(".home-secC");
    const stickySec = document.querySelector(".sticky-sec");

    if (stickySection && stickyWraps.length) {
      gsap.to(stickyWraps, {
        scrollTrigger: {
          trigger: stickySection,
          start: "top 50px",
          end: `+=${stickyWraps.length * 20}%`,
          pin: true,
          scrub: true,
          markers: false,
          onUpdate: (self) => {
            const progress =
              self.progress * (stickyWraps.length - 1);

            stickyWraps.forEach((wrap, index) => {
              wrap.classList.toggle("active", index <= progress);
            });

            stickySec?.classList.toggle(
              "all-active",
              Math.floor(progress) === stickyWraps.length - 1
            );
          },
        },
      });
    }

    /* ---------------- Cleanup ---------------- */

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
    return(
        <section>
            <div className="home-secC sec-pad">
                <div className="container">
                    <div className="heading">
                        <h2>The Pioneer in Next-Generation<span> Financial Ecosystems.</span></h2>
                    </div>
                    <div className="sticky-sec">
                        <div className="sticky-wrap">
                            <div className="fake-col"></div>
                        </div>
                        <div className="sticky-wrap">
                            <div className="cards_outer_col">
                                <div className="cards_col">
                                    <div className="icon">
                                        <Image src="/assets/images/home/card1.svg" width="50" height="50" alt="Card Icon"></Image>
                                    </div>
                                    <div className="content">
                                        <h5>30+ Major cities</h5>
                                        <p>Delivering services and solutions across more than 30 major cities, ensuring nationwide accessibility.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sticky-wrap">
                            <div className="cards_outer_col">
                                <div className="cards_col">
                                    <div className="icon">
                                        <Image src="/assets/images/home/card2.svg" width="50" height="50" alt="Card Icon"></Image>
                                    </div>
                                    <div className="content">
                                        <h5>100+ Hospitals PAN India</h5>
                                        <p>Partnered with 100+ leading hospitals across the country to provide seamless, quality healthcare access.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sticky-wrap">
                            <div className="cards_outer_col">
                                <div className="cards_col">
                                    <div className="icon">
                                        <Image src="/assets/images/home/card3.svg" width="50" height="50" alt="Card Icon"></Image>
                                    </div>
                                    <div className="content">   
                                        <h5>8 Lakh+ Families Across India</h5>
                                        <p>Trusted by over 8 lakh families, supporting their health, safety, and well-being.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sticky-wrap">
                            <div className="cards_outer_col">
                                <div className="fake-col"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}