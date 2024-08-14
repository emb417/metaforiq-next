import _ from "lodash";
import { redirect } from "next/navigation";
import PlayerSummaryData from "@/lib/pinball/PlayerStats";
import PlayerBio from "@/components/pinball/player/PlayerBio";
import PlayerRivals from "@/components/pinball/player/PlayerRivals";
import PlayerSeasonSummary from "@/components/pinball/player/PlayerSeasonSummary";
import PlayerSeasonRivals from "@/components/pinball/player/PlayerSeasonRivals";
import PlayerSeasonInsights from "@/components/pinball/player/PlayerSeasonInsights";
import PlayerHistory from "@/components/pinball/player/PlayerHistory";
import PlayerAnnualInsights from "@/components/pinball/player/PlayerAnnualInsights";
import PlayerSeasonChart from "@/components/pinball/player/PlayerSeasonChart";
import PlayerPositionChart from "@/components/pinball/player/PlayerPositionChart";

async function getPlayerSummaryData(username) {
  try {
    const response = await fetch(`${process.env.VPC_API_URL}`, {
      next: { revalidate: 300 },
    });
    const data = await response.json();

    return PlayerSummaryData(data, username);
  } catch (error) {
    console.error(error);
    throw new Error("Server Error");
  }
}

export default async function PlayerProfile({ username }) {
  const {
    playerRivals,
    user,
    userPositionData,
    userSeasonSummary,
    userSeasonRivalsByWinPercentage,
    userSeasonRivalsByPoints,
    userSeasonData,
  } = await getPlayerSummaryData(username);

  if (!user) {
    redirect("/pinball");
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 xl:grid-cols-12 2xl:grid-cols-12 w-full gap-4">
      <div className="flex flex-col lg:col-span-5 xl:col-span-7 2xl:col-span-6 gap-4">
        <div className="flex grid grid-cols-1 md:grid-cols-2 items-center gap-4">
          <PlayerBio user={user} />
          <PlayerRivals playerRivals={playerRivals} />
        </div>
        <PlayerSeasonSummary
          user={user}
          userSeasonSummary={userSeasonSummary}
        />
        <PlayerSeasonRivals
          userSeasonRivalsByWinPercentage={userSeasonRivalsByWinPercentage}
          userSeasonRivalsByPoints={userSeasonRivalsByPoints}
        />
        <PlayerSeasonInsights user={user} />
        <PlayerHistory weeksData={userPositionData} />
        <PlayerAnnualInsights user={user} />
      </div>
      <div className="flex flex-col invisible sm:visible  lg:col-span-6 xl:col-span-5 2xl:col-span-6 items-center gap-2">
        <PlayerSeasonChart weeksData={userSeasonData} />
        <PlayerPositionChart
          weeksData={userPositionData}
          username={user.username}
        />
      </div>
    </div>
  );
}
