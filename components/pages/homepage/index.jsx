import "@/uploads/styles/home/home.css"
import HeroSection from "./HeroSection"
import ServicesTab from "./ServicesTab"
import InnovationSection from "./InnovationSection"
import ClientSection from "./ClientSection"
import GlobalSuccess from "./GlobalSuccess"
export default function HomePage(){
    return(
        <main>
            <HeroSection />
            <ServicesTab />
            <InnovationSection />
            <ClientSection />
            <GlobalSuccess />
        </main>
    )
}