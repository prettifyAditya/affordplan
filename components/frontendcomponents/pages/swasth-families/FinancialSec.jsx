"use client"
import Image from "next/image"
import { useEffect } from "react";

export default function FinancialSec(){
    useEffect(() => {
        const section = document.querySelector('.swasth-secC.sec-pad-all');
        const cardWrapper = document.querySelector('.card_wrapper');
        const financialWrapper = document.querySelector('.financial_wrapper');
        if (!section || !cardWrapper || !financialWrapper) return;

        let timeoutId;

        const observer = new IntersectionObserver(
            ([entry]) => {
            if (entry.isIntersecting) {
                cardWrapper.classList.remove('active');
                financialWrapper.classList.remove('active');
                cardWrapper.classList.add('active');

                timeoutId = setTimeout(() => {
                financialWrapper.classList.add('active');
                }, 1000);
            } else {
                cardWrapper.classList.remove('active');
                financialWrapper.classList.remove('active');
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
            <div className="swasth-secC sec-pad-all">
                <div className="container">
                    <div className="heading">
                        <h2>Seamlessly Integrated, <span>Essential Financial Benefits.</span></h2>
                    </div>
                    <div className="financial_wrapper">
                        <div className="card_wrapper">
                            <figure>
                                <Image src="/assets/images/swasth/swasth_card.svg" width="450" height="330" alt="" className="card"></Image>
                            </figure>
                        </div>
                        <div className="finance_col">
                            <div className="icon">
                                <Image src="/assets/images/swasth/finance1.svg" width="50" height="50" alt="Finance Icon"></Image>
                            </div>
                            <p>Guaranteed Cashback Rewards</p>
                        </div>
                        <div className="finance_col">
                            <div className="icon">
                                <Image src="/assets/images/swasth/finance2.svg" width="50" height="50" alt="Finance Icon"></Image>
                            </div>
                            <p>Coverage for Family & Friends</p>
                        </div>
                        <div className="finance_col">
                            <div className="icon">
                                <Image src="/assets/images/swasth/finance3.svg" width="50" height="50" alt="Finance Icon"></Image>
                            </div>
                            <p>Hassle-Free Lab Test Scheduling</p>
                        </div>
                        <div className="finance_col">
                            <div className="icon">
                                <Image src="/assets/images/swasth/finance4.svg" width="50" height="50" alt="Finance Icon"></Image>
                            </div>
                            <p>Savings on Doorstep Medicine Delivery</p>
                        </div>
                        <div className="finance_col">
                            <div className="icon">
                                <Image src="/assets/images/swasth/finance5.svg" width="50" height="50" alt="Finance Icon"></Image>
                            </div>
                            <p>Complimentary Insurance cover</p>
                        </div>
                        <div className="finance_col">
                            <div className="icon">
                                <Image src="/assets/images/swasth/finance6.svg" width="50" height="50" alt="Finance Icon"></Image>
                            </div>
                            <p>Exclusive Medical Offers</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}