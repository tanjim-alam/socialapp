import React from 'react'
import ServiceCard from '../components/ServiceCard'
import { FaFacebook, FaUsers,FaComment } from 'react-icons/fa';
import { AiFillLike } from "react-icons/ai";
import { MdOndemandVideo } from "react-icons/md";
import { BsCameraReels } from "react-icons/bs";


function InstagramPage() {
    const servicesData = [
            {
                id: 1,
                name: "Instagram Followers",
                icon: FaUsers,
                color: "#f50d55",
                label: "/instagram-followers"
            },
            {
                id: 2,
                name: "Instagram Likes",
                icon: AiFillLike,
                color: "#f50d55",
                label: "/instagram-likes"
            },
            {
                id: 3,
                name: "Instagram Comments",
                icon: FaComment,
                color: "#f50d55",
                label: "/instagram-comments"
            },
            {
                id: 4,
                name: "Instagram Reels Views",
                icon: BsCameraReels,
                color: "#f50d55",
                label: "/instagram-reels-views"
            },
            {
                id: 5,
                name: "Instagram Reels Likes",
                icon: BsCameraReels,
                color: "#f50d55",
                label: "/instagram-reels-likes"
            },
            {
                id: 6,
                name: "Instagram Live Views",
                icon: MdOndemandVideo,
                color: "#f50d55",
                label: "/instagram-live-views"
            }
            
        ];
  return (
    <div >
    <div className="w-[80%] m-auto flex justify-center">
    <div className="my-10 w-full">
    <h1 className="text-center text-4xl font-bold text-[#0d1821] mb-10">
                Buy <span className="text-pink-600">Instagram</span> Followers & Likes, Packages in one place
            </h1>
        <div className="m-auto grid grid-cols-4 gap-6">
            {
                servicesData.map((data,i)=><ServiceCard key={i} data={data}/>)
            }
        </div>
    </div>
</div>
</div>
  )
}

export default InstagramPage