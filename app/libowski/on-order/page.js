import { Suspense } from "react";
import { CgPlayList } from "react-icons/cg";
import { GiSmallFire, GiPayMoney } from "react-icons/gi";
import PageTitle from "@/components/nav/PageTitle";
import SubNav from "@/components/nav/SubNav";
import LoadingMessage from "@/components/nav/LoadingMessage";
import OnOrderPane from "@/components/libowski/on-order/OnOrderPane";

export const metadata = {
  title: "Recent On Orders",
  description: "Library Recent On Orders",
  alternates: {
    canonical: "/libowski/on-order",
  }
};

const navItems = [
  {
    id: 1,
    icon: <GiSmallFire/>,
    href: "/libowski/best-sellers",
    text: "Recent Best Sellers",
  },
  {
    id: 2,
    icon: <CgPlayList/>,
    href: "/libowski/wish-list",
    text: "Wish List",
  },
];

export default function OnOrderPage() {
  return (
    <div className="flex flex-wrap w-full px-4">
      <div className="flex flex-wrap w-full items-center">
        <PageTitle>
          <GiPayMoney />
          {metadata.title}
        </PageTitle>
        <SubNav navItems={navItems} />
      </div>
      <Suspense
        fallback={<LoadingMessage message={`Loading ${metadata.title}...`} />}
      >
        <OnOrderPane />
      </Suspense>
    </div>
  );
}
