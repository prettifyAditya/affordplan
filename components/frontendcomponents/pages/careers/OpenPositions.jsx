import PoistionsCol from "@/components/frontendcomponents/molecules/PoistionsCol";

export default function OpenPositions({ positions }) {
    if (!positions || positions.length === 0) return null;
    return (
        <section>
            <div className="open_positions_sec sec-pad">
                <div className="container">
                    <div className="main_wrapper">
                        <div className="heading">
                            <p>Open positions ({positions.length})</p>
                            <h2>
                                Find Purpose <span>Explore Available Roles</span>
                            </h2>
                        </div>
                        <div className="open_wrapper">
                            {positions.map((position) => (
                                <PoistionsCol
                                    key={position.JobCategoryID}
                                    positionName={position.JobCategoryName}
                                    positionLoc={position.JobLocation}
                                    jobDescription={position.JobCategoryDescription}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
