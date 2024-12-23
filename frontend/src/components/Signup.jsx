import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="flex h-screen items-center justify-center text-black">
        <div className="w-[600px] ">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Link
                to="/"
                className="btn btn-sm btn-circle absolute  right-2 top-2"
              >
                ✕
              </Link>
              <h2 className="font-bold text-lg text-black">Signup</h2>
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <hr />
                <input
                  type="text"
                  placeholder="Enter Your Full Name..."
                  className="w-80 px-3 outline-none rounded-md "
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
                  className="w-80 px-3 outline-none rounded-md "
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
                  className="w-80 px-3 outline-none rounded-md "
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <p className="text-red-500">Password is required</p>
                )}
              </div>
              <div className="flex justify-around mt-4">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-800 duration-200">
                  Signup
                </button>
                <p className="text-xl">
                  Have Account?{" "}
                  <button
                    className="underline text-blue-700 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>
                  <Login />
                </p>{" "}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
