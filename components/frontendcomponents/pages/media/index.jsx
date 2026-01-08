"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import TrendsSec from "./TrendsSec";
import MoreTrends from "./MoreTrends";
import "@/uploads/styles/media/media.css";
import { useGetMediaPageDataQuery } from "@/store/backendSlice/masterAPISlice";

export default function MediaPage() {
    const router = useRouter();
    const { data, isLoading } = useGetMediaPageDataQuery();
    const allMedia = data || [];

    const topFourMedia = allMedia.slice(0, 2);
    const remainingMedia = allMedia.slice(2);

    useEffect(() => {
        if (!isLoading && allMedia.length === 0) {
            router.push("/");
        }
    }, [isLoading, allMedia, router]);
    if (isLoading) return null;

    return (
        <main>
            {topFourMedia.length > 0 && <TrendsSec mediaData={topFourMedia} />}
            {remainingMedia.length > 0 && <MoreTrends mediaData={remainingMedia} />}
        </main>
    );
}
