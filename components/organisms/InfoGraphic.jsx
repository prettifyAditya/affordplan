import Image from "next/image"
import Link from "next/link"
import "@/uploads/styles/component/component.css"

export default function InfoGraphic({classname="", imgSrc="", heading="", desc="", btnType="button", btnClass="white", btnText="", linkHref=""}){
    return(
        <section>
            <div className={`info_graphic sec-pad ${classname}`}>
                <div className="container">
                    <div className="main_wrapper">
                        <div className="colA">
                            <figure>
                                <Image src={imgSrc} width="450" height="330" alt="" className="card"></Image>
                            </figure>
                        </div>
                        <figcaption>
                            <div className="content heading">
                                <h2>{heading}</h2>
                                <p>{desc}</p>
                                {btnType === "button" ? (<button type="button" className={`btn ${btnClass}`}>{btnText} <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="22px" viewBox="0 0 24 24">
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 5v14m0 0l6-6m-6 6l-6-6"></path>
                                </svg></button>) : (<Link className={`btn ${btnClass}`} href={linkHref}>{btnText} <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="22px" viewBox="0 0 24 24">
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 5v14m0 0l6-6m-6 6l-6-6"></path>
                                </svg></Link>)}
                            </div>
                        </figcaption>
                    </div>
                </div>
            </div>
        </section>
    )
}