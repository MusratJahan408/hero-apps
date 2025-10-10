import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import logoImg from "../assets/logo.png";
import downloadImg from "../assets/icon-downloads.png";
import ratingsImg from "../assets/icon-ratings.png";
import reviewImg from "../assets/icon-review.png";
import { loadInstall, updateList } from "../Utilities/localStorage";
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { toast } from "react-toastify";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  const [isInstall, setIsInstall] = useState(false);
  useEffect(() => {
    if (!apps || apps.length === 0) return;

    const appFound = apps.find((a) => a.id === parseInt(id));
    if (!appFound) return;

    const installList = loadInstall() || [];
    const exist = installList.some((i) => i.id === appFound.id);
    setIsInstall(exist);
  }, [id, apps]);

  if (loading || !apps || apps.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-3xl md:text-6xl font-bold flex gap-2">
          L<img className="w-14 h-14 animate-spin" src={logoImg} alt="" />O D I
          N G
        </h1>
      </div>
    );
  }

  const app = apps.find((a) => a.id === parseInt(id));

  if (!app) {
    return <h1>App Not Found</h1>;
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

  const handleInstall = () => {
    updateList(app);
    setIsInstall(true);
    toast.success(`Yahoo!!${title} installed successfully`);
  };

  return (
    <div className="container mx-auto mt-10 md:mt-20">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div>
          <img className="w-40 md:w-80 h-40 md:h-80" src={image} alt="" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-[#627382] font-semibold mt-2">
            Company Name:{" "}
            <span className="font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              {companyName}
            </span>
          </p>
          <hr className="opacity-20 my-7 w-[1050px] bg-[#001931] hidden md:block" />
          <div className="flex gap-5 md:gap-20 mt-5 md:mt-0">
            <div className="space-y-2">
              <img
                className="w-5 md:w-10 h-5 md:h-10"
                src={downloadImg}
                alt=""
              />
              <p>Downloads</p>
              <h1 className="text-2xl md:text-4xl font-extrabold">
                {downloads}
              </h1>
            </div>
            <div className="space-y-2">
              <img
                className="w-5 md:w-10 h-5 md:h-10"
                src={ratingsImg}
                alt=""
              />
              <p>Average Ratings</p>
              <h1 className="text-2xl md:text-4xl font-extrabold">
                {ratingAvg}
              </h1>
            </div>
            <div className="space-y-2">
              <img className="w-5 md:w-10 h-5 md:h-10" src={reviewImg} alt="" />
              <p>Total Reviews</p>
              <h1 className="text-2xl md:text-4xl font-extrabold">{reviews}</h1>
            </div>
          </div>
          <button
            onClick={handleInstall}
            disabled={isInstall}
            className="btn bg-[#00D390] text-white font-semibold my-7 px-5"
          >
            {isInstall ? "Installed" : "Install Now"}
          </button>
        </div>
      </div>
      <hr className="my-10 opacity-20 bg-[#001931] hidden md:block" />
      <div>
        <h1 className="text-2xl font-semibold pl-8 md:pl-0">Ratings</h1>
        <div className="h-80 mt-2 md:mt-6">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              layout="vertical"
              width={500}
              height={400}
              data={[...ratings].reverse()}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis type="count" />
              <YAxis dataKey="name" type="category" scale="band" />
              <Tooltip />
              <Legend />
              <Area dataKey="count" fill="#8884d8" stroke="#8884d8" />
              <Bar dataKey="count" barSize={20} fill="#413ea0" />
              <Line dataKey="count" stroke="#ff7300" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
      <hr className="my-10 opacity-20 bg-[#001931] hidden md:block" />
      <div className="px-8 md:px-0">
        <h1 className="text-2xl font-semibold">Description</h1>
        <p className="text-[#627382] mt-6 mb-10 md:mb-20">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
