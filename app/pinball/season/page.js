import Link from "next/link";
import { Suspense } from "react";
import { GiPositionMarker } from "react-icons/gi";
import { MdLeaderboard } from "react-icons/md";
import PageTitle from "@/components/PageTitle";
import SeasonDashboard from "@/components/pinball/SeasonDashboard";

export const metadata = {
  title: "Season Leaderboard",
};

export default function SeasonPage() {
  return (
    <div className="flex flex-wrap w-full">
      <PageTitle>
        <div className="flex p-2 items-center min-w-[max-content]">
          <MdLeaderboard className="mr-1" />
          {metadata.title}
        </div>
        <div className="flex items-center ml-auto">
          <Link
            href="/pinball/position"
            className="flex p-2 ml-auto text-sm text-white items-end border-l-2 border-teal-950 hover:text-teal-300 duration-300 cursor-pointer"
          >
            <GiPositionMarker className="mb-1 mr-1" />
            Position Trends
          </Link>
        </div>
      </PageTitle>
      <Suspense
        fallback={
          <div className="w-full text-2xl text-white flex justify-center items-center">
            Loading Season Leaderboard...
          </div>
        }
      >
        <SeasonDashboard />
      </Suspense>
    </div>
  );
}
