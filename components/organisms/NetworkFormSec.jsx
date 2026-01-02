import Link from "next/link"
import "@/uploads/styles/component/component.css"

export default function NetworkFormSec({classname="", heading="", subHeading, formHeading=""}){
    return(
        <section>
            <div className={`network-form sec-pad-all ${classname}`}>
                <div className="container">
                    <div className="network_wrapper flex">
                        <div className="heading">
                            <h2>{heading}</h2>
                            <p>{subHeading}</p>
                        </div>
                        <div className="form">
                            <div className="heading">
                                <h3>{formHeading}</h3>
                            </div>
                            <div className="form-grid">
                                <div className="form-group border">
                                    <label htmlFor="">Name*</label>
                                    <input type="text" className="form-control no-focus" placeholder="Your Name" />
                                    <div className="error">Enter Your Name</div>
                                </div>
                                <div className="form-group border">
                                    <label htmlFor="">Email Address*</label>
                                    <input type="email" className="form-control no-focus" placeholder="email@example.com" />
                                    <div className="error">Enter Your Email</div>
                                </div>
                                <div className="form-group border">
                                    <label htmlFor="">Phone*</label>
                                    <input type="tel" className="form-control no-focus" placeholder="+91 99999 99999" />
                                    <div className="error">Enter Your Phone No.</div>
                                </div>
                                <div className="form-group border">
                                    <label htmlFor="">Pincode*</label>
                                    <input type="tel" className="form-control no-focus" placeholder="XXXXXXXXXX" />
                                    <div className="error">Enter Your Pincode</div>
                                </div>
                            </div>
                            <div className="disclaim">
                                <p>By clicking on submit button, you are agreeing the <Link href="/terms-and-conditions">terms and conditions</Link></p>
                            </div>
                            <button type="button" className="btn">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}