import React from "react";
import Slider from "react-slick";

import { ChevronLeft, ChevronRight } from "lucide-react";

const CustomCarousel = ({ cards }: any) => {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px", // No extra padding for perfect centering
        autoplaySpeed: 5000,
        arrows: true, // Default state (visible on desktop)
        dots: false, // Default state (hidden on desktop)
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerPadding: "0px",
                    arrows: true, // Still showing arrows for tablets
                    dots: false, // Still no dots for tablets
                },
            },
            {
                breakpoint: 765, // Mobile breakpoint
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "0px",
                    arrows: false, // Hide arrows on mobile
                    dots: true, // Show dots on mobile
                },
            },
        ],
        nextArrow: <CustomRightArrow />,
        prevArrow: <CustomLeftArrow />,
    };

    return (
        <div className="relative w-full mx-auto">
            <Slider {...settings}>
             {cards}
            </Slider>
        </div>
    );
};

// Custom arrow component for the next button
const CustomRightArrow = ({ className, style, onClick }: any) => (
    <div
        className={`${className} absolute font-bold right-1 lg:relative`}
        style={{ ...style, zIndex: 99, color: "#16A34A" }} // Ensure proper layering
        onClick={onClick}
    >
        <ChevronRight size={44} />
    </div>
);

// Custom arrow component for the previous button
const CustomLeftArrow = ({ className, style, onClick }: any) => (
    <div
        className={`${className} absolute font-bold left-1 lg:relative`}
        style={{ ...style, zIndex: 99, color: "#16A34A" }} // Ensure proper layering
        onClick={onClick}
    >
        <ChevronLeft size={44} />
    </div>
);

export default CustomCarousel;
