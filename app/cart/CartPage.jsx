"use client"

import React, { useEffect, useState } from 'react';
import { MdDeleteForever } from "react-icons/md";
import { useCart } from '../context/CartContext';
import { useRouter } from 'next/navigation';

function CartPage() {
    const router = useRouter()
    const { cartItems, totalPrice, removeItemFromCart } = useCart();

    function handleRemoveItemBtn(id) {
        removeItemFromCart(id)
    }

    function handleGoToCheckout() {
        if (cartItems?.length < 1) {
            alert("Your Cart is Empty Please Select a Items");
            return;
        }
        router.push("/checkout")
    }
    return (
        <div className='bg-[#f4f4fa]'>
            <div className='lg:w-[80%] w-[95%] m-auto py-10'>
                <div className='flex justify-center lg:p-4'>
                    <h4 className='text-xl font-medium bg-white py-3 px-6 lg:px-10 rounded-full text-black border-x-2 border-[var(--primary)]' style={{ boxShadow: "0 6px 6px rgba(0, 0, 0, .04), 0 0 42px rgba(0, 0, 0, .04)" }}>You have {cartItems.length || 0} items in your cart</h4>
                </div>
                <div className='flex flex-col lg:flex-row gap-4 mt-4 lg:mt-0'>
                    <div className='lg:w-[70%] w-full bg-white h-fit' style={{ boxShadow: "0 6px 6px rgba(0, 0, 0, .04), 0 0 42px rgba(0, 0, 0, .04)" }}>
                        <div className="overflow-x-auto p-4 hidden md:block lg:block">
                            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                <thead>
                                    <tr>
                                        <th className="py-4 px-6 bg-[#f4f4fa] text-gray-700 text-left text-sm uppercase font-semibold">S No.</th>
                                        <th className="py-4 px-6 bg-[#f4f4fa] text-gray-700 text-left text-sm uppercase font-semibold">Product Name</th>
                                        <th className="py-4 px-6 bg-[#f4f4fa] text-gray-700 text-left text-sm uppercase font-semibold">Link</th>
                                        <th className="py-4 px-6 bg-[#f4f4fa] text-gray-700 text-left text-sm uppercase font-semibold">Quantity</th>
                                        <th className="py-4 px-6 bg-[#f4f4fa] text-gray-700 text-left text-sm uppercase font-semibold">Price</th>
                                        <th className="py-4 px-6 bg-[#f4f4fa] text-gray-700 text-left text-sm uppercase font-semibold"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map((item, index) => (
                                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                                            <td className="py-4 px-6 text-sm text-gray-900">{index + 1}</td>
                                            <td className="py-4 px-6 text-sm text-gray-900">{item.serviceName}</td>
                                            <td className="py-4 px-6 text-sm text-blue-500">
                                                <a href={`/${item.link}`} target="_blank" rel="noopener noreferrer" className="underline">
                                                    Your Link
                                                </a>
                                            </td>
                                            <td className="py-4 px-6 text-sm text-gray-900">{item.quantity}</td>
                                            <td className="py-4 px-6 text-sm text-gray-900">
                                                $ {item.price}

                                            </td>
                                            <td>
                                                <button onClick={() => handleRemoveItemBtn(item.id)} className='text-red-600 cursor-pointer text-2xl'><MdDeleteForever /></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className='block md:hidden lg:hidden'>
                            {cartItems.map((data, i) => (
                                <div key={i} className=' relative'>
                                    <div className=' p-3 flex items-center gap-2'>
                                        <div className='w-full'>
                                            <p className='font-medium text-slate-600'>{data.serviceName}</p>
                                            <div className='text-sm flex gap-2 text-gray-500'>
                                                <span className='font-medium'>Your Link:</span>
                                                <a href={data.link} target="_blank" rel="noopener noreferrer" className=" no-underline">
                                                    {data?.link?.substring(0, 40)}...
                                                </a>
                                            </div>
                                            <div className='flex justify-between sm:justify-between w-full'>
                                                <div className='text-sm flex gap-2 text-gray-500'>
                                                    <span className='font-medium'>Quantity:</span>
                                                    <span className='font-semibold'>{data.quantity}</span>
                                                </div>
                                                <div className='text-sm flex gap-2 text-gray-500'>
                                                    <span className='font-medium'>Price:</span>
                                                    <span className='font-semibold'>$ {data.price}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <button onClick={() => handleRemoveItemBtn(item.id)} className='text-red-600 cursor-pointer text-2xl absolute right-2 top-2'><MdDeleteForever /></button>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='lg:w-[30%] md:w-full w-full flex lg:flex-col sm:flex-row md:justify-center gap-3 flex-col'>
                        <div className='p-4 sm:w-full  md:w-full flex flex-col gap-4 bg-white  sm:h-fit md:h-fit' style={{ boxShadow: "0 6px 6px rgba(0, 0, 0, .04), 0 0 42px rgba(0, 0, 0, .04)" }}>
                            <input type="text" placeholder='Coupon Code' className='border outline-none border-[var(--primary)] p-2 text-black' />
                            <button className='border border-[var(--primary)] p-2'>Apply</button>
                        </div>
                        <div className='sm:w-full md:w-full p-4 bg-white h-fit' style={{ boxShadow: "0 6px 6px rgba(0, 0, 0, .04), 0 0 42px rgba(0, 0, 0, .04)" }}>
                            <div className=' border-gray-200 rounded flex flex-col'>
                                <h5 className=' py-2 text-center text-black border-b font-medium text-lg'>Cart Summary</h5>
                                <div className='flex  justify-between border-b p-3 text-md'>
                                    <span className='font-medium text-black'>Subtotal</span>
                                    <span className='font-bold text-black'>$ {totalPrice || 0}</span>
                                </div>
                                <div className='flex  justify-between border-b p-3 text-md'>
                                    <span className='font-medium text-black'>Total</span>
                                    <span className='font-bold text-black'>$ {totalPrice || 0}</span>
                                </div>
                                <div className='bg-secondary py-3 flex justify-center mt-6'>
                                    <button onClick={handleGoToCheckout} className='text-center text-white cursor-pointer bg-[var(--primary)] py-2 text-sm font-medium w-full'>PROCEED TO CHECKOUT</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage