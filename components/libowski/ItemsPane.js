'use client';

import { useState } from "react";
import { Input } from "antd";
import Item from "@/components/libowski/Item";

const SortMethodButton = ({ sortMethod, setSortMethod, children, value }) => (
  <button
    className={`p-1 rounded-lg text-xs border  hover:bg-slate-800 duration-300 ${
      sortMethod === value ? "border-teal-300 text-teal-300 bg-slate-800" : "border-teal-900 text-white bg-slate-950"
    }`}
    onClick={() => setSortMethod(value)}
  >
    {children}
  </button>
);

export default function ItemsPane({ items }) {
  const [filterValue, setFilterValue] = useState("");
  const [sortMethod, setSortMethod] = useState("recent");

  let filteredItems = items;
  filteredItems =
    filterValue === ""
      ? items
      : items.filter((item) => item.title.toLowerCase().includes(filterValue.toLowerCase()));

  let sortedItems = filteredItems;
  sortedItems =
    sortMethod === "recent"
      ? filteredItems.sort((a, b) => b.createDate - a.createDate)
      : filteredItems.sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div className="flex flex-col w-full pb-4">
      <div className="flex flex-row items-center gap-8 ml-auto mb-2">
        <div className="flex justify-start min-w-[130px] md:w-[230px]">
          <Input
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
            placeholder="Filter by name"
            allowClear
            size="small"
          />
        </div>
        <div className="flex flex-row min-w-[max-content] items-center gap-1 text-teal-300 text-xs">
          Sort by
          <SortMethodButton
            sortMethod={sortMethod}
            setSortMethod={setSortMethod}
            value="recent"
          >
            Recent
          </SortMethodButton>
          or
          <SortMethodButton
            sortMethod={sortMethod}
            setSortMethod={setSortMethod}
            value="name"
          >
            Name
          </SortMethodButton>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
        {sortedItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

