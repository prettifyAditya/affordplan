import ProductHeroSection from "@/components/molecules/ProductHeroSection"
import ContactForm from "./ContactForm"
import MapSection from "./MapSection"
import LocationSec from "./LocationSec"
import "@/uploads/styles/contact/contact.css"


export default function ContactUsPage(){
    return(
        <main>
            <ProductHeroSection
                classname="contact_us"
                heading={<>Strategic Connections for<span> Accessible Healthcare.</span></>}
                subHeading={<>Whether seeking individual assistance, exploring hospital partnerships, or initiating manufacturer innovation, the appropriate channel is available below. <span>Join Us—Let’s Build Tomorrow Together.</span></>}
                btnText="Join Now"
                mediaSrc="assets/video/contact_banner.mp4"
                videoPoster="assets/video/contact_banner_poster.png"
            />
            <ContactForm />
            <MapSection />
            <LocationSec />
        </main>
    )
}