import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaRegEye, FaStar } from 'react-icons/fa';

const NewsCard = ({ news }) => {
    // রেটিং স্টারের জন্য একটি লজিক (৫টি স্টারের কালার হ্যান্ডেল করতে)
    const ratingStar = Math.round(news.rating?.number || 0);

    return (
        <div className="mb-8">
            <div className="card bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                
                {/* 1. AUTHOR SECTION (Header) */}
                <div className='flex items-center justify-between bg-[#F3F3F3] px-5 py-3'>
                    <div className='flex gap-3 items-center'>
                        <Image
                            src={news.author?.img}
                            width={40}
                            height={40}
                            alt={news.author?.name || "Author"}
                            className='rounded-full object-cover border border-gray-300'
                        />
                        <div>
                            <p className="font-semibold text-[#403F3F] leading-tight">
                                {news.author?.name || "Unknown Author"}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                                {news.author?.published_date ? new Date(news.author.published_date).toLocaleDateString('en-GB') : "No Date"}
                            </p>
                        </div>
                    </div>

                    <div className='flex gap-3 text-2xl text-gray-600'>
                        <button className="hover:text-black transition-colors"><CiBookmark /></button>
                        <button className="hover:text-black transition-colors"><CiShare2 /></button>
                    </div>
                </div>

                <div className="p-5 space-y-4">
                    {/* 2. TITLE */}
                    <h2 className="text-xl font-bold text-[#403F3F] leading-snug hover:text-[#FF8C47] transition-colors cursor-pointer">
                        <Link href={`/news/${news._id}`}>{news.title}</Link>
                    </h2>

                    {/* 3. THUMBNAIL IMAGE */}
                    <div className='w-full'>
                        <Image
                            src={news.image_url}
                            width={800}
                            height={450}
                            alt={news.title}
                            className='w-full h-auto rounded-md object-cover max-h-[300px]'
                            priority={false}
                        />
                    </div>

                    {/* 4. DETAILS SECTION */}
                    <p className='text-gray-600 text-sm leading-relaxed line-clamp-3'>
                        {news.details}
                    </p>

                    {/* READ MORE */}
                    <Link 
                        href={`/news/${news._id}`}
                        className='inline-block font-bold text-[#FF8C47] hover:text-[#e07a3d] transition-colors underline'
                    >
                        Read More
                    </Link>

                    <div className="border-t border-gray-200 my-4"></div>

                    {/* 5. FOOTER (Rating & Views) */}
                    <div className='flex justify-between items-center'>
                        
                        {/* Rating */}
                        <div className='flex items-center gap-2'>
                            <div className="flex text-[#FF8C47] gap-0.5">
                                {[...Array(5)].map((_, index) => (
                                    <FaStar 
                                        key={index} 
                                        className={index < ratingStar ? "text-[#FF8C47]" : "text-gray-300"} 
                                    />
                                ))}
                            </div>
                            <span className="font-medium text-gray-600">{news.rating?.number}</span>
                        </div>

                        {/* Views */}
                        <div className='flex gap-2 items-center text-gray-600 font-medium'>
                            <FaRegEye className="text-xl" />
                            <span>{news.total_view || 0}</span>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default NewsCard;