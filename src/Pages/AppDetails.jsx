import React from "react";
import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import logoImg from "../assets/logo.png";
import downloadImg from "../assets/icon-downloads.png";
import ratingsImg from "../assets/icon-ratings.png";
import reviewImg from "../assets/icon-review.png";
import { updateList } from "../Utilities/localStorage";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  const app = apps.find((a) => a.id === parseInt(id));
  console.log(app);
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-3xl md:text-6xl font-bold flex">
          L<img className="w-14 h-14" src={logoImg} alt="" />
          ODING
        </h1>
      </div>
    );
  }
  const {
    image,
    title,
    companyName,
    description,
    reviews,
    ratingAvg,
    downloads,
    ratings,
  } = app;
  return (
    <div className="container mx-auto mt-10 md:mt-20">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div>
          <img className="w-80 h-80" src={image} alt="" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-[#627382] font-semibold mt-2">
            Company Name:{" "}
            <span className="font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              {companyName}
            </span>
          </p>
          <hr className="opacity-20 my-7 w-[1050px] bg-[#001931]" />
          <div className="flex gap-20">
            <div className="space-y-2">
              <img className="w-10 h-10" src={downloadImg} alt="" />
              <p>Downloads</p>
              <h1 className="text-4xl font-extrabold">{downloads}</h1>
            </div>
            <div className="space-y-2">
              <img className="w-10 h-10" src={ratingsImg} alt="" />
              <p>Average Ratings</p>
              <h1 className="text-4xl font-extrabold">{ratingAvg}</h1>
            </div>
            <div className="space-y-2">
              <img className="w-10 h-10" src={reviewImg} alt="" />
              <p>Total Reviews</p>
              <h1 className="text-4xl font-extrabold">{reviews}</h1>
            </div>
          </div>
          <button
            onClick={() => updateList(app)}
            className="btn bg-[#00D390] text-white font-semibold my-7 px-5"
          >
            Install Now (291 MB)
          </button>
        </div>
      </div>
      <hr className="my-10 opacity-20 bg-[#001931]" />
      <div>
        <h1 className="text-2xl font-semibold">Ratings</h1>
      </div>
      <hr className="my-10 opacity-20 bg-[#001931]" />
      <div>
        <h1 className="text-2xl font-semibold">Description</h1>
        <p className="text-[#627382] mt-6 mb-10 md:mb-20">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
