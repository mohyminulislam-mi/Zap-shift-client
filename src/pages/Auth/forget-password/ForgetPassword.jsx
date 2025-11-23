import React, { useContext } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { AuthContext } from "../../../context/AuthContext/AuthContext";

const ForgetPassword = () => {
  const { forgetPassword } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleForgetPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    forgetPassword(email)
      .then(() => {
        console.log("Password reset email sent!");
        Swal.fire({
          title: "Password reset email sent!",
          icon: "success",
          draggable: true,
        });
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };
  return (
    <div className="my-14">
      <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <div className="text-center">
            <h1 className="text-3xl font-medium">Forgot Password</h1>
            <p className="mt-2">Enter your email to reset your password</p>
          </div>
          <form onSubmit={handleForgetPassword}>
            <fieldset className="fieldset mt-2">
              <label className="label text-sm">Email</label>
              <input
                type="email"
                className="input w-full"
                placeholder="Email"
                name="email"
                required
              />
              <button className="btn bg-green-500 hover:bg-green-600 text-white mt-4">
                Forgot Password
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
