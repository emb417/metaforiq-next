import { addWishListItem } from "@/actions/actions";
import { CgPlayListAdd } from "react-icons/cg";

export default function WishListAddItem() {
  return (
    <form action={addWishListItem} className="flex ml-4 gap-4 w-full">
      <label
        htmlFor="inputTitle"
        className="text-white text-xl min-w-[max-content] ml-4"
      >
        Add Item
      </label>
      <input
        required
        type="text"
        id="inputTitle"
        name="inputTitle"
        placeholder="title"
        className="min-w-lg bg-slate-950 px-2 py-1 rounded-lg border-2 border-teal-950"
      />
      <button type="submit">
        <CgPlayListAdd className="text-4xl text-amber-500 hover:text-green-500 duration-300 cursor-pointer" />
      </button>
    </form>
  );
}
