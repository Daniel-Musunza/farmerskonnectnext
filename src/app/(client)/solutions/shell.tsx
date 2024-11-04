'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Search } from 'lucide-react'
import { Carousel } from '@mantine/carousel'
import { Container } from '@mantine/core'

export default function Shell() {
    const [currentSlide, setCurrentSlide] = useState(0)

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
            image: "/placeholder.svg?height=300&width=400",
        },
        {
            id: 3,
            title: "Seed Solutions",
            description: "Creating a bridge between farmers and the seed value chain.",
            image: "/placeholder.svg?height=300&width=400",
        }
    ]

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }

    return (
        <div className="min-h-screen bg-white">

            {/* Hero Section */}
            <div className="relative h-[60vh] mt-20">
                <Image
                    src="https://farmerskonnect.org/static/media/farm.bad4e670ade21cd55a4a.jpg"
                    alt="Farmers in field"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-8 left-8 text-white">
                    <div className="flex items-center space-x-2 text-sm">
                        <Link href="/" className="hover:underline">AGVENTURE | HOME</Link>
                        <span>›</span>
                        <span className="text-green-400">SOLUTIONS</span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <Container m="lg">
                    <div className="text-center mb-16 flex flex-col md:flex-row md:justify-between w-full">
                        <div className="flex flex-col">
                        <h4 className="text-lg font-bold mb-4">WHAT WE OFFER</h4>
                        <h2 className="text-3xl font-bold mb-4 text-green-900">OUR SOLUTIONS</h2>
                        </div>
                       
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Our market-led crop diversification initiative builds resilient and profitable farming communities through
                        </p>
                    </div>

                    {/* Carousel */}
                    <Carousel
                        slideSize="33.33%"
                        slideGap="sm"
                        loop
                        align="start"
                        styles={{
                            root: {
                                height: "fit-content"
                            },
                            control: {
                                backgroundColor: 'white',  // Change background color of side buttons
                                color: 'black',  // Change arrow color
                                borderRadius: '50%',  // Make buttons circular
                                width: 40,  // Set width of the buttons
                                height: 40,  // Set height of the buttons
                                '&:hover': {
                                    backgroundColor: 'grey',  // Change background color on hover
                                },
                            },
                        }}
                    >
                        {slides.map((slide, index) => (
                            <Carousel.Slide key={index}>
                                <div key={slide.id} className="w-full flex-shrink-0 px-4 lg:w-[400px]">
                                    <div className="bg-green-600 rounded-lg overflow-hidden">
                                        <Image
                                            src="/images/canolafarming.jpg"
                                            alt={slide.title}
                                            width={400}
                                            height={300}
                                            className="w-full h-64 object-cover"
                                        />
                                        <div className="p-8">
                                            <div className="text-6xl text-white/20 font-bold mb-4">{slide.id}</div>
                                            <h3 className="text-xl text-white font-semibold mb-2">{slide.title}</h3>
                                            <p className="text-white/90">{slide.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Slide>
                        ))}
                    </Carousel>

            </Container>

        </div>
    )
}