import Link from "next/link";
import React from "react";
import {
  FaYoutube,
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
  FaTiktok,
  FaSpotify,
  FaSoundcloud,
  FaLinkedinIn,
  FaPinterest,
  FaSnapchatGhost,
  FaRedditAlien,
  FaTwitch,
} from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";

function PopularServiceSection() {
  const servicesData = [
    {
      id: 1,
      name: "Facebook Followers",
      icon: FaFacebook,
      color: "#0b82e8",
      slug: "/buy-facebook-followers"
    },
    {
      id: 2,
      name: "Instagram Followers",
      icon: FaInstagramSquare,
      color: "#fb3c44",
      slug: "/buy-instagram-followers"
    },
    {
      id: 3,
      name: "TikTok Followers",
      icon: FaTiktok,
      color: "#000000",
      slug: "/buy-tiktok-followers"
    },
    {
      id: 4,
      name: "YouTube Views",
      icon: FaYoutube,
      color: "red",
      slug: "/buy-youtube-views"
    },
    {
      id: 5,
      name: "LinkedIn Followers",
      icon: FaLinkedinIn,
      color: "#0A66C2",
      slug: "/buy-linkedin-followers"
    },
    {
      id: 6,
      name: "Threads Followers",
      icon: FaSquareThreads,
      color: "#0a0a0a",
      slug: "/buy-threads-followers"
    },
    {
      id: 7,
      name: "YouTube Subscribers",
      icon: FaYoutube,
      color: "red",
      slug: "/buy-youtube-subscribers"
    },
    {
      id: 8,
      name: "Facebook Likes",
      icon: FaFacebook,
      color: "#0b82e8",
      slug: "/buy-facebook-likes"
    },
  ];
  return (
    <div>
      <div className="w-[90%] xl:w-[80%] m-auto flex justify-center">
        <div className="my-10 w-full">
          <h1 className="text-center text-4xl text-[#0d1821] font-bold mb-10">
            Popular Social Media Services
          </h1>
          <div className="m-auto grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {servicesData.map((data, i) => (
              <Link
                key={i}
                href={data.slug}
                className="bg-white p-6 rounded-lg flex flex-col justify-center gap-2 items-center shadow border-y-2 border-blue-900"
              >
                <span
                  className="text-5xl  font-bold"
                  style={{ color: data.color }}
                >
                  <data.icon />
                </span>
                <h4
                  className=" text-lg text-center font-bold"
                  style={{ color: data.color }}
                >
                  {data.name}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularServiceSection;
