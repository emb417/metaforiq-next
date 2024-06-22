import PageTitle from "@/components/PageTitle";
import PinballDashboard from "@/components/pinball/Dashboard";
import { Suspense } from "react";
import { GiPinballFlipper } from "react-icons/gi";

export const metadata = {
  title: "Pinball Dashboard",
};

export default function PinballPage() {
  return (
    <div>
      <PageTitle>
        <GiPinballFlipper className="text-2xl mr-1" /> {metadata.title}
      </PageTitle>
      <Suspense
        fallback={
          <div className="text-2xl text-white flex justify-center items-center">
            Loading...
          </div>
        }
      >
        <PinballDashboard />
      </Suspense>
    </div>
  );
}
