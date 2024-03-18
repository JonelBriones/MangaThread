import { BsThreeDots } from "react-icons/bs";
import { GoHeart, GoHeartFill, GoPaperAirplane } from "react-icons/go";
import { AiOutlineMessage, AiOutlineRetweet } from "react-icons/ai";
import { LuDot } from "react-icons/lu";
import { HiOutlinePlusCircle } from "react-icons/hi2";
import { FAKE_DATA_USERS } from "../data/data";
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
  return (
    <div>
      {threads?.map((thread) => (
        <div key={thread.id} className="my-2 border-t-2 border-neutral-100">
          <div className="my-2">
            <div className="flex justify-between">
              <div className="flex place-items-center gap-4">
                <div className="flex justify-center place-items-center border rounded-full size-10 relative">
                  {icon ? (
                    <img src={icon} alt="" className="rounded-full w-full" />
                  ) : (
                    <p>?</p>
                  )}
                  <HiOutlinePlusCircle
                    size={"1.4rem"}
                    className=" fill-white add-user-icon"
                  />
                </div>
                <span className="">{user}</span>
              </div>
              <div className="flex gap-2 place-items-center">
                <span className="opacity-60">23h</span>
                <BsThreeDots />
              </div>
            </div>
            <div className="flex">
              <div className="border w-px h-auto ml-4 my-2"></div>
              <div className="flex flex-col ml-4 mt-2">
                <p>
                  Manga: <span className="font-medium">{thread.manga}</span>
                </p>
                <p>
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
            {FAKE_DATA_USERS.length > 1 && (
              <div className="flex justify-center flex-wrap w-11 h-11">
                <img
                  src={FAKE_DATA_USERS[0].icon}
                  className="rounded-full size-5 object-cover mt-2"
                />
                <img
                  src={FAKE_DATA_USERS[1].icon}
                  className="rounded-full size-6 object-cover  "
                />
                <img
                  src={FAKE_DATA_USERS[2].icon}
                  className="rounded-full size-4 object-cover"
                />
              </div>
            )}
            <span className="flex place-items-center gap-1 text-sm opacity-60">
              {thread.replies?.length > 0 && `${thread.replies.length} replies`}
              {thread.likes?.length && thread.replies?.length > 0 && <LuDot />}
              {thread.likes?.length > 0 && `${thread.likes.length} likes`}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThreadCard;
