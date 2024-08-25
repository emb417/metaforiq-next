import { CgPlayListAdd } from "react-icons/cg";
import { addWishListItem } from "@/actions/actions";

export default function WishListAddItem() {
  return (
    <form action={addWishListItem} className="flex py-4 gap-4 w-full text-white">
      <label
        htmlFor="inputTitle"
        className="text-white text-xl min-w-[max-content]"
      >
        Add Item
      </label>
      <input
        required
        type="text"
        id="inputTitle"
        name="inputTitle"
        placeholder="title"
        autoComplete="off"
        className="min-w-lg bg-slate-950 px-2 py-1 rounded-lg border-2 border-teal-950"
      />
      <button type="submit">
        <CgPlayListAdd className="text-4xl text-amber-500 hover:text-green-500 duration-300 cursor-pointer" />
      </button>
    </form>
  );
}
