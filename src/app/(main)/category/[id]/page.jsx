import LeftSideBar from '@/component/HomePage/news/LeftSideBar';
import NewsCard from '@/component/HomePage/news/NewsCard';
import RighSideBar from '@/component/HomePage/news/RighSideBar';
import { getCategory, getNewByCategoryID } from '@/lib/data';
import React from 'react';

const NewsCategoryPage = async ({ params }) => {

    const { id } = await params;

    const categories = await getCategory();
    const news = await getNewByCategoryID(id);

    return (
        <div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 container mx-auto my-10 lg:my-20 px-4">

                {/* Left Sidebar */}
                <div className="col-span-1 lg:col-span-3 space-y-4">
                    <LeftSideBar categories={categories} activeId={id} />
                </div>

                {/* Main Content */}
                <div className="col-span-1 lg:col-span-6 space-y-3">

                    <h2 className='p-4 font-bold text-xl lg:text-2xl'>
                        Dragon News Home
                    </h2>

                    <div className="space-y-3">

                        {
                            news.length > 0
                                ? news.map((n) => (
                                    <NewsCard key={n._id} news={n} />
                                ))
                                : <h2 className='text-center text-xl lg:text-2xl font-bold pt-5'>
                                    No News Found
                                </h2>
                        }

                    </div>

                </div>

                {/* Right Sidebar */}
                <div className="col-span-1 lg:col-span-3">
                    <RighSideBar />
                </div>

            </div>

        </div>
    );
};

export default NewsCategoryPage;