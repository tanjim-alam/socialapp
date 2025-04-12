"use client";
import React, { useState } from "react";
import PackageSection from "../components/PackageSection";
import Image from "next/image";
import Link from "next/link";
import twFollowersData from "../constant/twitter/twFollowersData.json";
function TwitterFollowersage() {
  return (
    <div className="bg-white">
      <div className="w-[90%] xl:w-[80%] m-auto ">
        <div className="py-10 w-full flex flex-col gap-8 justify-center items-center">
          <h1 className="text-center text-3xl md:text-4xl text-[#0d1821] font-bold">
            Buy Real <span className="text-[#1DA1F2]">Twitter</span> Followers
          </h1>
          <PackageSection
            packageData={twFollowersData}
            serviceName={"Buy Twitter Followers"}
            placeHolder={"Enter profile link"}
          />
        </div>
        <div className="py-8 flex flex-col gap-8">
          
        </div>
      </div>
    </div>
  );
}

export default TwitterFollowersage;
