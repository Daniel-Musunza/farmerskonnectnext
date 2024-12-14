'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Title } from '@mantine/core'
import useIntersectionObserver from '@/hooks/useIntersectionObserver'
import AboutSection from '@/components/AboutSection'
import Footer from '@/components/footer'

export default function Shell() {

    const fadeLeftRef = useIntersectionObserver({ threshold: 0.1 });
    const fadeRightRef = useIntersectionObserver({ threshold: 0.1 });


    return (
        <div className="min-h-screen bg-white flex justify-center flex-col overflow-x-hidden">

            {/* Hero Section */}
            <div className="relative h-[30vh] md:h-[50vh] lg:h-[60vh] container mx-auto bg-white ">
                <div className="overflow-hidden rounded-b-[50px] lg:rounded-b-[100px] bg-white bg-cover bg-no-repeat">
                    <Image
                        src="/images/about.webp"
                        alt="Farmers in field"
                        fill
                        className="object-cover transition duration-300 ease-in-out hover:scale-110 rounded-b-[50px] lg:rounded-b-[100px]"

                    />
                </div>

                <div className="absolute inset-0 bg-black/40 rounded-b-[100px]" />
                <div className="absolute bottom-6 left-4 lg:bottom-10 lg:left-20 text-white">
                    <div className="flex flex-col items-left p-[20px]">
                        <div className="flex items-center gap-2 text-sm ">
                            <Link href="/" className="hover:underline">FARMERS' KONNECT | HOME</Link>
                            <span>›</span>
                            <span className="text-green-400">ABOUT</span>
                        </div>
                        <Title order={1} component="div"> <span className="text-white">ABOUT US</span></Title>
                    </div>
                </div>
            </div>


            {/* Main Content */}
            <div className='container mx-auto px-6 flex flex-col justify-center'>
                <div className="flex w-full justify-center my-0 py-0 lg:h-[150px]">
                    <div className="pt-4 lg:pt-8 flex flex-col w-[90%] md:w-[80%] lg:flex-row justify-center md:justify-between gap-2">
                        <div className="hidden lg:flex flex-col text-center lg:text-left lg:ml-[100px] ">
                            <Title order={1} className="text-3xl font-bold  text-green-900 fade-left lg:py-4" ref={fadeLeftRef}>ABOUT US</Title>
                        </div>
                        <div className="flex items-right">
                            <p className="text-gray-900 text-bold text-lg max-w-xl mx-auto fade-right" ref={fadeRightRef}>
                            At Farmers' Konnect, we specialize in contract farming for oil crops and offer comprehensive land leasing services tailored to meet your agricultural needs.
                            </p>
                        </div>

                    </div>
                </div>
                <AboutSection />


            </div>
            <Footer />
        </div>
    )
}