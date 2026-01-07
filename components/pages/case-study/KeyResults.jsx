import Image from "next/image";

export default function KeyResults(){
    return(
        <section>
            <div className="key_results sec-pad">
                <div className="container">
                    <div className="main_wrapper">
                        <div className="colA">
                            <div className="heading">
                                <h2>Key <span>Results</span></h2>
                                <p>The implementation of the digital health platform produced remarkable outcomes. Patient wait times were reduced by 35%, the number of appointments doubled, and treatment adherence improved by 20%. Beyond these measurable results, Apex Healthcare experienced increased patient satisfaction across all departments, higher adoption of telemedicine and remote patient monitoring, and more streamlined communication between clinicians and support staff.</p>
                            </div>
                        </div>
                        <div className="colB">
                            <div className="info_wrap">
                                <div className="info_col">
                                    <div className="icon">
                                        <Image src="/assets/images/case-study/case_det_1.svg" width="40" height="40" alt="Case Vector"></Image>
                                    </div>
                                    <h6 className="count">35%</h6>
                                    <p>Reduction in Patient Wait Times</p>
                                </div>
                                <div className="info_col">
                                    <div className="icon">
                                        <Image src="/assets/images/case-study/case_det_2.svg" width="40" height="40" alt="Case Vector"></Image>
                                    </div>
                                    <h6 className="count">2x</h6>
                                    <p>Increase in Appointments</p>
                                </div>
                                <div className="info_col">
                                    <div className="icon">
                                        <Image src="/assets/images/case-study/case_det_2.svg" width="40" height="40" alt="Case Vector"></Image>
                                    </div>
                                    <h6 className="count">20%</h6>
                                    <p>Improvement in Treatment Adherence</p>
                                </div>
                            </div>
                        </div>
                        <figure className="logo-vector">
                            <Image src="/assets/logo-vector.svg" width="100" height="80" alt="Logo Vector"></Image>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}