"use client"
import { useRef } from "react"
import ProductHeroSection from "@/components/molecules/ProductHeroSection"
import InfoGraphic from "../../organisms/InfoGraphic"
import WhySliderSec from "@/components/organisms/WhySliderSec"
import NetworkFormSec from "@/components/organisms/NetworkFormSec"
import Testimonials from "@/components/organisms/Testimonials"
import BenefitsSec from "./BenefitsSec"
import "@/uploads/styles/swasth/swasth.css"

const whyData = [
    {
        id: 1,
        iconSrc: "/assets/images/swasth/swasth-cor1.svg",
        heading: "Elevated Talent Retention",
        desc: "Direct mitigation of employee turnover by easing financial stress and building long-term institutional loyalty",
    },
    {
        id: 2,
        iconSrc: "/assets/images/swasth/swasth-cor2.svg",
        heading: "Elevated Talent Retention",
        desc: "Direct mitigation of employee turnover by easing financial stress and building long-term institutional loyalty",
    },
    {
        id: 3,
        iconSrc: "/assets/images/swasth/swasth-cor3.svg",
        heading: "Elevated Talent Retention",
        desc: "Direct mitigation of employee turnover by easing financial stress and building long-term institutional loyalty",
    },
    {
        id: 4,
        iconSrc: "/assets/images/swasth/swasth-cor4.svg",
        heading: "Elevated Talent Retention",
        desc: "Direct mitigation of employee turnover by easing financial stress and building long-term institutional loyalty",
    },
    {
        id: 5,
        iconSrc: "/assets/images/swasth/swasth-cor1.svg",
        heading: "Elevated Talent Retention",
        desc: "Direct mitigation of employee turnover by easing financial stress and building long-term institutional loyalty",
    },
]

const TestimonialData = [
    {
        id: 1,
        imgSrc: "/assets/images/other/testimony.jpg",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        name: "Name Here",
        location: "Gurugram",
    },
    {
        id: 2,
        imgSrc: "/assets/images/other/testimony.jpg",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        name: "Name Here",
        location: "Gurugram",
    },
    {
        id: 3,
        imgSrc: "/assets/images/other/testimony.jpg",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        name: "Name Here",
        location: "Gurugram",
    },
    {
        id: 4,
        imgSrc: "/assets/images/other/testimony.jpg",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        name: "Name Here",
        location: "Gurugram",
    },
    {
        id: 5,
        imgSrc: "/assets/images/other/testimony.jpg",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        name: "Name Here",
        location: "Gurugram",
    },
]
export default function SwasthForCorporatesPage(){
    const benefitsSec = useRef(null)
    const networkSec = useRef(null)
    const activeScroll = (ref) => {
        if (ref.current) {
            const top = ref.current.offsetTop - 110;
            window.scrollTo({
                top,
                behavior: "smooth"
            })
        }
    }
    return(
        <main>
            <ProductHeroSection
                heading={<>Elevating Employee Support Through<span> Predictable Financial Access.</span></>}
                subHeading="Empowerment through the Swasth Corporate Card: Cashbacks on medical expenses, simplified financing, comprehensive financial support, and exclusive partner rewards."
                btnText="Explore Benefits"
                mediaSrc="assets/video/swasth_corporate_banner.mp4"
                videoPoster="assets/video/swasth_corporate_poster.png"
                onClick={() => activeScroll(benefitsSec)}
            />
            <InfoGraphic 
                classname="corporate"
                imgSrc="/assets/images/swasth/swasth_card.svg"
                heading={<>Prioritizing Workplace Well-being by Removing <span>Financial Friction.</span></>}
                desc="Built to simplify life. Comprehensive financial support and rewards dramatically reduce employee stress and empower peak performance across the workforce."
                btnText="Book a Demo"
                btnClass="white fw-bold shadow down"
                onClick={() => activeScroll(networkSec)}
            />
            <BenefitsSec ref={benefitsSec} />
            <WhySliderSec
                topHeading="Why Partner With the Swasth Ecosystem"
                heading={<>Strategic Advantages for <span>Corporate Growth.</span></>}
                topImage="/assets/logo-vector.svg"
                whyData={whyData}
            />
            <NetworkFormSec
                classname="corporate"
                heading={<>Strategic Network Enrollment: <span>Request a Complimentary Demo.</span></>}
                subHeading="Access a demonstration to quantify competitive advantages and accelerate institutional transformation in an evolving market."
                formHeading="Book a Demo"
                ref={networkSec}
            />
            <Testimonials classname="products_testimonials" heading={<>Voices of the <span>Swasth Community</span></>} TestimonialData={TestimonialData} />
        </main>
    )
}