import Link from "next/link";
import { Suspense } from "react";
import { GiPositionMarker } from "react-icons/gi";
import { MdLeaderboard } from "react-icons/md";
import PageTitle from "@/components/PageTitle";
import SeasonDashboard from "@/components/pinball/SeasonDashboard";

export const metadata = {
  title: "Season Leaderboard",
};

export default function PinballPage() {
  return (
    <div>
      <PageTitle className="flex items-center">
        <MdLeaderboard className="text-2xl mr-1 mt-1" />
        {metadata.title}
        <Link
          href="/pinball/position"
          className="ml-auto flex text-xl text-white items-end border-b-2 border-teal-950 hover:text-teal-300 duration-300 cursor-pointer"
        >
          <GiPositionMarker className="text-xl mb-1 mr-1" />
          Position Trends
        </Link>
      </PageTitle>
      <Suspense
        fallback={
          <div className="text-2xl text-white flex justify-center items-center">
            Loading Season Leaderboard...
          </div>
        }
      >
        <SeasonDashboard />
      </Suspense>
    </div>
  );
}
