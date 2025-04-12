"use client";
import React, { useState } from "react";
import PackageSection from "../components/PackageSection";
import Image from "next/image";
import Link from "next/link";
import pinFollowersData from "../constant/pinterest/pinFollowersData.json";
function PinterestFollowersPage() {
  return (
    <div className="bg-white">
      <div className="w-[90%] xl:w-[80%] m-auto ">
        <div className="py-10 w-full flex flex-col gap-8 justify-center items-center">
          <h1 className="text-center text-3xl md:text-4xl text-[#0d1821] font-bold">
            Buy Real <span className="text-[#E60023]">Pinterest</span> Followers
          </h1>
          <PackageSection
            packageData={pinFollowersData}
            serviceName={"Buy Pinterest Followers"}
            placeHolder={"Enter profile link"}
          />
        </div>
        <div className="py-8 flex flex-col gap-8">
          
        </div>
      </div>
    </div>
  );
}

export default PinterestFollowersPage;
