"use client"
import Image from "next/image";
import Link from "next/link";
import userLOGO from "@/assets/user.png";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";

const NavBar = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    return (
        <nav className="container mx-auto py-4 px-4 sticky top-0 bg-white/80 backdrop-blur-md z-50">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                
                {/* Brand Logo Placeholder for Mobile */}
                <div className="text-xl font-bold md:hidden">
                    News
                </div>

                {/* Center Menu: Desktop */}
                <div className="hidden md:flex items-center gap-8">
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/about">About</NavLink>
                    <NavLink href="/career">Career</NavLink>
                </div>

                {/* Right Side: User Profile & Auth */}
                <div className="flex items-center gap-4">
                    {isPending ? (
                        <div className="h-10 w-10 animate-pulse bg-gray-200 rounded-full"></div>
                    ) : user ? (
                        <div className="flex items-center gap-3 bg-gray-50 p-1.5 pr-4 rounded-full border border-gray-200 shadow-sm">
                            <Image 
                                src={user?.image || userLOGO} 
                                width={35} 
                                height={35} 
                                alt={user?.name ? `${user.name}'s profile` : "User profile picture"} 
                                className="rounded-full ring-2 ring-white" 
                            />
                            <span className="hidden sm:inline font-medium text-gray-700 text-sm">
                                {user?.name?.split(' ')[0]}
                            </span>
                            <button 
                                onClick={async() => await authClient.signOut()}
                                className="text-[10px] uppercase tracking-wider bg-red-50 hover:bg-red-500 hover:text-white text-red-600 px-3 py-1 rounded-full transition-all font-bold"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-4">
                            <Image src={userLOGO} width={40} height={40} alt="Default user icon" />
                            <Link href="/login">
                                <button className="btn bg-[#403F3F] hover:bg-black text-white border-none px-8 rounded-none transition-all">
                                    Login
                                </button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile Menu Links */}
            <div className="md:hidden flex justify-center gap-6 mt-4 text-sm font-medium">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/career">Career</NavLink>
            </div>
        </nav>
    );
};

export default NavBar;