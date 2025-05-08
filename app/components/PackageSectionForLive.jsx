"use client";
import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import Link from "next/link";
import { IoMdDoneAll } from "react-icons/io";
import { useRouter } from "next/navigation";

function PackageSectionForLive({ packageData, serviceName, placeHolder }) {
  const navigate = useRouter();
  const [isActiveCard, setIsActiveCard] = useState(1);
  const [isActiveDurationCard, setIsActiveDurationCard] = useState(1);
  const [currDuration, setCurrDuration] = useState(15);
  const [currQuantity, setCurrQuantity] = useState(50);
  const [currItemPrice, setCurrItemPrice] = useState(0);
  const [currItemQnt, setCurrItemQnt] = useState(packageData?.quantity[0]?.qnt);
  const [userLink, setUserLink] = useState("");
  const { cartItems, addItemToCart } = useCart();
  const [toast, setToast] = useState(false);
  const [urlError, setUrlError] = useState(false);

  function handleOnClickCard(item) {
    setIsActiveCard(item.id);
    setCurrQuantity(item.qnt);
    setCurrItemQnt(item.qnt); 
  }

  function handleOnChangeDuration(event) {
    const selectedDuration = packageData.durations.find(
      (data) => data.duration === Number(event.target.value)
    );
    setCurrDuration(selectedDuration?.duration || 15);
    setIsActiveDurationCard(selectedDuration?.id || 1);
  }

  function getPrice() {
    const totalMinutes = 30;
    const totalLiveViews = 50;
    const totalPrice = 1.5;

    const pricePerMinute = totalPrice / totalMinutes;
    const pricePerLiveView = totalPrice / totalLiveViews;

    const currentPrice = pricePerMinute * currDuration * pricePerLiveView * currQuantity;
    setCurrItemPrice(currentPrice);
  }

  useEffect(() => {
    getPrice();
  }, [currQuantity, currDuration]); 

  function handleAddToCart() {
    if (userLink == "") {
      setUrlError(true);
      return;
    }
    const nextId = cartItems.length;
    const item = {
      id: nextId,
      serviceName,
      price: currItemPrice,
      quantity: currItemQnt,
      link: userLink,
    };
    setToast(true);
    addItemToCart(item);
    setUserLink("")
  }

  function handleGoToCheckout() {
    if (userLink == "") {
      setUrlError(true);
      return;
    }
    const nextId = cartItems.length;
    const item = {
      id: nextId,
      serviceName,
      price: currItemPrice,
      quantity: currItemQnt,
      link: userLink,
    };
    addItemToCart(item);
    navigate.push("/checkout")
    setUserLink("")
  }

  useEffect(() => {
      if (toast) {
          setTimeout(() => {
              setToast(false)
          }, 2000)
      }
  }, [toast]);

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg flex flex-col justify-center gap-2 items-center shadow border-y-2 border-[var(--primary)]">
      <div className="grid grid-cols-3 md:grid-cols-5 justify-center gap-2 items-center">
        {packageData?.quantity?.map((data, i) => (
          <div
            onClick={() => handleOnClickCard(data)}
            key={i}
            className={`border cursor-pointer shadow p-3 rounded flex flex-col items-center justify-center border-[var(--primary)] ${
              isActiveCard === data.id ? "bg-[var(--primary)]" : "bg-transparent"
            }`}
          >
            <p className={`text-xl font-semibold ${isActiveCard === data.id ? "text-white" : "text-black"}`}>
              {data.qnt}
            </p>
            {data?.name && (
              <p className={`text-sm ${isActiveCard === data.id ? "text-[gold]" : "text-red-600"}`}>
                {data.name}
              </p>
            )}
            {data?.discount && (
              <p className={`text-sm ${isActiveCard === data.id ? "text-[gold]" : "text-red-600"}`}>
                {data.discount}
              </p>
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-col justify-between w-full gap-1">
        <p className="text-sm text-gray-700">Select Duration</p>
        <select
          className="w-full border text-gray-700 border-[var(--primary)] shadow outline-none p-2"
          value={currDuration}
          onChange={handleOnChangeDuration}
        >
          {packageData?.durations?.map((data, i) => (
            <option key={i} value={data?.duration}>
              {data?.duration} Minutes
            </option>
          ))}
        </select>
      </div>
      <div className="mt-4 flex justify-between w-full gap-2 items-center">
        <p className="min-w-fit shadow px-2 py-1.5 bg-[var(--primary)] text-white text-xl font-medium">
          $ {currItemPrice.toFixed(2)}
        </p>
        <input
          className="w-full border border-[var(--primary)] shadow text-gray-600 outline-none p-2 placeholder:text-gray-600"
          type="text"
          value={userLink}
          onChange={(e) => setUserLink(e.target.value)}
          onClick={() => setUrlError(false)}
          placeholder={placeHolder}
        />
      </div>
      <div className="mt-4 flex justify-between w-full gap-2 items-center">
        <button 
        onClick={handleGoToCheckout}
        className="bg-[var(--primary)] w-full font-medium cursor-pointer text-white p-2 shadow">
          Buy Now
        </button>
        <button onClick={handleAddToCart} className="border border-[var(--primary)] w-full font-medium cursor-pointer text-[var(--primary)] p-2 shadow">
          Add To Cart
        </button>
      </div>
      <div className="mt-1 flex items-center">
        {urlError ? (
          <p className="text-red-600 text-sm font-medium">
            Please Enter Your Live Link
          </p>
        ) : null}
        <div>
          {toast ? (
            <div className="flex mt-4 items-center gap-2 p-2 text-slate-600 bg-green-200">
              <span>
                <IoMdDoneAll />
              </span>
              <p className="text-black">
                The product has been added to your Shopping Cart.
              </p>
              <Link href={"/cart"}>Go to Cart</Link>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default PackageSectionForLive;
