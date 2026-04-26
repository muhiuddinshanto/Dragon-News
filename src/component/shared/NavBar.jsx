import Image from "next/image";
import Link from "next/link";
import user from "@/assets/user.png";
import NavLink from "./NavLink";

const NavBar = () => {
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
                <div className="flex items-center gap-3">
                    <Image src={user} width={40} height={40} alt="user" />
                    <button className="btn bg-[#403F3F] text-white">
                        <Link href="/login">Login</Link>
                    </button>
                </div>
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