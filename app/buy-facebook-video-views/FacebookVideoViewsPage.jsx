"use client";
import React, { useState } from "react";
import PackageSection from "../components/PackageSection";
import Image from "next/image";
import Link from "next/link";
import fbVideoViewsData from "../constant/facebook/fbVideoViewsData.json";
function FacebookVideoViewsPage() {
  return (
    <div className="bg-white">
      <div className="w-[90%] xl:w-[80%] m-auto ">
        <div className="py-10 w-full flex flex-col gap-8 justify-center items-center">
          <h1 className="text-center text-3xl md:text-4xl text-[#0d1821] font-bold">
          Buy Genuine <span className="text-[#155dfc]">Facebook</span> Video Views
          </h1>
          <PackageSection
            packageData={fbVideoViewsData}
            serviceName={"Buy Facebook Video Views"}
            placeHolder={"Enter facebook video link"}
          />
        </div>
        <div className="py-8 flex flex-col gap-8">
          <div>
            <p className="text-[17px] text-gray-500 mt-2 leading-7">
              We provide 100% Facebook Video Views at cheap price. Buy Real
              Facebook Video Views to Improve and add up to the credibility of
              your Facebook Video.
            </p>
            <p className="text-[17px] text-gray-500 mt-3 leading-7">
              <b>Buy Facebook Video Views</b> will give you many benefits.
              Whenever your movie becomes enough perspective, it seems on the
              peak of the featured videos segment so that more people can see
              it. People who follow your accounts improve, and several men and
              women begin to discuss your video. If the movie you post is an
              advertisement, it automatically affects your earnings. Your
              earnings increases and you’ll bring in more. So temporarily,
              beginning at only $5, you can be hot on Facebook. Who would not
              want that?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FacebookVideoViewsPage;
