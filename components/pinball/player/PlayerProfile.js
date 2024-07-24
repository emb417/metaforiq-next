import _ from "lodash";
import { PlayerSummaryData } from "@/lib/pinball/PlayerStats";
import PlayerBio from "@/components/pinball/player/PlayerBio";
import PlayerSummary from "@/components/pinball/player/PlayerSummary";
import PlayerHistory from "@/components/pinball/player/PlayerHistory";
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
    user,
    userPositionDetails,
    userPositionData,
    userSeasonDetails,
    userSeasonData,
  } = await getPlayerSummaryData(username);

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 xl:grid-cols-10 w-full gap-4">
      <div className="flex flex-col xl:col-span-2 gap-4">
        <PlayerBio
          user={user}
          userPositionDetails={userPositionDetails}
          userSeasonDetails={userSeasonDetails}
        />
        <PlayerSummary user={user} />
      </div>
      <div className="md:col-span-2 xl:col-span-3">
        <PlayerHistory weeksData={userPositionData} />
      </div>
      <div className="flex flex-col md:col-span-2 xl:col-span-5 items-center gap-2">
        <PlayerSeasonChart weeksData={userSeasonData} />
        <PlayerPositionChart
          weeksData={userPositionData}
          username={user.username}
        />
      </div>
    </div>
  );
}
