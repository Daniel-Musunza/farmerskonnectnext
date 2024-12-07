'use client'
import { Title } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {


    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-column">
                    <div className="list">
                        <Link href="/" className='flex gap-2 items-center'>
                            <Image
                                src="/images/logo.png"
                                alt="Logo"
                                width={50}
                                height={50}
                                className="object-cover transition duration-300 ease-in-out hover:scale-110 p-0"
                            />
                            <Title order={3} className='inline-title capitalize'>Farmers' konnect</Title>
                        </Link>
                        
                        <div><strong>Working hours:</strong><br />Mon – Fri - 8:00am – 5:00pm<br />Sat - 8:30am – 1:00pm</div>
                    </div>

                </div>
                <div className="footer-column">
                    <h3>SERVICES</h3>
                    <div className="list">
                        <a href="#">Contract Farming</a>
                        <a href="#">Land Leasing</a>
                    </div>

                </div>
                <div className="footer-column">
                    <h3>COMPANY</h3>
                    <div className="list">
                        <a href="#">About</a>
                        <a href="#">Blog</a>
                        <a href="#">Jobs</a>
                        <a href="#">Partners</a>
                    </div>

                </div>
                <div className="footer-column">
                    <h3>GET IN TOUCH</h3>
                    <div className="list">
                        <div><i className="fas fa-phone"></i> +254703363464</div>
                        <div><i className="fas fa-envelope"></i> omar@farmerskonnect.org</div>
                        <div><i className="fas fa-envelope"></i> info@farmerskonnect.org</div>
                        <div className="footer-icons">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-tiktok"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                        </div>
                    </div>

                </div>
            </div>
            <div className="footer-bottom">
                &copy; 2024 Farmers' Konnect
            </div>

            {/* <div className="homepage-sticky-search d-lg-none noBg">
                <div className="row">
                    <div className="col-6 pr-2">
                        <a href="#" className="btn btn-ghost footer-search-prop-btn w-100" data-toggle="modal"
                            data-target="#prop-search-mobileform-modal">Search</a>
                    </div>
                    <div className="col-6 pl-2">
                        <a href="#" className="btn btn-blue get-touch-btn w-100" data-toggle="modal" data-target="#registerModal"
                            data-formname="Get in Touch">Get in Touch</a>
                    </div>
                </div>
            </div> */}
        </footer>
    )
}