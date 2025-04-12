'use client';
import Link from 'next/link';
import React, { useState } from 'react'
import {
    FaYoutube, FaFacebook, FaInstagramSquare, FaTwitter, FaTiktok, FaSpotify,
    FaSoundcloud, FaLinkedinIn, FaPinterest, FaSnapchatGhost, FaRedditAlien, FaTwitch
} from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";
import ServicesLinkModel from './ServicesLinkModel';
import servicesData from "../constant/general/navlinksData.js";
function ServiceSection() {
    const [selectedService, setSelectedService] = useState(null);
  return (
    <div >
        <div className="w-[90%] lg:w-[80%] m-auto flex justify-center">
        <div className="mt-10 w-full">
            <h1 className="text-center text-3xl md:text-4xl font-bold text-[#0d1821] mb-10">
                Buy <span className="text-blue-600">Facebook</span> Followers & Likes, Packages in one place
            </h1>
            <div className="w-full lg:w-[80%] xl:[60%] m-auto grid grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
                {
                    servicesData.map((data,i)=>(
                        <button
                        onClick={() => setSelectedService(data.services)}
                         key={i} className='p-6 rounded-lg flex justify-center cursor-pointer items-center shadow-md' style={{backgroundColor: data.color}}>
                            <h4 className="text-5xl text-white font-bold">
                                <data.icon/>
                            </h4>
                        </button>
                    ))
                }
            </div>
        </div>
    </div>
    <ServicesLinkModel isOpen={!!selectedService} onClose={() => setSelectedService(null)} data={selectedService}/>
    </div>
  )
}

export default ServiceSection