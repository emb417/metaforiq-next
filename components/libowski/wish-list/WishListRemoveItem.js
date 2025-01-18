import { removeWishListItem } from "@/actions/actions";
import { MdOutlinePlaylistRemove } from "react-icons/md";

export default function WishListRemoveItem({ index, title }) {
  return (
    <form action={removeWishListItem} key={index} className="ml-0">
      <input
        hidden
        type="text"
        id="inputTitle"
        name="inputTitle"
        autoComplete="off"
        defaultValue={title}
      />
      <button type="submit">
        <div className="text-2xl text-white cursor-pointer rounded-full p-1 border-2 border-teal-950 bg-slate-950 hover:text-red-500 hover:border-red-500 hover:bg-slate-800 duration-300">
          <MdOutlinePlaylistRemove />
        </div>
      </button>
    </form>
  );
}
