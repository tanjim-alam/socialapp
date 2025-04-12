'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { IoClose } from "react-icons/io5";
import PackageSection from './PackageSection';
import PackageSectionForLive from './PackageSectionForLive';
import listOfAllPackageData from "../constant/general/listOfAllPackageData.js"

export default function ServicesLinkModel({ isOpen, onClose, data }) {
  const [currPackage, setCurrPackage] = useState(null);
  const [currServiceName, setCurrServiceName] = useState("");
  const [placeHolder, setPlaceHolder] = useState("");

  // Handle changing package based on selected service
  function handleOnChangePackage(slug) {
    const selectedPackage = listOfAllPackageData.find((pkg) => pkg.slug === slug); // Use find instead of filter
    if (selectedPackage) {
      setCurrPackage(selectedPackage.package);
      setCurrServiceName(selectedPackage.name);
      setPlaceHolder(selectedPackage.placeholder);
    }
    else{
      // setCurrServiceName(data[0]?.title);
      setCurrPackage(null)
      const selectedPackage = data.find((pkg) => pkg.slug === slug);
      setCurrServiceName(selectedPackage?.title);
    }
  }

  useEffect(() => {
    if (data) {
      handleOnChangePackage(data[0]?.slug); // Set the initial package if data is available
    }
  }, [data]);

  // If the modal isn't open, return null to avoid rendering it
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0d18215c] bg-opacity-50">
      <div className="bg-white rounded-xl shadow-xl max-fit relative">
        <div className='flex justify-between gap-4 rounded-xl items-center bg-[var(--primary)] px-4 py-2'>
          <h2 className="text-xl font-bold text-white">{currServiceName || "Select a Service"}</h2>
          <button
            onClick={onClose}
            className="bg-white text-[var(--primary)] p-1 cursor-pointer rounded-full"
          >
            <IoClose />
          </button>
        </div>

        <div className='p-3'>
          <div className='flex flex-col'>
            <span className='text-sm'>Select Service</span>
            <select
              className='p-2 mt-1 rounded-2xl shadow outline-none border-x-2 border-[var(--primary)] text-md w-full'
              onChange={(e) => handleOnChangePackage(e.target.value)}
            >
              {data?.map((item, i) => (
                <option value={item.slug} key={i}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>

          <div className='mt-4'>
            {(currServiceName === "Buy Facebook Live Views" || currServiceName === "Buy Instagram Live Views" || currServiceName === "Buy YouTube Live Views") ? (
              <PackageSectionForLive
                packageData={currPackage}
                serviceName={currServiceName}  // Fixed prop: pass the correct serviceName
                placeHolder={placeHolder}
              />
            ) : (
              <PackageSection
                packageData={currPackage}
                serviceName={currServiceName}  // Fixed prop: use the dynamic serviceName
                placeHolder={placeHolder}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
