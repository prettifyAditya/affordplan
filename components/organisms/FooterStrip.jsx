import Image from "next/image";
import Link from "next/link";
import "@/uploads/styles/component/component.css"

export default function FooterStrip(){
    return(  
        <div className="footer-strip">
            <ul>
                <li>
                    <Link href="">
                        <Image src="/assets/images/other/service4.svg" width="30" height="30" alt="Vector Icon"></Image>
                        Swasth
                    </Link>
                </li>
                <li>
                    <Link href="">
                        <Image src="/assets/images/other/service4.svg" width="30" height="30" alt="Vector Icon"></Image>
                        Procalyx™
                    </Link>
                </li>
                <li>
                    <Link href="">
                        <Image src="/assets/images/other/service4.svg" width="30" height="30" alt="Vector Icon"></Image>
                        Amaya Wellness
                    </Link>
                </li>
            </ul>
        </div>
    )
}