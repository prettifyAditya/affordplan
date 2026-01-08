import Button from "@/components/atoms/Button";

export default function SwasthLocater(){
    return (
        <section>
            <div className="swasth-secE sec-pad">
                <div className="container">
                <div className="heading">
                    <h2>
                    Swasth Membership <span>Enrollment and Hospital Locator.</span>
                    </h2>
                </div>
                <div className="locater_wrapper">
                    <div className="loc_nav">
                    <div className="input_wrapper">
                        <input
                        type="text"
                        className="form-input"
                        placeholder="Enter your City, PIN code, or Address..."
                        />
                        <Button classname="loc_btn" buttonText="Use my current location" />
                    </div>
                    <button type="button" className="btn">
                        Search
                    </button>
                    </div>
                    <div className="map_sec">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14036.76680369011!2d77.072231!3d28.4134719!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23fa3cf17213%3A0xf4533d0aee13b674!2sPrettify%20Creative%20%7C%20Graphic%20Designer%20Gurgaon%20%7C%20Logo%20Designer%20in%20Gurgaon%20%7C%20Web%20Designer%20in%20Gurgaon!5e0!3m2!1sen!2sin!4v1729250877739!5m2!1sen!2sin"
                            width="100%"
                            height="600"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}