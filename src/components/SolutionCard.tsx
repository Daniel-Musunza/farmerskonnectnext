import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

 const SolutionCard = ({ slide }: any) => {
    const fadeDownRef = useIntersectionObserver({ threshold: 0.01 });
    return (
        <div className="flex items-center justify-center lg:ml-[30px] h-[400px]">
            <div
                className="bg-green-600 w-full md:w-[320px] overflow-hidden  lg:ml-1 h-full"
                style={{
                    borderBottomLeftRadius: "80px",
                    borderBottomRightRadius: "80px",
                }}
            >
                <div className="mt-5 mx-5">
                    <Image
                        src={slide.image}
                        alt={slide.title}
                        width={320}
                        height={200}
                        className="object-cover w-full"
                        style={{
                            borderBottomLeftRadius: "50px",
                            borderBottomRightRadius: "50px",
                        }}
                    />
                </div>

                <div className="px-8 mb-8 fade-down" ref={fadeDownRef}>
                    <div className="text-6xl text-white/20 font-bold mb-2">
                        {slide.id}
                    </div>
                    <h3 className="text-xl text-white font-semibold mb-2">
                        {slide.title}
                    </h3>
                    <p className="text-white/90">{slide.description}</p>
                </div>
            </div>
        </div>

    );
};


export default SolutionCard 