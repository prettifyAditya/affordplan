import NetworkFormSec from "@/components/organisms/NetworkFormSec";
import HeroSection from "./HeroSection";
import "@/uploads/styles/partner/partner.css"
import MeetPartners from "./MeetPartners";

export default function PartnersPage(){
    return(
        <main>
            <HeroSection />
            <MeetPartners />
            <NetworkFormSec
                classname="partner"
                heading={<>Strategic Partnership Opportunities: <span>Let’s Grow Together.</span></>}
                subHeading="Access a demonstration to quantify competitive advantages and accelerate institutional transformation in an evolving market."
                formHeading="Partner With Us"
            />
        </main>
    )
}