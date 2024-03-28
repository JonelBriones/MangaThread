import ThreadCard from "../components/ThreadCard";
import CreateThreadInput from "../components/CreateThreadInput";

const Home = () => {
  return (
    <section className="flex flex-col w-11/12 m-auto sm:w-3/5">
      <div className="sm:hidden w-full flex justify-center space-x-4">
        <button className="w-full">For you</button>
        <button className="w-full">Following</button>
      </div>
      <CreateThreadInput />
      <ThreadCard />
    </section>
  );
};

export default Home;
