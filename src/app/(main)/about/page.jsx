import Image from 'next/image';
import React from 'react';

// প্রজেক্টের লোগো বা কোনো টিম ইমেজ থাকলে এখানে ইম্পোর্ট করতে পারেন
import logo from '@/assets/logo.png'; 

export const metadata = {
    title: "About Us | Dragon News",
    description: "Learn more about Dragon News, our mission, and our commitment to providing journalism without fear or favour.",
};

const AboutPage = () => {
    return (
        <main className="min-h-screen bg-white">
            {/* --- Hero Section --- */}
            <section className="bg-gray-50 py-16 md:py-24 border-b">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#403F3F] mb-6">
                        Journalism Without Fear or Favour
                    </h1>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                        Dragon News is a leading digital news platform based in Dhaka, Bangladesh. 
                        Since our inception, we have been committed to delivering accurate, 
                        timely, and unbiased news to our readers across the globe.
                    </p>
                </div>
            </section>

            {/* --- Our Mission & Vision --- */}
            <section className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-[#403F3F] border-l-4 border-[#D72050] pl-4">
                            Our Mission
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Our mission is simple: to empower our audience with the truth. 
                            In an age of misinformation, Dragon News stands as a beacon of 
                            integrity, ensuring every story is verified and every voice is heard.
                        </p>
                        <h2 className="text-3xl font-bold text-[#403F3F] border-l-4 border-[#D72050] pl-4 pt-4">
                            Our Vision
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            We aim to be the most trusted source of information in Bangladesh and 
                            beyond, leveraging technology to make high-quality journalism 
                            accessible to everyone, everywhere.
                        </p>
                    </div>

                    {/* Placeholder for an Image or Logo */}
                    <div className="bg-[#F3F3F3] rounded-2xl p-10 flex justify-center items-center">
                         <Image 
                            src={logo} 
                            alt="Dragon News Logo" 
                            width={400} 
                            height={150} 
                            className="opacity-80 grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                </div>
            </section>

            {/* --- Core Values --- */}
            <section className="bg-[#403F3F] text-white py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="space-y-4">
                            <div className="text-4xl text-[#D72050]">⚖️</div>
                            <h4 className="text-xl font-bold">Accuracy</h4>
                            <p className="text-gray-400">We prioritize facts over speed, ensuring every detail is double-checked.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-4xl text-[#D72050]">🛡️</div>
                            <h4 className="text-xl font-bold">Integrity</h4>
                            <p className="text-gray-400">Our reporting is independent of political or commercial influence.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-4xl text-[#D72050]">🤝</div>
                            <h4 className="text-xl font-bold">Transparency</h4>
                            <p className="text-gray-400">We are open about our sources and transparent about our processes.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Contact CTA --- */}
            <section className="container mx-auto px-4 py-20 text-center">
                <h2 className="text-3xl font-bold text-[#403F3F] mb-6">Want to get in touch?</h2>
                <p className="text-gray-500 mb-8 max-w-xl mx-auto">
                    Whether you have a news tip, a question, or just want to say hello, we'd love to hear from you.
                </p>
                <div className="flex justify-center gap-4">
                    <button className="bg-[#D72050] text-white px-8 py-3 font-semibold hover:bg-[#b51b44] transition-colors rounded-none">
                        Contact Us
                    </button>
                    <button className="border border-gray-300 px-8 py-3 font-semibold hover:bg-gray-50 transition-colors rounded-none text-[#403F3F]">
                        Email Editor
                    </button>
                </div>
            </section>
        </main>
    );
};

export default AboutPage;