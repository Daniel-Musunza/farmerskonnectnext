'use client'

import { useEffect, useState } from "react";
import { Title } from "@mantine/core";
import useIntersectionObserver from "../../../../hooks/useIntersectionObserver";
import { useParams } from "next/navigation";
import Link from "next/link";
import { buttonText } from "../../../../utils/buttonText";
import Image from "next/image";

export default function Shell({ blog, blogs }: any) {
    
    const [clientText, setClientText] = useState('');

    useEffect(() => {
        setClientText(buttonText());  // Set random text only on the client.
    }, []);

    const currentBlog = blog

    const fadeLeftRef = useIntersectionObserver({ threshold: 0.1 });

    return (
        <>
            <div className="p-[20px] lg:mt-[50px]  overflow-hidden flex  gap-4 justify-center relative w-full  mt-[100px]">
                <div className="w-full md:w-[80%]">
                    <div className="flex flex-col gap-4 fade-left" ref={fadeLeftRef}>
                        <Title order={2} py="lg">{currentBlog?.title}</Title>
                        <div className="w-full flex flex-col gap-4">
                                                     
                            <div className="flex w-full  items-center h-fit">
                                <div dangerouslySetInnerHTML={{ __html: currentBlog?.mainContent }} />
                            </div>

                        </div>

                    </div>
                    <Title order={2} py="lg">Related Articles</Title>
                    <div className="relative w-full flex flex-col lg:flex-row flex-wrap gap-4">

                        {blogs?.filter((x: { id: any; })=>x.id !== currentBlog.id).map((property: any, index: number) => (
                            <div key={index} className="bg-white text-center w-[100%] h-[500px]  lg:w-[317px] mx-auto flex flex-col justify-between overflow-hidden bg-cover bg-no-repeat"  > {/* Center card */}
                                {/* Image */}
                                <Image  
                                    src={property.img}
                                    alt={property.title}
                                    width={317}
                                    height={250}
                                    priority
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 65vw, 65vw"
                                    placeholder="blur"
                                    blurDataURL="/images/blur.avif"
                                    loading='eager'
                                    className="w-full lg:w-[317px] h-[250px] object-cover z-5 transition duration-300 ease-in-out hover:scale-110" // Set height to auto to fit the content
                                    style={{ objectPosition: '50% 50%' }}
                                />

                                {/* Content */}
                                <div className="p-6">
                                    <h2 className="text-[27px] uppercase">{property.title}</h2>
                                    <p className="text-gray-600 mb-6 text-[14px]">{property.description}</p>

                                    {/* Button */}
                                    <div className="w-full flex justify-center">
                                        <Link
                                            href={`/blogs/${property.id}`}
                                            className="bg-gray-800 text-white py-3 px-8 text-sm font-semibold hover:bg-gray-900 transitionc lg:block"
                                        >
                                           {clientText || '...'}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
