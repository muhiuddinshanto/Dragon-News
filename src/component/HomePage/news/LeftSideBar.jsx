import Link from 'next/link';
import React from 'react';

const LeftSideBar = ({ categories, activeId }) => {
    return (
        <aside className='space-y-6'>
            {/* Section Title */}
            <h2 className="font-bold text-xl text-[#403F3F] border-l-4 border-[#D72050] pl-3">
                All Categories
            </h2>

            {/* Category List */}
            <nav>
                <ul className="flex flex-col gap-1">
                    {categories?.news_category?.map((category) => {
                        const isActive = activeId == category.category_id;

                        return (
                            <li key={category.category_id}>
                                <Link
                                    href={`/category/${category.category_id}`}
                                    className={`
                                        block w-full px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300
                                        ${isActive 
                                            ? 'bg-[#E7E7E7] text-[#403F3F] shadow-sm font-bold translate-x-2' 
                                            : 'text-[#9F9F9F] hover:bg-gray-50 hover:text-[#403F3F] hover:translate-x-2'
                                        }
                                    `}
                                >
                                    {category.category_name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            {/* Premium Ad/Promo Section */}
            <div className="mt-10 p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl text-white relative overflow-hidden group">
                <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-2 leading-tight">Master Your News Feed</h3>
                    <p className="text-xs text-gray-400 mb-4">Customize your categories for a better experience.</p>
                    <button className="bg-[#D72050] hover:bg-[#ff2b63] text-white px-4 py-2 rounded text-xs font-bold transition-colors">
                        Explore Now
                    </button>
                </div>
                {/* Decorative Element */}
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-red-600/20 rounded-full blur-2xl group-hover:bg-red-600/40 transition-all duration-500"></div>
            </div>
        </aside>
    );
};

export default LeftSideBar;