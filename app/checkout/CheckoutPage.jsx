"use client";
import React, { useEffect, useState } from 'react';
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useCart } from '../context/CartContext';
import countries from "../constant/general/countries.json";
import { useRouter } from 'next/navigation'
import Spinner from '../components/Spinner';
function CheckoutPage() {
    const router = useRouter()
    const { cartItems, totalPrice, clearCart } = useCart();
    const [isReadyToPayment, setIsReadyToPayment] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [billingDetails, setBillingDetails] = useState({
        name: "",
        email: "",
        country: "",
        message: ""
    });

    function handleInput(e) {
        const { name, value } = e.target;
        setBillingDetails(prev => ({ ...prev, [name]: value }));
    }

    function handleReadyToPayment() {
        const { name, email, country } = billingDetails;
        if (!name || !email || !country) {
            alert("Please enter required details");
            return;
        }
        setIsReadyToPayment(true);
    }

    async function sendOrderToAdmin() {
        try {
          setIsLoading(true);
          setIsError(false);
      
          const orderId = Math.floor((Math.random() * 10000) + 1111);
          const now = new Date();
          const options = { year: 'numeric', month: 'long', day: 'numeric' };
          const longDate = now.toLocaleDateString('en-US', options);
          const orderDetails = {
            id: orderId,
            date: longDate,
            billingDetails,
            products: cartItems,
            totalPrice
          };
      
          const res = await fetch('/api/send-order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ orderDetails }),
          });
      
          if (res?.ok) {
            localStorage.setItem("Order", JSON.stringify(orderDetails));
            clearCart();
      
            setTimeout(() => {
              setIsLoading(false);
              router.push("/invoice");
            }, 2000);
          } else {
            setIsError(true);
            setTimeout(() => setIsLoading(false), 3000); // show error message briefly
          }
        } catch (error) {
          setIsError(true);
          setTimeout(() => setIsLoading(false), 3000); // show error message briefly
        }
      }
      


    return (
        <PayPalScriptProvider options={{ "client-id": "AWtCcGY2RQwgB8cC773nMjq-Dojft-nr5XPcrqpRC8TxGXqxZnwpF2KkxAekon6eL-k3zbYSByjx5y2g" }}>
            <div className='bg-[#f4f4fa] h-full'>
                {/* ======================== */}
                {isLoading ? <Spinner
  isOpen={isLoading}
  message={isError ? "Order failed. Please try again." : "Processing your order..."}
  isError={isError}
/>
: null}

                {/* ========================= */}
                <div className='lg:w-[70%] w-[95%] m-auto flex flex-col md:flex-row lg:flex-row gap-4 py-10 lg:py-20'>
                    {/* Billing Details */}
                    <div className='lg:w-[55%] w-full flex flex-col gap-4 p-6 lg:p-8 bg-white rounded' style={{ boxShadow: "0 6px 6px rgba(0, 0, 0, .04), 0 0 42px rgba(0, 0, 0, .04)" }}>
                        <h4 className='lg:text-3xl text-2xl font-bold text-black text-center'>BILLING DETAILS</h4>
                        <div className='flex flex-col'>
                            <label className='text-[15px] text-black'>Name <span className='text-orange-600'>*</span></label>
                            <input
                                type="text"
                                placeholder='First name'
                                name='name'
                                value={billingDetails.name}
                                onChange={handleInput}
                                className='border border-gray-400 p-2 outline-none w-full rounded text-black'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-[15px] text-black'>Email <span className='text-orange-600'>*</span></label>
                            <input
                                type="email"
                                placeholder='Email address'
                                name='email'
                                value={billingDetails.email}
                                onChange={handleInput}
                                className='border border-gray-400 p-2 outline-none w-full rounded text-black'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-[15px] text-black'>Country <span className='text-orange-600'>*</span></label>
                            <select id="country" className="border border-gray-400 p-2.5 outline-none w-full text-black" name='country' onChange={handleInput}>
                                <option className="text-black" value="">Select a country</option>
                                {countries.map((item) => (
                                    <option className="text-black" key={item.code} value={item.country}>
                                        {item.country}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className='text-[15px] text-black'>Message</label>
                            <textarea
                                name="message"
                                value={billingDetails.message}
                                onChange={handleInput}
                                placeholder='Additional Information'
                                className='border border-gray-400 p-3 outline-none w-full rounded text-black'
                            />
                        </div>
                    </div>

                    {/* Order Summary and Payment */}
                    <div className='lg:w-[45%] w-full bg-white p-6 lg:p-8 h-fit rounded' style={{ boxShadow: "0 6px 6px rgba(0, 0, 0, .04), 0 0 42px rgba(0, 0, 0, .04)" }}>
                        <h5 className='lg:text-3xl text-2xl font-bold text-center text-black'>YOUR ORDER</h5>
                        <div className='mt-3'>
                            <div className='flex flex-col gap-8'>
                                <div className='flex flex-col gap-8 mt-3'>
                                    <div className='flex justify-between items-center border-b border-slate-300 pb-1'>
                                        <span className='font-medium text-slate-500 px-1 '>Total Items</span>
                                        <span className='font-medium px-1 text-black'>{cartItems.length || 0}</span>
                                    </div>
                                    <div className='flex justify-between items-center border-b border-slate-300 pb-1'>
                                        <span className='font-medium text-slate-500 px-1'>Total Price</span>
                                        <span className='font-medium px-1 text-black'>$ {totalPrice || 0}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between items-center mt-8 text-lg'>
                                <span className='font-medium px-1 text-black'>Total To Pay</span>
                                <span className='font-medium px-1 text-black'>$ {totalPrice || 0}</span>
                            </div>
                            <div className='mt-5'>
                                {isReadyToPayment ? <span className='text-sm text-black'>Select Payment Methods</span> : null}
                                <div className='mt-3'>
                                    {isReadyToPayment ? (
                                        <div>
                                            <PayPalButtons
                                                createOrder={(data, actions) => {
                                                    return actions.order.create({
                                                        purchase_units: [{
                                                            amount: {
                                                                value: (totalPrice).toFixed(2)
                                                            },
                                                        }],
                                                    });
                                                }}
                                                onApprove={async (data, actions) => {
                                                    const details = await actions.order.capture();
                                                    if (details.status === "COMPLETED") {
                                                        sendOrderToAdmin();
                                                    }
                                                }}
                                                onError={(err) => {
                                                    console.error("PayPal error:", err);
                                                }}
                                            />
                                        </div>
                                    ) : (
                                        <button onClick={handleReadyToPayment} className=' bg-[var(--primary)] py-3 text-sm font-medium text-white w-full'>
                                            {isLoading ? "Sending Order" : "Go To Payment"}
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PayPalScriptProvider>
    );
}

export default CheckoutPage;
