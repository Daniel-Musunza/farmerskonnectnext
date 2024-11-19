import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import SolutionCard from "./SolutionCard";

const CustomCarousel = ({ slides }: any) => {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px", // No extra padding for perfect centering
        autoplaySpeed: 5000,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerPadding: "0px",
                }
            },
            {
                breakpoint: 765,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "0px",
                }
            }
        ],
        nextArrow: <CustomArrow />,
        prevArrow: <CustomArrow />,
    };

    return (
        <div className="relative w-full max-w-screen-xl mx-auto px-6">
            <Slider {...settings}>
                {slides.map((slide: any, index: number) => (
                    <SolutionCard key={index} slide={slide}/>
                ))}
            </Slider>
        </div>
    );
};

// Custom arrow component for the next/prev buttons
const CustomArrow = ({ className, style, onClick }: any) => (
    <div
        className={className}
        style={{
            ...style,
            backgroundColor: "green",
            color: "white",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            zIndex: 10,
            top: "50%",
            transform: "translateY(-50%)",
        }}
        onClick={onClick}
    />
);

export default CustomCarousel;
