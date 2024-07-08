import PageTitle from "@/components/PageTitle";
import { GiPositionMarker } from "react-icons/gi";
import PositionDashboard from "@/components/pinball/PositionDashboard";
import { Suspense } from "react";

export const metadata = {
  title: "Position Trends",
};

export default function PinballPage() {
  return (
    <div>
      <PageTitle>
        <GiPositionMarker className="text-2xl mr-1 mt-1" /> {metadata.title}
      </PageTitle>
      <Suspense
          fallback={
            <div className="text-2xl text-white flex justify-center items-center">
              Loading Position Trends...
            </div>
          }
        >
          <PositionDashboard />
        </Suspense>
    </div>
  );
}
