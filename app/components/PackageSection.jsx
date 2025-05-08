"use client";
import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";
import { IoMdDoneAll } from "react-icons/io";
import Link from "next/link";

function PackageSection({ packageData, serviceName, placeHolder }) {
  const navigate = useRouter();
  const [isActiveCard, setIsActiveCard] = useState(1);
  const [currItemPrice, setCurrItemPrice] = useState(null);
  const [currItemQnt, setCurrItemQnt] = useState(null);
  const [userLink, setUserLink] = useState("");
  const { cartItems, addItemToCart } = useCart();
  const [toast, setToast] = useState(false);
  const [urlError, setUrlError] = useState(false);

  useEffect(() => {
    if (packageData && packageData.length > 0) {
      const firstItem = packageData[0];
      setCurrItemPrice(firstItem.price);
      setCurrItemQnt(firstItem.qnt);
    }
  }, [packageData]);

  function handleOnClickCard(item) {
    setIsActiveCard(item.id);
    setCurrItemPrice(item.price);
    setCurrItemQnt(item.qnt);
  }

  function handleGoToCheckout() {
    if (userLink == "") {
      setUrlError(true);
      return;
    }
    let nextId = cartItems.length;
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

  function handleAddToCart() {
    if (userLink == "") {
      setUrlError(true);
      return;
    }
    let nextId = cartItems.length;
    const item = {
      id: nextId,
      serviceName,
      price: currItemPrice,
      quantity: currItemQnt,
      link: userLink,
    };
    addItemToCart(item);
    setToast(true);
    setUserLink("")
  }

  useEffect(() => {
    if (toast) {
        setTimeout(() => {
            setToast(false)
        }, 2000)
    }
}, [toast]);

  if (!packageData || packageData.length === 0) {
    return <div className="text-center">No package data available.</div>;
  }

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg flex flex-col justify-center gap-2 items-center shadow border-y-2 border-[var(--primary)]">
      <div className="grid grid-cols-3 md:grid-cols-5 justify-center gap-2 items-center">
        {packageData.map((data, i) => (
          <div
            onClick={() => handleOnClickCard(data)}
            key={i}
            className={`border cursor-pointer shadow p-3 rounded flex flex-col items-center justify-center border-[var(--primary)] ${
              isActiveCard === data.id
                ? "bg-[var(--primary)]"
                : "bg-transparent"
            }`}
          >
            <p
              className={`text-xl font-semibold ${
                isActiveCard === data.id ? "text-white" : "text-black"
              }`}
            >
              {data.qnt}
            </p>
            {data?.name && (
              <p
                className={`text-sm ${
                  isActiveCard === data.id ? "text-[gold]" : "text-red-600"
                }`}
              >
                {data.name}
              </p>
            )}
            {data?.discount && (
              <p
                className={`text-sm ${
                  isActiveCard === data.id ? "text-[gold]" : "text-red-600"
                }`}
              >
                {data.discount}
              </p>
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-between w-full gap-2 items-center">
        <p className="min-w-fit shadow px-2 py-1.5 bg-[var(--primary)] text-white text-xl font-medium">
          $ {currItemPrice}
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
          className="bg-[var(--primary)] w-full font-medium cursor-pointer text-white p-2 shadow"
        >
          Buy Now
        </button>
        <button
          onClick={handleAddToCart}
          className="border border-[var(--primary)] w-full font-medium cursor-pointer text-[var(--primary)] p-2 shadow"
        >
          Add To Cart
        </button>
      </div>
      <div className="mt-1 flex items-center">
        {urlError ? (
          <p className="text-red-600 text-sm font-medium">
            Please Enter Your Link
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

export default PackageSection;
