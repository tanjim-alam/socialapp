"use client"
import React, { useState } from 'react';
import NavItems from './NavItems';
import Link from 'next/link';
import { FaAngleDown, FaAngleUp } from "react-icons/fa";


function NavLinks({ navLink, toggleMenu }) {
    const [activeId, setActiveId] = useState(null);
    const [isActive, setIsActive] = useState(false);
    function showNavLinks(id) {
        setActiveId(id === activeId ? null : id); // Toggle the active id
        setIsActive(!isActive)
    }
    // console.log("navLink", navLink)
    return (
        <>
            <li className="relative group hidden lg:block">
                <Link href={"#"} className="font-semibold flex items-center gap-2" style={{ color: navLink.color }}><span className='p-1 text-white text-sm rounded-full' style={{ backgroundColor: navLink.color }}><navLink.icon/></span> {navLink.name}</Link>
                <ul className=" absolute left-1/2 -translate-x-1/2 hidden group-hover:flex flex-col bg-white shadow-lg rounded-md w-[250px] pt-4 transition-all duration-200 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none">
                    {navLink.services.map((item, i) => <NavItems key={i} item={item} color={navLink.color} icon={navLink.icon} />)}
                </ul>
            </li>
            <li className="relative group w-full lg:hidden">
                <Link href={"#"} onClick={() => showNavLinks(navLink.id)} className='font-medium text-md text-white  w-full block py-2 text-lg px-3' style={{ backgroundColor: `${navLink.color}` }}><span className='flex items-center gap-2'><navLink.icon className="text-2xl text-white" />{navLink.name}</span> <span className=' absolute right-2 top-3 text-2xl'>{isActive ? <FaAngleUp /> : <FaAngleDown />}</span></Link>
                <ul className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${navLink.id === activeId ? 'max-h-[500px]' : 'max-h-0'}`}>
                    {navLink.services.map((item, i) => (
                        <li key={i} onClick={toggleMenu} className="pl-4 py-2 text-lg font-medium text-black"><Link href={item.slug}>{item.title}</Link></li>
                    ))}
                </ul>
            </li>
        </>
    )
}

export default NavLinks