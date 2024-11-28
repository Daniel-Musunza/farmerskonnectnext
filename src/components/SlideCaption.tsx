'use client'
import Link from "next/link";
import Image from "next/image";
import { Title } from "@mantine/core";

export default function SlideCaption() {

    const currentSlide ={
        id: 1,
        logo: "/images/canolalogo.png",
        caption: "ONGOING CONTRACT",
        title:  "🌱 Transforming Farming through contract Farming for Oil crops 🌱",
        mission: "🌱 Transforming Farming through contract Farming for Oil crops 🌱"
    }

    return (
        <div className="slide-caption gap-2">
            <div className="slide-badge">
                <Image
                    src={currentSlide.logo}
                    alt="Logo"
                    width={100}
                    height={0}
                />
            </div>
            {/* <div className="slide-badge">
                <div className="flex items-center justify-center w-[168px] h-[30px] border border-white text-white text-sm font-semibold tracking-wide">
                    {currentSlide.caption}
                </div>

            </div> */}
            <h2 className="flex flex-wrap">{currentSlide.title}</h2>
            {/* <h2 style={{ color: "#FF6922" }} className="">Living Experience</h2> */}
            {/* <p className="mb-2 ">{currentSlide.mission}</p> */}
            <Link href={`/listings/${currentSlide.id}`}>
                <span className="btn btn-ghost rounded-sm">Learn More</span>
            </Link>
        </div>
    )
}
