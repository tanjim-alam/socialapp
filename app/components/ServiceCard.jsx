import Link from "next/link";
import React from "react";

function ServiceCard({ data }) {
  return (
    <Link
      href={data.label}
      className="bg-white py-4 rounded-lg flex flex-col justify-center gap-3 items-center shadow-ms border-y-2 border-blue-900"
    >
      {/* Icon */}
      <span className="text-3xl p-3 text-white rounded-full font-bold" style={{ backgroundColor: data.color }}>
        <data.icon />
      </span>

      {/* Service name */}
      <h4 className="text-lg font-bold text-white text-center w-full p-1" style={{ backgroundColor: data.color }}>
        {data.name}
      </h4>
    </Link>
  );
}

export default ServiceCard;
