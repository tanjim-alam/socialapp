import React from 'react'
import ServiceCard from '../components/ServiceCard'
import { FaFacebook, FaUsers,FaComment } from 'react-icons/fa';
import { AiFillLike } from "react-icons/ai";
import { MdOndemandVideo } from "react-icons/md";


function FacebookPage() {
    const servicesData = [
            {
                id: 1,
                name: "Facebook Followers",
                icon: FaUsers,
                color: "#155dfc",
                label: "/facebook-followers"
            },
            {
                id: 2,
                name: "Facebook Likes",
                icon: AiFillLike,
                color: "#155dfc",
                label: "/facebook-likes"
            },
            {
                id: 3,
                name: "Facebook Comments",
                icon: FaComment,
                color: "#155dfc",
                label: "/facebook-comments"
            },
            {
                id: 4,
                name: "Facebook Video Views",
                icon: MdOndemandVideo,
                color: "#155dfc",
                label: "/facebook-video-views"
            },
            {
                id: 5,
                name: "Facebook Page Likes",
                icon: AiFillLike,
                color: "#155dfc",
                label: "/facebook-page-likes"
            },
            {
                id: 6,
                name: "Facebook Live Views",
                icon: MdOndemandVideo,
                color: "#155dfc",
                label: "/facebook-live-views"
            }
            
        ];
  return (
    <div >
    <div className="w-[90%] xl:w-[80%] m-auto flex justify-center">
    <div className="my-10 w-full">
    <h1 className="text-center text-3xl lg:text-4xl font-bold text-[#0d1821] mb-10">
                Buy <span className="text-blue-600">Facebook</span> Followers & Likes, Packages in one place
            </h1>
        <div className="m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {
                servicesData.map((data,i)=><ServiceCard key={i} data={data}/>)
            }
        </div>
    </div>
</div>
</div>
  )
}

export default FacebookPage