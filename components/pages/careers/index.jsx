"use client"
import { useRef } from "react"
import ProductHeroSection from "@/components/molecules/ProductHeroSection"
import TeamInfo from "./TeamInfo"
import LifeOrganisation from "./LifeOrganisation"
import OpenPositions from "./OpenPositions"
import PositionsPop from "@/components/molecules/PositionsPop"
import FutureColleagues from "./FutureColleagues"
import "@/uploads/styles/career/career.css"

export default function CareersPage(){
    const positionsSec = useRef(null)
    const activeScroll = (ref) => {
        if (ref.current) {
            const top = ref.current.offsetTop - 110;
            window.scrollTo({
                top,
                behavior: "smooth"
            })
        }
    }
    return(
        <main>
            <ProductHeroSection
                heading={<>Where Your Ambition Finds Its Purpose:<span> Innovating Healthcare Finance.</span></>}
                subHeading="An opportunity to innovate, learn, and create a lasting impact on the healthcare landscape. Work involves building the foundational infrastructure that delivers predictable financial access to every individual, provider, and partner."
                btnText="Join Now"
                mediaSrc="assets/video/career_banner.mp4"
                videoPoster="assets/video/career_banner_poster.png"
                onClick={() => activeScroll(positionsSec)}
            />
            <TeamInfo />
            <LifeOrganisation />
            <OpenPositions ref={positionsSec} />
            <FutureColleagues />
            <PositionsPop />
        </main>
    )
}