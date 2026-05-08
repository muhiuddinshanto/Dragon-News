"use client"
import { authClient } from '@/lib/auth-client';
import React from 'react';
import Image from 'next/image';

// Assets থেকে ইমেজগুলো সঠিক নামে ইম্পোর্ট করা হলো
import swimmingImg from '@/assets/swimming.png';
import classImg from '@/assets/class.png';
import playgroundImg from '@/assets/playground.png';
import bgImg from '@/assets/bg.png';

// আইকন ইম্পোর্ট (react-icons)
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub, FaGoogle } from 'react-icons/fa';

const RightSideBar = () => {

    // Google Sign-in logic
    const handleGoogleSignin = async () => {
        try {
            await authClient.signIn.social({
                provider: "google",
            });
        } catch (error) {
            console.error("Google Sign-in Error:", error);
        }
    };

    // Github Sign-in logic
    const handleGithubSignin = async () => {
        try {
            await authClient.signIn.social({
                provider: "github",
            });
        } catch (error) {
            console.error("Github Sign-in Error:", error);
        }
    };

    return (
        <aside className="space-y-8">

            {/* LOGIN SECTION */}
            <div className="space-y-4">
                <h2 className="font-bold text-xl text-[#403F3F]">Login With</h2>
                <div className="flex flex-col gap-3">
                    <button 
                        onClick={handleGoogleSignin} 
                        className="btn btn-outline border-blue-500 text-blue-600 hover:bg-blue-50 hover:border-blue-600 flex items-center gap-3 normal-case text-lg w-full"
                    >
                        <FaGoogle /> Login with Google
                    </button>

                    <button 
                        onClick={handleGithubSignin} 
                        className="btn btn-outline border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white flex items-center gap-3 normal-case text-lg w-full"
                    >
                        <FaGithub /> Login with GitHub
                    </button>
                </div>
            </div>

            {/* SOCIAL SECTION */}
            <div className="space-y-4">
                <h2 className="font-bold text-xl text-[#403F3F]">Find Us On</h2>
                <div className="flex flex-col -space-y-[1px]">
                    <a 
                        href="https://facebook.com" 
                        target="_blank" 
                        className="flex items-center gap-4 border border-gray-200 p-4 rounded-t-lg hover:bg-gray-50 transition-colors group"
                    >
                        <div className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                            <FaFacebookF className="text-[#3B599C] text-lg" />
                        </div>
                        <span className="text-gray-600 font-medium group-hover:text-black">Facebook</span>
                    </a>

                    <a 
                        href="https://twitter.com" 
                        target="_blank" 
                        className="flex items-center gap-4 border-x border-gray-200 p-4 hover:bg-gray-50 transition-colors group"
                    >
                        <div className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                            <FaTwitter className="text-[#1DA1F2] text-lg" />
                        </div>
                        <span className="text-gray-600 font-medium group-hover:text-black">Twitter</span>
                    </a>

                    <a 
                        href="https://instagram.com" 
                        target="_blank" 
                        className="flex items-center gap-4 border border-gray-200 p-4 rounded-b-lg hover:bg-gray-50 transition-colors group"
                    >
                        <div className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-pink-50 transition-colors">
                            <FaInstagram className="text-pink-500 text-lg" />
                        </div>
                        <span className="text-gray-600 font-medium group-hover:text-black">Instagram</span>
                    </a>
                </div>
            </div>

            {/* Q-ZONE SECTION */}
            <div className="bg-[#F3F3F3] p-4 rounded-lg space-y-4">
                <h2 className="font-bold text-xl text-[#403F3F]">Q-Zone</h2>
                <div className="space-y-6">
                    <Image 
                        src={playgroundImg} 
                        alt="Playground Zone" 
                        className="w-full h-auto rounded-lg shadow-sm hover:scale-105 transition-transform" 
                    />
                    <Image 
                        src={classImg} 
                        alt="Class Zone" 
                        className="w-full h-auto rounded-lg shadow-sm hover:scale-105 transition-transform" 
                    />
                    <Image 
                        src={swimmingImg} 
                        alt="Swimming Zone" 
                        className="w-full h-auto rounded-lg shadow-sm hover:scale-105 transition-transform" 
                    />
                </div>
            </div>

            {/* PROMO BANNER (bg.png ব্যবহার করে) */}
            <div className="relative min-h-[400px] rounded-lg overflow-hidden flex items-center justify-center text-center p-8 text-white group">
                <Image 
                    src={bgImg} 
                    alt="Promo background" 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-1000" 
                />
                <div className="relative z-10 space-y-5">
                    <h2 className="text-3xl font-bold leading-tight">Create Your Amazing Paper</h2>
                    <p className="text-gray-200 text-sm">
                        Explore thousands of options, easy to customize layouts, one-click to import demo and much more.
                    </p>
                    <button className="bg-[#D72050] hover:bg-[#b51b44] text-white px-8 py-3 font-semibold rounded-none transition-colors">
                        Learn More
                    </button>
                </div>
                {/* Dark Overlay for text readability */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors"></div>
            </div>

        </aside>
    );
};

export default RightSideBar;