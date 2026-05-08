import React from 'react';
import Marquee from 'react-fast-marquee';
import Link from 'next/link';

const BrekingNews = () => {
    const newsData = [
        { id: 1, title: "Bangladesh Wins Important Cricket Match", category: "Sports" },
        { id: 2, title: "Tech Industry Growing Rapidly in Dhaka", category: "Technology" },
        { id: 3, title: "Heavy Rainfall Expected Across the Country", category: "Weather" },
        { id: 4, title: "Education Board Announces Exam Schedule", category: "Education" },
    ];

    return (
        <div className='flex items-center bg-[#F3F3F3] p-4 rounded-md overflow-hidden'>
            {/* Latest Button */}
            <button className='btn bg-[#D72050] text-white border-none rounded-none px-6 hover:bg-[#b81b45] min-h-0 h-11'>
                Latest
            </button>

            {/* Marquee Content */}
            <Marquee pauseOnHover={true} speed={80} gradient={false} className="cursor-pointer">
                {
                    newsData.map((n) => (
                        <div key={n.id} className="flex items-center">
                            <Link href={`/news/${n.id}`} className="hover:text-[#D72050] transition-colors font-semibold text-[#403F3F]">
                                {n.title}
                            </Link>
                            {/* নিউজগুলোর মাঝে একটি ডট বা চিহ্ন যোগ করা */}
                            <span className="mx-8 text-2xl text-red-500">•</span>
                        </div>
                    ))
                }
            </Marquee>
        </div>
    );
};

export default BrekingNews;