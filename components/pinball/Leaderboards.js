import PositionLeaderboard from "@/components/pinball/PositionLeaderboard";
import SeasonLeaderboard from "@/components/pinball/SeasonLeaderboard";
import LeaderboardStats from "@/lib/pinball/LeaderboardStats";
import { userWinPercentage } from "@/lib/pinball/PlayerStats";

async function getData() {
  try {
    const response = await fetch(`${process.env.VPC_API_URL}`, {
      next: { revalidate: 300 },
    });
    const data = await response.json();

    const { positionWeeksData, seasonWeeksData } = LeaderboardStats(data);

    const enrichedSeasonWeeksData = seasonWeeksData.map((weekData) => ({
      ...weekData,
      scores: weekData.scores.map((score, index) => ({
        ...score,
        winPercentage: userWinPercentage(seasonWeeksData, score.username),
      })),
    }));

    return {
      props: {
        positionWeeksData,
        seasonWeeksData: enrichedSeasonWeeksData,
      },
    };
  } catch (error) {
    console.error(error);
    return { props: { message: "Server Error" } };
  }
}

export default async function Leaderboards() {
  const { props } = await getData();
  const { positionWeeksData, seasonWeeksData } = props;
  return (
    <div className="grid grid-cols-10 gap-8 mb-14 max-w-3xl">
      <div className="col-span-10 sm:col-span-5">
        <SeasonLeaderboard weeksData={seasonWeeksData} />
      </div>
      <div className="col-span-10 sm:col-span-5">
        <PositionLeaderboard weekData={positionWeeksData[0]} />
      </div>
    </div>
  );
}
