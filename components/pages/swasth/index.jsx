import "@/uploads/styles/swasth/swasth.css"
import HeroSection from "./HeroSection"
import HealthcareSec from "./HealthcareSec"
import Testimonials from "@/components/organisms/Testimonials"
import FinancialSec from "./FinancialSec"
import MaternitySec from "./MaternitySec"
import SwasthLocater from "./SwasthLocater"
export default function SwasthForFamiliesPage(){
    return(
        <main>
            <HeroSection />
            <HealthcareSec />
            <FinancialSec />
            <MaternitySec />
            <SwasthLocater />
            <Testimonials />
        </main>
    )
}