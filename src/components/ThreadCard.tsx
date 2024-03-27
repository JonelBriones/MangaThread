import { BsThreeDots } from "react-icons/bs";
import { GoHeart, GoPaperAirplane } from "react-icons/go";
import { AiOutlineMessage, AiOutlineRetweet } from "react-icons/ai";
import { LuDot } from "react-icons/lu";
import { HiOutlinePlusCircle } from "react-icons/hi2";
import { FAKE_DATA_USERS, FAKE_DATA_PROFILE } from "../data/data";
type Thread = {
  id: 0;
  manga: string;
  text: string;
  replies: [];
  likes: string[];
};

type User = {
  user: string;
  id: number;
  icon: string;
  threads: Thread[];
};

const ThreadCard = ({ user, id, icon, threads }: User) => {
  const darkMode = FAKE_DATA_PROFILE.mode;
  return (
    <div className="text-black dark:text-white">
      {threads?.map((thread) => (
        <div key={thread.id} className="my-2 border-t-2 border-neutral-100">
          <div className="my-2">
            <div className="flex justify-between">
              <div className="flex place-items-center gap-4">
                <div className="flex justify-center place-items-center border rounded-full size-10 relative">
                  {icon ? (
                    <img
                      src={icon}
                      alt="profileIcon"
                      className="rounded-full w-full"
                    />
                  ) : (
                    <p>?</p>
                  )}
                  <HiOutlinePlusCircle
                    size={"1.4rem"}
                    className=" fill-white add-user-icon"
                    color="black"
                  />
                </div>
                <span>{user}</span>
              </div>
              <div className="flex gap-2 place-items-center">
                <span className=" text-black/50 dark:text-white/30 ">23h</span>
                <BsThreeDots />
              </div>
            </div>
            <div className="flex">
              <div
                className={`${
                  thread.replies.length > 0 && "border"
                } w-px h-auto ml-4 my-2`}
              />

              <div className="flex flex-col ml-4 mt-2">
                <p>
                  Manga: <span className="font-medium">{thread.manga}</span>
                </p>
                <p className="text-sm">
                  {thread.text} Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Illo nisi distinctio autem odio! Odio
                </p>
                <div className="flex place-items-center mt-4 gap-2">
                  <GoHeart size={"1.5rem"} />
                  <AiOutlineMessage size={"1.5rem"} />
                  <AiOutlineRetweet size={"1.5rem"} />
                  <GoPaperAirplane size={"1.5rem"} />
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <div className="flex justify-center flex-wrap w-11 h-11">
              {thread.replies[0] && (
                <img
                  src={FAKE_DATA_USERS[0].icon}
                  className="rounded-full size-5 object-cover mt-2"
                />
              )}
              {thread.replies[1] && (
                <img
                  src={FAKE_DATA_USERS[1].icon}
                  className="rounded-full size-5 object-cover mt-2"
                />
              )}
              {thread.replies[2] && (
                <img
                  src={FAKE_DATA_USERS[2].icon}
                  className="rounded-full size-5 object-cover"
                />
              )}
            </div>

            <span className="flex place-items-center gap-1 text-sm  text-black/50 dark:text-white/30">
              {thread.replies?.length > 0 && (
                <span className="cursor-pointer">
                  {thread.replies.length} replies
                </span>
              )}
              {thread.likes?.length && thread.replies?.length > 0 && <LuDot />}
              {thread.likes?.length > 0 && (
                <span className="cursor-pointer">
                  {thread.likes.length} likes
                </span>
              )}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThreadCard;
