export default function HeroSection() {
  return (
    <section>
      <div className="swasth-secA sec-pad-all">
        <div className="container">
          <div className="main_wrapper flex">
            <div className="colA">
              <div className="heading">
                <h2>
                  A Single Card Simplifying
                  <span> Family Financial Planning.</span>
                </h2>
                <p>
                  The Swasth Card delivers dependable cashback, access to
                  multiple financial support, comprehensive insurance, and
                  dedicated rewards.
                </p>
                <button type="button" className="btn">
                  Explore Benefits{" "}
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
                <video
                  src="assets/video/swasth_banner.mp4"
                  poster="assets/video/swasth_banner_poster.png"
                  autoPlay
                  muted
                  loop
                  playsInline
                ></video>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
