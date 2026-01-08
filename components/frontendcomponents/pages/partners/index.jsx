"use client";

import NetworkFormSec from "@/components/frontendcomponents/organisms/NetworkFormSec";
import HeroSection from "./HeroSection";
import MeetPartners from "./MeetPartners";
import TrustedClients from "./TrustedClients";
import "@/uploads/styles/partner/partner.css"
import ScalePartnership from "./ScalePartnership";
import { useGetPartnerPageDataQuery } from "@/store/backendSlice/masterAPISlice";

export default function PartnersPage() {
    const { data, isLoading } = useGetPartnerPageDataQuery();
    if (isLoading) return null;

    return (
        <main>
            <HeroSection />
            <ScalePartnership />
            {data?.partnerLogos?.length > 0 && (
                <TrustedClients data={data.partnerTestimonials} />
            )}
            {data?.partnerTestimonials?.length > 0 && (
                <MeetPartners data={data.partnerLogos} />
            )}
            <NetworkFormSec
                classname="partner"
                heading={<>Strategic Partnership Opportunities: <span>Let’s Grow Together.</span></>}
                subHeading="Access a demonstration to quantify competitive advantages and accelerate institutional transformation in an evolving market."
                formHeading="Partner With Us"
            />
        </main>
    );
}
