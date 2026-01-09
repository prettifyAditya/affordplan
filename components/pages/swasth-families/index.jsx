"use client"
import { useRef } from "react"
import ProductHeroSection from "@/components/molecules/ProductHeroSection"
import HealthcareSec from "./HealthcareSec"
import FinancialSec from "./FinancialSec"
import MaternitySec from "./MaternitySec"
import SwasthLocater from "./SwasthLocater"
import NetworkFormSec from "@/components/organisms/NetworkFormSec"
import Testimonials from "@/components/organisms/Testimonials"
import "@/uploads/styles/swasth/swasth.css"

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
export default function SwasthForFamiliesPage(){
    const financialSec = useRef(null)
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
                heading={<>A Single Card Simplifying<span> Family Financial Planning.</span></>}
                subHeading="The Swasth Card delivers dependable cashback, access to
                  multiple financial support, comprehensive insurance, and
                  dedicated rewards."
                btnText="Explore Benefits"
                mediaSrc="assets/video/swasth_banner.mp4"
                videoPoster="assets/video/swasth_banner_poster.png"
                onClick={() => activeScroll(financialSec)}
            />
            <HealthcareSec onClick={() => activeScroll(networkSec)} />
            <FinancialSec ref={financialSec} />
            <MaternitySec onClick={() => activeScroll(networkSec)} />
            <SwasthLocater />
            <NetworkFormSec 
                heading={<>Strategic Network Enrollment: <span>Request a Complimentary Demo.</span></>}
                subHeading="Access a demonstration to quantify competitive advantages and accelerate institutional transformation in an evolving market."
                formHeading="Get Your Swasth Card Today"
                ref={networkSec}
            />
            <Testimonials classname="products_testimonials" heading={<>Voices of the <span>Swasth Community</span></>} TestimonialData={TestimonialData} />
        </main>
    )
}