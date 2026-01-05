import ProductHeroSection from "@/components/molecules/ProductHeroSection"
import InfoGraphic from "../../organisms/InfoGraphic"
import "@/uploads/styles/swasth/swasth.css"

export default function ProcalyxPage(){
    return(
        <main>
            <ProductHeroSection
                classname="procalyx"
                heading={<>Procalyx™</>}
                subHeading="A strategic intelligence platform purpose-built for hospitals and healthcare institutions to bring clarity, control, and efficiency across operations. Procalyx™ integrates procurement, inventory management, clinical demand signals, and financial workflows into a single intelligent system.By delivering real-time visibility, predictive insights, and automated processes, the platform helps hospitals reduce operational inefficiencies, minimize wastage."
                mediaType="photo"
                mediaSrc="/assets/images/procalyx/procalyx_banner.jpg"  
            />
            <InfoGraphic 
                classname="procalyx"
                imgSrc="/assets/images/procalyx/procalyx_info.jpg"
                heading={<>Procalyx™ for <span>Hospitals</span></>}
                desc="Fragmented systems, manual processes, and disconnected financial workflows often limit hospital efficiency and care delivery. Procalyx™ brings clinical operations, inventory management, and financial intelligence onto a single unified platform."
                btnText="Explore"
                btnType="anchor"
                linkHref="/procalyx-hospital"
            />
            <InfoGraphic 
                classname="procalyx_pharma_comp"
                imgSrc="/assets/images/procalyx/procalyx_pharma_comp.jpg"
                heading={<>Procalyx™ for <span>Pharmaceutical companies</span></>}
                desc="Pharmaceutical companies operate in highly complex supply chains with constant pressure on efficiency, compliance, and market reach. Procalyx™ provides an integrated intelligence platform that connects demand signals, inventory movement, and financial workflows."
                btnClass=""
                btnText="Explore"
                btnType="anchor"
                linkHref="/procalyx-pharma"
            />
        </main>
    )
}