import TeamCol from "@/components/molecules/TeamCol";


export default function TeamSec({ classname="" ,heading="" }){
    return(
        <section>
            <div className={`team_sec sec-pad-all ${classname}`}>
                <div className="container">
                    <div className="heading">
                        <h2>{heading}</h2>
                    </div>
                    <div className="team_wrapper">
                        <TeamCol
                            imgSrc="/assets/images/team/team1.png"
                            name="Aditya Sharma"
                            designation="Founder & CEO"
                        />
                        <TeamCol
                            imgSrc="/assets/images/team/team1.png"
                            name="Anand Nevatia"
                            designation="Director Co-Founder"
                        />
                        <TeamCol
                            imgSrc="/assets/images/team/team1.png"
                            name="Dr. Pruthvinath Kancherla"
                            designation="Director Co-Founder"
                        />
                        <TeamCol
                            imgSrc="/assets/images/team/team1.png"
                            name="Sanjiv Gupta"
                            designation="Mentor"
                        />
                        <TeamCol
                            imgSrc="/assets/images/team/team1.png"
                            name="Aditya Sharma"
                            designation="Founder & CEO"
                        />
                        <TeamCol
                            imgSrc="/assets/images/team/team1.png"
                            name="Anand Nevatia"
                            designation="Director Co-Founder"
                        />
                        <TeamCol
                            imgSrc="/assets/images/team/team1.png"
                            name="Dr. Pruthvinath Kancherla"
                            designation="Director Co-Founder"
                        />
                        <TeamCol
                            imgSrc="/assets/images/team/team1.png"
                            name="Sanjiv Gupta"
                            designation="Mentor"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}