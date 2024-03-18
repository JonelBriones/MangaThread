import { useState } from "react";
import { FAKE_DATA_PROFILE, FAKE_DATA_MANAGA } from "../data/data";
import ThreadCard from "../components/ThreadCard";
type User = {
  user: string;
  id: number;
  icon: string;
  mode: string;
  threads: [];
};
const Home = () => {
  const [user, setUser] = useState<User>(FAKE_DATA_PROFILE);
  console.log(user);
  return (
    <section className="flex flex-col w-11/12 m-auto sm:w-3/5">
      <div className="sm:hidden w-full flex justify-center space-x-4">
        <button className="w-full">For you</button>
        <button className="w-full">Following</button>
      </div>
      <ThreadCard {...user} />
    </section>
  );
};

export default Home;
