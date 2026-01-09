import Image from "next/image";
import Link from "next/link";

export default function MoreTrends(){
    return(
        <section>
            <div className="more_trends_sec sec-pad-all">
                <div className="container">
                    <div className="more_trends">
                        <Link className="more_trends_col" href="">
                            <figure>
                                <Image src="/assets/images/media/more_trends1.jpg" width="500" height="300" alt="More Images"></Image>
                            </figure>
                            <figcaption>
                                <h6>Affordplan targets Rs 1,000 crore in GTV by FY25, aims to bridge healthcare affordability gap in India</h6>
                                <p className="date">Oct 28, 2024</p>
                            </figcaption>
                        </Link>
                        <Link className="more_trends_col" href="">
                            <figure>
                                <Image src="/assets/images/media/more_trends2.jpg" width="500" height="300" alt="More Images"></Image>
                            </figure>
                            <figcaption>
                                <h6>Affordplan targets Rs 1,000 crore in GTV by FY25, aims to bridge healthcare affordability gap in India</h6>
                                <p className="date">Oct 28, 2024</p>
                            </figcaption>
                        </Link>
                        <Link className="more_trends_col" href="">
                            <figure>
                                <Image src="/assets/images/media/more_trends3.jpg" width="500" height="300" alt="More Images"></Image>
                            </figure>
                            <figcaption>
                                <h6>Affordplan targets Rs 1,000 crore in GTV by FY25, aims to bridge healthcare affordability gap in India</h6>
                                <p className="date">Oct 28, 2024</p>
                            </figcaption>
                        </Link>
                        <Link className="more_trends_col" href="">
                            <figure>
                                <Image src="/assets/images/media/more_trends1.jpg" width="500" height="300" alt="More Images"></Image>
                            </figure>
                            <figcaption>
                                <h6>Affordplan targets Rs 1,000 crore in GTV by FY25, aims to bridge healthcare affordability gap in India</h6>
                                <p className="date">Oct 28, 2024</p>
                            </figcaption>
                        </Link>
                        <Link className="more_trends_col" href="">
                            <figure>
                                <Image src="/assets/images/media/more_trends2.jpg" width="500" height="300" alt="More Images"></Image>
                            </figure>
                            <figcaption>
                                <h6>Affordplan targets Rs 1,000 crore in GTV by FY25, aims to bridge healthcare affordability gap in India</h6>
                                <p className="date">Oct 28, 2024</p>
                            </figcaption>
                        </Link>
                        <Link className="more_trends_col" href="">
                            <figure>
                                <Image src="/assets/images/media/more_trends3.jpg" width="500" height="300" alt="More Images"></Image>
                            </figure>
                            <figcaption>
                                <h6>Affordplan targets Rs 1,000 crore in GTV by FY25, aims to bridge healthcare affordability gap in India</h6>
                                <p className="date">Oct 28, 2024</p>
                            </figcaption>
                        </Link>
                        <Link className="more_trends_col" href="">
                            <figure>
                                <Image src="/assets/images/media/more_trends1.jpg" width="500" height="300" alt="More Images"></Image>
                            </figure>
                            <figcaption>
                                <h6>Affordplan targets Rs 1,000 crore in GTV by FY25, aims to bridge healthcare affordability gap in India</h6>
                                <p className="date">Oct 28, 2024</p>
                            </figcaption>
                        </Link>
                        <Link className="more_trends_col" href="">
                            <figure>
                                <Image src="/assets/images/media/more_trends2.jpg" width="500" height="300" alt="More Images"></Image>
                            </figure>
                            <figcaption>
                                <h6>Affordplan targets Rs 1,000 crore in GTV by FY25, aims to bridge healthcare affordability gap in India</h6>
                                <p className="date">Oct 28, 2024</p>
                            </figcaption>
                        </Link>
                        <Link className="more_trends_col" href="">
                            <figure>
                                <Image src="/assets/images/media/more_trends3.jpg" width="500" height="300" alt="More Images"></Image>
                            </figure>
                            <figcaption>
                                <h6>Affordplan targets Rs 1,000 crore in GTV by FY25, aims to bridge healthcare affordability gap in India</h6>
                                <p className="date">Oct 28, 2024</p>
                            </figcaption>
                        </Link>
                    </div>
                    <div className="btn_wrap">
                        <Image src="/assets/images/media/load_more.svg" width="80" height="70" alt="Load More"></Image>
                        <button type="button" className="load_btn">Load More</button>
                    </div>
                </div>
            </div>
        </section>
    )
}