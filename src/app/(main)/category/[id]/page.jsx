import LeftSideBar from '@/component/HomePage/news/LeftSideBar';
import NewsCard from '@/component/HomePage/news/NewsCard';
import RighSideBar from '@/component/HomePage/news/RighSideBar';
import { getCategory, getNewByCategoryID } from '@/lib/data';
import React from 'react';

const NewsCategoryPage = async ({ params }) => {
    // Next.js-এর নতুন ভার্সনে params-কে await করতে হয়
    const { id } = await params;

    // প্যারালাল ডেটা ফেচিং
    const [categoriesData, newsData] = await Promise.all([
        getCategory(),
        getNewByCategoryID(id)
    ]);

    /**
     * এরর হ্যান্ডেলিং: 
     * আপনার এপিআই যদি সরাসরি অ্যারে না পাঠিয়ে অবজেক্ট পাঠায় (যেমন: {data: [...]}), 
     * তবে আমরা Array.isArray দিয়ে চেক করে আসল অ্যারেটি বের করে নেব।
     */
    const categories = Array.isArray(categoriesData) 
        ? categoriesData 
        : categoriesData?.data || [];

    const news = Array.isArray(newsData) 
        ? newsData 
        : newsData?.data || [];

    // বর্তমান ক্যাটাগরির নাম খুঁজে বের করা
    const currentCategory = categories.find(cat => cat.category_id === id);

    return (
        <main className="min-h-screen bg-white">
            <div className="container mx-auto px-4 py-8 lg:py-12">
                
                {/* Main Layout Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* --- LEFT SIDEBAR (Category List) --- */}
                    <aside className="lg:col-span-3 order-2 lg:order-1">
                        <h2 className="font-bold text-xl mb-4 text-[#403F3F]">All Category</h2>
                        <div className="sticky top-20">
                            {/* categories এবং activeId প্রপস হিসেবে পাঠানো হচ্ছে */}
                            <LeftSideBar categories={categories} activeId={id} />
                        </div>
                    </aside>

                    {/* --- MAIN CONTENT (News Feed) --- */}
                    <section className="lg:col-span-6 order-1 lg:order-2 space-y-6">
                        <div className="flex items-center justify-between border-b pb-4">
                            <h2 className="font-bold text-xl lg:text-2xl text-[#403F3F]">
                                {currentCategory ? `${currentCategory.category_name} News` : "Dragon News Home"}
                            </h2>
                            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                {news.length} Articles Found
                            </span>
                        </div>

                        <div className="space-y-6">
                            {news.length > 0 ? (
                                news.map((n) => (
                                    <NewsCard key={n._id} news={n} />
                                ))
                            ) : (
                                <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
                                    <div className="bg-gray-50 p-10 rounded-full">
                                        <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 2v4a2 2 0 002 2h4" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-400">No News Available in this Category</h3>
                                    <p className="text-gray-500">Please check back later or explore other categories.</p>
                                </div>
                            )}
                        </div>
                    </section>

                    {/* --- RIGHT SIDEBAR --- */}
                    <aside className="lg:col-span-3 order-3">
                        <RighSideBar />
                    </aside>

                </div>
            </div>
        </main>
    );
};

export default NewsCategoryPage;