import Auth from "@/app/libowski/wish-list/components/Auth";
import { CgPlayList } from "react-icons/cg";

export const metadata = {
  title: "Wish List Home",
};

export default function WishListPage() {

    return (
      <div className="flex flex-wrap w-full text-white">
        <h1 className="flex text-2xl m-4 min-w-[max-content]">
          <CgPlayList className="text-3xl mr-1 mt-1" />
          {metadata.title}
        </h1>
        <Auth />
      </div>
    );
}
