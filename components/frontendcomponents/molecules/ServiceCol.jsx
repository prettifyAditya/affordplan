import Image from "next/image"
import Link from "next/link"
import "@/uploads/styles/component/component.css"
import Button from "../atoms/Button"

export default function ServiceCol({ mediaType = "", mediaSrc = "", linkHref = "", classname = "", title = "", desc = "" }) {
    return (
        <Link href={linkHref} className={`service_col item-md ${classname}`}>
            <figure>
                {
                    mediaType === "video" ? (
                        <video src={mediaSrc} autoPlay muted loop playsInline></video>
                    ) : (
                        <Image src={mediaSrc} width="800" height="600" alt="Service Image"></Image>
                    )
                }
            </figure>
            <figcaption>
                <h4>{title}</h4>
                <p>{desc}</p>
                <Button classname="white" buttonText="Explore More" />
            </figcaption>
        </Link>
    )
}