import Image from "next/image";
import Link from "next/link";
import user from "@/assets/user.png"
import NavLink from "./NavLink";


const NavBar = () => {
    return (
        <div className="flex justify-between container mx-auto mt-6">
            <div></div>
            <div>
                <ul className="flex justify-between gap-3 text-gray-400">
                    <li><NavLink href={'/'}>Home</NavLink></li>
                    <li><NavLink href={'/about'}>About</NavLink></li>
                    <li><NavLink href={'/career'}>Career</NavLink></li>
                </ul>
            </div>
            <div className="flex items-center gap-3">
                <Image src={user} width={50} height={50} alt="user" />
                <button className="btn bg-[#403F3F] text-white"><Link href='/login'>Login</Link></button>
            </div>

        </div>
    );
};

export default NavBar;