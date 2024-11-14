import React from 'react';
import Slider from "react-slick";
import Image from "next/image";

const CustomCarousel = ({ slides }: any) => {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
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
                <div key={index} className="flex justify-center lg:ml-[30px] h-[400px]">
                    <div
                        className="bg-green-600 w-[340px] overflow-hidden"
                        style={{
                            borderBottomLeftRadius: '80px',
                            borderBottomRightRadius: '80px',
                        }}
                    >
                        <div className="mt-[20px] ml-[20px] mr-[20px]">
                            <Image
                                src={slide.image} // Use dynamic image source here
                                alt={slide.title}
                                width={320}
                                height={200}
                                className="object-cover"
                                style={{
                                    borderBottomLeftRadius: '50px',
                                    borderBottomRightRadius: '50px',
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
const CustomArrow = ({ className, style, onClick }: any) => (
    <div
        className={className}
        style={{
            ...style,
            backgroundColor: 'green',
            color: 'white',
            zIndex: 9999,
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


export default CustomCarousel;

// const CustomCarousel = ({ slides }: any) => {
//     const settings = {
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplaySpeed: 5000,
//         arrows: true,
//         dots: false,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                 }
//             }
//         ],
//         nextArrow: <CustomArrow />,
//         prevArrow: <CustomArrow />,
//     };

//     return (
//         <div className="container mx-auto w-[90%] flex justify-center items-center">
//             <Slider {...settings}>
//                 {slides.map((slide: any, index: number) => (
//                     <div key={index} className="flex justify-center lg:ml-[30px]">
//                         <div
//                             className="bg-green-600 w-[400px] overflow-hidden"
//                             style={{
//                                 borderBottomLeftRadius: '80px',
//                                 borderBottomRightRadius: '80px',
//                             }}
//                         >
//                             <div className="mt-[20px] ml-[20px] mr-[20px]">
//                                 <Image
//                                     src={slide.image} // Use dynamic image source here
//                                     alt={slide.title}
//                                     width={380}
//                                     height={300}
//                                     className="object-cover"
//                                     style={{
//                                         borderBottomLeftRadius: '50px',
//                                         borderBottomRightRadius: '50px',
//                                     }}
//                                 />
//                             </div>

//                             <div className="px-8 mb-12">
//                                 <div className="text-6xl text-white/20 font-bold mb-2">{slide.id}</div>
//                                 <h3 className="text-xl text-white font-semibold mb-2">{slide.title}</h3>
//                                 <p className="text-white/90">{slide.description}</p>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </Slider>
//         </div>
//     );
// };

// // Custom arrow component for the next/prev buttons
// const CustomArrow = ({ className, style, onClick }: any) => (
//     <div
//         className={className}
//         style={{
//             ...style,
//             backgroundColor: 'green',
//             color: 'white',
//             zIndex: 9999,
//             borderRadius: '50%',
//             width: '40px',
//             height: '40px',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//         }}
//         onClick={onClick}
//     />
// );

