import { Suspense } from "react";
import { CgPlayList } from "react-icons/cg";
import PageTitle from "@/components/PageTitle";
import WishListAddItem from "@/components/libowski/wish-list/WishListAddItem";
import WishListItems from "@/components/libowski/wish-list/WishListItems";

export const metadata = {
  title: "Wish List",
};

export default function WishListPage() {
  return (
    <div className="flex flex-wrap w-full text-white">
      <PageTitle>
        <CgPlayList className="text-3xl mr-1 mt-1" />
        {metadata.title}
      </PageTitle>
      <WishListAddItem />
      <Suspense
        fallback={<div className="text-2xl text-white m-8">Loading...</div>}
      >
        <WishListItems />
      </Suspense>
    </div>
  );
}
