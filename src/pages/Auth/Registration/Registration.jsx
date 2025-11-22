import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import useAuth from "../../../hooks/useAuth";
import GoogleLogin from "../SocialLogin/GoogleLogin";

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { registerUser } = useAuth();

  // register user start
  const handleRegister = (data) => {
    registerUser(data.email, data.password)
      .then((result) => {
        console.log("register user", result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="max-w-96 mx-auto md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
        Create ZapShift Account
      </h2>
      <form onSubmit={handleSubmit(handleRegister)}>
        {/* <input
          id="name"
          {...register("firstName", { required: true })}
          className="w-full bg-transparent border mt-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
          type="text"
          placeholder="Enter your Name"
          required
        />
        {errors.firstName?.type === "required" && (
          <p className="text-red-500">First name is required</p>
        )} */}
        <input
          id="email"
          {...register("email", { required: true })}
          className="w-full bg-transparent border mt-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
          type="email"
          placeholder="Enter your email"
          required
        />
        {errors.email?.type === "required" && (
          <p className="text-red-500">email is required</p>
        )}
        <input
          id="password"
          {...register("password", {
            required: true,
            minLength: 6,
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{6,}$/,
          })}
          className="w-full bg-transparent border mt-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
          type="password"
          placeholder="Enter your password"
          required
        />

        {errors.password?.type === "minLength" && (
          <p className="text-red-500">Password must be 6 character or longer</p>
        )}
        {errors.password?.type === "pattern" && (
          <p className="text-red-500">Use mix password like - AaBb2@</p>
        )}

        <button
          type="submit"
          className="w-full my-3  bg-indigo-500 py-2.5 rounded-full text-white cursor-pointer"
        >
          Register
        </button>
      </form>
      <p className="text-center mt-4">
        Already have an account?{" "}
        <Link to={"/login"} className="text-blue-500 underline">
          Log In
        </Link>
      </p>
      {/* Google Login */}
      <GoogleLogin />
    </div>
  );
};

export default Registration;
