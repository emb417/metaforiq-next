import LeaderboardStats from "@/lib/pinball/LeaderboardStats";
import SeasonLeaderboard from "@/components/pinball/SeasonLeaderboard";
import WeeklyLeaderboard from "@/components/pinball/WeeklyLeaderboard";
import RankLeaderboard from "@/components/pinball/RankLeaderboard";

async function getData() {
  try {
    const response = await fetch(`${process.env.VPC_API_URL}`, {
      next: { revalidate: 300 },
    });
    const data = await response.json();

    const { rankedPlayers, positionWeeksData, seasonWeeksData } = LeaderboardStats(data);

    return {
      props: {
        rankedPlayers,
        positionWeeksData,
        seasonWeeksData,
      },
    };
  } catch (error) {
    console.error(error);
    return { props: { message: "Server Error" } };
  }
}

export default async function Leaderboards() {
  const { props } = await getData();
  const { rankedPlayers, positionWeeksData, seasonWeeksData } = props;
  return (
    <div className="grid grid-cols-12 gap-8 mb-14 max-w-6xl">
      <div className="col-span-12 sm:col-span-6 md:col-span-6 xl:col-span-4">
        <RankLeaderboard rankedPlayers={rankedPlayers} />
      </div>
      <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-5 xl:col-span-4">
        <WeeklyLeaderboard weekData={positionWeeksData[0]} />
      </div>
      <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-5 xl:col-span-4">
        <SeasonLeaderboard weeksData={seasonWeeksData} />
      </div>
    </div>
  );
}
