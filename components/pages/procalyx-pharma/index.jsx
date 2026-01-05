import ProductHeroSection from "@/components/molecules/ProductHeroSection"
import InfoGraphic from "../../organisms/InfoGraphic"
import WhySliderSec from "@/components/organisms/WhySliderSec"
import NetworkFormSec from "@/components/organisms/NetworkFormSec"
import Testimonials from "@/components/organisms/Testimonials"
import HowItWorks from "./HowItWorks"
import "@/uploads/styles/swasth/swasth.css"

const whyData = [
    {
        id: 1,
        iconSrc: "/assets/images/swasth/pro-phar1.svg",
        heading: "Accelerated Market Penetration",
        desc: "Direct mitigation of employee turnover by easing financial stress and building long-term institutional loyalty",
    },
    {
        id: 2,
        iconSrc: "/assets/images/swasth/pro-phar2.svg",
        heading: "Financial Risk Mitigation",
        desc: "Direct mitigation of employee turnover by easing financial stress and building long-term institutional loyalty",
    },
    {
        id: 3,
        iconSrc: "/assets/images/swasth/pro-phar3.svg",
        heading: "Enhanced Brand Visibility",
        desc: "Direct mitigation of employee turnover by easing financial stress and building long-term institutional loyalty",
    },
    {
        id: 4,
        iconSrc: "/assets/images/swasth/pro-phar4.svg",
        heading: "Operational Efficiency",
        desc: "Direct mitigation of employee turnover by easing financial stress and building long-term institutional loyalty",
    },
    {
        id: 5,
        iconSrc: "/assets/images/swasth/pro-phar1.svg",
        heading: "Accelerated Market Penetration",
        desc: "Direct mitigation of employee turnover by easing financial stress and building long-term institutional loyalty",
    }
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

export default function ProcalyxPharmaPage(){
    return(
        <main>
            <ProductHeroSection
                heading={<>Driving Growth Through<span> Data Insights</span> and <span>Financial Optimization.</span></>}
                subHeading="A strategic intelligence platform designed for manufacturers and healthcare providers to optimize procurement, enhance market penetration, and ensure financial transparency."
                btnText="Partner With Procalyx ™"
                mediaType="photo"
                mediaSrc="/assets/images/swasth/procalyx_pharma_banner.jpg"  
            />
            <InfoGraphic 
                classname="procalyx_pharma"
                imgSrc="/assets/images/swasth/procalyx_pharma_info.svg"
                heading={<>Bridging the Gap Between <span>Manufacturers</span> and <span>Healthcare Providers</span></>}
                desc="Fragmented supply chains and opaque financial cycles hinder growth. Procalyx™ streamlines these connections by providing a unified platform for inventory intelligence and secure, predictable settlement cycles."
                btnText="Go to Procalyx™"
            />
            <HowItWorks />
            <WhySliderSec
                classname="procalyx_pharma"
                topHeading="Why List Products or Partner with Procalyx™"
                heading={<>Strategic Value for <span>Manufacturers and Partners</span></>}
                topImage="/assets/logo-vector.svg"
                whyData={whyData}
            />
            <NetworkFormSec
                classname="procalyx_pharma"
                heading={<>Strategic Network Enrollment: <span>Book Your Free Demo Now.</span></>}
                subHeading="Explore how to quantify competitive advantages and accelerate business growth through data-driven partnership."
                formHeading="Book a Demo"
            />
            <Testimonials classname="products_testimonials" heading={<>Voices of the <span>Swasth Community</span></>} TestimonialData={TestimonialData} />
        </main>
    )
}