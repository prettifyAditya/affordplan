"use client"
import { useRef } from "react"
import ProductHeroSection from "@/components/molecules/ProductHeroSection"
import InfoGraphic from "../../organisms/InfoGraphic"
import WhySliderSec from "@/components/organisms/WhySliderSec"
import NetworkFormSec from "@/components/organisms/NetworkFormSec"
import Testimonials from "@/components/organisms/Testimonials"
import MedicalIntegrated from "./MedicalIntegrated"
import "@/uploads/styles/swasth/swasth.css"

const whyData = [
    {
        id: 1,
        iconSrc: "/assets/images/swasth/amya1.svg",
        heading: "Health Certainty",
        desc: "Direct mitigation of employee turnover by easing financial stress and building long-term institutional loyalty",
    },
    {
        id: 2,
        iconSrc: "/assets/images/swasth/amya2.svg",
        heading: "Integrated Support System",
        desc: "Direct mitigation of employee turnover by easing financial stress and building long-term institutional loyalty",
    },
    {
        id: 3,
        iconSrc: "/assets/images/swasth/amya3.svg",
        heading: "Focus on Longevity",
        desc: "Direct mitigation of employee turnover by easing financial stress and building long-term institutional loyalty",
    },
    {
        id: 4,
        iconSrc: "/assets/images/swasth/amya4.svg",
        heading: "Vetted Ecosystem",
        desc: "Direct mitigation of employee turnover by easing financial stress and building long-term institutional loyalty",
    },
    {
        id: 5,
        iconSrc: "/assets/images/swasth/amya1.svg",
        heading: "Health Certainty",
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
export default function AmyaWellnessPage(){
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
                heading={<>Bridging the Gap Between Clinical Care and<span> Everyday Wellness.</span></>}
                subHeading="A curated platform for sustained health, specializing in prevention, recovery, and chronic care support."
                mediaSrc="assets/video/amya_banner.mp4"
                videoPoster="assets/video/amya_poster.png"
                onClick={() => activeScroll(networkSec)}
            />
            <InfoGraphic
                classname="amya"
                imgSrc="/assets/images/swasth/amya_info.svg"
                heading={<>Resolving the Fragmentation Between <span>Clinical Insight and Daily Life.</span></>}
                desc="Complexity is eliminated through a single, curated ecosystem. Targeted, medically-influenced support provides certainty across prevention, chronic care, and recovery goals."
                btnText="Go to Amaya Wellness"
                btnClass="white fw-bold shadow down"
            />
            <MedicalIntegrated />
            <WhySliderSec
                classname="amya_wellness"
                topHeading="Why Partner With the Swasth Ecosystem"
                heading={<>A Personalized  <span>Health Journey</span></>}
                topImage="/assets/images/swasth/amya_why_img.svg"
                whyData={whyData}
            />
            <NetworkFormSec
                classname="amya_wellness"
                heading={<>The First Step Toward  <span>Sustained Wellness</span></>}
                subHeading="Complete a confidential assessment to receive a complimentary, medically-informed pathway for prevention, recovery, or chronic care. Gain clarity on the path to predictable, long-term health."
                formHeading="Book a Demo"
                ref={networkSec}
            />
            <Testimonials classname="products_testimonials" heading={<>Voices of the <span>Swasth Community</span></>} TestimonialData={TestimonialData} />
        </main>
    )
}