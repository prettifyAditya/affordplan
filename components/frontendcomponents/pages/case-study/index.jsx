import ProductHeroSection from "@/components/frontendcomponents/molecules/ProductHeroSection"
import Challenge from "./Challenge"
import Solution from "./Solution"
import KeyResults from "./KeyResults"
import NetworkFormSec from "@/components/frontendcomponents/organisms/NetworkFormSec"
import CaseStudies from "@/components/frontendcomponents/organisms/CaseStudies"
import "@/uploads/styles/case-study/case-study.css"

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

export default function CaseStudyPage(){
    return(
        <main>
            <ProductHeroSection
                classname="case_study"
                heading={<>Enhancing <span>Chronic Disease</span> Management</>}
                subHeading="By implementing our integrated digital health platform, we improved patient engagement, streamlined clinical workflows, and increased treatment adherence across all departments."
                btnText="Book a demo"
                mediaType="photo"
                mediaSrc="/assets/images/case-study/case_study_banner.jpg"
            />
            <Challenge />
            <Solution />
            <KeyResults />
            <NetworkFormSec
                classname="case_study"
                heading={<>Strategic Network Enrollment: <span>Request a Complimentary Demo.</span></>}
                subHeading="Access a demonstration to quantify competitive advantages and accelerate institutional transformation in an evolving market."
                formHeading="Book a Demo"
            />
            <CaseStudies 
                classname="case_page"
                secHeading={<>More <span>Case Studies</span></>}
                caseStudyData={caseStudyData}
            />
        </main>
    )
}