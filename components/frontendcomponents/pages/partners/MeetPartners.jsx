"use client";

import Image from "next/image";

export default function MeetPartners({ data = [] }) {
    if (!data || data.length === 0) return null;

    return (
        <section>
            <div className="meet_partners_sec sec-pad">
                <div className="container">
                    <div className="main_wrapper">
                        <div className="heading">
                            <h2>Meet Our <span>Partners</span></h2>
                        </div>
                        <div className="partner_wrapper">
                            {data.map((partner, index) => (
                                <figure key={partner.id || index}>
                                    <Image
                                        src={partner.logo || `/assets/images/other/client${(index % 4) + 1}.svg`}
                                        alt={partner.name || "Client Logo"}
                                        width={250}
                                        height={100}
                                    />
                                </figure>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
