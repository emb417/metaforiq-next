import { Suspense } from "react";
import { GiPayMoney } from "react-icons/gi";
import OnOrderItems from "@/components/libowski/on-order/OnOrderItems";

export const metadata = {
  title: "Recent On Order Titles",
};

export default function OnOrderPage() {
  return (
    <div className="w-full">
      <h1 className="flex text-2xl text-white m-4 min-w-[max-content]">
        <GiPayMoney className="text-3xl mr-1 mt-1" />
        {metadata.title}
      </h1>
      <Suspense fallback={<div className="text-2xl text-white m-8">Loading...</div>}>
        <OnOrderItems />
      </Suspense>
    </div>
  );
}
