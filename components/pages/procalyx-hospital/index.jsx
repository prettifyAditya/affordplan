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
        iconSrc: "/assets/images/swasth/pro-hos1.svg",
        heading: "Full spectrum of serv`ices",
        desc: "Expanded access to OPD, IP, and ancillary care through a rewarding financial model and digital integration.",
    },
    {
        id: 2,
        iconSrc: "/assets/images/swasth/pro-hos2.svg",
        heading: "No excessive discounts",
        desc: "Expanded access to OPD, IP, and ancillary care through a rewarding financial model and digital integration.",
    },
    {
        id: 3,
        iconSrc: "/assets/images/swasth/pro-hos3.svg",
        heading: "Secure payments",
        desc: "Expanded access to OPD, IP, and ancillary care through a rewarding financial model and digital integration.",
    },
    {
        id: 4,
        iconSrc: "/assets/images/swasth/pro-hos4.svg",
        heading: "Powerful CRM & reporting",
        desc: "Expanded access to OPD, IP, and ancillary care through a rewarding financial model and digital integration.",
    },
    {
        id: 5,
        iconSrc: "/assets/images/swasth/pro-hos1.svg",
        heading: "Full spectrum of serv`ices",
        desc: "Expanded access to OPD, IP, and ancillary care through a rewarding financial model and digital integration.",
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

export default function ProcalyxHospitalPage(){
    return(
        <main>
            <ProductHeroSection
                heading={<>Patient-Centric Care and Operational <span>Optimization.</span></>}
                subHeading="A comprehensive healthcare platform designed for hospitals and medical institutions to enhance patient outcomes, streamline clinical and administrative workflows, improve resource utilization, and ensure transparency, safety, and regulatory compliance across all levels of care."
                mediaType="photo"
                mediaSrc="/assets/images/swasth/procalyx_hospital_banner.jpg"  
            />
            <InfoGraphic 
                classname="procalyx_hospital"
                imgSrc="/assets/images/swasth/procalyx_hospital_info.svg"
                heading={<>Transforming Hospital <span>Operations</span> Through Unified Care <span>Systems</span></>}
                desc="Modern hospitals face increasing complexity across clinical, operational, and financial functions. Our end-to-end healthcare solutions align people, processes, and technology to streamline workflows."
                btnText="Go to Procalyx™"
                btnClass="white fw-bold right shadow"
            />
            <HowItWorks />
            <WhySliderSec
                classname="procalyx_hospital"
                topHeading="Why List Products or Partner with Procalyx™"
                heading={<>Strategic Value for <span>Manufacturers and Partners</span></>}
                topImage="/assets/logo-vector.svg"
                whyData={whyData}
            />
            <NetworkFormSec
                classname="procalyx_hospital"
                heading={<>Strategic Network Enrollment: <span>Book Your Free Demo Now.</span></>}
                subHeading="Explore how to quantify competitive advantages and accelerate business growth through data-driven partnership."
                formHeading="Book a Demo"
            />
            <Testimonials classname="products_testimonials" heading={<>Voices of the <span>Swasth Community</span></>} TestimonialData={TestimonialData} />
        </main>
    )
}