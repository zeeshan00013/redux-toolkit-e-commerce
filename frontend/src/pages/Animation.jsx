import React from "react";
import image from "../assets/react.svg";

const Animation = () => {
  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gradient-to-br  border bg-black">
      {/* Rotating Container */}
      <div className="relative w-64 h-64 border animate-spin-slow">
        {/* Images */}

        <img
          src={image}
          alt="Car"
          className="absolute w-20 h-20 transform translate-x-[-50%] translate-y-[-50%] top-0 left-[50%] border"
        />
        <img
          src={image}
          alt="Car"
          className="absolute w-20 h-20 transform translate-x-[-50%] translate-y-[-50%] bottom-[20%] left-[100%] border-2"
        />
        <img
          src={image}
          alt="Car"
          className="absolute w-20 h-20 transform translate-x-[-50%] translate-y-[-50%] left-0 top-[50%] border-2"
        />
        <img
          src={image}
          alt="Car"
          className="absolute w-20 h-20 transform translate-x-[-50%] translate-y-[-50%] left-[50%] top-[100%] border"
        />

        {/* Rotating Text */}
      </div>
      <div className="absolute  flex justify-center items-center border">
        <p className="absolute text-white text-2xl transform border animate-bounce">
          Zeeshan
        </p>
      </div>
    </div>
  );
};

export default Animation;
