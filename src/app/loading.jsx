import React from 'react';

const Loading = () => {
    return (
        <div className="container mx-auto px-4 py-10 min-h-screen">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Left Sidebar Skeleton */}
                <div className="hidden lg:block lg:col-span-3 space-y-4">
                    <div className="h-8 bg-gray-200 rounded w-1/2 animate-pulse mb-6"></div>
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className="h-12 bg-gray-100 rounded-lg animate-pulse"></div>
                    ))}
                </div>

                {/* Main Content Skeleton (News Cards) */}
                <div className="lg:col-span-6 space-y-8">
                    <div className="h-10 bg-gray-200 rounded w-1/3 animate-pulse mb-4"></div>
                    
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="border border-gray-100 rounded-xl overflow-hidden shadow-sm space-y-4 bg-white">
                            {/* Card Header */}
                            <div className="bg-gray-50 p-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>
                                    <div className="space-y-2">
                                        <div className="h-3 bg-gray-200 rounded w-24 animate-pulse"></div>
                                        <div className="h-2 bg-gray-200 rounded w-16 animate-pulse"></div>
                                    </div>
                                </div>
                                <div className="h-6 bg-gray-200 rounded w-12 animate-pulse"></div>
                            </div>
                            {/* Card Content */}
                            <div className="p-5 space-y-4">
                                <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                                <div className="w-full h-64 bg-gray-200 rounded animate-pulse"></div>
                                <div className="space-y-2">
                                    <div className="h-3 bg-gray-200 rounded w-full animate-pulse"></div>
                                    <div className="h-3 bg-gray-200 rounded w-full animate-pulse"></div>
                                    <div className="h-3 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Sidebar Skeleton */}
                <div className="lg:col-span-3 space-y-6">
                    <div className="h-40 bg-gray-100 rounded-xl animate-pulse"></div>
                    <div className="h-60 bg-gray-100 rounded-xl animate-pulse"></div>
                </div>

            </div>
        </div>
    );
};

export default Loading;