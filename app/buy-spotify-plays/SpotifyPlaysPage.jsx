"use client";
import React, { useState } from "react";
import PackageSection from "../components/PackageSection";
import Image from "next/image";
import Link from "next/link";
import spPlaysData from "../constant/spotify/spPlaysData.json";
function SpotifyPlaysPage() {
  return (
    <div className="bg-white">
      <div className="w-[90%] xl:w-[80%] m-auto ">
        <div className="py-10 w-full flex flex-col gap-8 justify-center items-center">
          <h1 className="text-center text-3xl md:text-4xl text-[#0d1821] font-bold">
            Buy Real <span className="text-[#1DB954]">Spotify</span> Plays
          </h1>
          <PackageSection
            packageData={spPlaysData}
            serviceName={"Buy Spotify Plays"}
            placeHolder={"Enter song link"}
          />
        </div>
        <div className="py-8 flex flex-col gap-8">
          
        </div>
      </div>
    </div>
  );
}

export default SpotifyPlaysPage;
