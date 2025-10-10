export const loadInstall = () => {
  try {
    const data = localStorage.getItem("install");
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const updateList = (app) => {
  const install = loadInstall();
  try {
    const isInstall = install.some((i) => i.id === app.id);
    if (isInstall) {
      return alert("all ready exist");
    }

    const updateInstall = [...install, app];
    localStorage.setItem("install", JSON.stringify(updateInstall));
  } catch (err) {
    console.log(err);
  }
};

export const removeInstall = (id) => {
  const install = loadInstall();
  try {
    const updateInstall = install.filter((i) => i.id !== id);
    localStorage.setItem("install", JSON.stringify(updateInstall));
  } catch (err) {
    console.log(err);
  }
};
