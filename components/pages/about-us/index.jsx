import ProductHeroSection from "@/components/molecules/ProductHeroSection"
import Milestone from "@/components/organisms/Milestone"
import MissionVission from "./MissionVission"
import TeamSec from "./TeamSec"
import "@/uploads/styles/about/about.css"
import TeamPop from "@/components/organisms/TeamPop"
import JourneySec from "./JourneySec"

export default function AboutUsPage(){
    return(
        <main>
            <ProductHeroSection
                classname="about_us"
                heading={<>Building a Healthier Future Through<span> Trust and Innovation.</span></>}
                subHeading="Founded on the principle that cost should not be a barrier to care, the organization creates sustainable financial ecosystems that empower hospitals, support corporate teams, and ensure health certainty for every individual."
                mediaType="photo"
                mediaSrc="/assets/images/about/about-us.jpg"
            />
            <JourneySec />
            <MissionVission />
            <TeamSec heading={<>Core Leadership: <span>Expertise Meets Execution</span></>} />
            <TeamSec classname="second_team" heading={<>The Team Building <span>A Healthier Future</span></>} />
            <Milestone 
                classname="about_us"
                heading={<>Milestones That Defined <span>Our Innovative Path.</span></>}
            />
            <TeamPop />
        </main>
    )
}