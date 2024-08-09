import _ from "lodash";
import PlayerSummaryData from "@/lib/pinball/PlayerStats";
import PlayerBio from "@/components/pinball/player/PlayerBio";
import PlayerSeasonSummary from "@/components/pinball/player/PlayerSeasonSummary";
import PlayerSeasonInsights from "@/components/pinball/player/PlayerSeasonInsights";
import PlayerHistory from "@/components/pinball/player/PlayerHistory";
import PlayerAnnualInsights from "@/components/pinball/player/PlayerAnnualInsights";
import PlayerSeasonChart from "@/components/pinball/player/PlayerSeasonChart";
import PlayerPositionChart from "@/components/pinball/player/PlayerPositionChart";
import { redirect } from "next/navigation";

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
    user,
    userPositionData,
    userSeasonSummary,
    userSeasonData,
  } = await getPlayerSummaryData(username);

  if (!user) {
    redirect("/pinball");
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 xl:grid-cols-10 w-full gap-4">
      <div className="flex flex-col lg:col-span-3 xl:col-span-4 gap-4">
        <PlayerBio user={user} />
        <PlayerSeasonSummary user={user} userSeasonSummary={userSeasonSummary} />
        <PlayerSeasonInsights user={user} />
        <PlayerHistory weeksData={userPositionData} />
        <PlayerAnnualInsights user={user} />
      </div>
      <div className="flex flex-col lg:col-span-3 xl:col-span-6 items-center gap-2">
        <PlayerSeasonChart weeksData={userSeasonData} />
        <PlayerPositionChart
          weeksData={userPositionData}
          username={user.username}
        />
      </div>
    </div>
  );
}
