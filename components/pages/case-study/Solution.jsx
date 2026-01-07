import Image from "next/image"

export default function Solution(){
    return(
        <section>
            <div className="solution_sec sec-pad">
                <div className="container">
                    <div className="main_wrapper">
                        <figcaption>
                            <h2>The <span>Solution</span></h2>
                            <div className="desc">
                                <p>To address these challenges, Apex Healthcare implemented a fully integrated digital health platform designed to streamline patient care. The platform featured automated appointment management with reminders, reducing missed consultations. Telemedicine integration enabled remote consultations for patients unable to visit in person. Patient engagement tools, including mobile notifications, follow-up alerts, and educational content, helped improve adherence to treatment plans. Additionally, real-time dashboards for clinical workflow optimization allowed staff to monitor patient flow, reduce bottlenecks, and improve operational efficiency.</p>
                            </div>
                        </figcaption>
                        <figure>
                            <Image src="/assets/images/case-study/solution.jpg" width="530" height="330" alt="Challenge Image"></Image>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}