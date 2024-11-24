'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Search from "@/components/Search";

import { Title } from "@mantine/core"
import { Carousel } from "@mantine/carousel";
import SlideCaption from "@/components/SlideCaption";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { buttonText } from "@/utils/buttonText";
import { StatBox } from "@/components/StatBox";

const companyImage = '/images/canolawithoil.webp';

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

          <h1 className="text-[38px]">EXPLORE LANDS TO LEASE</h1>

          {/* Description */}
          <p className="text-[14px] text-gray-600 mb-6 max-w-xl">
            Farmers konnect connects you to premium land leasing opportunities across the coastal region. Whether you’re looking for commercial spaces, agricultural ventures, or residential developments, our portfolio offers prime locations tailored to your needs.
          </p>

          {/* Button */}
          <div className="lg:mb-12">
            <Link
              href="/listings"
              className="w-fit bg-green-800 text-white py-3 px-8 text-sm font-semibold hover:bg-green-900 transition uppercase rounded-[50px]"
            >
              View All Lands
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
            className="w-fit bg-green-800 text-white py-3 px-8 text-sm font-semibold uppercase hover:bg-green-900 transition rounded-[50px]"
          >
            View All Lands
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

  return (
    <div className="overflow-hidden w-full p-[20px] mt-[20px] lg:mt-[50px] md:w-[80%] mx-auto flex justify-center">
      <div className="relative w-full fade-left" ref={fadeLeftRef}>
        <div className="flex justify-center items-center w-full uppercase">
          <Title order={2} py="md">Discover our latest trending blogs</Title>
        </div>

        <Carousel
          slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
          slideGap={{ base: 0, sm: 'md' }}
          loop
          align="start"
          styles={{
            root: {
              height: "fit-content"
            },
            control: {
              backgroundColor: '#16A34A',  // Change background color of side buttons
              color: 'white',  // Change arrow color
              borderRadius: '50%',  // Make buttons circular
              width: 40,  // Set width of the buttons
              height: 40,  // Set height of the buttons
              '&:hover': {
                backgroundColor: 'green',  // Change background color on hover
              },
            },
          }}

        >
          {blogs.map((property: any, index: number) => (
            <Carousel.Slide key={index}>
              <div className="bg-white text-center w-[100vw] h-[500px] lg:w-[317px] mx-auto flex flex-col justify-between overflow-hidden bg-cover bg-no-repeat"  > {/* Center card */}
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
                  className="w-full lg:w-[317px] h-[250px] object-cover z-5 transition duration-300 ease-in-out hover:scale-110 rounded-t-[50px]"
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
                      className="bg-green-800 text-white py-3 px-8 text-sm font-semibold hover:bg-green-900 transitionc lg:block rounded-[50px]"
                    >
                      {clientText || '...'}
                    </Link>
                  </div>
                </div>
              </div>
            </Carousel.Slide>
          ))}

        </Carousel>
      </div>
    </div>
  );
};


export default function HomeShell({ blogs }: any) {

  const fadeLeftRef = useIntersectionObserver({ threshold: 0.1 });
  const fadeRightRef = useIntersectionObserver({ threshold: 0.1 });
  const fadeUpRef = useIntersectionObserver({ threshold: 0.1 });
  const fadeDownRef = useIntersectionObserver({ threshold: 0.1 });


  return (
    <div className="overflow-x-hidden">
      <section className="hero">
        <div className="home-hero-slider">
          <div className="video-container">
            <video
              src="/videos/canolavideo.mp4"
              autoPlay
              muted
              loop
              className="video"
              playsInline
            />
          </div>

          {/* Render caption dynamically based on currentSlide */}
          <SlideCaption />

          {/* Additional search or components */}
          {/* <Search /> */}
        </div>
      </section>



      <LandToLease />

      <section className=" company-section relative  p-[20px]  h-fit mt-[20px] lg:mt-[50px] w-full md:w-[80%] mx-auto flex no-wrap">
        <div className="company-content">
          <div className="company-image overflow-hidden bg-cover bg-no-repeat flex justify-center items-center">
            <img src={companyImage}
              alt="Property Image "
              className="transition duration-300 ease-in-out hover:scale-110" />
          </div>
          <div className="company-description">
            <h2>Farmers' Konnect</h2>
            <p>Farmers' Konnect is a dynamic company specializing in transforming Farming through contract Farming for Oil crops as well as providing access to available lands for lease.
              We have a team of dedicated and experienced professionals who are ready and
              committed to deliver value through a combination of different methodologies.
            </p>
            <p>We’re committed to revolutionizing agriculture by bridging the gap between farmers and markets through our innovative Canola Contract Farming Module. Our approach ensures that farmers reap the full benefits of their hard work while providing buyers with a consistent supply of premium canola oil.</p>
            <a href="tel:+254703363464" className="contact-button fade-right" ref={fadeRightRef}>Contact Us →</a>
          </div>
        </div>
        <div className="company-stats">
          <div className="flex flex-wrap gap-2 h-[260px]">
            <StatBox finalValue={113} label="Apartments Sold" number={0} />
            <StatBox finalValue={355} label="Satisfied Clients" number={2} />
            <StatBox finalValue={718} label="Units Rented" number={3} />
            <StatBox finalValue={54} label="Listed Units" number={4} />
          </div>
        </div>
      </section>

      <Blogs blogs={blogs} />

    </div>
  );
}
