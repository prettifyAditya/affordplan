import Image from "next/image";

export default function ScalePartnership(){
    return(
        <section>
            <div className="scale_partnership">
                <div className="container">
                    <div className="main_wrapper">
                        <div className="heading">
                            <h2>Partnerships That Scale <span>Healthcare</span> Forward</h2>
                            <figure>
                                <Image src="/assets/logo-vector.svg" width="100" height="80" alt="Logo Vector"></Image>
                            </figure>
                        </div>
                        <div className="count_info_wrap">
                            <div className="info_col">
                                <h4 className="count">50+</h4>
                                <p>Partners</p>
                            </div>
                            <div className="info_col">
                                <h4 className="count">90%</h4>
                                <p>Partner Retention</p>
                            </div>
                            <div className="info_col">
                                <h4 className="count">15+</h4>
                                <p>Active Collaboration</p>
                            </div>
                            <div className="info_col">
                                <h4 className="count">10+</h4>
                                <p>Strategic Alliances</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}