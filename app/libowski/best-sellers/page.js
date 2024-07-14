import { Suspense } from "react";
import { GiSmallFire } from "react-icons/gi";
import BestSellerItems from "@/components/libowski/best-sellers/BestSellerItems";
import PageTitle from "@/components/nav/PageTitle";

export const metadata = {
  title: "Recent Best Seller Titles",
};

export default function BestSellersPage() {
  return (
    <div className="w-full">
      <PageTitle>
        <GiSmallFire className="text-2xl mr-2 mt-1" />
        {metadata.title}
      </PageTitle>
      <Suspense
        fallback={<div className="text-2xl text-white m-8">Loading...</div>}
      >
        <BestSellerItems />
      </Suspense>
    </div>
  );
}
