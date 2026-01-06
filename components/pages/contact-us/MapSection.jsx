import Image from "next/image";
import Link from "next/link";

export default function MapSection(){
    return (
      <section>
        <div className="map_section sec-pad">
          <div className="container">
            <div className="main_wrapper flex">
              <div className="details">
                <h4>Gurugram Headquarters</h4>
                <ul>
                  <li>
                    <Link href="https://maps.app.goo.gl/9CdJCXihL5aoKmWf7" target="_blank">
                      <div className="icon">
                        <Image src="/assets/icon/location.svg" width="25" height="25" alt="Contact Icon"></Image>
                      </div>
                      <span>
                        Unit No. TTF-01, 3rd Floor, Ocus Technopolis, Tower B,
                        Sector - 54, Gurugram, Haryana - 122002
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:+919250050501">
                      <div className="icon">
                        <Image src="/assets/icon/call.svg" width="25" height="25" alt="Contact Icon"></Image></div> <span>+91 9250050501</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:swasth@affordplan.com">
                      <div className="icon">
                        <Image src="/assets/icon/mail.svg" width="25" height="25" alt="Contact Icon"></Image>
                      </div>
                      <span>swasth@affordplan.com</span>
                    </Link>
                  </li>
                </ul>
                <Link className="btn" href="https://maps.app.goo.gl/9CdJCXihL5aoKmWf7" target="_blank">
                  Get Direction
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18px"
                    height="18px"
                    viewBox="0 0 1024 1024"
                  >
                    <path
                      fill="currentColor"
                      d="M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312z"
                    ></path>
                  </svg>
                </Link>
              </div>
              <div className="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.2802502660534!2d77.09824868661634!3d28.440967130292663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d197c74bca95b%3A0xe14636976eb1ee82!2sAffordplan!5e0!3m2!1sen!2sin!4v1767679488423!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}