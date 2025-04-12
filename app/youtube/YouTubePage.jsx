import React from 'react'
import ServiceCard from '../components/ServiceCard'
import { FaYoutube } from 'react-icons/fa';

function YouTubePage() {
    const servicesData = [
            {
                id: 1,
                name: "YouTube Subscribers",
                icon: FaYoutube,
                color: "red",
                label: "/youtube-subscribers"
            },
            {
                id: 2,
                name: "YouTube Views",
                icon: FaYoutube,
                color: "red",
                label: "/youtube-views"
            },
            {
                id: 3,
                name: "YouTube Likes",
                icon: FaYoutube,
                color: "red",
                label: "/youtube-likes"
            },
            {
                id: 4,
                name: "YouTube Comments",
                icon: FaYoutube,
                color: "red",
                label: "/youtube-comments"
            },
            {
                id: 5,
                name: "YouTube Live Views",
                icon: FaYoutube,
                color: "red",
                label: "/youtube-live-views"
            },
        ];
  return (
    <div >
    <div className="w-[80%] m-auto flex justify-center">
    <div className="my-10 w-full">
        <h1 className="text-center text-4xl font-bold text-[#0d1821] mb-10">
            Buy <span className="text-red-600">YouTube</span> Subscribers, Views, Live Views Likes & Comments in one place
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

export default YouTubePage