"use client"
import Link from "next/link"
import { useState } from "react";
import MySelect from "@/components/molecules/MySelect"
import Button from "@/components/atoms/Button";

const optionsProject = [
    { value: "Swasth", label: "Swasth"},
    { value: "Procalyx", label: "Procalyx"},
    { value: "Amya Wellness", label: "Amya Wellness"},
]

export default function ContactForm(){
    const [project, setProject] = useState(null);
    return(
        <section>
            <div className="contact_form sec-pad">
                <div className="container">
                    <div className="main_wrapper flex">
                        <div className="heading">
                            <h2>Partnership & General <span>Inquiry Form</span></h2>
                            <p>This centralized portal manages all general inquiries, including new business partnerships for Hospitals, ProCalyx, and Swasth for Corporates. Queries are routed to the relevant strategic lead immediately.</p>
                        </div>
                        <div className="form">
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
                                    <label htmlFor="">City*</label>
                                    <input type="text" className="form-control no-focus" placeholder="Gurugram" />
                                    <div className="error">Enter Your City</div>
                                </div>
                                <div className="form-group border">
                                    <label htmlFor="">State*</label>
                                    <input type="text" className="form-control no-focus" placeholder="State" />
                                    <div className="error">Enter Your State</div>
                                </div>
                                <div className="form-group border">
                                    <label htmlFor="">Pincode*</label>
                                    <input type="tel" className="form-control no-focus" placeholder="XXXXXXXXXX" />
                                    <div className="error">Enter Your Pincode</div>
                                </div>
                                <div className="form-group border full">
                                    <MySelect
                                        id="selectProject"
                                        placeholder="Swasth"
                                        options={optionsProject}
                                        selectedValue={project}
                                        onValueChange={setProject}
                                    />
                                    <div className="error">Enter Your Product</div>
                                </div>
                            </div>
                            <div className="disclaim">
                                <p>By clicking on submit button, you are agreeing the <Link href="/terms-and-conditions">terms and conditions</Link></p>
                            </div>
                            <Button classname="white" buttonText="Submit" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}