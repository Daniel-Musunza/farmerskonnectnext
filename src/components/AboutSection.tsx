'use client'

import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { StatBox } from "./StatBox";
const companyImage = '/images/canolawithoil.webp';
export default function AboutSection() {
    const fadeRightRef = useIntersectionObserver({ threshold: 0.1 });

    return (
        <section id="#about" className="company-section relative  p-[20px]  h-fit  w-full md:w-[80%] mx-auto flex no-wrap">
        <div className="company-content">
          <div className="company-image overflow-hidden bg-cover bg-no-repeat flex justify-center items-center">
            <img src={companyImage}
              alt="Property Image "
              className="transition duration-300 ease-in-out hover:scale-110" />
          </div>
          <div className="company-description">
            <h2>Farmers' Konnect</h2>
            <p>Farmers' Konnect is a dynamic company specializing in transforming Farming through contract Farming for Oil crops as well as providing access to available lands for lease.
              We’re committed to revolutionizing agriculture by bridging the gap between farmers and markets through our innovative Canola Contract Farming Module.
            </p>
            <p> Our approach ensures that farmers reap the full benefits of their hard work while providing buyers with a consistent supply of premium canola oil.</p>
            <a href="tel:+254703363464" className="contact-button fade-right rounded-sm" ref={fadeRightRef}>Contact Us →</a>
          </div>
        </div>
        <div className="company-stats">
          <div className="flex flex-wrap gap-2 h-[260px]">
            <StatBox finalValue={113} label="Contracts Done" number={0} />
            <StatBox finalValue={355} label="Satisfied Clients" number={2} />
            <StatBox finalValue={718} label="Land Leased" number={3} />
            <StatBox finalValue={54} label="Available listings" number={4} />
          </div>
        </div>
      </section>
    );
}
