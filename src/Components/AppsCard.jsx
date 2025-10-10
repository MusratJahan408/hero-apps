import React from "react";
import downloadImg from "../assets/icon-downloads.png";
import ratingImg from "../assets/icon-ratings.png";
import { Link } from "react-router";

const AppsCard = ({ app }) => {
  const { image, title, downloads, ratingAvg, id } = app;
  return (
    <Link
      to={`/app/${id}`}
      className="bg-white shadow-md p-4 rounded hover:scale-105 transition ease-in-out mx-3 md:mx-0"
    >
      <div className="bg-[#D9D9D9] rounded-lg">
        <img className="w-full h-60 object-cover" src={image} alt="" />
      </div>
      <h1 className="text-2xl font-medium my-4"> {title}</h1>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 bg-[#F1F5E8] px-3 py-2 rounded">
          <img className="h-4 w-4" src={downloadImg} alt="" />
          <span className="text-[#00D390] font-semibold">{downloads}</span>
        </div>
        <div className="flex gap-2 items-center bg-[#FFF0E1] px-3 py-2 rounded">
          <img className="h-4 w-4" src={ratingImg} alt="" />
          <span className="text-[#FF8811] font-semibold">{ratingAvg}</span>
        </div>
      </div>
    </Link>
  );
};

export default AppsCard;
