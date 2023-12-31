import { ChangeEvent, Dispatch, SetStateAction, useRef, useState } from "react";
import Image from "next/image";

type Props = {
  setQuery: Dispatch<SetStateAction<string>>;
};

const SearchInput = ({ setQuery }: Props) => {
  const [text, setText] = useState("");
  const timer = useRef<NodeJS.Timeout>();

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    clearTimeout(timer.current);
    setText(value);
    timer.current = setTimeout(() => {
      setQuery(value);
    }, 300);
  };

  return (
    <>
      <input
        className="h-10 pr-28 lg:pr-14 lg:w-[400px] rounded-full p-4 text-md bg-white focus:outline-none focus:border focus:border-solid focus:border-cyan-200"
        type="text"
        placeholder="Search Movie"
        value={text}
        onChange={handleInput}
        data-testid="search-input"
      />
      <div className="absolute right-4 top-6">
        <Image width="30" height="32" src="/tmdb-logo.svg" alt="tmdb-logo" />
      </div>
    </>
  );
};

export default SearchInput;
