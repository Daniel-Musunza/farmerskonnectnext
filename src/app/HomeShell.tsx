'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Title, Text } from "@mantine/core"
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { buttonText } from "@/utils/buttonText";
import CustomCarousel from "@/components/CustomCarousel";
import AboutSection from "@/components/AboutSection";

const LandToLease = () => {
  const fadeLeftRef = useIntersectionObserver({ threshold: 0.05 });
  const fadeUpRef = useIntersectionObserver({ threshold: 0.1 });
  const fadeDownRef = useIntersectionObserver({ threshold: 0.1 });

  const lands = [
    { title: 'LAND IN NYERI | IDEAL FOR COMMERCIAL USE', img: '/images/land3.webp' },
    { title: 'SPACIOUS LAND IN MERU | PRIME LOCATION', img: '/images/land2.webp' },
    { title: 'AGRICULTURAL LAND IN KILIFI | FERTILE SOIL', img: '/images/land1.jpg' },
  ];

  return (
    <div
      className="relative p-[20px] h-fit lg:h-[550px] mt-[20px] lg:mt-[50px] w-full md:w-[80%] mx-auto fade-left"
      ref={fadeLeftRef}
    >
      <div className="flex flex-col lg:flex-row gap-4 justify-between items-center relative w-full">
        <div className="flex flex-col gap-2 w-full lg:w-[35%] lg:my-auto">
          {/* Section Title */}
          <div className="mb-6 lg:mb-12 flex gap-1 items-center">
            <h2 className="text-sm text-gray-400 tracking-widest uppercase mb-2"> LANDS FOR LEASING</h2>
            <div className="h-0.5 bg-gray-300 w-[100px]" />
          </div>

          <h1 className="text-[38px] ">EXPLORE LANDS TO LEASE</h1>

          {/* Description */}
          <p className="text-[14px] text-gray-600 mb-6 max-w-xl">
            Farmers konnect connects you to premium land leasing opportunities across the coastal region. Whether you’re looking for commercial spaces, agricultural ventures, or residential developments, our portfolio offers prime locations tailored to your needs.
          </p>

          {/* Button */}
          <div className="lg:mb-12 hidden lg:flex">
            <Link
              href="/listings"
              className="w-fit bg-green-800 text-white py-3 px-8 text-sm font-semibold hover:bg-green-900 transition uppercase rounded-sm"
            >
              View All Lands listings
            </Link>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-2 w-full lg:w-[65%]">
          <div
            className="flex flex-col gap-1 fade-down relative overflow-hidden bg-cover bg-no-repeat"
            ref={fadeDownRef}
          >
            <Image
              src={lands[0].img}
              alt="Land in Nyali"
              width={334}
              height={500}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 65vw, 65vw"
              placeholder="blur"
              blurDataURL="/images/blur.avif"
              loading='eager'
              className="w-full lg:w-[334px] h-[500px] object-cover transition duration-300 ease-in-out hover:scale-110 bg-sky-200"
              style={{ objectPosition: '50% 50%' }}
            />
            <div className="relative p-2 text-xs font-semibold uppercase">
              {lands[0].title}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            {/* Second Image */}
            <div
              className="flex flex-col gap-2 relative overflow-hidden bg-cover bg-no-repeat fade-up"
              ref={fadeUpRef}
            >
              <Image
                src={lands[1].img}
                alt="Land in Diani"
                width={387}
                height={225}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 65vw, 65vw"
                placeholder="blur"
                blurDataURL="/images/blur.avif"
                loading='eager'
                className="w-full lg:w-[387px] lg:h-[225px] object-cover transition duration-300 ease-in-out hover:scale-110"
                style={{ objectPosition: '50% 50%' }}
              />
              <div className="relative p-2 text-xs font-semibold uppercase">
                {lands[1].title}
              </div>
            </div>

            {/* Third Image */}
            <div className="flex flex-col gap-2 relative overflow-hidden bg-cover bg-no-repeat">
              <Image
                src={lands[2].img}
                alt="Land in Kilifi"
                width={387}
                height={225}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 65vw, 65vw"
                placeholder="blur"
                blurDataURL="/images/blur.avif"
                loading='eager'
                className="w-full lg:w-[387px] lg:h-[225px] object-cover transition duration-300 ease-in-out hover:scale-110"
                style={{ objectPosition: '50% 50%' }}
              />
              <div className="relative p-2 text-xs font-semibold uppercase">
                {lands[2].title}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12 flex lg:hidden justify-center">
          <Link
            href="/listings"
            className="w-fit lg:hidden flex bg-green-800 text-white py-3 px-8 text-sm font-semibold uppercase hover:bg-green-900 transition rounded-sm"
          >
            View All Lands listings
          </Link>
        </div>
      </div>
    </div>
  );
};



const Blogs = ({ blogs }: any) => {

  const fadeLeftRef = useIntersectionObserver({ threshold: 0.1 });
  const [clientText, setClientText] = useState('');

  useEffect(() => {
    setClientText(buttonText());  // Set random text only on the client.
  }, []);

  const cards = blogs.map((property: any) => (
    <div className="bg-white text-center h-[500px] flex items-center justify-center lg:ml-[15px] px-5 mx-auto flex-col  overflow-hidden bg-cover bg-no-repeat"  > {/* Center card */}
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
        className="w-full  h-[250px] object-cover z-5 transition duration-300 ease-in-out hover:scale-110 rounded-sm"
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
            className="bg-green-800 text-white py-3 px-8 text-sm font-semibold hover:bg-green-900 transitionc lg:block rounded-sm"
          >
            {clientText || '...'}
          </Link>
        </div>
      </div>
    </div>
  ))

  return (
    <div className='container mx-auto  flex flex-col justify-center mt-[20px] lg:mt-[50px] mb-[200px]'>
      <div className="container mx-auto  flex justify-center items-center">
        <div className="w-full lg:w-[80%] px-2">
          <div className="relative w-full fade-left" ref={fadeLeftRef}>
            <div className="flex justify-center items-center w-full uppercase">
              <Title order={2} py="md" className="text-center">Discover our latest trending blogs</Title>
            </div>

            <CustomCarousel cards={cards} />
          </div>
        </div>
      </div>
    </div>
  );
};


export default function HomeShell({ blogs }: any) {

  const fadeLeftRef = useIntersectionObserver({ threshold: 0.1 });
  const fadeUpRef = useIntersectionObserver({ threshold: 0.1 });
  const fadeDownRef = useIntersectionObserver({ threshold: 0.1 });


  return (
    <div className="min-h-screen bg-white flex justify-center flex-col overflow-x-hidden">

      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[50vh] lg:h-[60vh] container mx-auto bg-white">
        <div className="overflow-hidden rounded-b-[50px] lg:rounded-b-[100px] bg-white bg-cover bg-no-repeat">
          <video
            src="/videos/canolavideo.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="h-[50vh] md:h-[50vh] lg:h-[60vh] w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/40 rounded-b-[50px] lg:rounded-b-[100px]" />
        <div className="absolute bottom-6 w-full lg:bottom-10  text-white">
          <div className="flex flex-col items-center justify-center w-full gap-2 p-[20px]">
            <div className="flex items-center justify-center w-[268px] h-[30px] border border-white text-white text-sm font-semibold tracking-wide">
              WE ARE FARMERS' KONNECT
            </div>
            <Title order={2} component="div" className="text-center">Transforming farming through contract farming for oil crops 🌱</Title>
          </div>
        </div>
      </div>





      <div className="relative p-[20px] h-fit  w-full md:w-[80%] mx-auto">
        <Title order={2} py="lg" className="text-center uppercase">
          Discover The Opportunities we have for you in Agriculture
        </Title>
        <div className="flex flex-col md:flex-row md:justify-center lg:justify-between gap-4">
          {/* Card 1 */}
          <div ref={fadeLeftRef} className=" fade-left p-6 h-[300px] w-full md:w-[45%] lg:w-[30%] bg-green-50 shadow-sm rounded-sm border-1 border-green-100 flex justify-between flex-col">
            <Title order={3} py="sm" className="text-center uppercase">
              Contract farming
            </Title>
            <Text size="md" >
              Secure your contract and unlock endless opportunities to expand your market with premium quality products, expert support, and guaranteed growth for long-term success.
            </Text>
            <div className="flex justify-center">
              <Link
                href="/listings"
                className="w-fit bg-green-800 text-white text-center uppercase py-3 px-8 text-sm font-semibold hover:bg-green-900 transition rounded-sm"
              >
                I want to get in contract
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-6 h-[300px] w-full md:w-[45%] lg:w-[30%] bg-green-50 shadow-sm rounded-sm border-1 border-green-100 flex justify-between flex-col">
            <Title order={3} py="sm" className="text-center uppercase">
              Invest in Farms
            </Title>
            <Text size="md" >
              Secure your future with sustainable farming investments tailored for you. Build long-term success by investing in agriculture that promotes growth, security, and environmental responsibility.
            </Text>
            <div className="flex justify-center">
              <Link
                href="/listings"
                className="w-fit bg-green-800 text-white text-center uppercase py-3 px-8 text-sm font-semibold hover:bg-green-900 transition rounded-sm"
              >
                I invest in farms
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div ref={fadeUpRef} className=" fade-up p-6 h-[300px] w-full md:w-[45%] lg:w-[30%] bg-green-50 shadow-sm rounded-sm border-1 border-green-100 flex justify-between flex-col">
            <Title order={3} py="sm" className="text-center uppercase">
              Agriculture Enthusiast
            </Title>
            <Text size="md" >
              Learn and explore the endless possibilities in modern agriculture, where innovation meets opportunity.
            </Text>
            <div className="flex justify-center">
              <Link
                href="/listings"
                className="w-fit bg-green-800 text-white text-center uppercase py-3 px-8 text-sm font-semibold hover:bg-green-900 transition rounded-sm"
              >
                I am interested in agriculture
              </Link>
            </div>
          </div>
        </div>
      </div>



      <LandToLease />

      <div className="relative mt-[20px] lg:mt-[50px]">
        <AboutSection />

      </div>

      <Blogs blogs={blogs} />

    </div>
  );
}
