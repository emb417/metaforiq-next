import Link from "next/link";
import { Suspense } from "react";
import { GiPositionMarker } from "react-icons/gi";
import { MdLeaderboard } from "react-icons/md";
import PageTitle from "@/components/PageTitle";
import PositionDashboard from "@/components/pinball/PositionDashboard";

export const metadata = {
  title: "Position Trends",
};

export default function PinballPage() {
  return (
    <div>
      <PageTitle className="flex items-center">
        <GiPositionMarker className="text-2xl mr-1 mt-1" />
        {metadata.title}
        <Link
          href="/pinball/season"
          className="ml-auto flex text-xl text-white items-end border-b-2 border-teal-950 hover:text-teal-300 duration-300 cursor-pointer"
        >
          <MdLeaderboard className="text-xl mb-1 mr-1" />
          Season Leaderboard
        </Link>
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
