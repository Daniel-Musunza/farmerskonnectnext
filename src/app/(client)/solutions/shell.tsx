'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Search } from 'lucide-react'
import { Carousel } from '@mantine/carousel'
import { Container, Title } from '@mantine/core'
import CustomCarousel from '@/components/CustomCarousel'
import useIntersectionObserver from '@/hooks/useIntersectionObserver'
import SolutionCard from "@/components/SolutionCard";
import Footer from '@/components/footer'

export default function Shell() {

    const fadeLeftRef = useIntersectionObserver({ threshold: 0.1 });
    const fadeRightRef = useIntersectionObserver({ threshold: 0.1 });

    const slides = [
        {
            id: 1,
            title: "Market Access",
            description: "Connecting farmers to stable and lucrative markets.",
            image: "/images/canolafarming.jpg",
        },
        {
            id: 2,
            title: "Expert Guidance",
            description: "Expert guidance tailored to your farm's unique needs.",
            image: "/images/canolafarming.jpg",
        },
        {
            id: 3,
            title: "Seed Solutions",
            description: "Creating a bridge between farmers and the seed value chain.",
            image: "/images/canolafarming.jpg",
        }
    ]

    const cards = slides.map((slide: any, index: number) => (
        <SolutionCard key={index} slide={slide} />
    ))

    return (
        <div className="min-h-screen bg-white flex justify-center flex-col overflow-x-hidden">

            {/* Hero Section */}
            <div className="relative h-[30vh] md:h-[50vh] lg:h-[60vh] container mx-auto bg-white ">
                <div className="overflow-hidden rounded-b-[50px] lg:rounded-b-[100px] bg-white bg-cover bg-no-repeat">
                    <Image
                        src="/images/banner.jpeg"
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
                            <span className="text-green-400">SOLUTIONS</span>
                        </div>
                        <Title order={1} component="div" className="hidden md:flex"> <span className="text-white ">CONTRACT FARMING</span></Title>
                        <Title order={2} component="div" className="flex md:hidden"> <span className="text-white ">CONTRACT FARMING</span></Title>

                    </div>
                </div>
            </div>


            {/* Main Content */}
            <div className='container mx-auto px-6 flex flex-col justify-center'>
                <div className="flex w-full justify-center my-0 py-0 lg:h-[150px]">
                    <div className="py-4 lg:pt-8 flex flex-col w-[90%] md:w-[80%] lg:flex-row justify-center md:justify-between gap-2">
                        <div className="hidden lg:flex flex-col text-center lg:text-left lg:ml-[100px] ">
                            {/* <Title order={4} className="text-lg font-bold ">WHAT WE OFFER</Title> */}
                            <Title order={1} className="text-3xl font-bold  text-green-900 fade-left lg:py-4" ref={fadeLeftRef}>WHAT WE OFFER</Title>
                        </div>
                        <div className="flex items-right">
                            <p className="text-gray-900 text-bold text-lg max-w-xl mx-auto fade-right" ref={fadeRightRef}>
                                Our market-led crop diversification initiative builds resilient and profitable farming communities through <Link href="/contract-farming" className='text-[#16A34A]'>contract farming</Link>
                            </p>
                        </div>

                    </div>
                </div>
                <div className="container mx-auto  flex justify-center items-center">
                    <div className="w-full lg:w-[80%] px-2">
                        {/* Carousel */}
                        <CustomCarousel cards={cards} />

                    </div>
                </div>



            </div>
            <Footer />
        </div>
    )
}