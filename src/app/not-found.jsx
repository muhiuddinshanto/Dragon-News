import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className="min-h-[85vh] flex flex-col justify-center items-center px-4 bg-white text-center">
            
            {/* --- Animated 404 Header --- */}
            <div className="relative mb-8">
                <h1 className="text-9xl font-black text-gray-100 select-none">404</h1>
                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl font-bold text-[#403F3F] w-full">
                    Oops! Page Not Found
                </p>
            </div>

            {/* --- Illustration / Icon --- */}
            <div className="mb-6">
                <svg 
                    className="w-24 h-24 text-[#D72050] animate-bounce" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
            </div>

            {/* --- Message --- */}
            <div className="max-w-md space-y-4 mb-10">
                <h2 className="text-xl md:text-2xl font-bold text-[#403F3F]">
                    The headline you're looking for is missing!
                </h2>
                <p className="text-gray-500">
                    It seems the link you followed may be broken or the page has been moved. 
                    Don't worry, our latest news is still waiting for you.
                </p>
            </div>

            {/* --- Actions --- */}
            <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/">
                    <button className="btn bg-[#D72050] hover:bg-[#b51b44] text-white border-none px-8 py-3 rounded-none font-bold transition-all">
                        Back to Home
                    </button>
                </Link>
                
                <Link href="/category/0">
                    <button className="btn btn-outline border-[#403F3F] text-[#403F3F] hover:bg-[#403F3F] hover:text-white px-8 py-3 rounded-none font-bold transition-all">
                        Browse News
                    </button>
                </Link>
            </div>

            {/* --- Support Info --- */}
            <p className="mt-12 text-sm text-gray-400">
                If you think this is a mistake, please <Link href="/about" className="underline hover:text-[#D72050]">contact our support</Link>.
            </p>
        </div>
    );
};

export default NotFound;