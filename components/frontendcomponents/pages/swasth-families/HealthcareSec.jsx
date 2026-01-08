import Image from "next/image";

export default function HealthcareSec(){
    return(
        <section>
            <div className="swasth-secB sec-pad">
                <div className="container">
                    <div className="main_wrapper">
                        <figcaption>
                            <div className="content heading">
                                <h2>Simplified Management of <span>Healthcare Expenses</span></h2>
                                <p>From routine checkups, diagnostics, and labs to unexpected medical needs, financial stress is reduced through smart savings. A single card manages all family healthcare finances efficiently.</p>
                                <button type="button" className="btn white">Get Your Swasth Card Now <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="22px" viewBox="0 0 24 24">
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 5v14m0 0l6-6m-6 6l-6-6"></path>
                            </svg></button>
                            </div>
                        </figcaption>
                        <figure>
                            <Image src="/assets/images/swasth/swasth_card.svg" width="450" height="330" alt="" className="card"></Image>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}