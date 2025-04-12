"use client";
import React, { useState } from "react";
import PackageSection from "../components/PackageSection";
import Image from "next/image";
import Link from "next/link";
import thCommentsData from "../constant/threads/thCommentsData.json";
function ThreadsCommentsPage() {
  return (
    <div className="bg-white">
      <div className="w-[90%] xl:w-[80%] m-auto ">
        <div className="py-10 w-full flex flex-col gap-8 justify-center items-center">
          <h1 className="text-center text-3xl md:text-4xl text-[#0d1821] font-bold">
            Buy Real <span className="text-[#0a0a0a]">Threads</span> Comments
          </h1>
          <PackageSection
            packageData={thCommentsData}
            serviceName={"Buy Threads Comments"}
            placeHolder={"Enter post link"}
          />
        </div>
        <div className="py-8 flex flex-col gap-8">
          
        </div>
      </div>
    </div>
  );
}

export default ThreadsCommentsPage;
