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
        title: news.title,
        description: news.details,
    };
}

const NewsDetailsPage = async ({ params }) => {

    const { id } = await params;
    const news = await getNewsByID(id);

    return (
        <div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 container mx-auto px-4 my-10 lg:my-0">

                {/* MAIN CONTENT */}
                <div className="card bg-base-100 shadow-sm col-span-1 lg:col-span-9">

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
                        <p className="text-sm sm:text-base">
                            {news.details}
                        </p>

                        {/* BUTTON */}
                        <Link href={`/category/${news.category_id}`}>
                            <button className="btn bg-[#D72050] text-white mt-4 flex items-center gap-2">
                                <FaLongArrowAltLeft />
                                All news in this category
                            </button>
                        </Link>

                    </div>

                </div>

                {/* RIGHT SIDEBAR */}
                <div className="col-span-1 lg:col-span-3">
                    <RighSideBar />
                </div>

            </div>

        </div>
    );
};

export default NewsDetailsPage;