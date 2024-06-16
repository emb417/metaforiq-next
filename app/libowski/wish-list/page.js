import AddItem from "@/components/AddIem";
import WishListItems from "@/components/WishListItems";
import { CgPlayList } from "react-icons/cg";

export const metadata = {
  title: "Wish List",
};

export default async function WishListPage() {
  return (
    <div className="flex flex-wrap w-full text-white">
      <h1 className="flex text-2xl m-4 min-w-[max-content]">
        <CgPlayList className="text-3xl mr-1 mt-1" />
        Wish List
      </h1>
      <AddItem />
      <WishListItems />
    </div>
  );
}