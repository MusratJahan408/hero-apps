import React, { useEffect, useState } from "react";

const Installation = () => {
  const [install, setInstall] = useState([]);
  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("install"));
    if (savedList) {
      setInstall(savedList);
    }
  }, []);
  return <div>Installation</div>;
};

export default Installation;
