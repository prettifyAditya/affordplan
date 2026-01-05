"use client"
import Image from "next/image";
import "@/uploads/styles/component/component.css"
import { useModalStore } from "@/store/modalStore";

export default function TeamPop(){
    const isTeamPopOpen = useModalStore((state) => state.isTeamPopOpen)
    const closeTeamPop = useModalStore((state) => state.closeTeamPop)
    return(
        <div className={`model team-pop ${isTeamPopOpen ? "is-open" : ""}`}>
            <button className="close" onClick={closeTeamPop}>
                <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M0.75 0.75L23.25 23.25M0.75 23.25L23.25 0.75"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                </svg>
            </button>
            <div className="model-body">
                <div className="team_wrapper">
                <figure>
                    <Image src="/assets/images/team/team1.png" width="365" height="361" alt="Team member"></Image>
                    <a href="javascript:;" target="_blank" className="linkedin">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                        >
                            <path
                            fill="#fff"
                            d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"
                            />
                        </svg>
                    </a>
                </figure>
                <figcaption>
                    <div className="heading">
                        <h6>Aditya Sharma</h6>
                        <p>Founder & CEO</p>
                    </div>
                    <div className="team_details">
                        <p>
                            Aditya Sharma, CEO of Affordplan, graduated from St. Xavier's College, Kolkata, and holds an MBA from Lancaster University Management School. With nearly two decades of healthcare-focused private equity experience, he believes affordable and accessible healthcare is crucial for India to achieve its global standing and Affordplan was created to achieve this goal, though he acknowledges the journey will be challenging, he feels that if not now, perhaps never.
                        </p>
                        <p>
                            Aditya Sharma, CEO of Affordplan, graduated from St. Xavier's College, Kolkata, and holds an MBA from Lancaster University Management School. With nearly two decades of healthcare-focused private equity experience, he believes affordable and accessible healthcare is crucial for India to achieve its global standing and Affordplan was created to achieve this goal, though he acknowledges the journey will be challenging, he feels that if not now, perhaps never.
                        </p>
                    </div>
                </figcaption>
                </div>
            </div>
        </div>
    )
}