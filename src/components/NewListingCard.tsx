'use client'; // Ensure client-side rendering


import { useEffect, useState } from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image"; // Use Next.js Image for optimized loading
import { formatNumberWithCommas } from "@/utils/priceformat";
import { Modal } from "@mantine/core";
import EnquiryModal from "./EnquiryModal";


export default function NewListingCard({ data }: any) {
    const slides = data?.images;
    const [opened, setOpened] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        // Check screen size on mount and resize
        const checkScreenSize = () => {
            setIsSmallScreen(window.innerWidth <= 800); // Adjust to `640px` for small screens
        };
        checkScreenSize(); // Run on mount

        // Add event listener to handle window resize
        window.addEventListener("resize", checkScreenSize);

        // Cleanup event listener
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);


    const settings = {
        infinite: true,
        dots: false,
        arrows: false,
        autoplay: true, // Disable autoplay
        fade: false,     // Disable fade
        rtl: true,
        pauseOnHover: true,
        autoplaySpeed: 5000,
        mobileFirst: true,
    };

    return (
        <>
            <div className=" mx-auto lg:p-4">
                {/* <!-- Main Card Container --> */}
                <div className="flex flex-col md:flex-row dev-card lg:mb-2">
                    {/* <!-- Image Section --> */}
                    <div className="relative md:w-1/2 dev-img overflow-hidden bg-cover bg-no-repeat">
                        {isSmallScreen ?
                            (
                                <Image  
                                    src={slides[0].src}
                                    alt={`Image `}
                                    width={400}
                                    height={300}
                                    style={{ objectFit: 'cover', margin: 0 }}
                                    className="transition duration-300 ease-in-out hover:scale-110"
                                />
                            )
                            : (
                                <Slider {...settings}>
                                    {slides.map((slide: any, index: number) => (
                                        <div key={index} className="image-slide2 slide overflow-hidden bg-cover bg-no-repeat">
                                            <Image priority={index === 0}
                                                src={slide.src}
                                                alt={`Image ${index + 1}`}
                                                width={600} // Adjust as needed
                                                height={300} // Adjust as needed

                                                style={{ objectFit: 'cover' }}
                                                className="transition duration-300 ease-in-out hover:scale-110"
                                            />
                                        </div>
                                    ))}
                                </Slider>
                            )}

                        <div className="absolute top-4 left-0 bg-[#16A34A] text-white font-bold px-3 py-1 ">
                            NOW LETTING
                        </div>
                    </div>

                    {/* <!-- Information Section --> */}
                    <div className="md:w-1/2 p-6 flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-bold mb-2">{data?.title} | {data.propertyType}</h3>
                            <div className="mb-4">
                                <div className="flex items-center mb-1">
                                    <div className="w-[50px] mr-2 flex justify-center items-center">
                                        <Image  
                                            src="https://static.wixstatic.com/media/1bb245_e078343b722e4c63a91e1e24c2da1a79~mv2.png/v1/fill/w_45,h_45,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/sqm.png"
                                            alt="Type Icon"
                                            width={25}
                                            height={0}
                                            className="w-full"
                                        />
                                    </div>
                                    <span className="font-semibold uppercase">Acres</span> <span className="ml-2">{data.acres}</span>
                                </div>
                                <div className="flex items-center mb-1">
                                    <div className="w-[50px] mr-2 flex justify-center items-center">
                                        <Image  
                                            src="https://static.wixstatic.com/media/1bb245_4dd010baf34e46dd99b3a4cd7f0e3cd9~mv2.png/v1/fill/w_28,h_28,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/price.png"
                                            alt="Price Icon"
                                            width={25}
                                            height={0}
                                            className="w-[50%]"
                                        />
                                    </div>

                                    <span className="font-semibold">PRICE</span> <span className="ml-2">From Ksh. {formatNumberWithCommas(data?.price)}</span>
                                </div>
                                <div className="flex items-center mb-1">
                                    <div className="w-[50px] mr-2 flex justify-center items-center">
                                        <Image  
                                            src="https://static.wixstatic.com/media/1bb245_f1d160ad1cf941e98400fae16a853eb5~mv2.png/v1/fill/w_21,h_21,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/LOCATION.png"
                                            alt="Location Icon"
                                            width={25}
                                            height={0}
                                            className="w-[50%]"
                                        />
                                    </div>
                                    <span className="font-semibold">LOCATION</span> <span className="ml-2">{data.location.name}</span>
                                </div>
                            </div>
                            <p className="text-gray-700">
                                {data.moreInfo}
                            </p>
                        </div>
                        {/* 
                        <!-- Buttons Section --> */}
                        <div className="flex justify-center items-center w-full mt-2">
                            <button onClick={() => setOpened(true)} className="flex lg:hidden justify-center  px-6 py-2 border border-green-800 font-semibold w-[200px] hover:bg-green-800 hover:text-white transition-colors">
                                ENQUIRE
                            </button>
                        </div>

                    </div>
                </div>
                <div className="hidden lg:flex gap-4 ">
                    <button onClick={() => setOpened(true)} className="flex justify-center px-6 py-2 border border-green-800 font-semibold w-[200px] hover:bg-green-800 hover:text-white transition-colors">
                        ENQUIRE
                    </button>

                    {/* <button className="px-6 py-2 border border-black font-semibold  hover:bg-black hover:text-white transition-colors">
                        VIEW LISTING
                    </button> */}
                </div>
                <Modal
                    withCloseButton={true}
                    opened={opened} // Filter Modal state
                    onClose={() => setOpened(false)} // Close Filter Modal
                    title="Enquire about this listing"
                >
                    <EnquiryModal data={data} setOpened={setOpened} />
                </Modal>
            </div>


        </>
    )
}