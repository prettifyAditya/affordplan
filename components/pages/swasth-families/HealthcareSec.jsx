import Image from "next/image";
import Button from "@/components/atoms/Button";

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
                                <Button classname="white down" buttonText="Get Your Swasth Card Now" />
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