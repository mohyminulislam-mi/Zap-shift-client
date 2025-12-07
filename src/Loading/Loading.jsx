import Lottie from "react-lottie";
import loadingAnimation from "../assets/json/loading.json";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="min-h-screen">
        <Lottie
          options={{
            animationData: loadingAnimation,
            autoplay: true,
            loop: true,
          }}
        ></Lottie>
      </div>
    </div>
  );
};
export default Loading;
