import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const RighSideBar = () => {
    return (
        <div className="space-y-6">

            {/* LOGIN SECTION */}
            <div className="space-y-3">
                <p className="font-bold text-2xl">Login With</p>

                <div className="flex flex-col gap-3">

                    {/* Google */}
                    <button className="btn bg-white text-black border-[#e5e5e5] w-full">
                        Google Login
                    </button>

                    {/* GitHub */}
                    <button className="btn bg-black text-white border-black w-full">
                        GitHub Login
                    </button>

                </div>
            </div>

            {/* SOCIAL SECTION */}
            <div className="space-y-3">
                <p className="font-bold text-2xl">Find Us On</p>

                <div className="flex flex-col">

                    {/* Facebook */}
                    <div className="flex items-center gap-4 border border-[#E7E7E7] p-3 rounded-t-xl hover:bg-gray-50 cursor-pointer">
                        <div className="bg-[#F3F3F3] w-7 h-7 rounded-full flex items-center justify-center">
                            <FaFacebookF className="text-[#3B599C]" />
                        </div>
                        <p className="text-[#706F6F]">Facebook</p>
                    </div>

                    {/* Twitter */}
                    <div className="flex items-center gap-4 border-x border-[#E7E7E7] p-3 hover:bg-gray-50 cursor-pointer">
                        <div className="bg-[#F3F3F3] w-7 h-7 rounded-full flex items-center justify-center">
                            <FaTwitter className="text-[#1DA1F2]" />
                        </div>
                        <p className="text-[#706F6F]">Twitter</p>
                    </div>

                    {/* Instagram */}
                    <div className="flex items-center gap-4 border border-[#E7E7E7] p-3 rounded-b-xl hover:bg-gray-50 cursor-pointer">
                        <div className="bg-[#F3F3F3] w-7 h-7 rounded-full flex items-center justify-center">
                            <FaInstagram className="text-pink-500" />
                        </div>
                        <p className="text-[#706F6F]">Instagram</p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default RighSideBar;