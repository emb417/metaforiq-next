import Link from "next/link";
import Image from "next/image";
import { addWishListItem, removeWishListItem } from "@/actions/actions";
import ItemAvailability from "@/components/libowski/ItemAvailability";
import { Tooltip } from "antd";
import {
  MdOutlineDescription,
  MdOutlinePlaylistAdd,
  MdOutlinePlaylistAddCheck,
  MdOutlinePlaylistRemove,
} from "react-icons/md";

export default function Item({ item }) {
  return (
    <div className="group w-full p-1 rounded-lg border-2 border-teal-950 hover:border-teal-300 bg-slate-950 hover:bg-slate-900 duration-300">
      <div className="flex flex-row items-center justify-center gap-2 w-full h-full">
        <Link href={item.url} target="_blank" rel="noreferrer">
          <Image
            src={
              item.image ??
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAVCAQAAADlN6ZZAAAAE0lEQVR42mNkIAAYRxWMKhhkCgAgfAAWcEsCMwAAAABJRU5ErkJggg=="
            }
            alt={item.title}
            width={64}
            height={84}
            priority
            className="w-[64px] h-[84px] bg-slate-900 rounded group-hover:bg-slate-800 duration-300"
          />
        </Link>
        <div className="flex flex-row w-full h-full">
          <div className="flex flex-col gap-x-1 w-full justify-end pb-2">
            <div className="text-white">
              <Link href={item.url} target="_blank" rel="noreferrer">
                {item.title}
              </Link>
            </div>
            {item.subtitle ? (
              <div className="text-white text-sm">
                <Link href={item.url} target="_blank" rel="noreferrer">
                  {item.subtitle}
                </Link>
              </div>
            ) : null}
            <div className="flex flex-row gap-1 text-teal-300 text-xs items-center">
              {item.publicationYear && item.publicationYear.substring(0, 4)} {item.format || ""}{" "}
              {item.description && (
                <Tooltip
                  title={item.description}
                  color="rgba(30, 41, 59, 0.8)"
                  placement="right"
                >
                  <MdOutlineDescription className="text-lg hover:text-white" />
                </Tooltip>
              )}
            </div>
            {item.edition && (
              <div className="text-white text-xs">{item.edition}</div>
            )}
            <div className="text-gray-400 text-xs">
              {new Date(item.createDate * 1000)
                .toLocaleString()
                .replace(/:\d{2}\s/, " ")}
            </div>
          </div>
          <div className="flex flex-col gap-1 w-full items-end">
            {item.availability && (
              <ItemAvailability
                itemId={item.id}
                availability={item.availability}
              />
            )}
            <div className="flex flex-row gap-1 h-full items-end justify-end">
              {item.onWishList ? (
                <div className="text-xl text-green-500 p-1 rounded-full border border-teal-950 bg-slate-950 cursor-default hover:bg-slate-700 hover:border-green-500 hover:text-green-500 duration-300">
                  <Tooltip
                    title="On wish list."
                    placement="top"
                    color="rgba(30, 41, 59, 0.8)"
                  >
                    <MdOutlinePlaylistAddCheck />
                  </Tooltip>
                </div>
              ) : (
                <form
                  action={addWishListItem}
                  key={item.title}
                  className="flex w-8 h-8 justify-center items-center text-xl text-white rounded-full border border-teal-950 bg-slate-950 cursor-pointer hover:bg-slate-700 hover:border-green-500 hover:text-green-500 duration-300"
                >
                  <input
                    required
                    type="text"
                    id="inputTitle"
                    name="inputTitle"
                    value={item.title}
                    hidden
                    readOnly
                  />
                  <button type="submit">
                    <Tooltip
                      title="Add to wish list."
                      placement="top"
                      color="rgba(30, 41, 59, 0.8)"
                    >
                      <MdOutlinePlaylistAdd />
                    </Tooltip>
                  </button>
                </form>
              )}
              {item.onWishList && (
                <form
                  action={removeWishListItem}
                  key={item.id}
                  className="flex w-8 h-8 justify-center items-center text-xl text-white rounded-full border border-teal-950 bg-slate-950 cursor-pointer hover:bg-slate-700 hover:border-red-500 hover:text-red-500 duration-300"
                >
                  <input
                    hidden
                    type="text"
                    id="inputTitle"
                    name="inputTitle"
                    autoComplete="off"
                    defaultValue={item.title}
                  />
                  <button type="submit">
                    <Tooltip
                      title="Remove from wish list."
                      placement="top"
                      color="rgba(30, 41, 59, 0.8)"
                    >
                      <MdOutlinePlaylistRemove />
                    </Tooltip>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
