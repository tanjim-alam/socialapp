"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaLinkedinIn, FaTwitter, FaFacebook, FaInstagramSquare, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaSquareWhatsapp } from 'react-icons/fa6';

function Footer() {
    const [currentYear, setCurrentYear] = useState(null);
    useEffect(() => {
        const now = new Date();
        if (now) {
            setCurrentYear(now.getFullYear());
        }
    }, [])
    return (
        <div className='bg-[var(--primary)]'>
            <div className='lg:w-[80%] w-[90%] m-auto py-5'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    <div className='flex gap-4 flex-col'>
                    <div>
                            <Link href={"/"}>
                                <h4 className='text-3xl font-bold text-[var(--primary)] bg-white w-fit'>Socialize<span className='bg-[var(--primary)] text-white ml-0.5 px-0.5'>Club</span></h4>
                            </Link>
                        </div>
                        <div>
                            <p className='text-white'>
                                Socialize Club Media is Unique Social Media Company. They Providing Real and Active Video Views,
                                Subscribers, Comments  Likes, Followers, and <Link href="/about-us">More</Link>.
                            </p>
                        </div>
                    </div>
                    <div className='flex gap-4 flex-col'>
                            <h5 className='text-white text-xl font-semibold'>Services</h5>
                            <div className='flex flex-col gap-1 mt-1 lg:mt-2'>
                                <Link className='text-white hover:border-l-4' href={"/about-us"}>Facebook</Link>
                                <Link className='text-white hover:border-l-4' href={"/contact-us"}>Instagram</Link>
                                <Link className='text-white hover:border-l-4' href={"/privacy-policy"}>YouTube</Link>
                                <Link className='text-white hover:border-l-4' href={"/terms-and-conditions"}>TikTok</Link>
                                <Link className='text-white hover:border-l-4' href={"/returns-and-refunds-policy"}>Twitter</Link>
                            </div>
                    </div>
                    <div className='flex gap-4 flex-col'>
                            <h5 className='text-white text-xl font-semibold'>Quick Link</h5>
                            <div className='flex flex-col gap-1 mt-1 lg:mt-2'>
                                <Link className='text-white hover:border-l-4' href={"/about-us"}>About Us</Link>
                                <Link className='text-white hover:border-l-4' href={"/contact-us"}>Contact Us</Link>
                                <Link className='text-white hover:border-l-4' href={"/privacy-policy"}>Privacy Policy</Link>
                                <Link className='text-white hover:border-l-4' href={"/terms-and-conditions"}>Terms & Conditions</Link>
                                <Link className='text-white hover:border-l-4' href={"/returns-and-refunds-policy"}>Returns and Refunds Policy</Link>
                                
                            </div>
                    </div>
                    <div className='flex gap-4 flex-col'>
                            <h5 className='text-white text-xl font-semibold'>Our Company</h5>
                            <div >
                            <div>
                            <div className='flex flex-col justify-between text-white mt-1'>
                                <Link className='flex items-center font-semibold text-lg gap-1' href={"https://wa.me/919319187564"}><FaSquareWhatsapp /><span>+91-9319187564</span></Link>
                                <Link className='flex items-center font-semibold text-lg gap-1' href={"mailto:support@socializeclub.com"}><IoIosMail className='mt-1' /><span>support@socializeclub.com</span></Link>
                            </div>
                        </div>
                        <div className='flex text-white gap-3 mt-3'>
                            <Link className='bg-white p-2 rounded-full text-red-500' href={"#"}><FaLinkedinIn /></Link>
                            <Link className='bg-white p-2 rounded-full text-red-500' href={"#"}><FaTwitter /></Link>
                            <Link className='bg-white p-2 rounded-full text-red-500' href={"#"}><FaFacebook /></Link>
                            <Link className='bg-white p-2 rounded-full text-red-500' href={"#"}><FaInstagramSquare /></Link>
                            <Link className='bg-white p-2 rounded-full text-red-500' href={"#"}><FaYoutube /></Link>
                        </div>
                            </div>
                    </div>
                </div>
            </div>
            <div className='border-t-2 text-center p-2 text-white'>
                <p className='text-sm font-medium'>Copyright © Socialize Club Media. All Rights Reserved 2016 - {currentYear}</p>
            </div>
        </div>
    )
}

export default Footer