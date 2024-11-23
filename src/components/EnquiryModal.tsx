'use client'; // Ensure client-side rendering


import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image"; // Use Next.js Image for optimized loading
import { Button, Title } from "@mantine/core";
// import { collection, setDoc, doc } from "firebase/firestore";
// import { db } from '../../firebase';
// import { toast } from 'react-toastify';
// import { useRouter } from 'next/navigation'
// import { handleBuild } from "../../lib/build ";
// import { sendNewEnquiryEmail } from "../../lib/sendemail";

export default function EnquiryModal({ data, setOpened }: any) {
    // const [email, setEmail] = useState("");
    // const [phoneNumber, setPhoneNumber] = useState("");
    // const [message, setMessage] = useState("");
    // const [loading, setLoading] = useState(false);


    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setLoading(true);

    //     try {
    //         const timestamp = Date.now();
    //         const enqsCollectionRef = collection(db, "enquiries");
    //         const enqRef = doc(enqsCollectionRef, timestamp.toString());

    //         const propertyTitle = data.title;
    //         const enqData = {
    //             propertyId: data.id,
    //             propertyTitle,
    //             email,
    //             phoneNumber,
    //             message,
    //             read: false
    //         }

    //         await setDoc(enqRef, enqData);
    //         await sendNewEnquiryEmail( email, message, propertyTitle );
    //         toast.success("Success...");


    //     } catch (err) {
    //         console.error(err);
    //         toast.error("Failed !!. Please try again.");
    //     }

    //     setLoading(false);
    //     setOpened(false);
         
    // };

    return (
        <div className="relative w-full lg:w-[400px] h-fit bg-white shadow-sm border-rose-100 p-2 flex flex-col gap-2 justify-between">
            {/* <div className="flex flex-col gap-2 flex-grow">

                <Title order={4}>{data.title}</Title>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Your email
                    </label>
                    <input
                        type="email"
                        name="email"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-gray-200 focus:border-gray-300"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Your phone number
                    </label>
                    <input
                        type="text"
                        name="phoneNumber"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-gray-200 focus:border-gray-300"
                        placeholder="Your phone number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />
                </div>
                <textarea
                    name="description"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-gray-200 focus:border-gray-300"
                    placeholder="Write your message here"
                    rows={8}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                ></textarea>
            </div>

            <Button variant='filled' color='#232323' radius="md" fullWidth onClick={(e) => handleSubmit(e)}>    {loading ? (
                <div className="w-full flex justify-center items-center">
                    <svg
                        aria-hidden="true"
                        className="w-8 h-8 text-gray-200 animate-spin fill-[#FF6922]"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                        />
                        <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                        />
                    </svg>
                </div>
            ) : (
                " Submit enquiry"
            )}</Button> */}

        </div>

    );
}
