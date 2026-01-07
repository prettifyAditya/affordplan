import NetworkFormSec from "@/components/organisms/NetworkFormSec";
import HeroSection from "./HeroSection";
import MeetPartners from "./MeetPartners";
import TrustedClients from "./TrustedClients";
import "@/uploads/styles/partner/partner.css"
import ScalePartnership from "./ScalePartnership";

export default function PartnersPage(){
    return(
        <main>
            <HeroSection />
            <ScalePartnership />
            <TrustedClients />
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