import Image from "next/image";

export default function HeroSection(){
    return (
      <div className="home-secA sec-pad-all">
        <div className="container">
          <div className="main_wrapper flex">
            <div className="colA">
              <div className="heading">
                <h2>
                  We are simplifying the
                  <span> healthcare financial journey</span> for all partners.
                </h2>
                <p>
                  We build innovative financial ecosystems where institutional
                  commitment is continually rewarded. By creating a cycle of
                  dependable value, we ensure essential access is affordable,
                  predictable, and seamless for everyone involved.
                </p>
                <button type="button" className="btn">Enquire Now 
                  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
                    <path fill="#fff" d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42s1.02.39 1.41 0l6.59-6.59a.996.996 0 0 0 0-1.41l-6.58-6.6a.996.996 0 1 0-1.41 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1" strokeWidth={0.1} stroke="#fff"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="colB">
                <figure>
                    <Image src="/assets/images/home/phone_mock.svg" width="400" height="600" alt="Hero Image"></Image>
                </figure>
            </div>
          </div>
        </div>
      </div>
    );
}