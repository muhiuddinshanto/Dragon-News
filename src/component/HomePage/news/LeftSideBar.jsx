import Link from 'next/link';
import React from 'react';

const LeftSideBar = ({ categories, activeId }) => {
    return (
        <div className='space-y-4'>

            <p className="font-semibold text-xl rounded-xl text-left">
                All Category
            </p>

            <ul className="flex flex-col gap-3">

                {categories.news_category.map((category) => {

                    

                    return (
                        <li
                            key={category.category_id}
                            className={`text-xl text-left px-7 rounded-xl py-2 ${
                                activeId == category.category_id
                                    ? 'bg-[#E7E7E7] text-black'
                                    : 'text-[#9F9F9F]'
                            }`}
                        >
                            <Link
                                href={`/category/${category.category_id}`}
                                className='block'
                            >
                                {category.category_name}
                            </Link>
                        </li>
                    );
                })}

            </ul>

        </div>
    );
};

export default LeftSideBar;