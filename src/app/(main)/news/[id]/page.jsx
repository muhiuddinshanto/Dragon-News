import RighSideBar from "@/component/HomePage/news/RighSideBar";
import { getNewsByID } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaLongArrowAltLeft } from "react-icons/fa";

export async function generateMetadata({ params }) {
    const { id } = await params;
    const news = await getNewsByID(id);

    return {
        title: `${news?.title} | Dragon News`,
        description: news?.details?.slice(0, 160),
    };
}

const NewsDetailsPage = async ({ params }) => {
    const { id } = await params;
    const news = await getNewsByID(id);

    if (!news) return <div className="text-center py-20">News not found!</div>;

    return (
        <main className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    
                    {/* --- MAIN CONTENT (Left Side) --- */}
                    <article className="lg:col-span-9 space-y-6">
                        <h2 className="font-bold text-2xl md:text-3xl text-[#403F3F] leading-tight">
                            Dragon News
                        </h2>

                        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                            {/* Header Image */}
                            <div className="p-6">
                                <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-6">
                                    <Image
                                        src={news.image_url}
                                        fill
                                        alt={news.title}
                                        className="object-cover"
                                        priority
                                    />
                                </div>

                                {/* Title */}
                                <h1 className="text-2xl md:text-4xl font-bold text-[#403F3F] mb-6 leading-snug">
                                    {news.title}
                                </h1>

                                {/* Author & Share (Mobile Friendly) */}
                                <div className="flex flex-wrap items-center justify-between gap-4 bg-gray-50 p-4 rounded-lg mb-6 border border-gray-100">
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src={news.author?.img}
                                            width={45}
                                            height={45}
                                            alt={news.author?.name}
                                            className="rounded-full ring-2 ring-white shadow-sm"
                                        />
                                        <div>
                                            <p className="font-bold text-[#403F3F]">{news.author?.name}</p>
                                            <p className="text-xs text-gray-500">
                                                {news.author?.published_date ? new Date(news.author.published_date).toDateString() : "Unknown Date"}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 text-gray-500">
                                        <button className="hover:text-black transition-colors"><CiBookmark size={24} /></button>
                                        <button className="hover:text-black transition-colors"><CiShare2 size={24} /></button>
                                    </div>
                                </div>

                                {/* News Details */}
                                <div className="prose max-w-none text-gray-600 leading-relaxed space-y-4 text-base md:text-lg">
                                    {news.details}
                                </div>

                                {/* Back Button */}
                                <div className="mt-8 border-t pt-6">
                                    <Link href={`/category/${news.category_id}`}>
                                        <button className="group flex items-center gap-2 bg-[#D72050] hover:bg-[#b51b44] text-white px-6 py-3 font-semibold rounded-none transition-all">
                                            <FaLongArrowAltLeft className="group-hover:-translate-x-1 transition-transform" />
                                            All news in this category
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* --- RIGHT SIDEBAR --- */}
                    <aside className="lg:col-span-3">
                        <RighSideBar />
                    </aside>

                </div>
            </div>
        </main>
    );
};

export default NewsDetailsPage;