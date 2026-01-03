"use client"
import Image from "next/image"
import { useEffect } from "react";

export default function MedicalIntegrated(){
    useEffect(() => {
        const section = document.querySelector('.amya_wellness_A.sec-pad');
        const cardWrapper = document.querySelector('.card_wrapper');
        const amyaWrapper = document.querySelector('.amya_wrapper');
        if (!section || !cardWrapper || !amyaWrapper) return;

        let timeoutId;

        const observer = new IntersectionObserver(
            ([entry]) => {
            if (entry.isIntersecting) {
                cardWrapper.classList.remove('active');
                amyaWrapper.classList.remove('active');
                cardWrapper.classList.add('active');

                timeoutId = setTimeout(() => {
                amyaWrapper.classList.add('active');
                }, 1000);
            } else {
                cardWrapper.classList.remove('active');
                amyaWrapper.classList.remove('active');
                if (timeoutId) {
                    clearTimeout(timeoutId);
                    timeoutId = null;
                }
            }
            },
            {
            threshold: 0,
            rootMargin: '0px 0px -60% 0px',
            }
        );

        observer.observe(section);

        return () => {
            observer.disconnect();
            clearTimeout(timeoutId);
        };
    }, []);
    return(
        <section>
            <div className="amya_wellness_A sec-pad">
                <div className="container">
                    <div className="heading">
                        <h2>Integrated Wellness Support on a <span>Medically-Curated Platform.</span></h2>
                    </div>
                    <div className="amya_wrapper">
                        <div className="card_wrapper">
                            <figure>
                                <Image src="/assets/images/swasth/wellness_animate.svg" width="450" height="330" alt="" className="card"></Image>
                            </figure>
                        </div>
                        <div className="amya_col">
                            <div className="icon">
                                <Image src="/assets/images/swasth/wellness1.svg" width="50" height="50" alt="Finance Icon"></Image>
                            </div>
                            <p>Specialized Chronic Care Management</p>
                        </div>
                        <div className="amya_col">
                            <div className="icon">
                                <Image src="/assets/images/swasth/wellness2.svg" width="50" height="50" alt="Finance Icon"></Image>
                            </div>
                            <p>Single-Platform Simplicity</p>
                        </div>
                        <div className="amya_col">
                            <div className="icon">
                                <Image src="/assets/images/swasth/wellness3.svg" width="50" height="50" alt="Finance Icon"></Image>
                            </div>
                            <p>Curated Partner Network</p>
                        </div>
                        <div className="amya_col">
                            <div className="icon">
                                <Image src="/assets/images/swasth/wellness4.svg" width="50" height="50" alt="Finance Icon"></Image>
                            </div>
                            <p>Proactive Prevention Pathways</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}