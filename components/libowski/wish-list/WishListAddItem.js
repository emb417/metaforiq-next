import { MdOutlinePlaylistAdd } from "react-icons/md";
import { addWishListItem } from "@/actions/actions";

export default function WishListAddItem() {
  return (
    <form
      action={addWishListItem}
      className="flex py-4 gap-2 w-full text-white"
    >
      <input
        required
        type="text"
        id="inputTitle"
        name="inputTitle"
        placeholder="Add title..."
        autoComplete="off"
        className="bg-slate-950 px-2 py-1 rounded-lg border-2 border-teal-950"
      />
      <button type="submit">
        <div className="text-2xl text-white cursor-pointer rounded-full p-1 border-2 border-teal-950 bg-slate-950 hover:text-green-500 hover:border-green-500 hover:bg-slate-800 duration-300">
          <MdOutlinePlaylistAdd />
        </div>
      </button>
    </form>
  );
}
