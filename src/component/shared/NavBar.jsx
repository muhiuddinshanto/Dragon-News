"use client"
import Image from "next/image";
import Link from "next/link";
import userLOGO from "@/assets/user.png";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";

const NavBar = () => {

    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    console.log(user, isPending);


    return (
        <div className="container mx-auto mt-6 px-4">

            {/* MAIN NAV */}
            <div className="flex items-center justify-between">

                {/* LEFT (logo placeholder) */}
                <div className="text-xl font-bold">
                    News
                </div>

                {/* CENTER MENU (desktop) */}
                <div className="hidden md:block">
                    <ul className="flex gap-6 text-gray-400">
                        <li><NavLink href="/">Home</NavLink></li>
                        <li><NavLink href="/about">About</NavLink></li>
                        <li><NavLink href="/career">Career</NavLink></li>
                    </ul>
                </div>

                {/* RIGHT */}
                {isPending ? <div ><span className="loading loading-ring loading-xl"></span></div> : user ? <div className="flex items-center gap-3">
                    <h3>hello, {user?.name}</h3>
                    <Image src={user?.image || userLOGO} width={40} height={40} alt="user" className="rounded-full" />
                    <button className="btn" onClick={async()=>await authClient.signOut()}>Logout</button>
                </div> :
                <button className="btn bg-[#403F3F] text-white">
                        <Link href="/login">Login</Link>
                    </button>
                }
            </div>

            {/* MOBILE MENU */}
            <div className="md:hidden mt-4">
                <ul className="flex flex-col gap-3 text-gray-500">
                    <li><NavLink href="/">Home</NavLink></li>
                    <li><NavLink href="/about">About</NavLink></li>
                    <li><NavLink href="/career">Career</NavLink></li>
                </ul>
            </div>

        </div>
    );
};

export default NavBar;