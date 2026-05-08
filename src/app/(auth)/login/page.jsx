'use client'
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // FaEyeSlash ব্যবহার করা ভালো

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isShowPassword, setIsShowPassword] = useState(false); // শুরুতে পাসওয়ার্ড হাইড থাকাই স্ট্যান্ডার্ড
    const [loading, setLoading] = useState(false);

    const handleLoginFunc = async (data) => {
        setLoading(true);
        const { data: res, error } = await authClient.signIn.email({
            email: data.email,
            password: data.password,
            rememberMe: true,
            callbackURL: "/",
        });

        setLoading(false);

        if (error) {
            alert(error.message);
        }
        if (res) {
            alert("Login Successful!");
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-[#F3F3F3] px-4">
            <div className="w-full max-w-[600px] rounded-lg p-8 md:p-16 bg-white shadow-sm border border-gray-100">
                
                <h2 className="font-bold text-2xl md:text-3xl text-[#403F3F] text-center pb-8">
                    Login your account
                </h2>
                
                <div className="divider mb-8"></div>

                <form className="space-y-6" onSubmit={handleSubmit(handleLoginFunc)}>

                    {/* Email Field */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold text-[#403F3F]">Email address</span>
                        </label>
                        <input
                            type="email"
                            className={`input input-bordered w-full bg-[#F3F3F3] focus:outline-none ${errors.email ? 'border-red-500' : ''}`}
                            placeholder="Enter your email address"
                            {...register("email", { required: 'Email is required' })}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>

                    {/* Password Field */}
                    <div className="form-control w-full relative">
                        <label className="label">
                            <span className="label-text font-bold text-[#403F3F]">Password</span>
                        </label>
                        <div className="relative">
                            <input
                                type={isShowPassword ? "text" : "password"}
                                className={`input input-bordered w-full bg-[#F3F3F3] focus:outline-none ${errors.password ? 'border-red-500' : ''}`}
                                placeholder="Enter your password"
                                {...register("password", { required: 'Password is required' })}
                            />
                            <button 
                                type="button"
                                onClick={() => setIsShowPassword(!isShowPassword)} 
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-800 transition-colors"
                            >
                                {isShowPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                            </button>
                        </div>
                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <button 
                        disabled={loading}
                        className="btn w-full bg-[#403F3F] hover:bg-black text-white border-none normal-case text-lg mt-4"
                    >
                        {loading ? <span className="loading loading-spinner"></span> : "Login"}
                    </button>

                    <p className="text-center text-gray-600 mt-6">
                        Dont’t Have An Account? 
                        <Link href="/register" className="text-[#D72050] font-bold ml-1 hover:underline">
                             Register
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;