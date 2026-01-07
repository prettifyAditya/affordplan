import Image from "next/image";

export default function HeroSection(){
    return(
        <section>
            <div className="partner_hero">
                <div className="bg">
                    <div className="banner-wrapper">
                        <div className="container">
                            <div className="heading">
                                <h2>Our <span>Partners</span></h2>
                                <button type="button" className="btn">Partner With Us 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24">
                                        <path fill="currentColor" fillRule="evenodd" d="M4.47 9.4a.75.75 0 0 1 1.06 0l6.364 6.364a.25.25 0 0 0 .354 0L18.612 9.4a.75.75 0 0 1 1.06 1.06l-6.364 6.364a1.75 1.75 0 0 1-2.475 0L4.47 10.46a.75.75 0 0 1 0-1.06" clipRule="evenodd"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}