import { Suspense } from "react";
import { CgPlayList } from "react-icons/cg";
import { GiBlackball, GiSmallFire, GiPayMoney } from "react-icons/gi";
import PageTitle from "@/components/nav/PageTitle";
import SubNav from "@/components/nav/SubNav";
import BestSellerItems from "@/components/libowski/best-sellers/BestSellerItems";

export const metadata = {
  title: "Recent Best Sellers",
  description: "Library Recent Best Sellers",
  alternates: {
    canonical: "/libowski/best-sellers",
  }
};

const navItems = [
  {
    id: 1,
    icon: <GiBlackball />,
    href: "/libowski",
    text: "Libowski",
  },
  {
    id: 2,
    icon: <GiPayMoney />,
    href: "/libowski/on-order",
    text: "Recent On Orders",
  },
  {
    id: 3,
    icon: <CgPlayList />,
    href: "/libowski/wish-list",
    text: "Wish List",
  },
];

export default function BestSellersPage() {
  return (
    <div className="flex flex-wrap w-full px-4 mb-14">
      <div className="flex flex-wrap w-full items-center mb-4">
        <PageTitle>
          <GiSmallFire />
          {metadata.title}
        </PageTitle>
        <SubNav navItems={navItems} />
      </div>
      <Suspense
        fallback={<div className="text-2xl text-white p-8 animate-pulse">Loading...</div>}
      >
        <BestSellerItems />
      </Suspense>
    </div>
  );
}
