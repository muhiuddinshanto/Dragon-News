import React from 'react';
import Marquee from 'react-fast-marquee';

const BrekingNews = () => {
    const newsData = [
  {
    id: 1,
    title: "Bangladesh Wins Important Cricket Match",
    category: "Sports",
    author: "Sports Desk",
    date: "2026-04-25",
    image: "https://example.com/news1.jpg",
    description:
      "Bangladesh secured a thrilling victory in a close cricket match against a strong opponent.",
  },
  {
    id: 2,
    title: "Tech Industry Growing Rapidly in Dhaka",
    category: "Technology",
    author: "Tech Reporter",
    date: "2026-04-24",
    image: "https://example.com/news2.jpg",
    description:
      "Several startups in Dhaka are attracting international investors due to rapid growth.",
  },
  {
    id: 3,
    title: "Heavy Rainfall Expected Across the Country",
    category: "Weather",
    author: "Weather Center",
    date: "2026-04-23",
    image: "https://example.com/news3.jpg",
    description:
      "Meteorological department has warned about heavy rainfall in multiple regions.",
  },
  {
    id: 4,
    title: "Education Board Announces Exam Schedule",
    category: "Education",
    author: "Education Desk",
    date: "2026-04-22",
    image: "https://example.com/news4.jpg",
    description:
      "New exam routine has been published for SSC and HSC students across the country.",
  },
];
    return (





        <div className='flex bg-gray-200 p-4 container mx-auto'>
            <button className='btn bg-[#D72050] text-white'>Latest News</button>
            <Marquee pauseOnHover={true} speed={100}>
                {
                    newsData.map((n)=>{
                        return <span key={n.id}>{n.title}</span>
                    })
                }
            </Marquee>
        </div>
    );
};

export default BrekingNews;