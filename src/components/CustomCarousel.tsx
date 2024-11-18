import React from "react";
import Slider from "react-slick";
import Image from "next/image";

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
                    <div key={index} className="flex items-center justify-center lg:ml-[30px] h-[400px]">
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

                            <div className="px-8 mb-8">
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
