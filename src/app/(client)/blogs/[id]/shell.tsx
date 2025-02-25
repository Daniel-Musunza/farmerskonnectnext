'use client'

import { useEffect, useState } from "react";
import { Title } from "@mantine/core";
import useIntersectionObserver from "../../../../hooks/useIntersectionObserver";

import Link from "next/link";
import { buttonText } from "../../../../utils/buttonText";
import Image from "next/image";
import Footer from "@/components/footer";
import { useParams } from "next/navigation";

export default function Shell({ blogs }: any) {
    // Using params to access the blog ID
    const { id } = useParams(); // Extract id from params

    const [clientText, setClientText] = useState('');

    useEffect(() => {
        setClientText(buttonText()); // Set random text only on the client.
    }, []);

    // Find the blog by its ID
    const currentBlog = blogs.find((b: any) => b.id === id);

    const fadeLeftRef = useIntersectionObserver({ threshold: 0.1 });

    return (
        <>
           {/* Hero Section */}
           <div className="relative h-[30vh] md:h-[50vh] lg:h-[60vh] container mx-auto bg-white ">
                <div className="overflow-hidden rounded-b-[50px] lg:rounded-b-[100px] bg-white bg-cover bg-no-repeat">
                    <Image
                        src={currentBlog?.img}
                        alt="Farmers in field"
                        fill
                        className="object-cover transition duration-300 ease-in-out hover:scale-110 rounded-b-[50px] lg:rounded-b-[100px]"

                    />
                </div>

                <div className="absolute inset-0 bg-black/40 rounded-b-[100px]" />
                <div className="absolute bottom-2 left-4 lg:bottom-10 lg:left-20 text-white">
                    <div className="flex flex-col items-left p-[20px]">
                        <div className="flex items-center gap-2 text-sm ">
                            <Link href="/" className="hover:underline">FARMERS' KONNECT | HOME</Link>
                            <span>›</span>
                            <span className="text-green-400">BLOGS</span>
                        </div>
                        <Title order={1} component="div" className="hidden md:flex"> <span className="text-white">{currentBlog?.title}</span></Title>
                        <Title order={2} component="div" className="flex md:hidden"> <span className="text-white">{currentBlog?.title}</span></Title>

                    </div>
                </div>
            </div>

            <div className="p-[20px] mt-[50px] overflow-hidden flex gap-4 justify-center relative w-full">
                <div className="w-full md:w-[80%]">
                    <div className="flex flex-col gap-4 fade-left justify-center" ref={fadeLeftRef}>
                     
                        <div className="w-full flex flex-col gap-4">
                            <div className="flex w-full items-center h-fit">
                                <div dangerouslySetInnerHTML={{ __html: currentBlog?.mainContent }} />
                            </div>
                        </div>
                    </div>
                    <Title order={2} py="lg">Related Articles</Title>
                    <div className="relative w-full flex flex-col lg:flex-row flex-wrap gap-4">
                        {blogs?.filter((x: { id: any; }) => x.id !== currentBlog.id).map((property: any, index: number) => (
                            <div key={index} className="bg-white text-center w-[100%] h-[500px] lg:w-[317px] mx-auto flex flex-col justify-between overflow-hidden bg-cover bg-no-repeat">
                                <Image
                                    src={property.img}
                                    alt={property.title}
                                    width={317}
                                    height={250}
                                    priority
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 65vw, 65vw"
                                    placeholder="blur"
                                    blurDataURL="/images/blur.avif"
                                    loading="eager"
                                    className="w-full lg:w-[317px] h-[250px] object-cover z-5 transition duration-300 ease-in-out hover:scale-110"
                                    style={{ objectPosition: "50% 50%" }}
                                />
                                <div className="p-6">
                                    <h2 className="text-[27px] uppercase">{property.title}</h2>
                                    <p className="text-gray-600 mb-6 text-[14px]">{property.description}</p>
                                    <div className="w-full flex justify-center">
                                        <Link
                                            href={`/blogs/${property.id}`}
                                            className="bg-gray-800 text-white py-3 px-8 text-sm font-semibold hover:bg-gray-900 transition lg:block"
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
            
            <Footer />
        </>
    );
}
