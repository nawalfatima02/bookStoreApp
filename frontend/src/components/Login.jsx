import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="text-black">
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Link to="/" className="btn btn-sm btn-circle absolute right-2 top-2">
              ✕
            </Link>
            <h2 className="font-bold text-lg">Login</h2>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <hr />
              <input
                type="Email"
                placeholder="Enter Your Email..."
                className="w-80 px-3 outline-none rounded-md "
                {...register("Email", { required: true })}
              />
              {errors.Email && <p className="text-red-500">Email is required</p>}
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
              {errors.password && <p className="text-red-500">Password is required</p>}
            </div>
            <div className="flex justify-around mt-4">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-800 duration-200"
              >
                Login
              </button>
              <p>
                Not Registered?{" "}
                <Link to="/signup" className="underline text-blue-700 cursor-pointer">
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
