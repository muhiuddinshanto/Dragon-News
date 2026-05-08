'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children }) => {
    const pathname = usePathname();
    const isActive = href === pathname;


    return (
        <Link 
            href={href} 
            className={`relative py-1 transition-colors duration-300 font-medium
                ${isActive ? 'text-purple-600' : 'text-gray-500 hover:text-purple-500'}
                group
            `}
        >
            {children}
            {/* Animated Bottom Border */}
            <span 
                className={`absolute bottom-0 left-0 h-[2px] bg-purple-500 transition-all duration-300 
                    ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
                `}
            ></span>
        </Link>
    );
};


export default NavLink;