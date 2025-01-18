import { Suspense } from "react";
import { CgPlayList } from "react-icons/cg";
import { GiSmallFire, GiPayMoney } from "react-icons/gi";
import PageTitle from "@/components/nav/PageTitle";
import SubNav from "@/components/nav/SubNav";
import LoadingMessage from "@/components/nav/LoadingMessage";
import BestSellersPane from "@/components/libowski/best-sellers/BestSellersPane";

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
    icon: <GiPayMoney />,
    href: "/libowski/on-order",
    text: "Recent On Orders",
  },
  {
    id: 2,
    icon: <CgPlayList />,
    href: "/libowski/wish-list",
    text: "Wish List",
  },
];

export default function BestSellersPage() {
  return (
    <div className="flex flex-wrap w-full gap-1 px-4">
      <div className="flex flex-wrap w-full items-center">
        <PageTitle>
          <GiSmallFire />
          {metadata.title}
        </PageTitle>
        <SubNav navItems={navItems} />
      </div>
      <Suspense
        fallback={<LoadingMessage message={`Loading ${metadata.title}...`} />}
      >
        <BestSellersPane />
      </Suspense>
    </div>
  );
}
