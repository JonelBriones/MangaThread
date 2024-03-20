import React, { useEffect, useRef, useState } from "react";
import { FAKE_DATA_PROFILE, FAKE_DATA_MANGAS } from "../data/data";
import { FaCheck } from "react-icons/fa6";
import { FcCancel } from "react-icons/fc";

import { HiOutlinePlusCircle } from "react-icons/hi2";

type Thread = {
  manga: string;
  text: string;
};

const defaultThreadForm = {
  manga: "",
  text: "",
};

type User = {
  user: string;
  id: number;
  icon: string;
  threads: Thread[];
};
type Manga = {
  title: string;
  author: string;
  id: number;
};
type SearchResults = {
  searchMangaResults: Manga[];
};

const CreateThreadInput = () => {
  const ref = useRef<HTMLFormElement | null>(null);
  const [profile, setUser] = useState<User>(FAKE_DATA_PROFILE);
  const { user, id, icon, threads } = profile;
  const [thread, setThread] = useState<Thread | null>(null);
  const [threadInput, setThreadInput] = useState<Thread>(defaultThreadForm);
  const [showCreateModel, setShowCreateModel] = useState(false);
  const darkMode = FAKE_DATA_PROFILE.mode;
  const mangaRef = useRef<HTMLDivElement | null>(null);
  const [onShowSelect, setOnShowSelect] = useState(0);
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setThreadInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setThread(threadInput);
    setThreadInput(defaultThreadForm);
  };

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

  const [searchManga, setSearchManga] = useState("");
  const [searchMangaResults, setSearchMangaResults] = useState<Manga[]>([]);
  const [selectManga, setSelectManga] = useState("");
  const onSearchManga = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    value.toLocaleLowerCase;
    setSearchManga(value);
    setSearchMangaResults(
      FAKE_DATA_MANGAS.filter((manga: Manga) =>
        manga.title.toLocaleLowerCase().includes(value)
      )
    );
    setSearchManga(value);
  };

  //   useEffect(() => {
  //     if (searchManga == "") {
  //       return;
  //     }
  //     async function findSearch() {
  //       let results = await FAKE_DATA_MANGAS.filter((manga: Manga) =>
  //         manga.title.toLocaleLowerCase().includes(searchManga)
  //       );

  //       setSearchMangaResults(results);
  //     }
  //     findSearch();
  //     // setSearchMangaResults(
  //     //   FAKE_DATA_MANGAS.filter((manga: Manga) =>
  //     //     manga.title.toLocaleLowerCase().includes(searchManga)
  //     //   )
  //     // );
  //     console.log(searchMangaResults);
  //   }, [searchManga]);

  return (
    <div>
      <div onClick={() => setShowCreateModel(true)}>
        <label>Start a thread...</label>
        <button>Post</button>
      </div>
      {showCreateModel && (
        <form
          onSubmit={onSubmitHandler}
          ref={ref}
          className={`fixed inset-0 bg-black text-black dark:text-white bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10 `}
        >
          <div className="overflow-hidden">
            <h4 className={`text-center mb-2 font-medium text-white`}>
              New thread
            </h4>
            <div className="bg-white dark:bg-neutral-900 border border-white dark:border-neutral-300 rounded-xl threadForm p-8 overflow-auto ">
              <div className="flex gap-4">
                <img src={icon} alt="" className="rounded-full size-10  " />
                <div className="flex flex-col">
                  <p>{user}</p>
                  <div className="flex flex-col  ">
                    {selectManga ? (
                      <div
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() => setSelectManga("")}
                      >
                        <FcCancel size={"1.5rem"} />
                        <p className="text-lg font-medium">{selectManga}</p>
                      </div>
                    ) : (
                      <div className="flex  justify-between place-items-start ">
                        <input
                          type="text"
                          name="search"
                          value={searchManga}
                          onChange={onSearchManga}
                          placeholder="search manga..."
                          className="dark:text-neutral-300 bg-transparent outline-none text-lg font-medium"
                          autoComplete="off"
                        />
                        <div className="flex justify-between w-full">
                          <div className="flex-col">
                            {searchMangaResults?.map((manga: Manga) => (
                              <div
                                key={manga.id}
                                onMouseEnter={() => setOnShowSelect(manga.id)}
                                onMouseLeave={() => setOnShowSelect(0)}
                                className="flex gap-2 justify-between items-center cursor-pointer"
                                onClick={() => setSelectManga(manga.title)}
                              >
                                {onShowSelect == manga.id && (
                                  <FaCheck size={"1.5rem"} />
                                )}
                                <p className="text-lg font-medium">
                                  {manga.title}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    <input
                      type="text"
                      name="text"
                      value={threadInput.text}
                      placeholder="Start a thread..."
                      onChange={onChangeHandler}
                      className="dark:text-neutral-300 bg-transparent outline-none"
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default CreateThreadInput;
