import { Suspense } from "react";
import { CgPlayList } from "react-icons/cg";
import { GiSmallFire, GiPayMoney } from "react-icons/gi";
import PageTitle from "@/components/nav/PageTitle";
import SubNav from "@/components/nav/SubNav";
import LoadingMessage from "@/components/nav/LoadingMessage";
import WishListAddItem from "@/components/libowski/wish-list/WishListAddItem";
import WishListItems from "@/components/libowski/wish-list/WishListItems";

export const metadata = {
  title: "Wish List",
  description: "Library Wish List",
  alternates: {
    canonical: "/libowski/wish-list",
  }
};

const navItems = [
  {
    id: 1,
    icon: <GiPayMoney />,
    href: "/libowski/on-order",
    text: "Recent On Orders",
  },
  {
    id: 2,
    icon: <GiSmallFire />,
    href: "/libowski/best-sellers",
    text: "Recent Best Sellers",
  },
];

export default function WishListPage() {
  return (
    <div className="flex flex-wrap w-full px-4">
      <div className="flex flex-wrap w-full mb-4 items-center">
        <PageTitle>
          <CgPlayList />
          {metadata.title}
        </PageTitle>
        <SubNav navItems={navItems} />
      </div>
      <WishListAddItem />
      <Suspense
        fallback={<LoadingMessage message={`Loading ${metadata.title}...`} />}
      >
        <WishListItems />
      </Suspense>
    </div>
  );
}
