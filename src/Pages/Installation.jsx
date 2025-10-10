import React, { useState } from "react";
import downloadImg from "../assets/icon-downloads.png";
import ratingsImg from "../assets/icon-ratings.png";
import { loadInstall, removeInstall } from "../Utilities/localStorage";
import { toast } from "react-toastify";
const Installation = () => {
  const [install, setInstall] = useState(() => loadInstall());
  const [sortOrder, setSortOrder] = useState("none");

  if (!install.length) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-2xl md:text-4xl font-bold ">No Data Available</h1>
      </div>
    );
  }

  const cleanDownloads = (value) => {
    return parseInt(value) || 0;
  };

  const sortedItem = (() => {
    if (sortOrder === "download-asc") {
      return [...install].sort(
        (a, b) => cleanDownloads(a.downloads) - cleanDownloads(b.downloads)
      );
    } else if (sortOrder === "download-desc") {
      return [...install].sort(
        (a, b) => cleanDownloads(b.downloads) - cleanDownloads(a.downloads)
      );
    } else {
      return install;
    }
  })();

  const handleUninstall = (id, title) => {
    removeInstall(id);
    setInstall((prev) => prev.filter((i) => i.id !== id));
    toast.success(`${title} uninstall from your device`);
  };
  return (
    <div className="container mx-auto mt-10 md:mt-20">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Your Installed Apps</h1>
        <p className="text-[#627382] mt-4">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-2xl font-semibold mb-5 md:mb-0">
          {sortedItem.length} Apps Found
        </h1>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="select font-semibold"
        >
          <option value="none" disabled={true} className="text-[#627382]">
            Sort By Size
          </option>
          <option value="download-asc">Low-High</option>
          <option value="download-desc">High-Low</option>
        </select>
      </div>
      <div>
        {sortedItem.map((i) => (
          <div className="flex justify-between bg-white rounded shadow-md p-4 items-center my-4 mx-3 md:mx-0">
            <div className=" flex gap-4 items-center">
              <div>
                <img
                  className="w-10 md:w-20 h-10 md:h-20 rounded-lg bg-[#D9D9D9] "
                  src={i.image}
                  alt=""
                />
              </div>
              <div>
                <h1 className="md:text-2xl font-medium">{i.title}</h1>
                <div className="flex gap-4 mt-4">
                  <div className="flex gap-2 items-center">
                    <img className="w-4 h-4" src={downloadImg} alt="" />
                    <p className="text-[#00D390] font-medium">{i.downloads}</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img className="w-4 h-4" src={ratingsImg} alt="" />
                    <p className="text-[#FF8811] font-medium">{i.ratingAvg}</p>
                  </div>
                  <div>
                    <p className="text-[#627382] font-medium">{i.reviews}</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={() => handleUninstall(i.id, i.title)}
                className="btn bg-[#00D390] text-white rounded font-semibold"
              >
                Uninstall
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
