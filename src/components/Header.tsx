'use client'; // Required for client-side rendering

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fontawesome from '../(icons)/fontawesome';
import { Button, Menu, Modal, Title, Text } from '@mantine/core';
export default function Header() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const router = useRouter()
    const pathname = usePathname();
    const [headerStyle, setHeaderStyle] = useState<any>({
        backgroundColor: '#ffff',
        position: 'absolute',
        // position: 'fixed',
        top: '0'

    });
    const [lastScrollY, setLastScrollY] = useState(0);
    const [opened, setOpened] = useState(false);
    const [firstblogid, setFirstBlogId] = useState<any>(1);

    let user;

    if (typeof window !== 'undefined') {
        // Now it's safe to use localStorage
        user = localStorage.getItem('user');
    }

    const logout = async () => {
        localStorage.removeItem('user');
        await router.push('/');
    };

    useEffect(() => {
        setHeaderStyle({
            backgroundColor: '#ffff',
            position: 'absolute',
            transition: 'background-color 1s ease, top 1s ease',
        });

    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const viewportHeight = window.innerHeight;
            const scrollThreshold = 0.05 * viewportHeight; // 40vh in pixels

            if (currentScrollY > lastScrollY) {
                // Scrolling down
                setHeaderStyle({
                    transition: 'background-color 1s ease, top 1s ease',
                    backgroundColor: '#ffff',
                    // position: 'fixed',
                    position: 'absolute',
                    top: '-100px', // Hide the header when scrolling down
                });

            } else {
                // Scrolling up
                if (currentScrollY < scrollThreshold) {
                    setHeaderStyle({
                        transition: 'background-color 1s ease, top 1s ease',
                        backgroundColor: '#ffff',
                        position: 'absolute',
                        top: '0',
                    });
                } else {
                    setHeaderStyle({
                        backgroundColor: '#ffff',
                        // position: 'fixed',
                        position: 'absolute',
                        top: '0',
                    });
                }

            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY, pathname]);


    return (
        <section className="w-full flex justify-center">
            <div className="header w-full md:w-[90%] lg:w-[80%]"
                id="header"
                style={{
                    ...headerStyle,
                }}
            >
                <div className="container">
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
                    <nav>
                        <div className="navbar2" id="navbar2">
                            <Link href="/about" className='text-black font-bold'>ABOUT US</Link>
                            <Link href="/solutions" className='text-black font-bold'>SOLUTIONS</Link>
                            <Link href="/listings" className='text-black font-bold'> LAND LISTINGS</Link>
                            <Link href={`/blogs/${firstblogid}`} className='text-black font-bold'>BLOGS</Link>
                        </div>
                    </nav>
                    <div className="right-data">
                        <a
                            href="https://wa.me/254703363464"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textTransform: 'none' }}
                            className="hidden lg:flex text-[#16A34A] items-center gap-2 text-[14px]"
                        >
                            <FontAwesomeIcon icon={fontawesome.faWhatsapp} />
                            <span>WHATSAPP</span>
                        </a>

                        {isClient && (
                            <>
                                {user ? (
                                    <button
                                        onClick={logout}
                                        className="ml-4 hidden lg:flex w-fit py-1 px-2 rounded-sm cursor-pointer border-[1px] border-[#16A34A] bg-white text-[14px]"
                                    >
                                        Logout
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => setOpened(true)}
                                        className="ml-4 hidden lg:flex w-fit py-1 px-2 rounded-sm cursor-pointer border-[1px] border-[#16A34A] text-[#16A34A] bg-white text-[14px]"
                                    >
                                        GET IN TOUCH
                                    </button>
                                )}
                            </>
                        )}


                        <Modal
                            withCloseButton={true}
                            opened={opened} // Filter Modal state
                            onClose={() => setOpened(false)} // Close Filter Modal
                            title="Get in touch"
                        >

                        </Modal>
                        <Menu
                            shadow="md"
                            width="100%"
                            
                            transitionProps={{ transition: 'fade-down', duration: 150 }}
                            styles={{
                                dropdown: {
                                    backgroundColor: '#166534', // Background color for the dropdown
                                    marginTop: '5px',
                                    marginLeft: '-5px',
                                    color: '#ffff',
                                    fontSize: 'bold',
                                    border: '2px solid green', // Set the border color
                                },
                            }}
                        >
                            <Menu.Target>
                                <span className="text-[#16A34A] ml-2 lg:hidden text-[30px]">
                                    <FontAwesomeIcon icon={fontawesome.faBars} />
                                </span>
                            </Menu.Target>

                            <Menu.Dropdown >
                                <Menu.Item py="md">
                                    <Link href="/about" className='text-white font-bold'>
                                        ABOUT US
                                    </Link>
                                </Menu.Item>
                                <Menu.Item py="md">
                                    <Link href="/solutions" className='text-white font-bold'>
                                        SOLUTIONS
                                    </Link>
                                </Menu.Item>
                                <Menu.Item py="md">
                                    <Link href="/listings" className='text-white font-bold'>
                                        LAND LISTINGS
                                    </Link>
                                </Menu.Item>
                                <Menu.Item py="md">
                                    <Link href={`/blogs/${firstblogid}`} className='text-white font-bold'>BLOGS</Link>
                                </Menu.Item>
                                <Menu.Item py="md">
                                    <a href="https://wa.me/254703363464"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='text-white flex gap-2 items-center'
                                    >
                                        <FontAwesomeIcon icon={fontawesome.faWhatsapp} />
                                        <Text size='sm'> WHATSAPP </Text>
                                    </a>
                                </Menu.Item>

                                {isClient && (
                                    user ? (
                                        <Menu.Item pt="md">
                                            <Button
                                                onClick={logout}
                                                variant="outline"
                                                color="#ffff"
                                                c="#FFFF"
                                            >
                                                Logout
                                            </Button>
                                        </Menu.Item>
                                    ) : (
                                        <Menu.Item pt="md">
                                            <div className="flex justify-between w-full">
                                                <Button

                                                    variant="outline"
                                                    color="#ffff"
                                                    c="#FFFF"
                                                >
                                                    Login
                                                </Button>
                                                <Button

                                                    variant="filled"
                                                    color="#ffff"
                                                    c="#16A34A"
                                                >
                                                    Create an account
                                                </Button>
                                            </div>

                                        </Menu.Item>

                                    )
                                )}



                            </Menu.Dropdown>
                        </Menu>
                    </div>
                </div>
            </div>
        </section>
    );
}
