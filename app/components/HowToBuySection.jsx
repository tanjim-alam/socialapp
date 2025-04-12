import React from 'react'

function HowToBuySection() {
    const howToBuyData = [
        {
            id:1,
            heading: "Select Service",
            description: "Select the service you need from the available options."
        },
        {
            id:2,
            heading: "Choose Packages",
            description: "Select the service you need from the available options."
        },
        {
            id:3,
            heading: "Complete Payment",
            description: "Select the service you need from the available options."
        },
        {
            id:4,
            heading: "Select Service",
            description: "Select the service you need from the available options."
        },
        {
            id:5,
            heading: "Choose Packages",
            description: "Select the service you need from the available options."
        },
        {
            id:6,
            heading: "Complete Payment",
            description: "Select the service you need from the available options."
        },
    ]
  return (
    <div className=" w-[90%] xl:w-[80%] m-auto flex justify-center">
        <div className="my-10 w-full">
            <h3 className="text-center text-4xl text-[#0d1821] font-bold mb-10">
                How to Buy
            </h3>
            <div className="m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {
                    howToBuyData.map((data,i)=>(
                        <div key={i} className={`flex flex-col gap-4 p-6 rounded-md shadow-md max-w-sm mx-auto ${i % 2 == 0 ? "bg-[var(--primary)]" : "bg-[#3351a5]"}`} >
                    <div className="flex gap-3 items-center">
                        <span className="px-5 py-2.5 text-2xl font-extrabold bg-white text-[var(--primary)] rounded-full">
                            {data.id}
                        </span>
                        <h4 className="text-white text-xl font-extrabold">
                            {data.heading}
                        </h4>
                    </div>
                    <div>
                        <p className="text-white text-sm">
                            {data.description}
                        </p>
                    </div>
                </div> 
                    ))
                }                
            </div>
        </div>
    </div>
  )
}

export default HowToBuySection