import { Suspense } from "react";
import { CgPlayList } from "react-icons/cg";
import { GiBlackball, GiSmallFire, GiPayMoney } from "react-icons/gi";
import PageTitle from "@/components/nav/PageTitle";
import SubNav from "@/components/nav/SubNav";
import OnOrderItems from "@/components/libowski/on-order/OnOrderItems";

export const metadata = {
  title: "Recent On Orders",
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
    icon: <GiSmallFire/>,
    href: "/libowski/best-sellers",
    text: "Recent Best Sellers",
  },
  {
    id: 3,
    icon: <CgPlayList/>,
    href: "/libowski/wish-list",
    text: "Wish List",
  },
];

export default function OnOrderPage() {
  return (
    <div className="flex flex-wrap w-full px-4 mb-14">
      <div className="flex flex-wrap w-full items-center mb-4">
        <PageTitle>
          <GiPayMoney />
          {metadata.title}
        </PageTitle>
        <SubNav navItems={navItems} />
      </div>
      <Suspense
        fallback={<div className="text-2xl text-white m-8">Loading...</div>}
      >
        <OnOrderItems />
      </Suspense>
    </div>
  );
}
