import TeamCol from "@/components/frontendcomponents/molecules/TeamCol";

export default function TeamSec({ classname = "", heading = "", teamData = [] }) {
    return (
        <section>
            <div className={`team_sec sec-pad ${classname}`}>
                <div className="container">
                    <div className="heading">
                        <h2>{heading}</h2>
                    </div>
                    <div className="team_wrapper">
                        {teamData && teamData.length > 0 ? (
                            teamData.map((member) => (
                                <TeamCol
                                    key={member.TeamID}
                                    imgSrc={
                                        member.TeamImage
                                            ? `/OnlineImages/TeamImages/${member.TeamImage}`
                                            : "/assets/images/team/team1.png"
                                    }
                                    name={member.TeamName}
                                    designation={member.TeamDesignation}
                                    bio={member.TeamBio}
                                    teamId={member.TeamID}
                                />
                            ))
                        ) : null}

                    </div>
                </div>
            </div>
        </section>
    )
}