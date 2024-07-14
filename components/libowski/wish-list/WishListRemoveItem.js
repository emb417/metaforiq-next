import { removeWishListItem } from "@/actions/actions";
import { GiTrashCan } from "react-icons/gi";

export default function WishListRemoveItem({ index, title }) {
  return (
    <form action={removeWishListItem} key={index} className="ml-0">
      <input
        hidden
        type="text"
        id="inputTitle"
        name="inputTitle"
        defaultValue={title}
      />
      <button type="submit">
        <GiTrashCan className="text-5xl text-amber-500 hover:text-red-500 duration-300 cursor-pointer pb-1" />
      </button>
    </form>
  );
}
