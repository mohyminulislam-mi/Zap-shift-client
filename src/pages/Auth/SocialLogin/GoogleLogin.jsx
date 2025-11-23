import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router";

const GoogleLogin = () => {
  const { singInGoogle } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSingInGoogle = () => {
    singInGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state || "/");
      })
      .then((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="text-center mt-3  ">
        <h1 className=" text-lg font-bold text-gray-600">Or</h1>
      </div>
      <div>
        <button
          onClick={handleSingInGoogle}
          type="button"
          className="w-full cursor-pointer flex items-center gap-2 justify-center my-3 bg-white border border-gray-500/30 py-2.5 rounded-full text-gray-800"
        >
          <img
            className="h-4 w-4"
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleFavicon.png"
            alt="googleFavicon"
          />
          Log in with google
        </button>
      </div>
    </div>
  );
};

export default GoogleLogin;
