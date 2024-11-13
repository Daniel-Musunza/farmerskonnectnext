import React from 'react';
import Slider from "react-slick";
import Image from "next/image";

const CustomCarousel = ({ slides }: any) => {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ],
        nextArrow: <CustomArrow />,
        prevArrow: <CustomArrow />,
    };

    return (
        <Slider {...settings}>
            {slides.map((slide: any, index: number) => (
                <div key={index} className="flex justify-center gap-4">
                    <div
                        className="bg-green-600 w-[400px] overflow-hidden"
                        style={{
                            borderBottomLeftRadius: '120px',
                            borderBottomRightRadius: '120px',
                        }}
                    >
                        <div className="mt-[20px] ml-[20px] mr-[20px]">
                            <Image
                                src="/images/canolafarming.jpg"
                                alt={slide.title}
                                width={380}
                                height={300}
                                className="object-cover"
                                style={{
                                    borderBottomLeftRadius: '60px',
                                    borderBottomRightRadius: '60px',
                                }}
                            />
                        </div>

                        <div className="px-8 mb-12">
                            <div className="text-6xl text-white/20 font-bold mb-2">{slide.id}</div>
                            <h3 className="text-xl text-white font-semibold mb-2">{slide.title}</h3>
                            <p className="text-white/90">{slide.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
};

// Custom arrow component for the next/prev buttons
const CustomArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                backgroundColor: 'white',
                color: 'black',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            onClick={onClick}
        />
    );
};

export default CustomCarousel;
