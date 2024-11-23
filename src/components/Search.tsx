'use client'

import bs58 from 'bs58';
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fontawesome from '@/(icons)/fontawesome'
import { useEffect, useState } from 'react';
import { Accordion, Box, Button, Checkbox, Flex, Modal, Popover, rem, Stack, Title } from "@mantine/core";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { formatNumberWithCommas } from "@/utils/priceformat";
import { useRouter } from "next/navigation";
import AppointmentModal from './AppointmentModal';

export default function Search() {

    const router = useRouter();
    const [opened, setOpened] = useState(false);
    const [opened2, setOpened2] = useState(false);

    const [selectedPropertyType, setSelectedPropertyType] = useState<string[]>([]);
    const [selectedBedrooms, setSelectedBedrooms] = useState<string[]>([]);
    const [selectedLowestPrice, setSelectedLowestPrice] = useState<any>(null);
    const [selectedHighestPrice, setSelectedHighestPrice] = useState<any>(null);
    const [selectedLocations, setSelectedLocations] = useState<string[]>([]);

    const handlePropertyTypeChange = (type: string, isChecked: boolean) => {
        if (isChecked) {
            setSelectedPropertyType((prev) => [...prev, type]); // Add to the array
        } else {
            setSelectedPropertyType((prev) =>
                prev.filter((propertyType) => propertyType !== type) // Remove from the array
            );
        }
    };

    const handlePropertyTypeClear = () => {
        setSelectedPropertyType([]);
    };

    const handleBedroomsChange = (type: string, isChecked: boolean) => {
        if (isChecked) {
            setSelectedBedrooms((prev) => [...prev, type]); // Add to the array
        } else {
            setSelectedBedrooms((prev) =>
                prev.filter((bedroom) => bedroom !== type) // Remove from the array
            );
        }
    };

    const handleBedroomsClear = () => {
        setSelectedBedrooms([]);
    };

    const handleLocationsChange = (type: string, isChecked: boolean) => {
        if (isChecked) {
            setSelectedLocations((prev) => [...prev, type]); // Add to the array
        } else {
            setSelectedLocations((prev) =>
                prev.filter((location) => location !== type) // Remove from the array
            );
        }
    };

    const handleLocationsClear = () => {
        setSelectedLocations([]);
    };

    const clearPriceSelection = () => {
        setSelectedLowestPrice(null);
        setSelectedHighestPrice(null);
    };

    const handleSearch = () => {
        const searchParams = {
            propertyTypes: selectedPropertyType,
            bedrooms: selectedBedrooms,
            priceRange: { low: selectedLowestPrice, high: selectedHighestPrice },
            locations: selectedLocations

        }

        const encoded = bs58.encode(Buffer.from(JSON.stringify(searchParams)));
        router.push(`/listings?searchParams=${encoded}`);
    }


    const MobileSearch = () => {
        return (
            <Modal
                withCloseButton={false}
                fullScreen
                title="SEARCH "
                opened={opened} // Filter Modal state
                onClose={() => setOpened(false)} // Close Filter Modal
            >
                <div className="flex bg-white lg:hidden w-full h-[100vh] mt-8 flex-col">
                    {/* Filter Content */}
                    <div className="overflow-y-auto" style={{
                        scrollbarWidth: 'none', /* For Firefox */
                        msOverflowStyle: 'none'  /* For Internet Explorer and Edge */
                    }}>
                        <Stack align="stretch" justify="center" gap="md">


                            <Box p={rem(0)} pb={rem(0)}>
                                <Accordion radius="md" >
                                    <Accordion.Item value="1">
                                        <Accordion.Control className="custom-accordion-control">
                                            <div className="flex flex-col gap-2">
                                                <Title order={4} className='flex items-center gap-2'>PROPERTY TYPES </Title>
                                                <span className={selectedPropertyType.length > 0 ? `text-[#FF6922]` : ""}>{selectedPropertyType.length > 0 ? selectedPropertyType.length + " Property types" : "Any"}</span>

                                            </div>

                                        </Accordion.Control>
                                        <Accordion.Panel>
                                            <Flex direction="column" gap="xs" >

                                                <div className="flex gap-2 w-full flex-col">
                                                    <div className="w-full relative p-2">
                                                        <div className="relative flex flex-col gap-4">
                                                            <div className="flex flex-col">
                                                                <Checkbox
                                                                    checked={selectedPropertyType.includes("Apartment")}
                                                                    onChange={(e) => handlePropertyTypeChange("Apartment", e.target.checked)}
                                                                    label="Apartment"
                                                                    color="#FF6922"
                                                                    c="black"
                                                                    size="md"
                                                                />
                                                            </div>

                                                            <div className="flex flex-col">
                                                                <Checkbox
                                                                    checked={selectedPropertyType.includes("Hotel")}
                                                                    onChange={(e) => handlePropertyTypeChange("Hotel", e.target.checked)}
                                                                    label="Hotel"
                                                                    color="#FF6922"
                                                                    c="black"
                                                                    size="md"
                                                                />
                                                            </div>
                                                            <div className="flex flex-col">
                                                                <Checkbox
                                                                    checked={selectedPropertyType.includes("Office")}
                                                                    onChange={(e) => handlePropertyTypeChange("Office", e.target.checked)}
                                                                    label="Office"
                                                                    color="#FF6922"
                                                                    c="black"
                                                                    size="md"
                                                                />
                                                            </div>

                                                            <div className="flex flex-col ">
                                                                <Checkbox
                                                                    checked={selectedPropertyType.includes("Plot")}
                                                                    onChange={(e) => handlePropertyTypeChange("Plot", e.target.checked)}
                                                                    label="Plot"
                                                                    color="#FF6922"
                                                                    c="black"
                                                                    size="md"
                                                                />
                                                            </div>
                                                            <div className="flex flex-col">
                                                                <Checkbox
                                                                    checked={selectedPropertyType.includes("Town House")}
                                                                    onChange={(e) => handlePropertyTypeChange("Town House", e.target.checked)}
                                                                    label="Town House"
                                                                    color="#FF6922"
                                                                    c="black"
                                                                    size="md"
                                                                />
                                                            </div>
                                                            <div className="flex flex-col">
                                                                <Checkbox
                                                                    checked={selectedPropertyType.includes("Villa")}
                                                                    onChange={(e) => handlePropertyTypeChange("Villa", e.target.checked)}
                                                                    label="Villa"
                                                                    color="#FF6922"
                                                                    c="black"
                                                                    size="md"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="h-[50px] cursor-pointer" onClick={handlePropertyTypeClear}>
                                                    <hr />
                                                    <h3 className="p-4">CLEAR SELECTION</h3>
                                                </div>

                                            </Flex>
                                        </Accordion.Panel>
                                    </Accordion.Item>
                                    <Accordion.Item value="2">
                                        <Accordion.Control className="custom-accordion-control">
                                            <div className="flex flex-col gap-2">
                                                <Title order={4} className='flex items-center gap-2'>BEDROOMS </Title>
                                                <span className={selectedBedrooms.length > 0 ? `text-[#FF6922]` : ""}>{selectedBedrooms.length > 0 ? selectedBedrooms.join(", ") + " Bedrooms" : "Any"}</span>

                                            </div>

                                        </Accordion.Control>
                                        <Accordion.Panel>
                                            <Flex direction="column" gap="xs" >
                                                <div className="flex gap-2 w-full flex-col">
                                                    <div className="w-full  relative p-2">
                                                        <div className="relative flex flex-col gap-4">
                                                            <div className="flex flex-col">
                                                                <Checkbox
                                                                    checked={selectedBedrooms.includes("1")}
                                                                    onChange={(e) => handleBedroomsChange("1", e.target.checked)}
                                                                    label="1 Bedroom"
                                                                    color="#FF6922"
                                                                    c="black"
                                                                    size="md"
                                                                />
                                                            </div>
                                                            <div className="flex flex-col">
                                                                <Checkbox
                                                                    checked={selectedBedrooms.includes("2")}
                                                                    onChange={(e) => handleBedroomsChange("2", e.target.checked)}
                                                                    label="2 Bedroom"
                                                                    color="#FF6922"
                                                                    c="black"
                                                                    size="md"
                                                                />
                                                            </div>
                                                            <div className="flex flex-col">
                                                                <Checkbox
                                                                    checked={selectedBedrooms.includes("3")}
                                                                    onChange={(e) => handleBedroomsChange("3", e.target.checked)}
                                                                    label="3 Bedroom"
                                                                    color="#FF6922"
                                                                    c="black"
                                                                    size="md"
                                                                />
                                                            </div>

                                                            <div className="flex flex-col">
                                                                <Checkbox
                                                                    checked={selectedBedrooms.includes("4")}
                                                                    onChange={(e) => handleBedroomsChange("4", e.target.checked)}
                                                                    label="4 Bedroom"
                                                                    color="#FF6922"
                                                                    c="black"
                                                                    size="md"
                                                                />
                                                            </div>
                                                            <div className="flex flex-col">
                                                                <Checkbox
                                                                    checked={selectedBedrooms.includes("5")}
                                                                    onChange={(e) => handleBedroomsChange("5", e.target.checked)}
                                                                    label="5 Bedroom"
                                                                    color="#FF6922"
                                                                    c="black"
                                                                    size="md"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="h-[50px] cursor-pointer" onClick={handleBedroomsClear}>
                                                    <hr />
                                                    <h3 className="p-4">CLEAR SELECTION</h3>
                                                </div>
                                            </Flex>
                                        </Accordion.Panel>
                                    </Accordion.Item>
                                    <Accordion.Item value="3">
                                        <Accordion.Control className="custom-accordion-control">
                                            <div className="flex flex-col gap-2">
                                                <Title order={4} className='flex items-center gap-2'>PRICE RANGE (KSH) </Title>
                                                <span className={(selectedLowestPrice || selectedHighestPrice) ? "text-[#FF6922]" : ""}>
                                                    {(selectedLowestPrice || selectedHighestPrice) ? `KSH ${selectedLowestPrice ? formatNumberWithCommas(selectedLowestPrice) : ""} - ${selectedHighestPrice ? formatNumberWithCommas(selectedHighestPrice) : ""}` : "Any"}
                                                </span>
                                            </div>

                                        </Accordion.Control>
                                        <Accordion.Panel>
                                            <Flex direction="column" gap="xs" >
                                                <div className="flex gap-2 w-full flex-col">
                                                    {/* Min Price Selector */}
                                                    <div className="w-full relative p-2">
                                                        <h3 style={{ color: "#FF6922" }}>Min Price (KSH)</h3>
                                                        <div className="relative flex mt-4">
                                                            <select
                                                                name="min-price"
                                                                className="h-[50px] font-medium w-full"
                                                                value={selectedLowestPrice}
                                                                onChange={(e) => setSelectedLowestPrice(e.target.value)}
                                                            >
                                                                <option value="2000000" selected>2,000,000</option>
                                                                <option value="2200000">2,200,000</option>
                                                                <option value="2400000">2,400,000</option>
                                                                <option value="2600000">2,600,000</option>
                                                                <option value="2800000">2,800,000</option>
                                                                <option value="3000000">3,000,000</option>
                                                                <option value="3500000">3,500,000</option>
                                                                <option value="4000000">4,000,000</option>
                                                                <option value="4500000">4,500,000</option>
                                                                <option value="5000000">5,000,000</option>
                                                                <option value="5500000">5,500,000</option>
                                                                <option value="6000000">6,000,000</option>
                                                                <option value="6500000">6,500,000</option>
                                                                <option value="7000000">7,000,000</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    {/* Max Price Selector */}
                                                    <div className="w-full relative p-2">
                                                        <h3 style={{ color: "#FF6922" }}>Max Price (KSH)</h3>
                                                        <div className="relative flex mt-4">
                                                            <select
                                                                name="max-price"
                                                                className="h-[50px] font-medium w-full"
                                                                value={selectedHighestPrice}
                                                                onChange={(e) => setSelectedHighestPrice(e.target.value)}
                                                            >
                                                                <option value="16000000" selected>16,000,000</option>
                                                                <option value="14000000">14,000,000</option>
                                                                <option value="12000000">12,000,000</option>
                                                                <option value="10000000">10,000,000</option>
                                                                <option value="9500000">9,500,000</option>
                                                                <option value="9000000">9,000,000</option>
                                                                <option value="8500000">8,500,000</option>
                                                                <option value="8000000">8,000,000</option>
                                                                <option value="7500000">7,500,000</option>
                                                                <option value="7000000">7,000,000</option>
                                                                <option value="6500000">6,500,000</option>
                                                                <option value="6000000">6,000,000</option>
                                                                <option value="5500000">5,500,000</option>
                                                                <option value="5000000">5,000,000</option>
                                                                <option value="4500000">4,500,000</option>
                                                                <option value="4000000">4,000,000</option>
                                                                <option value="3500000">3,500,000</option>
                                                                <option value="3000000">3,000,000</option>


                                                                <option value="2000000">2,000,000</option>

                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Clear Selection */}
                                                <div className="h-[50px] cursor-pointer" onClick={clearPriceSelection}>
                                                    <hr />
                                                    <h3 className="p-4">CLEAR SELECTION</h3>
                                                </div>

                                            </Flex>
                                        </Accordion.Panel>
                                    </Accordion.Item>
                                    <Accordion.Item value="4">
                                        <Accordion.Control className="custom-accordion-control">
                                            <div className="flex flex-col gap-2">
                                                <Title order={4} className='flex items-center gap-2'>LOCATION</Title>
                                                <span className={selectedLocations.length > 0 ? `text-[#FF6922]` : ""}>{selectedLocations.length > 0 ? selectedLocations.length + " Locations" : "All Locations"}</span>

                                            </div>

                                        </Accordion.Control>
                                        <Accordion.Panel>
                                            <Flex direction="column" gap="xs" >
                                                <div className="relative flex gap-2 flex-col">
                                                    <div className="w-full  relative p-2">
                                                        <h3 style={{ color: "#FF6922" }}>FEATURED LOCATIONS</h3>
                                                        <div className="relative flex flex-col mt-4 gap-4">
                                                            <div className="w-full flex flex-col justify-start gap-4">
                                                                <div className="flex flex-col">
                                                                    <Checkbox
                                                                        checked={selectedLocations.includes("Mombasa CBD")}
                                                                        onChange={(e) => handleLocationsChange("Mombasa CBD", e.target.checked)}
                                                                        label="Mombasa CBD"
                                                                        color="#FF6922"
                                                                        c="black"
                                                                        size="md"
                                                                    />
                                                                </div>
                                                                <div className="flex flex-col">
                                                                    <Checkbox
                                                                        checked={selectedLocations.includes("Nyali, Mombasa")}
                                                                        onChange={(e) => handleLocationsChange("Nyali, Mombasa", e.target.checked)}
                                                                        label="Nyali, Mombasa"
                                                                        color="#FF6922"
                                                                        c="black"
                                                                        size="md"
                                                                    />
                                                                </div>
                                                                <div className="flex flex-col">
                                                                    <Checkbox
                                                                        checked={selectedLocations.includes("Tudor, Mombasa")}
                                                                        onChange={(e) => handleLocationsChange("Tudor, Mombasa", e.target.checked)}
                                                                        label="Tudor, Mombasa"
                                                                        color="#FF6922"
                                                                        c="black"
                                                                        size="md"
                                                                    />
                                                                </div>
                                                                <div className="flex flex-col">
                                                                    <Checkbox
                                                                        checked={selectedLocations.includes("Bamburi, Mombasa")}
                                                                        onChange={(e) => handleLocationsChange("Bamburi, Mombasa", e.target.checked)}
                                                                        label="Bamburi, Mombasa"
                                                                        color="#FF6922"
                                                                        c="black"
                                                                        size="md"
                                                                    />
                                                                </div>

                                                                <div className="flex flex-col">
                                                                    <Checkbox
                                                                        checked={selectedLocations.includes("Mtwapa, Kilifi")}
                                                                        onChange={(e) => handleLocationsChange("Mtwapa, Kilifi", e.target.checked)}
                                                                        label="Mtwapa, Kilifi"
                                                                        color="#FF6922"
                                                                        c="black"
                                                                        size="md"
                                                                    />
                                                                </div>
                                                                <div className="flex flex-col">
                                                                    <Checkbox
                                                                        checked={selectedLocations.includes("Kilifi Town")}
                                                                        onChange={(e) => handleLocationsChange("Kilifi Town", e.target.checked)}
                                                                        label="Kilifi Town"
                                                                        color="#FF6922"
                                                                        c="black"
                                                                        size="md"
                                                                    />
                                                                </div>
                                                                <div className="flex flex-col">
                                                                    <Checkbox
                                                                        checked={selectedLocations.includes("Ukunda, Kwale")}
                                                                        onChange={(e) => handleLocationsChange("Ukunda, Kwale", e.target.checked)}
                                                                        label="Ukunda, Kwale"
                                                                        color="#FF6922"
                                                                        c="black"
                                                                        size="md"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="w-full relative p-2">
                                                        <h3 style={{ color: "#FF6922" }}>MORE LOCATIONS</h3>
                                                        <div className="relative flex flex-col  mt-4 ">
                                                            <div className="w-full  flex flex-col justify-start gap-4">
                                                                <div className="flex flex-col">
                                                                    <Checkbox
                                                                        checked={selectedLocations.includes("Nairobi")}
                                                                        onChange={(e) => handleLocationsChange("Nairobi", e.target.checked)}
                                                                        label="Nairobi"
                                                                        color="#FF6922"
                                                                        c="black"
                                                                        size="md"
                                                                    />
                                                                </div>

                                                                <div className="flex flex-col">
                                                                    <Checkbox
                                                                        checked={selectedLocations.includes("Nakuru")}
                                                                        onChange={(e) => handleLocationsChange("Nakuru", e.target.checked)}
                                                                        label="Nakuru"
                                                                        color="#FF6922"
                                                                        c="black"
                                                                        size="md"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="h-[50px] cursor-pointer" onClick={handleLocationsClear}>
                                                    <hr />
                                                    <h3 className="p-4">CLEAR SELECTION</h3>
                                                </div>
                                            </Flex>
                                        </Accordion.Panel>
                                    </Accordion.Item>
                                </Accordion>
                            </Box>


                            <div className="rounded-sm w-[100%] lg:w-[20%] h-full p-2 flex justify-center items-center" onClick={handleSearch}>
                                <button className="bg-slate-400 w-full lg:w-[80%] py-4 rounded-sm cursor-pointer">SEARCH</button>
                            </div>
                            <style jsx>{`
                .custom-accordion-control:hover {
                  color: white; /* Change the text color on hover */
                }
                
                /* Assuming the <hr> is generated somewhere, you can hide it */
                hr:last-of-type {
                  display: none; /* Remove the last <hr> if it's being automatically generated */
                }
              `}</style>


                        </Stack>
                    </div>

                </div>
            </Modal>
        )
    }

    return (
        <>

            <div
                className="fixed hidden lg:flex bg-white lg:bg-transparent lg:absolute justify-center items-center top-0 lg:top-[80vh] w-full rounded-lg"
                style={{ overflowY: 'auto', scrollbarWidth: 'none' }}
            >
                <div
                    className="rounded-sm w-full lg:w-[80%] h-full lg:h-fit bg-white px-4 flex flex-col lg:flex-row justify-start items-center lg:mb-[200px] text-black gap-4 lg:gap-2"
                    style={{ zIndex: 3 }}
                >

                    <div className="rounded-sm w-[100%] lg:w-[20%] h-full p-2">
                        <Popover
                            position="bottom"
                            shadow="md"
                            width="350px"

                        >
                            <Popover.Target>
                                <div className="flex flex-col gap-2 cursor-pointer">
                                    <h2 className="font-bold">PROPERTY TYPES</h2>
                                    <div className="flex justify-between">
                                        <span className={selectedPropertyType.length > 0 ? `text-[#FF6922]` : ""}>{selectedPropertyType.length > 0 ? selectedPropertyType.length + " Property types" : "Any"}</span>
                                        <span><FontAwesomeIcon icon={faAngleDown} /></span>
                                    </div>
                                </div>
                            </Popover.Target>

                            <Popover.Dropdown>
                                <div className="relative bg-white rounded-sm p-2 h-fit  lg:h-[300px]  flex flex-col justify-between">
                                    <div className="flex gap-2">
                                        <div className="w-full lg:w-[50%] relative p-2">
                                            <div className="relative flex flex-col gap-4">
                                                <div className="flex flex-col">
                                                    <Checkbox
                                                        checked={selectedPropertyType.includes("Apartment")}
                                                        onChange={(e) => handlePropertyTypeChange("Apartment", e.target.checked)}
                                                        label="Apartment"
                                                        color="#FF6922"
                                                        c="black"
                                                        size="md"
                                                    />
                                                </div>

                                                <div className="flex flex-col">
                                                    <Checkbox
                                                        checked={selectedPropertyType.includes("Hotel")}
                                                        onChange={(e) => handlePropertyTypeChange("Hotel", e.target.checked)}
                                                        label="Hotel"
                                                        color="#FF6922"
                                                        c="black"
                                                        size="md"
                                                    />
                                                </div>
                                                <div className="flex flex-col">
                                                    <Checkbox
                                                        checked={selectedPropertyType.includes("Office")}
                                                        onChange={(e) => handlePropertyTypeChange("Office", e.target.checked)}
                                                        label="Office"
                                                        color="#FF6922"
                                                        c="black"
                                                        size="md"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-[50%] relative p-2">
                                            <div className="relative flex flex-col gap-4">
                                                <div className="flex flex-col ">
                                                    <Checkbox
                                                        checked={selectedPropertyType.includes("Plot")}
                                                        onChange={(e) => handlePropertyTypeChange("Plot", e.target.checked)}
                                                        label="Plot"
                                                        color="#FF6922"
                                                        c="black"
                                                        size="md"
                                                    />
                                                </div>
                                                <div className="flex flex-col">
                                                    <Checkbox
                                                        checked={selectedPropertyType.includes("Town House")}
                                                        onChange={(e) => handlePropertyTypeChange("Town House", e.target.checked)}
                                                        label="Town House"
                                                        color="#FF6922"
                                                        c="black"
                                                        size="md"
                                                    />
                                                </div>
                                                <div className="flex flex-col">
                                                    <Checkbox
                                                        checked={selectedPropertyType.includes("Villa")}
                                                        onChange={(e) => handlePropertyTypeChange("Villa", e.target.checked)}
                                                        label="Villa"
                                                        color="#FF6922"
                                                        c="black"
                                                        size="md"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="h-[50px] cursor-pointer" onClick={handlePropertyTypeClear}>
                                        <hr />
                                        <h3 className="p-4">CLEAR SELECTION</h3>
                                    </div>
                                </div>
                            </Popover.Dropdown>
                        </Popover>
                    </div>

                    <div className="rounded-sm w-[100%] lg:w-[20%] h-full p-2">
                        <Popover
                            position="bottom"
                            shadow="md"
                            width="400px"
                        >
                            <Popover.Target>
                                <div className="flex flex-col gap-2 cursor-pointer">
                                    <h2 className="font-bold">BEDROOMS</h2>
                                    <div className="flex justify-between" >
                                        <span className={selectedBedrooms.length > 0 ? `text-[#FF6922]` : ""}>{selectedBedrooms.length > 0 ? selectedBedrooms.join(", ") + " Bedrooms" : "Any"}</span>
                                        <span><FontAwesomeIcon icon={fontawesome.faAngleDown} /></span>
                                    </div>
                                </div>
                            </Popover.Target>

                            <Popover.Dropdown>
                                <div className="relative bg-white rounded-sm p-2  h-fit  lg:h-[300px] flex flex-col justify-between">
                                    <div className="flex gap-2">
                                        <div className="w-full lg:w-[50%] relative p-2">
                                            <div className="relative flex flex-col gap-4">
                                                <div className="flex flex-col">
                                                    <Checkbox
                                                        checked={selectedBedrooms.includes("1")}
                                                        onChange={(e) => handleBedroomsChange("1", e.target.checked)}
                                                        label="1 Bedroom"
                                                        color="#FF6922"
                                                        c="black"
                                                        size="md"
                                                    />
                                                </div>
                                                <div className="flex flex-col">
                                                    <Checkbox
                                                        checked={selectedBedrooms.includes("2")}
                                                        onChange={(e) => handleBedroomsChange("2", e.target.checked)}
                                                        label="2 Bedroom"
                                                        color="#FF6922"
                                                        c="black"
                                                        size="md"
                                                    />
                                                </div>
                                                <div className="flex flex-col">
                                                    <Checkbox
                                                        checked={selectedBedrooms.includes("3")}
                                                        onChange={(e) => handleBedroomsChange("3", e.target.checked)}
                                                        label="3 Bedroom"
                                                        color="#FF6922"
                                                        c="black"
                                                        size="md"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-[50%] relative p-2">
                                            <div className="relative flex flex-col gap-4">
                                                <div className="flex flex-col">
                                                    <Checkbox
                                                        checked={selectedBedrooms.includes("4")}
                                                        onChange={(e) => handleBedroomsChange("4", e.target.checked)}
                                                        label="4 Bedroom"
                                                        color="#FF6922"
                                                        c="black"
                                                        size="md"
                                                    />
                                                </div>
                                                <div className="flex flex-col">
                                                    <Checkbox
                                                        checked={selectedBedrooms.includes("5")}
                                                        onChange={(e) => handleBedroomsChange("5", e.target.checked)}
                                                        label="5 Bedroom"
                                                        color="#FF6922"
                                                        c="black"
                                                        size="md"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="h-[50px] cursor-pointer" onClick={handleBedroomsClear}>
                                        <hr />
                                        <h3 className="p-4">CLEAR SELECTION</h3>
                                    </div>
                                </div>
                            </Popover.Dropdown>
                        </Popover>
                    </div>

                    <div className="rounded-sm w-[100%] lg:w-[20%] h-full p-2">
                        <Popover
                            position="bottom"
                            shadow="md"
                            width="350px"
                        >
                            <Popover.Target>
                                <div className="flex flex-col gap-2 cursor-pointer">
                                    <h2 className="font-bold">PRICE RANGE (KSH)</h2>
                                    <div className="flex justify-between">
                                        <span className={(selectedLowestPrice || selectedHighestPrice) ? "text-[#FF6922]" : ""}>
                                            {(selectedLowestPrice || selectedHighestPrice) ? `KSH ${selectedLowestPrice ? formatNumberWithCommas(selectedLowestPrice) : ""} - ${selectedHighestPrice ? formatNumberWithCommas(selectedHighestPrice) : ""}` : "Any"}
                                        </span>
                                        <span><FontAwesomeIcon icon={fontawesome.faAngleDown} /></span>
                                    </div>
                                </div>
                            </Popover.Target>

                            <Popover.Dropdown>
                                <div className="relative bg-white rounded-sm p-2 h-fit lg:h-[200px] flex flex-col justify-between">
                                    <div className="flex gap-2">
                                        {/* Min Price Selector */}
                                        <div className="w-[50%] relative p-2">
                                            <h3 style={{ color: "#FF6922" }}>Min Price (KSH)</h3>
                                            <div className="relative flex mt-4">
                                                <select
                                                    name="min-price"
                                                    className="h-[50px] font-medium w-full"
                                                    value={selectedLowestPrice}
                                                    onChange={(e) => setSelectedLowestPrice(e.target.value)}
                                                >
                                                    <option value="2000000" selected>2,000,000</option>
                                                    <option value="2200000">2,200,000</option>
                                                    <option value="2400000">2,400,000</option>
                                                    <option value="2600000">2,600,000</option>
                                                    <option value="2800000">2,800,000</option>
                                                    <option value="3000000">3,000,000</option>
                                                    <option value="3500000">3,500,000</option>
                                                    <option value="4000000">4,000,000</option>
                                                    <option value="4500000">4,500,000</option>
                                                    <option value="5000000">5,000,000</option>
                                                    <option value="5500000">5,500,000</option>
                                                    <option value="6000000">6,000,000</option>
                                                    <option value="6500000">6,500,000</option>
                                                    <option value="7000000">7,000,000</option>
                                                </select>
                                            </div>
                                        </div>

                                        {/* Max Price Selector */}
                                        <div className="w-[50%] relative p-2">
                                            <h3 style={{ color: "#FF6922" }}>Max Price (KSH)</h3>
                                            <div className="relative flex mt-4">
                                                <select
                                                    name="max-price"
                                                    className="h-[50px] font-medium w-full"
                                                    value={selectedHighestPrice}
                                                    onChange={(e) => setSelectedHighestPrice(e.target.value)}
                                                >
                                                    <option value="16000000" selected>16,000,000</option>
                                                    <option value="14000000">14,000,000</option>
                                                    <option value="12000000">12,000,000</option>
                                                    <option value="10000000">10,000,000</option>
                                                    <option value="9500000">9,500,000</option>
                                                    <option value="9000000">9,000,000</option>
                                                    <option value="8500000">8,500,000</option>
                                                    <option value="8000000">8,000,000</option>
                                                    <option value="7500000">7,500,000</option>
                                                    <option value="7000000">7,000,000</option>
                                                    <option value="6500000">6,500,000</option>
                                                    <option value="6000000">6,000,000</option>
                                                    <option value="5500000">5,500,000</option>
                                                    <option value="5000000">5,000,000</option>
                                                    <option value="4500000">4,500,000</option>
                                                    <option value="4000000">4,000,000</option>
                                                    <option value="3500000">3,500,000</option>
                                                    <option value="3000000">3,000,000</option>


                                                    <option value="2000000">2,000,000</option>

                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Clear Selection */}
                                    <div className="h-[50px] cursor-pointer" onClick={clearPriceSelection}>
                                        <hr />
                                        <h3 className="p-4">CLEAR SELECTION</h3>
                                    </div>
                                </div>
                            </Popover.Dropdown>
                        </Popover>
                    </div>

                    <div className="rounded-sm w-[100%] lg:w-[20%] h-full p-2">
                        <Popover
                            position="bottom"
                            shadow="md"
                            width="80%"
                        >
                            <Popover.Target>
                                <div className="flex flex-col gap-2 cursor-pointer">
                                    <h2 className="font-bold">LOCATION</h2>
                                    <div className="flex justify-between" >
                                        <span className={selectedLocations.length > 0 ? `text-[#FF6922]` : ""}>{selectedLocations.length > 0 ? selectedLocations.length + " Locations" : "All Locations"}</span>
                                        <span><FontAwesomeIcon icon={fontawesome.faAngleDown} /></span>
                                    </div>
                                </div>
                            </Popover.Target>

                            <Popover.Dropdown>
                                <div className="relative bg-white rounded-sm p-2 h-fit  lg:h-[300px] w-full  flex flex-col justify-between">
                                    <div className="relative flex gap-2 flex-col lg:flex-row">
                                        <div className="w-full lg:w-[50%] relative p-2">
                                            <h3 style={{ color: "#FF6922" }}>FEATURED LOCATIONS</h3>
                                            <div className="relative flex flex-col lg:flex-row mt-4">
                                                <div className="w-full lg:w-[50%] flex flex-col justify-start gap-4">
                                                    <div className="flex flex-col">
                                                        <Checkbox
                                                            checked={selectedLocations.includes("Mombasa CBD")}
                                                            onChange={(e) => handleLocationsChange("Mombasa CBD", e.target.checked)}
                                                            label="Mombasa CBD"
                                                            color="#FF6922"
                                                            c="black"
                                                            size="md"
                                                        />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <Checkbox
                                                            checked={selectedLocations.includes("Nyali, Mombasa")}
                                                            onChange={(e) => handleLocationsChange("Nyali, Mombasa", e.target.checked)}
                                                            label="Nyali, Mombasa"
                                                            color="#FF6922"
                                                            c="black"
                                                            size="md"
                                                        />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <Checkbox
                                                            checked={selectedLocations.includes("Tudor, Mombasa")}
                                                            onChange={(e) => handleLocationsChange("Tudor, Mombasa", e.target.checked)}
                                                            label="Tudor, Mombasa"
                                                            color="#FF6922"
                                                            c="black"
                                                            size="md"
                                                        />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <Checkbox
                                                            checked={selectedLocations.includes("Bamburi, Mombasa")}
                                                            onChange={(e) => handleLocationsChange("Bamburi, Mombasa", e.target.checked)}
                                                            label="Bamburi, Mombasa"
                                                            color="#FF6922"
                                                            c="black"
                                                            size="md"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="w-full lg:w-[50%]  flex gap-4 flex-col">
                                                    <div className="flex flex-col">
                                                        <Checkbox
                                                            checked={selectedLocations.includes("Mtwapa, Kilifi")}
                                                            onChange={(e) => handleLocationsChange("Mtwapa, Kilifi", e.target.checked)}
                                                            label="Mtwapa, Kilifi"
                                                            color="#FF6922"
                                                            c="black"
                                                            size="md"
                                                        />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <Checkbox
                                                            checked={selectedLocations.includes("Kilifi Town")}
                                                            onChange={(e) => handleLocationsChange("Kilifi Town", e.target.checked)}
                                                            label="Kilifi Town"
                                                            color="#FF6922"
                                                            c="black"
                                                            size="md"
                                                        />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <Checkbox
                                                            checked={selectedLocations.includes("Ukunda, Kwale")}
                                                            onChange={(e) => handleLocationsChange("Ukunda, Kwale", e.target.checked)}
                                                            label="Ukunda, Kwale"
                                                            color="#FF6922"
                                                            c="black"
                                                            size="md"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="lg:w-[50%] w-full relative p-2">
                                            <h3 style={{ color: "#FF6922" }}>MORE LOCATIONS</h3>
                                            <div className="relative flex flex-col lg:flex-row mt-4">
                                                <div className="w-full lg:w-[50%] flex flex-col justify-start ">
                                                    <div className="flex flex-col">
                                                        <Checkbox
                                                            checked={selectedLocations.includes("Nairobi")}
                                                            onChange={(e) => handleLocationsChange("Nairobi", e.target.checked)}
                                                            label="Nairobi"
                                                            color="#FF6922"
                                                            c="black"
                                                            size="md"
                                                        />
                                                    </div>

                                                </div>
                                                <div className="w-full lg:w-[50%]  flex gap-4 flex-col">
                                                    <div className="flex flex-col">
                                                        <Checkbox
                                                            checked={selectedLocations.includes("Nakuru")}
                                                            onChange={(e) => handleLocationsChange("Nakuru", e.target.checked)}
                                                            label="Nakuru"
                                                            color="#FF6922"
                                                            c="black"
                                                            size="md"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="h-[50px] cursor-pointer" onClick={handleLocationsClear}>
                                        <hr />
                                        <h3 className="p-4">CLEAR SELECTION</h3>
                                    </div>
                                </div>
                            </Popover.Dropdown>
                        </Popover>
                    </div>

                    <div className="rounded-sm w-[100%] lg:w-[20%] h-full p-2 flex justify-center items-center" onClick={handleSearch}>
                        <button className="bg-slate-400 w-full lg:w-[80%] py-4 rounded-sm cursor-pointer">SEARCH</button>
                    </div>
                </div>
            </div>


            <div className="fixed bottom-0 z-[998] w-[100vw] bg-white p-2">
                <div className=" flex lg:hidden px-2 justify-between top-[80vh]   ">
                    <button className="bg-white w-[48%] py-4 rounded-sm cursor-pointer border-[1px] border-[#232323];" onClick={() => setOpened((p) => !p)} >{opened ? 'CLOSE' : 'SEARCH'}</button>
                    <button className="bg-[#232323] w-[48%] py-4 rounded-sm cursor-pointer text-white"  onClick={() => setOpened2(true)}>GET IN TOUCH</button>
                </div>
            </div>
            {/* mobile */}
            <div className="flex lg:hidden ">
                <MobileSearch />
            </div>

            <Modal
                withCloseButton={true}
                opened={opened2} // Filter Modal state
                onClose={() => setOpened2(false)} // Close Filter Modal
                title="Get in touch"
            >
                <AppointmentModal setOpened={setOpened2}/>
            </Modal>
        </>
    )
}

