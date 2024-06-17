"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { CgPlayListAdd } from "react-icons/cg";

const AddItem = () => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const handleLinkClick = () => {
    setInputValue(inputRef.current.value);
  };

  return (
    <div className="flex w-full items-center m-4 gap-4">
      <label htmlFor="inputTitle" className="text-white text-xl min-w-[max-content] ml-4">Add Item</label>
      <input
        type="text"
        name="inputTitle"
        placeholder="title+keywords"
        ref={inputRef}
        className="min-w-lg bg-slate-950 p-1 rounded-lg border-2 border-teal-950"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Link
        href={`/libowski/wish-list/add-to/${inputValue}`}
        onClick={handleLinkClick}
        className="text-white hover:text-teal-300 duration-300"
      >
        <CgPlayListAdd className="text-4xl text-amber-500 hover:text-green-500 duration-300 cursor-pointer" />
      </Link>
    </div>
  );
};

export default AddItem;
