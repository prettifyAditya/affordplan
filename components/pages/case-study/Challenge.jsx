import Image from "next/image"

export default function Challenge(){
    return(
        <section>
            <div className="challenge_sec sec-pad-all">
                <div className="container">
                    <div className="main_wrapper">
                        <figure>
                            <Image src="/assets/images/case-study/challenge.jpg" width="530" height="330" alt="Challenge Image"></Image>
                        </figure>
                        <figcaption>
                            <h2>The <span>Challenge</span></h2>
                            <div className="desc">
                                <p>Apex Healthcare was facing significant operational challenges that were affecting patient satisfaction. Patients experienced long wait times in both outpatient and emergency departments. Inefficient appointment management often led to missed consultations, while treatment adherence among patients with chronic conditions remained low. Additionally, fragmented communication between departments and care teams further complicated patient care. These issues collectively resulted in patient frustration, missed follow-ups, and lower overall satisfaction scores.</p>
                            </div>
                        </figcaption>
                    </div>
                </div>
            </div>
        </section>
    )
}