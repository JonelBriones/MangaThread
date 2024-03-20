import Navbar from "../components/Navbar";
import { FAKE_DATA_PROFILE } from "../data/data";
import Home from "../pages/Home";

const RootLayout = () => {
  const darkMode = FAKE_DATA_PROFILE.mode;
  return (
    <div className="w-full bg-white dark:bg-black ">
      <main className="flex flex-col m-auto sm:max-w-screen-lg text-black dark:text-white ">
        <Navbar />
        <Home />
      </main>
    </div>
  );
};

export default RootLayout;
