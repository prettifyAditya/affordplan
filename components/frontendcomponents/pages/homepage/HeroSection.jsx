import Image from "next/image";

export default function HeroSection() {
  return (
    <section>
      <div className="home-secA sec-pad-all">
        <div className="container">
          <div className="main_wrapper flex">
            <div className="colA">
              <div className="heading">
                <h2>
                  Simplifying the
                  <span> healthcare financial journey.</span>
                </h2>
                <p>
                  Developing a transparent, technology-driven ecosystem that
                  bridges the gap between healthcare providers and families. The
                  focus remains on financial predictability and long-term
                  sustainability for all stakeholders
                </p>
              </div>
            </div>
            <div className="colB">
              <div className="animate_figure">
                <figure>
                  <Image src="/assets/images/home/hero_1.jpg" width="200" height="340" alt="Hero Image"></Image>
                </figure>
                <figure>
                  <Image src="/assets/images/home/hero_2.jpg" width="200" height="340" alt="Hero Image"></Image>
                </figure>
                <figure>
                  <Image src="/assets/images/home/hero_3.jpg" width="200" height="340" alt="Hero Image"></Image>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
