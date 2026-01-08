import Image from "next/image"

export default function SwiperButton({ classname="" }) {
    return(
        <button className={classname}>
            <Image src="/assets/icon/next-black.svg" width="30" height="30" alt="Swiper Buttons"></Image>
        </button>
    )
}