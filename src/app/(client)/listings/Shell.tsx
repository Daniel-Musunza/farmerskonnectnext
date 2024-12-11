'use client'
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';
import Footer from '@/components/footer';
import NewListingCard from '@/components/NewListingCard';
import Image from 'next/image'
import Link from 'next/link'
import { Container, Title } from '@mantine/core'

export default function Shell() {
    const listings = [
        {
            caption: "Rent",
            propertyType: "IDEAL FOR COMMERCIAL USE",
            trending: false,
            id: 1,
            images: [
                { src: "/images/land3.webp" },
            ],
            title: "LAND IN NYERI",
            price: 200000,
            location: {
                longitude: "643f567",
                latitude: "u6uytjy",
                name: "Nyeri, Kenya"
            },
            moreInfo: "This prime commercial land in Nyeri offers excellent accessibility and visibility, making it ideal for retail outlets, office spaces, or hospitality ventures. Located in a bustling area, this property ensures a consistent flow of customers and business opportunities."
        },
        {
            caption: "Rent",
            trending: false,
            propertyType: "PRIME LOCATION",
            id: 2,
            images: [
                { src: "/images/land2.webp" }
            ],
            title: "SPACIOUS LAND IN MERU",
            price: 300000,
            location: {
                longitude: "643f567",
                latitude: "u6uytjy",
                name: "Meru, Kenya"
            },
            moreInfo: "This spacious land in Meru is located in a prime area, perfect for commercial or residential development. With ample room for expansion, it is suited for projects such as housing estates, educational institutions, or mixed-use developments."
        },
        {
            caption: "Rent",
            trending: false,
            propertyType: "FERTILE SOIL",
            id: 3,
            images: [
                { src: "/images/land1.jpg" }
            ],
            title: "AGRICULTURAL LAND IN KILIFI",
            price: 350000,
            location: {
                longitude: "643f567",
                latitude: "u6uytjy",
                name: "Kilifi, Kenya"
            },
            moreInfo: "This fertile agricultural land in Kilifi is perfect for farming and agribusiness ventures. The property benefits from rich soil, favorable weather conditions, and proximity to key markets, ensuring high yields and profitability."
        },
    ];


    const fadeUpRef = useIntersectionObserver({ threshold: 0.1 });
    return (
        <>
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
                <div className="absolute bottom-6 left-4 lg:bottom-10 lg:left-20 text-white">
                    <div className="flex flex-col items-left p-[20px]">
                        <div className="flex items-center gap-2 text-sm ">
                            <Link href="/" className="hover:underline">FARMERS' KONNECT | HOME</Link>
                            <span>›</span>
                            <span className="text-green-400">LISTINGS</span>
                        </div>
                        <Title order={1} component="div"> <span className="text-white">LISTINGS</span></Title>
                    </div>
                </div>
            </div>
            <div className="dev-container gap-4 fade-up" ref={fadeUpRef}>
                {listings?.length > 0 ? (
                    listings.map((x, index) => (
                        <NewListingCard key={index} data={x} />
                    ))
                ) : (
                    <div className="absolute h-[80vh] flex justify-center items-center">
                        <h2>No listings available at the moment</h2>
                    </div>
                )}
            </div>
            <Footer />
        </>

    )
}