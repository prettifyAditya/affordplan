import HeroSection from "./HeroSection"
import ServicesTab from "./ServicesTab"
import InnovationSection from "./InnovationSection"
import ClientSection from "./ClientSection"
import GlobalSuccess from "./GlobalSuccess"
import Milestone from "../../organisms/Milestone"
import Testimonials from "@/components/organisms/Testimonials"
import "@/uploads/styles/home/home.css"

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

export default function HomePage(){
    return(
        <main>   
            <HeroSection />
            <ServicesTab />
            <InnovationSection />
            <ClientSection />
            <GlobalSuccess />
            <Testimonials heading={<>Voices of the <span>Swasth Community</span></>} TestimonialData={TestimonialData} />
            <Milestone heading={<>Milestones Defining <span>The Path of Innovation.</span></>} />
        </main>   
    )
}