import ProductHeroSection from "@/components/frontendcomponents/molecules/ProductHeroSection"
import InfoGraphic from "../../organisms/InfoGraphic"
import WhySliderSec from "@/components/frontendcomponents/organisms/WhySliderSec"
import NetworkFormSec from "@/components/frontendcomponents/organisms/NetworkFormSec"
import Testimonials from "@/components/frontendcomponents/organisms/Testimonials"
import ValueAddons from "./ValueAddons"
import OperationalFlow from "./OperationalFlow"
import CaseStudies from "../../organisms/CaseStudies"
import "@/uploads/styles/swasth/swasth.css"

const whyData = [
    {
        id: 1,
        iconSrc: "/assets/images/swasth/swasth-hos1.svg",
        heading: "Full spectrum of serv`ices",
        desc: "Expanded access to OPD, IP, and ancillary care through a rewarding financial model and digital integration.",
    },
    {
        id: 2,
        iconSrc: "/assets/images/swasth/swasth-hos2.svg",
        heading: "No excessive discounts",
        desc: "Expanded access to OPD, IP, and ancillary care through a rewarding financial model and digital integration.",
    },
    {
        id: 3,
        iconSrc: "/assets/images/swasth/swasth-hos3.svg",
        heading: "Secure payments",
        desc: "Expanded access to OPD, IP, and ancillary care through a rewarding financial model and digital integration.",
    },
    {
        id: 4,
        iconSrc: "/assets/images/swasth/swasth-hos4.svg",
        heading: "Powerful CRM & reporting",
        desc: "Expanded access to OPD, IP, and ancillary care through a rewarding financial model and digital integration.",
    },
    {
        id: 5,
        iconSrc: "/assets/images/swasth/swasth-hos1.svg",
        heading: "Full spectrum of serv`ices",
        desc: "Expanded access to OPD, IP, and ancillary care through a rewarding financial model and digital integration.",
    },
]

const caseStudyData = [
    {
        id: 1,
        bgImg: "/assets/images/case-study/case-study1.jpg",
        caseHeading: "Revolutionizing Patient Care",
        caseDesc: "By implementing our integrated digital health platform, we improved patient engagement, streamlined clinical workflows, and increased treatment adherence across all departments.",
        caseDetails: [
            {
                id: 1,
                caseDetIcon: "/assets/images/case-study/case_det_1.svg",
                caseDetHead: "35%",
                caseDetDesc: "Reduction in Patient Wait Times"
            },
            {
                id: 2,
                caseDetIcon: "/assets/images/case-study/case_det_2.svg",
                caseDetHead: "2x",
                caseDetDesc: "Increase in Appointments"
            },
            {
                id: 3,
                caseDetIcon: "/assets/images/case-study/case_det_3.svg",
                caseDetHead: "20%",
                caseDetDesc: "Improvement in Treatment Adherence"
            },
        ],
        linkHref: "/case-study"
    },
    {
        id: 2,
        bgImg: "/assets/images/case-study/case-study2.jpg",
        caseHeading: "Enhancing Chronic Disease Management",
        caseDesc: "By implementing our integrated digital health platform, we improved patient engagement, streamlined clinical workflows, and increased treatment adherence across all departments.",
        caseDetails: [
            {
                id: 1,
                caseDetIcon: "/assets/images/case-study/case_det_1.svg",
                caseDetHead: "35%",
                caseDetDesc: "Reduction in Patient Wait Times"
            },
            {
                id: 2,
                caseDetIcon: "/assets/images/case-study/case_det_2.svg",
                caseDetHead: "2x",
                caseDetDesc: "Increase in Appointments"
            },
            {
                id: 3,
                caseDetIcon: "/assets/images/case-study/case_det_3.svg",
                caseDetHead: "20%",
                caseDetDesc: "Improvement in Treatment Adherence"
            },
        ],
        linkHref: "/case-study"
    },
    {
        id: 3,
        bgImg: "/assets/images/case-study/case-study1.jpg",
        caseHeading: "Revolutionizing Patient Care",
        caseDesc: "By implementing our integrated digital health platform, we improved patient engagement, streamlined clinical workflows, and increased treatment adherence across all departments.",
        caseDetails: [
            {
                id: 1,
                caseDetIcon: "/assets/images/case-study/case_det_1.svg",
                caseDetHead: "35%",
                caseDetDesc: "Reduction in Patient Wait Times"
            },
            {
                id: 2,
                caseDetIcon: "/assets/images/case-study/case_det_2.svg",
                caseDetHead: "2x",
                caseDetDesc: "Increase in Appointments"
            },
            {
                id: 3,
                caseDetIcon: "/assets/images/case-study/case_det_3.svg",
                caseDetHead: "20%",
                caseDetDesc: "Improvement in Treatment Adherence"
            },
        ],
        linkHref: "/case-study"
    },
    {
        id: 4,
        bgImg: "/assets/images/case-study/case-study2.jpg",
        caseHeading: "Enhancing Chronic Disease Management",
        caseDesc: "By implementing our integrated digital health platform, we improved patient engagement, streamlined clinical workflows, and increased treatment adherence across all departments.",
        caseDetails: [
            {
                id: 1,
                caseDetIcon: "/assets/images/case-study/case_det_1.svg",
                caseDetHead: "35%",
                caseDetDesc: "Reduction in Patient Wait Times"
            },
            {
                id: 2,
                caseDetIcon: "/assets/images/case-study/case_det_2.svg",
                caseDetHead: "2x",
                caseDetDesc: "Increase in Appointments"
            },
            {
                id: 3,
                caseDetIcon: "/assets/images/case-study/case_det_3.svg",
                caseDetHead: "20%",
                caseDetDesc: "Improvement in Treatment Adherence"
            },
        ],
        linkHref: "/case-study"
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

export default function SwasthForHospitalsPage(){
    return(
        <main> 
            <ProductHeroSection
                heading={<>Empowering hospitals for<span> Exceptional Patient Care</span></>}
                subHeading="Solutions built to streamline financial operations, allowing hospitals to prioritize patient care above all else."
                mediaSrc="assets/video/hospital_banner.mp4"
                videoPoster="assets/video/hospital_banner_poster.png"
            />
            <InfoGraphic 
                classname="hospital"
                imgSrc="/assets/images/swasth/hospital_info.svg"
                heading={<>Removing Financial Barriers to <span>Exceptional Care.</span></>}
                desc="From managing financial cycles to funding next-generation facilities, complexity is removed to unlock vital resources. This strategic partnership stabilizes revenue, secures payment flow, and cultivates patient loyalty, ensuring the primary focus remains on health and well-being."
            />
            <OperationalFlow />
            <WhySliderSec
                classname="hospital"
                topHeading="Why Partner With the Swasth Ecosystem"
                heading={<>Strategic Advantages for <span>Healthcare Institutions.</span></>}
                topImage="/assets/logo-vector.svg"
                whyData={whyData}
            />
            <ValueAddons />
            <CaseStudies 
                secHeading={<>Hospital <span>Case Studies</span></>}
                caseStudyData={caseStudyData}
            />
            <NetworkFormSec
                classname="hospital"
                heading={<>Strategic Network Enrollment: <span>Request a Complimentary Demo.</span></>}
                subHeading="Access a demonstration to quantify competitive advantages and accelerate institutional transformation in an evolving market."
                formHeading="Book a Demo"
            />
            <Testimonials classname="products_testimonials" heading={<>Voices of the <span>Swasth Community</span></>} TestimonialData={TestimonialData} />
        </main>
    )
}