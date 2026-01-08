"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function MoreTrends({ mediaData = [] }) {
    const [displayCount, setDisplayCount] = useState(9);
    const visibleMedia = mediaData.slice(0, displayCount);
    const hasMore = displayCount < mediaData.length;
    const handleLoadMore = () => {
        setDisplayCount(prev => prev + 9);
    };

    return (
        <section>
            <div className="more_trends_sec">
                <div className="container">
                    <div className="more_trends">
                        {visibleMedia.map((media) => (
                            <Link
                                key={media.MediaID}
                                className="more_trends_col"
                                href={media.ThirdPartyLink || ""}
                                target={media.ThirdPartyLink ? "_blank" : "_self"}
                            >
                                <figure>
                                    <Image
                                        src={media.MediaImage ? `/OnlineImages/MediaImages/${media.MediaImage}` : "/assets/images/media/more_trends1.jpg"}
                                        width="500"
                                        height="300"
                                        alt="More Images"
                                    />
                                </figure>
                                <figcaption>
                                    <h6>{media.Title}</h6>
                                    <p className="date">
                                        {media.MediaDate
                                            ? new Date(media.MediaDate).toLocaleDateString("en-US", {
                                                month: "short",
                                                day: "2-digit",
                                                year: "numeric",
                                            })
                                            : ""}
                                    </p>
                                </figcaption>
                            </Link>
                        ))}
                    </div>
                    {hasMore && (
                        <div className="btn_wrap">
                            <Image src="/assets/images/media/load_more.svg" width="80" height="70" alt="Load More" />
                            <button type="button" className="load_btn" onClick={handleLoadMore}>Load More</button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}