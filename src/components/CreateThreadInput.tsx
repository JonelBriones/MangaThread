import React, { useState } from "react";
import { FAKE_DATA_PROFILE as profile } from "../data/data";

import ThreadPostForm, { Thread } from "./ThreadPostForm";

const defaultThreadForm = {
  manga: "",
  text: "",
};

const CreateThreadInput = () => {
  const [showCreateModel, setShowCreateModel] = useState(false);
  const [thread, setThread] = useState(defaultThreadForm);

  const onChangeHandler = (fields: Partial<Thread>) => {
    setThread((prev) => {
      return { ...prev, ...fields };
    });
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { manga, text } = thread;
    if (!manga || !text) return;
    console.log("submitting post");
    setShowCreateModel(false);

    setThread(defaultThreadForm);
  };

  return (
    <div className="hidden sm:flex items-center justify-between py-2">
      <div className="size-10">
        <img
          src={profile.icon}
          alt="profileIcon"
          className="rounded-full cursor-pointer w-full"
        />
      </div>
      <label
        className="flex-1 px-3 text-sm text-neutral-400 cursor-text"
        onClick={() => setShowCreateModel(true)}
      >
        Start a thread...
      </label>
      <button className="bg-neutral-400/70 text-white dark:text-black  font-medium py-1 px-3 rounded-full cursor-not-allowed">
        Post
      </button>

      {showCreateModel && (
        <ThreadPostForm
          {...thread}
          onChangeHandler={onChangeHandler}
          onSubmitHandler={onSubmitHandler}
          showCreateModel={showCreateModel}
          setShowCreateModel={setShowCreateModel}
          setThread={setThread}
        />
      )}
    </div>
  );
};

export default CreateThreadInput;
