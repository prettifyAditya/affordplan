import Link from "next/link";
import "@/uploads/styles/component/component.css"

export default function ThankYouPage(){
    return(
        <div className="banner thanks">
            <div className="bg">
            <video src="assets/video/career_banner.mp4" poster="assets/video/career_banner_poster.png" playsInline autoPlay muted loop width="100%" height="100%">
            </video>
            <div className="banner-wrapper">
                <div className="container">
                <div className="content">
                    <figure>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 256 256"><path fill="#fff" d="m254.3 107.91l-25.52-51.06a16 16 0 0 0-21.47-7.15l-24.87 12.43l-52.39-13.86a8.14 8.14 0 0 0-4.1 0L73.56 62.13L48.69 49.7a16 16 0 0 0-21.47 7.15L1.7 107.9a16 16 0 0 0 7.15 21.47l27 13.51l55.49 39.63a8.1 8.1 0 0 0 2.71 1.25l64 16a8 8 0 0 0 7.6-2.1l40-40l15.08-15.08l26.42-13.21a16 16 0 0 0 7.15-21.46m-54.89 33.37L165 113.72a8 8 0 0 0-10.68.61C136.51 132.27 116.66 130 104 122l43.24-42h31.81l27.21 54.41Zm-41.87 41.86l-58.12-14.53l-49.2-35.14l28-56L128 64.28l9.8 2.59l-45 43.68l-.08.09a16 16 0 0 0 2.72 24.81c20.56 13.13 45.37 11 64.91-5L188 152.66Zm-25.72 34.8a8 8 0 0 1-7.75 6.06a8 8 0 0 1-1.95-.24l-41.71-10.43a7.9 7.9 0 0 1-2.71-1.25l-26.35-18.82a8 8 0 0 1 9.3-13l25.11 17.94L126 208.24a8 8 0 0 1 5.82 9.7"/></svg>
                    </figure>
                    <h1>Thank You!</h1>
                    <p>Your query has been successfully submitted. Our team will review your request and get back to you shortly. We appreciate your interest in connecting with us.</p>
                    <Link href="/" className="btn white">
                    Back to home
                    </Link>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}