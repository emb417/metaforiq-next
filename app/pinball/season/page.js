import PageTitle from "@/components/PageTitle";
import { MdLeaderboard } from "react-icons/md";
import SeasonDashboard from "@/components/pinball/SeasonDashboard";
import { Suspense } from "react";

export const metadata = {
  title: "Season Dashboard",
};

export default function PinballPage() {
  return (
    <div>
      <PageTitle>
        <MdLeaderboard className="text-2xl mr-1 mt-1" /> {metadata.title}
      </PageTitle>
      <Suspense
          fallback={
            <div className="text-2xl text-white flex justify-center items-center">
              Loading Season Dashboard...
            </div>
          }
        >
          <SeasonDashboard />
        </Suspense>
    </div>
  );
}
