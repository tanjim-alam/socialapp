import Link from 'next/link'
import React from 'react'

function NavItems({ item, color, icon: Icon }) {
    return (
        <li><Link href={item.slug} className="border-b border-white px-4 py-2 flex items-center gap-2 text-white" style={{backgroundColor: color}}><Icon/> {item.title}</Link></li>
    )
}

export default NavItems