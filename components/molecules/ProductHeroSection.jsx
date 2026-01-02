import Image from "next/image";
import "@/uploads/styles/component/component.css"

export default function ProductHeroSection({heading="Heading Here", subHeading="Subheading Here", btnText="Book a demo", mediaType="video", mediaSrc="assets/video/swasth_banner.mp4", videoPoster="assets/video/swasth_banner_poster.png"}) {
  return (
    <section>
      <div className="product_herosec sec-pad-all">
        <div className="container">
          <div className="main_wrapper flex">
            <div className="colA">
              <div className="heading">
                <h2>{heading}</h2>
                <p>{subHeading}</p>
                <button type="button" className="btn">
                  {btnText}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="22px"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.2}
                      d="M12 5v14m0 0l6-6m-6 6l-6-6"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="colB">
              <figure>
                {mediaType === "video" ? (
                  <video
                    src={mediaSrc}
                    poster={videoPoster}
                    autoPlay
                    muted
                    loop
                    playsInline
                  ></video>
                ) : (
                  <Image
                    src={mediaSrc}
                    width="600"
                    height="450"
                    alt="Hero Section Media"
                  ></Image>
                )}
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
