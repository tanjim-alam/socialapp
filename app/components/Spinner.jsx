'use client';
import React from 'react';

export default function Spinner({ isOpen, message = "Loading...", isError = false }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#0d18215c] bg-opacity-50 flex items-center justify-center">
      <div className={`px-6 py-4 rounded-lg shadow-xl flex items-center space-x-4
        ${isError ? "bg-red-100 border border-red-400" : "bg-white"}
      `}>
        {!isError ? (
          <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        ) : (
          <div className="text-red-600 text-xl">❌</div>
        )}
        <span className={`text-base font-medium ${isError ? "text-red-600" : "text-black"}`}>
          {message}
        </span>
      </div>
    </div>
  );
}
