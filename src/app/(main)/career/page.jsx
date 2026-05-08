import React from 'react';

export const metadata = {
    title: "Career | Dragon News",
    description: "Join the Dragon News team and shape the future of journalism.",
};

const CareerPage = () => {
    const opportunities = [
        { id: 1, role: "Senior Journalist", type: "Full-time", location: "Dhaka, Bangladesh" },
        { id: 2, role: "Frontend Developer (Next.js)", type: "Remote", location: "Anywhere" },
        { id: 3, role: "Digital Marketer", type: "Contract", location: "Dhaka, Bangladesh" },
    ];

    return (
        <main className="min-h-screen bg-white pb-20">
            {/* --- Hero Section --- */}
            <section className="bg-[#F3F3F3] py-16 md:py-24 border-b">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-[#403F3F] mb-6">
                        Work with Us
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        Become a part of a dynamic team dedicated to providing journalism without fear or favour. 
                        We are always looking for passionate storytellers and tech innovators.
                    </p>
                </div>
            </section>

            {/* --- Why Join Us Section --- */}
            <section className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-8 border rounded-lg hover:shadow-md transition-shadow text-center">
                        <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="text-2xl">🌍</span>
                        </div>
                        <h3 className="font-bold text-xl mb-3">Global Impact</h3>
                        <p className="text-gray-500">Reach millions of readers every day with your stories and innovations.</p>
                    </div>
                    <div className="p-8 border rounded-lg hover:shadow-md transition-shadow text-center">
                        <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="text-2xl">💡</span>
                        </div>
                        <h3 className="font-bold text-xl mb-3">Creative Freedom</h3>
                        <p className="text-gray-500">We value original ideas and encourage our team to push boundaries.</p>
                    </div>
                    <div className="p-8 border rounded-lg hover:shadow-md transition-shadow text-center">
                        <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="text-2xl">🚀</span>
                        </div>
                        <h3 className="font-bold text-xl mb-3">Growth Mindset</h3>
                        <p className="text-gray-500">Continuous learning and professional development opportunities.</p>
                    </div>
                </div>
            </section>

            {/* --- Current Openings --- */}
            <section className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                    <div className="bg-[#403F3F] p-6">
                        <h2 className="text-2xl font-bold text-white">Current Openings</h2>
                    </div>
                    
                    <div className="divide-y">
                        {opportunities.map((job) => (
                            <div key={job.id} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-gray-50 transition-colors">
                                <div>
                                    <h4 className="text-xl font-bold text-[#403F3F]">{job.role}</h4>
                                    <div className="flex gap-4 mt-2 text-sm text-gray-500">
                                        <span>📍 {job.location}</span>
                                        <span>💼 {job.type}</span>
                                    </div>
                                </div>
                                <button className="bg-[#D72050] text-white px-6 py-2 font-semibold hover:bg-[#b51b44] transition-colors rounded-md">
                                    Apply Now
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- Spontaneous Application --- */}
                <div className="mt-12 text-center p-10 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
                    <h3 className="text-2xl font-bold text-[#403F3F] mb-4">Don't see a fit?</h3>
                    <p className="text-gray-600 mb-6 italic">
                        Send your resume to <span className="text-[#D72050] font-bold">career@dragon-news.com</span> and we'll keep you in mind for future roles.
                    </p>
                </div>
            </section>
        </main>
    );
};

export default CareerPage;