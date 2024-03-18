import Navbar from "../components/Navbar";
import Home from "../pages/Home";

const RootLayout = () => {
  return (
    <div className="m-auto sm:max-w-screen-lg ">
      <main className="flex flex-col ">
        <Navbar />
        <Home />
      </main>
    </div>
  );
};

export default RootLayout;
