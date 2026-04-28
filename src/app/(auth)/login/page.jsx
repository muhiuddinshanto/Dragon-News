'use client'
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { LuEyeClosed } from "react-icons/lu";


const LoginPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [isShowPassword, setIsShowPassword] = useState(true);

    const handleLoginFunc = async (data) => {
        const { data: res, error } = await authClient.signIn.email({
            email: data.email,
            password: data.password,
            rememberMe: true,
            callbackURL: "/",
        });
         if(error){
            alert('User Alredy SignUp')
        }
        if(res){
            alert("Login Success Full")
        }

        console.log(res, error);

    }

    return (
        <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
            <div className="rounded-xl py-20 px-40 bg-white ">
                <h2 className="font-bold text-xl text-center pb-4">Login your account</h2>
                <div className="divider"></div>
                <form className="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-bold">Email address</legend>
                        <input
                            type="email"
                            className="input"
                            placeholder="Enter your email address"
                            {...register("email", { required: 'Email Fill Is Requerd' })}
                        />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend font-bold" >Password</legend>
                        <input
                            type={isShowPassword ? "text" : "password"}
                            className="input"
                            placeholder="Enter your password"
                            {...register("password", { required: 'Password Fill Is Requerd' })}
                        />
                        <span onClick={()=>setIsShowPassword(!isShowPassword)} className="absolute right-2 top-[18px] ">{isShowPassword ? <FaEye /> : <LuEyeClosed />}</span>
                        
                        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                    </fieldset>
                    <button className="btn w-full bg-slate-800 text-white">Login</button>
                </form>

            </div>
        </div>
    );
};

export default LoginPage;