import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaRegEye, FaStar } from 'react-icons/fa';

const NewsCard = ({ news }) => {
    return (
        <div>

            <div className="card bg-base-100 shadow-sm w-full">

                <div className="card-body">

                    {/* AUTHOR */}
                    <div className='flex flex-col sm:flex-row bg-[#F3F3F3] p-3.5 rounded-t-xl justify-between sm:items-center gap-3'>

                        <div className='flex gap-2 items-center'>
                            <Image
                                src={news.author?.img}
                                width={40}
                                height={40}
                                alt={news.author.name}
                                className='rounded-full'
                            />

                            <div>
                                <p className="text-sm sm:text-base">{news.author.name}</p>
                                <p className="text-xs sm:text-sm">
                                    {new Date(news.author.published_date).toLocaleDateString()}
                                </p>
                            </div>
                        </div>

                        <div className='flex gap-2 text-xl'>
                            <CiBookmark />
                            <CiShare2 />
                        </div>

                    </div>

                    {/* TITLE */}
                    <h2 className="card-title text-base sm:text-xl">
                        {news.title}
                    </h2>

                    {/* IMAGE */}
                    <figure className='px-2'>
                        <Image
                            src={news.image_url}
                            width={525}
                            height={250}
                            alt={news.title}
                            className='w-full h-auto'
                        />
                    </figure>

                    {/* DETAILS */}
                    <p className='line-clamp-3 text-sm sm:text-base'>
                        {news.details}
                    </p>

                    {/* READ MORE */}
                    <Link href={`/news/${news._id}`}>
                        <p className='text-[#FF8C47] text-sm sm:text-base'>Read More</p>
                    </Link>

                    <div className="divider"></div>

                    {/* FOOTER */}
                    <div className='flex flex-col sm:flex-row sm:justify-between gap-3 sm:items-center'>

                        <div className='flex items-center gap-2'>
                            <div className="flex text-[#FF8C47] text-sm sm:text-base">
                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                            </div>
                            {news.rating.number}
                        </div>

                        <div className='flex gap-1.5 items-center text-sm sm:text-base'>
                            <FaRegEye />
                            {news.total_view}
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default NewsCard;