import React, { useEffect, useRef, useState } from "react";
import { FcCancel } from "react-icons/fc";
import {
  FAKE_DATA_MANGAS as mangaList,
  FAKE_DATA_PROFILE as profile,
} from "../data/data";

//
type Manga = {
  title: string;
  author: string;
  id: number;
};

export type Thread = {
  manga: string;
  text: string;
  onChangeHandler: (fields: Partial<Thread>) => void;
  onSubmitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  setShowCreateModel: React.Dispatch<React.SetStateAction<boolean>>;
  showCreateModel: boolean;
  setThread: React.Dispatch<
    React.SetStateAction<{
      manga: string;
      text: string;
    }>
  >;
};

const ThreadPostForm = ({
  text,
  manga,
  onChangeHandler,
  onSubmitHandler,
  setShowCreateModel,
  showCreateModel,
  setThread,
}: Thread) => {
  const [search, setSearch] = useState("");
  const { user, icon } = profile;
  const ref = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    if (!showCreateModel) return;
    let handler = (e: any) => {
      if (ref.current == e.target) {
        setShowCreateModel(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [showCreateModel]);

  return (
    <form
      ref={ref}
      onSubmit={onSubmitHandler}
      className={`fixed inset-0 bg-black text-black dark:text-white bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10 `}
    >
      <div className="overflow-hidden relative">
        <h4 className={`text-center mb-2 font-medium text-white`}>
          New thread
        </h4>

        <div className="bg-white dark:bg-neutral-900 border border-white dark:border-neutral-300 rounded-xl threadForm p-8 overflow-auto ">
          <div className="flex gap-4">
            <img src={icon} alt="" className="rounded-full size-10  " />
            <div className="flex flex-col">
              <p>{user}</p>
              <div className="flex flex-col  ">
                <div className="flex  justify-between place-items-start ">
                  {manga == "" ? (
                    <input
                      type="text"
                      name="search"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="search manga..."
                      className="dark:text-neutral-300 bg-transparent outline-none text-lg font-medium"
                      autoComplete="off"
                    />
                  ) : (
                    <div
                      className="flex items-center gap-2 cursor-pointer"
                      onClick={() => setThread({ manga: "", text })}
                    >
                      <FcCancel size={"1.5rem"} />
                      <p className="text-lg font-medium">{manga}</p>
                    </div>
                  )}

                  {search != "" && manga == "" && (
                    <select
                      name="manga"
                      className="cursor-pointer bg-inherit outline-none"
                      onChange={(e) =>
                        onChangeHandler({ manga: e.target.value })
                      }
                    >
                      <option value="">Select Manga</option>
                      {mangaList.map(
                        (manga: Manga) =>
                          manga.title.toLocaleLowerCase().includes(search) &&
                          search != "" && (
                            <option key={manga.id} value={manga.title}>
                              {manga.title}
                            </option>
                          )
                      )}
                    </select>
                  )}
                </div>
                <input
                  type="text"
                  value={text}
                  name="text"
                  onChange={(e) => onChangeHandler({ text: e.target.value })}
                  placeholder="Start a thread..."
                  className="dark:text-neutral-300 bg-transparent outline-none"
                  autoComplete="off"
                />
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="absolute bottom-8 right-8 py-1 px-3 rounded-full bg-neutral-400/70 text-white  font-medium dark:text-black"
        >
          Post
        </button>
      </div>
    </form>
  );
};

export default ThreadPostForm;
