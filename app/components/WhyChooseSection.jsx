import React from 'react';
import { MdOutlineRocketLaunch } from "react-icons/md";
import { LiaCertificateSolid } from "react-icons/lia";
import { MdOutlinePriceCheck } from "react-icons/md";

function WhyChooseSection() {
  return (
    <div>
        <div className=" w-[90%] xl:w-[80%] m-auto flex justify-center">
        <div className="my-10 w-full">
            <h2 className="text-center text-4xl text-[#0d1821] font-bold mb-10">
                Why choose Socialize Club?
            </h2>
            <div className="m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex flex-col justify-between gap-3 items-center shadow border-x-4 border-[var(--primary)] rounded-md p-4">
                    <span className="text-3xl font-bold bg-[var(--primary)] text-white border rounded-full p-5">
                        <MdOutlineRocketLaunch/>
                    </span>
                    <h5 className="text-2xl font-bold text-black">
                        Quick delivery
                    </h5>
                    <p className="text-sm text-gray-700">
                        Our managers start processing your order as soon as you place it on the website. The processing of the order will start in 1 minute, it will take us under a couple of hours to make you see the first results happening because of the bought package.
                    </p>
                </div>
                <div className="flex flex-col justify-between gap-3 items-center shadow border-y-4 border-[var(--primary)] rounded-md p-4">
                    <span className="text-3xl font-bold bg-[var(--primary)] text-white border rounded-full p-5">
                    <LiaCertificateSolid/>
                    </span>
                    <h5 className="text-2xl font-bold text-black">
                        Renuine Followers
                    </h5>
                    <p className="text-sm text-gray-700">
                        Our managers start processing your order as soon as you place it on the website. The processing of the order will start in 1 minute, it will take us under a couple of hours to make you see the first results happening because of the bought package.
                    </p>
                </div>
                <div className="flex flex-col justify-between gap-3 items-center shadow border-x-4 border-[var(--primary)] rounded-md p-4">
                    <span className="text-3xl font-bold bg-[var(--primary)] text-white border rounded-full p-5">
                    <MdOutlinePriceCheck/>
                    </span>
                    <h5 className="text-2xl font-bold text-black">
                        Best Prices
                    </h5>
                    <p className="text-sm text-gray-700">
                        Our managers start processing your order as soon as you place it on the website. The processing of the order will start in 1 minute, it will take us under a couple of hours to make you see the first results happening because of the bought package.
                    </p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default WhyChooseSection