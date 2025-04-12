"use client";
import React, { useState } from "react";
import PackageSection from "../components/PackageSection";
import Image from "next/image";
import Link from "next/link";
import twiLiveViewsData from "../constant/twitch/twiLiveViewsData.json";
function TwitchLiveViewsPage() {
  return (
    <div className="bg-white">
      <div className="w-[90%] xl:w-[80%] m-auto ">
        <div className="py-10 w-full flex flex-col gap-8 justify-center items-center">
          <h1 className="text-center text-3xl md:text-4xl text-[#0d1821] font-bold">
            Buy Real <span className="text-[#9146FF]">Twitch</span> Live Viewer
          </h1>
          <PackageSection
            packageData={twiLiveViewsData}
            serviceName={"Buy Twitch Live Views"}
            placeHolder={"Enter live link"}
          />
        </div>
        <div className="py-8 flex flex-col gap-8">
          
        </div>
      </div>
    </div>
  );
}

export default TwitchLiveViewsPage;
