import React from "react";
import "../../App.css";
import BannerImage from "../../assets/BannerImage.png";
const Banner = () => {
  return (
    <div className="hero rounded-lg bg-base-200 min-h-screen">
      <div className="hero-content2 flex-col  lg:flex-row-reverse justify-between">
        <img src={BannerImage} className="max-w-full rounded-lg shadow-2xl" />
        <div className="space-y-9 ">
          <h1 className="text-5xl font-bold">
            Books to freshen up <br /> your bookshelf
          </h1>
          <button className="btn btn-success">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
