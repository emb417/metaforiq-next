import Link from "next/link";
import { GiTrashCan } from "react-icons/gi";
import { CgPlayList } from "react-icons/cg";
import AddItem from "@/app/libowski/wish-list/components/AddIem";

export const metadata = {
  title: "Wish List Items",
};

const getData = async () => {
  try {
    const response = await fetch(`${process.env.LIBOWSKI_API_URL}/wish-list`, {
      next: { revalidate: 0 },
    });
    const data = await response.json();
    return { props: { items: data } };
  } catch (error) {
    console.error(error);
    return { props: { items: [] } };
  }
};

const WishListItems = async () => {
  const { props } = await getData();
  const { items } = props;

  return (
    <div className="flex flex-wrap w-full text-white">
    <h1 className="flex text-2xl m-4 min-w-[max-content]">
      <CgPlayList className="text-3xl mr-1 mt-1" />
      {metadata.title}
    </h1>
    <AddItem />
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full m-4">
      {items.length > 0 ? (
        items.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-start bg-slate-950 p-4 rounded-lg border-2 border-teal-950"
          >
            <div className="flex items-center gap-4 w-full">
              <p className="text-white">{item}</p>
            </div>
            <Link
              href={`/libowski/wish-list/remove-from/${item}`}
              className="text-white hover:text-teal-300 duration-300"
            >
              <GiTrashCan className="text-5xl text-amber-500 hover:text-red-500 duration-300 cursor-pointer w-full ml-2 pb-1 text-end" />
            </Link>
          </div>
        ))
      ) : (
        <p className="text-white">No wish list items.</p>
      )}
    </div>
  </div>
  );
};

export default WishListItems;
