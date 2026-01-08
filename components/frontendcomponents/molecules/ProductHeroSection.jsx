import Image from "next/image";
import "@/uploads/styles/component/component.css"
import Button from "../atoms/Button";

export default function ProductHeroSection({ classname = "", heading = "Heading Here", subHeading = "Subheading Here", btnText = "Book a demo", mediaType = "video", mediaSrc = "assets/video/swasth_banner.mp4", videoPoster = "assets/video/swasth_banner_poster.png", linkHref = "" }) {
  return (
    <section>
      <div className={`product_herosec sec-pad-all ${classname}`}>
        <div className="container">
          <div className="main_wrapper flex">
            <div className="colA">
              <div className="heading">
                <h2>{heading}</h2>
                <p>{subHeading}</p>
                <Button classname="down" buttonText={btnText} linkHref={linkHref} />
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
