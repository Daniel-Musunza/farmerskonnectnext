// Install Mantine if not already done: 
// npm install @mantine/core @mantine/hooks @emotion/react

import { Button, Group, Modal, Text } from '@mantine/core';
import AppointmentModal from './AppointmentModal';
import { useState } from 'react';
import { formatNumberWithCommas } from '@/utils/priceformat';

export default function CTA({ currentDevelopment }: any) {
    const [opened, setOpened] = useState(false);

    return (
        <div className="flex">
            <div className="bg-gray-100 p-6  hidden lg:flex items-center justify-between w-full ">
                {/* Left Section: Property Details */}
                <div className="flex items-start space-x-8">
                    <div>
                        <Text size="xs" className="text-gray-500">&lt; {currentDevelopment?.location?.name}</Text>
                        <Text size="xl" style={{ fontWeight: 700 }} className="text-gray-900">
                            {currentDevelopment?.title}
                        </Text>
                    </div>

                    <div className="text-center">
                        <Text size="xs" className="text-gray-500">PRICES FROM</Text>
                        <Text size="lg" style={{ fontWeight: 700 }} className="text-gray-900">
                            Ksh {formatNumberWithCommas(currentDevelopment?.price)}
                        </Text>
                    </div>

                    {/* <div className="text-center">
                        <Text size="xs" className="text-gray-500">AREA FROM (SQFT)</Text>
                        <Text size="lg" style={{ fontWeight: 700 }} className="text-gray-900">747</Text>
                    </div> */}

                    <div className="text-center">
                        <Text size="xs" className="text-gray-500">AVAILABLE UNITS</Text>
                        <div className="flex items-center gap-2">
                            <Text size="lg" style={{ fontWeight: 700 }} className="text-yellow-600"> {currentDevelopment?.bedrooms}  </Text>
                          
                        </div>

                    </div>
                </div>

                {/* Right Section: Action Buttons */}
                <Group gap="md">
                    <a href="tel:+254703363464">
                        <Button variant="outline" color="dark">
                            SALES VOICE CALL
                        </Button>
                    </a>

                    <Button variant="filled" color="dark" onClick={() => setOpened(true)}>
                        BOOK APPOINTMENT
                    </Button>
                    <Modal
                        withCloseButton={true}
                        opened={opened} // Filter Modal state
                        onClose={() => setOpened(false)} // Close Filter Modal
                        title="Get in touch"
                    >
                        <AppointmentModal setOpened={setOpened} />
                    </Modal>
                </Group>
            </div>
            <div className="fixed bottom-0 z-[998] w-[100vw] bg-white p-2">
                <div className=" flex lg:hidden px-2 justify-between top-[80vh]   ">
                    <a href="tel:+254703363464" className="text-center bg-white w-[48%] py-4 rounded-sm cursor-pointer border-[1px] border-[#232323] uppercase"> sales Voice Call</a>

                    <button className="bg-[#232323] w-[48%] py-4 rounded-sm cursor-pointer text-white uppercase" onClick={() => setOpened(true)}>    Book apointment</button>
                </div>
            </div>
        </div>

    );
}
