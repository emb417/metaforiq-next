import PinballDashboard from "@/components/pinball/Dashboard";
import { Suspense } from "react";
import { GiPinballFlipper } from "react-icons/gi";

export const metadata = {
  title: "Pinball Dashboard",
};

export default function PinballPage() {
  return (
    <div>
      <h1 className="flex text-xl font-bold my-4 ml-4 justify-center text-white uppercase">
        <GiPinballFlipper className="text-2xl mr-1" /> {metadata.title}
      </h1>
      <Suspense fallback={
        <div className="text-2xl text-white flex justify-center items-center">
          Loading...
        </div>}>
        <PinballDashboard />
      </Suspense>
    </div>
  );
}
