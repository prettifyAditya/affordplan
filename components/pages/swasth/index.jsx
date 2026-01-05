import ProductHeroSection from "@/components/molecules/ProductHeroSection"
import InfoGraphic from "../../organisms/InfoGraphic"
import "@/uploads/styles/swasth/swasth.css"

export default function SwasthPage(){
    return(
        <main>
            <ProductHeroSection
                classname="procalyx"
                heading={<>Swasth</>}
                subHeading="A unified healthcare platform that connects operations, data, and decision-making across hospitals and care networks. Swasth enables better coordination between departments, improves resource planning, and supports faster, more informed actions  helping healthcare institutions deliver reliable care while maintaining operational and financial discipline."
                mediaType="photo"
                mediaSrc="/assets/images/swasth/swasth_banner.jpg"  
            />
            <InfoGraphic 
                classname="procalyx swasth"
                imgSrc="/assets/images/swasth/swasth_families_info.jpg"
                heading={<>Swasth for <span>Families</span></>}
                desc="Fragmented systems and manual processes often impact access to timely and affordable healthcare. Swasth for Families provides a unified digital healthcare experience that simplifies care coordination, improves transparency, and ensures reliable access to services"
                btnText="Explore"
                btnType="anchor"
                linkHref="/swasth-for-families"
            />
            <InfoGraphic 
                classname="procalyx_pharma_comp swasth_hospitals"
                imgSrc="/assets/images/swasth/swasth_hospitals.jpg" 
                heading={<>Swasth for <span>Hospitals</span></>}
                desc="Hospitals face growing complexity across clinical, operational, and financial workflows. Swasth for Hospitals brings these functions together on a single integrated platform, enabling better patient flow, optimized resource utilization, improved financial transparency, and consistent, high-quality care delivery."
                btnClass=""
                btnText="Explore"
                btnType="anchor"
                linkHref="/swasth-for-hospitals"
            />
            <InfoGraphic 
                classname="procalyx_pharma_comp swasth_corporates"
                imgSrc="/assets/images/swasth/swasth_corporates.jpg" 
                heading={<>Swasth for <span>Corporates</span></>}
                desc="Corporate healthcare programs demand efficiency, scalability, and accountability. Swasth for Corporate enables organizations to manage employee health benefits, streamline care delivery, and gain visibility into healthcare usage and outcomes—supporting healthier workforces while optimizing costs and operational control."
                btnText="Explore"
                btnType="anchor"
                linkHref="/swasth-for-corporates"
            />
        </main>
    )
}