"use client";
import React, { useState } from "react";
import PackageSectionForLive from "../components/PackageSectionForLive";
import ytLiveViewsData from "../constant/youtube/ytLiveViewsData.json";
import Image from "next/image";
import Link from "next/link";

function YouTubeLiveViewsPage() {
  return (
    <div className="bg-white">
      <div className="w-[90%] xl:w-[80%] m-auto ">
        <div className="py-10 w-full flex flex-col gap-8 justify-center items-center">
          <h1 className="text-center text-3xl md:text-4xl text-[#0d1821] font-bold">
            Buy <span className="text-red-600">YouTube</span> Live
            Stream Views
          </h1>
          <PackageSectionForLive
            packageData={ytLiveViewsData}
            serviceName={"Buy YouTube Live Views"}
            placeHolder={"Enter YouTube video live link"}
          />
        </div>
        <div className="py-8 flex flex-col gap-8">

        </div>
      </div>
    </div>
  );
}

export default YouTubeLiveViewsPage;
