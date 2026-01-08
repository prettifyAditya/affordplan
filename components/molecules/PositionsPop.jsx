"use client"
import { useState, useEffect } from "react";
import { useModalStore } from "@/store/modalStore";
import "@/uploads/styles/component/component.css"
import Button from "../atoms/Button";

export default function PositionsPop(){
    const isPositionsOpen = useModalStore((state) => state.isPositionsOpen)
    const closePositionsPop = useModalStore((state) => state.closePositionsPop)
    const [AttachedFile, setAttachedFile] = useState([]);
    useEffect(() => {
        const fileInputs = document.querySelectorAll('input[type="file"].form-control');
        
        const handleChange = (event) => {
          const input = event.target;
          const fileName = input.value.replace(/C:\\fakepath\\/i, '');
          const sibling = input.parentElement.querySelector('.file-name'); 
          if (sibling) {
            sibling.style.setProperty('--filenameinitial', fileName ? `"${fileName}"` : 'var(--filename)');
          }
        };
    
        fileInputs.forEach(input => {
          input.addEventListener('change', handleChange);
        });
    
        // Cleanup on unmount
        return () => {
          fileInputs.forEach(input => {
            input.removeEventListener('change', handleChange);
          });
        };
    }, []);
    return(
        <div className={`model positions-pop ${isPositionsOpen ? "is-open" : ""}`}>
            <button className="close" onClick={closePositionsPop}>
                <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M0.75 0.75L23.25 23.25M0.75 23.25L23.25 0.75"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                </svg>
            </button>
            <div className="model-body">
                <div className="post_wrapper">
                    <div className="post_details_wrap">
                        <div className="website-content post-content">
                            <h3>Digital Designer</h3>
                            <p>Job Location: Sector 49, Gurugram</p>
                            <p>We are seeking a creative and detail-oriented Copywriter and Content Writer to join our team. The ideal candidate will have a passion for writing, a keen understanding of various industries, and the ability to craft compelling content for both digital and print platforms.</p>
                            <ul>
                                <li>Minimum Work Experience: 1-2 years</li>
                                <li>Hike offered as per Industry Standards/ Negotiable</li>
                                <li>Job Type: Full time (Work from office)</li>
                                <li>Working Days: 6 (Weekly)</li>
                            </ul>
                            <h3>Responsibilities</h3>
                            <ul>
                                <li>Produce high-quality, engaging content for various industries to meet client's needs, including website copy, blog posts, articles, social media content, and more.</li>
                                <li>Work closely with clients to understand their brand voice, messaging, and objectives, and tailor content accordingly.</li>
                            </ul>
                            <h3>Qualifications</h3>
                            <ul>
                                <li>Proven experience as a Copywriter, Content Writer, or similar role.</li>
                                <li>Excellent writing, editing, and proofreading skills.</li>
                                <li>Strong research skills and the ability to understand complex topics.</li>
                                <li>Familiarity with SEO best practices.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="post_form form">
                        <div className="heading">
                            <h2>Apply <span>Now</span></h2>
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
                                <label htmlFor="">Apply For*</label>
                                <input type="text" className="form-control no-focus" placeholder="Digital Designer" />
                                <div className="error">Enter Your Application</div>
                            </div>
                            <div className="form-group full file-input">
                                <label htmlFor="">Attach Resume*</label>
                                <input type="file" className="form-control no-focus" onChange={(e)=>setAttachedFile(e.target.files[0])} />
                                <div className="file-name"></div>
                                <div className="error">Please Upload File</div>
                            </div>
                        </div>
                        <Button buttonText="Submit" classname="top-right" />
                    </div>
                </div>
            </div>
        </div>
    )
}