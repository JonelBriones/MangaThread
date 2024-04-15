import Navbar from "../components/Navbar";

import Home from "../pages/Home";

const RootLayout = () => {
  return (
    <div className="w-full bg-white dark:bg-black ">
      <main className="flex flex-col m-auto sm:max-w-screen-lg text-black dark:text-white">
        <Navbar />
        <Home />
      </main>
    </div>
  );
};

export default RootLayout;
