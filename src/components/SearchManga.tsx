import React from "react";
import { FaCheck } from "react-icons/fa6";

type SearchProps = {
  searchManga: string;
  mangaSelect: string;
  onMangaSelect: (title: string) => void;
  searchMangaResults: Manga[];
  onSearchManga: (e: React.ChangeEvent<HTMLInputElement>) => string;
};
type Manga = {
  title: string;
};

export const SearchManga = ({
  searchManga,
  searchMangaResults,
  mangaSelect,
  onMangaSelect,
  onSearchManga,
}: SearchProps) => {
  console.log(searchManga);
  return (
    <div className="flex">
      <input
        type="text"
        name="search"
        value={searchManga}
        onChange={onSearchManga}
        placeholder="search manga..."
        className="dark:text-neutral-300 bg-transparent outline-none"
      />
      {searchMangaResults?.map((manga: Manga) =>
        mangaSelect ? (
          <div
            key={manga.title}
            className="flex justify-center place-items-center gap-2"
            onClick={() => onMangaSelect(manga.title)}
          >
            <button>{manga.title}</button>
            {mangaSelect == manga.title && <FaCheck />}
          </div>
        ) : (
          <div
            key={manga.title}
            className="flex justify-center place-items-center gap-2"
            onClick={() => onMangaSelect(manga.title)}
          >
            {manga.title}
          </div>
        )
      )}
    </div>
  );
};
