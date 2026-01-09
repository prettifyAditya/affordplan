"use client"
import Image from "next/image"
import { useEffect } from "react";

export default function BenefitsSec({ ref }){
    useEffect(() => {
            const section = document.querySelector('.swarth_corp_A.sec-pad-all');
            const cardWrapper = document.querySelector('.card_wrapper');
            const benefitsWrapper = document.querySelector('.benefits_wrapper');
            if (!section || !cardWrapper || !benefitsWrapper) return;
    
            let timeoutId;
    
            const observer = new IntersectionObserver(
                ([entry]) => {
                if (entry.isIntersecting) {
                    cardWrapper.classList.remove('active');
                    benefitsWrapper.classList.remove('active');
                    cardWrapper.classList.add('active');
    
                    timeoutId = setTimeout(() => {
                    benefitsWrapper.classList.add('active');
                    }, 1000);
                } else {
                    cardWrapper.classList.remove('active');
                    benefitsWrapper.classList.remove('active');
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
            <div className="swarth_corp_A sec-pad-all" ref={ref}>
                <div className="container">
                    <div className="heading">
                        <h2>All Your Strategic HR Benefits, <span>Seamlessly Integrated</span></h2>
                    </div>
                    <div className="benefits_wrapper">
                        <div className="card_wrapper">
                            <figure>
                                <Image src="/assets/images/swasth/swasth_card.svg" width="450" height="330" alt="" className="card"></Image>
                            </figure>
                        </div>
                        <div className="benefits_col">
                            <div className="icon">
                                <Image src="/assets/images/swasth/finance1.svg" width="50" height="50" alt="Finance Icon"></Image>
                            </div>
                            <p>Streamlined Claims & Support</p>
                        </div>
                        <div className="benefits_col">
                            <div className="icon">
                                <Image src="/assets/images/swasth/finance1.svg" width="50" height="50" alt="Finance Icon"></Image>
                            </div>
                            <p>High-Value Rewards for Talent Retention</p>
                        </div>
                        <div className="benefits_col">
                            <div className="icon">
                                <Image src="/assets/images/swasth/finance1.svg" width="50" height="50" alt="Finance Icon"></Image>
                            </div>
                            <p>Centralized Management Dashboard</p>
                        </div>
                        <div className="benefits_col">
                            <div className="icon">
                                <Image src="/assets/images/swasth/finance1.svg" width="50" height="50" alt="Finance Icon"></Image>
                            </div>
                            <p>Simplified Financial Access & Rewards</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}