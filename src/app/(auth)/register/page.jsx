'use client'
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // FaEyeSlash ব্যবহার করা ভালো

const RegisterPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleRegisterFunc = async (data) => {
        setLoading(true);
        const { email, name, photo, password } = data;
        
        const { data: res, error } = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            image: photo,
            callbackURL: "/",
        });

        setLoading(false);

        if (error) {
            alert(error.message);
        }
        if (res) {
            alert("Signup Successful!");
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-[#F3F3F3] px-4 py-10">
            <div className="w-full max-w-[650px] rounded-lg p-8 md:p-16 bg-white shadow-sm border border-gray-100">
                
                <h2 className="font-bold text-2xl md:text-3xl text-[#403F3F] text-center pb-6">
                    Register your account
                </h2>
                
                <div className="divider mb-8"></div>

                <form className="space-y-5" onSubmit={handleSubmit(handleRegisterFunc)}>
                    
                    {/* Name Field */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold text-[#403F3F]">Your Name</span>
                        </label>
                        <input
                            type="text"
                            className="input input-bordered w-full bg-[#F3F3F3] focus:outline-none"
                            placeholder="Enter your name"
                            {...register("name", { required: 'Name is required' })}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>

                    {/* Photo URL Field */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold text-[#403F3F]">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            className="input input-bordered w-full bg-[#F3F3F3] focus:outline-none"
                            placeholder="Enter photo URL"
                            {...register("photo", { required: 'Photo URL is required' })}
                        />
                        {errors.photo && <p className="text-red-500 text-xs mt-1">{errors.photo.message}</p>}
                    </div>

                    {/* Email Field */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold text-[#403F3F]">Email address</span>
                        </label>
                        <input
                            type="email"
                            className="input input-bordered w-full bg-[#F3F3F3] focus:outline-none"
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
                                className="input input-bordered w-full bg-[#F3F3F3] focus:outline-none"
                                placeholder="Enter your password"
                                {...register("password", { 
                                    required: 'Password is required',
                                    minLength: { value: 6, message: 'Password must be at least 6 characters' }
                                })}
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
                        {loading ? <span className="loading loading-spinner"></span> : "Register"}
                    </button>

                    <p className="text-center text-gray-600 mt-6">
                        Already Have An Account? 
                        <Link href="/login" className="text-[#D72050] font-bold ml-1 hover:underline">
                             Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;