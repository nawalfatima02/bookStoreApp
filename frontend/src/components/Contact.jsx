import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Navbar from "./navbar";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
    <Navbar/>
      <div className="max-w-screen-2xl mx-auto flex h-screen items-center justify-center text-black dark:bg-slate-900 dark:text-white">
        <div className="w-[600px] ">
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)}>
              
              <h2 className="font-bold text-3xl dark:bg-slate-900 dark:text-white text-black">Contact Us</h2>
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <hr />
                <input
                  type="text"
                  placeholder="Enter Your Full Name..."
                  className="w-80 px-3 dark:bg-slate-900 dark:text-white outline-none rounded-md "
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <p className="text-red-500">Email is required</p>
                )}
              </div>
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <hr />
                <input
                  type="email"
                  placeholder="Enter Your Email..."
                  className="w-80 px-3 dark:bg-slate-900 dark:text-white outline-none rounded-md "
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="text-red-500">Email is required</p>
                )}
              </div>
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <hr />
                <input
                  type="password"
                  placeholder="Enter Your Password..."
                  className="w-80 px-3 outline-none dark:bg-slate-900 dark:text-white rounded-md "
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <p className="text-red-500">Password is required</p>
                )}
              </div>
              <div className="flex justify-around mt-4">
                <button className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-800 duration-200 mt-8">
                  Submit
                </button>
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
