import _ from "lodash";
import LeaderboardStats from "@/lib/pinball/LeaderboardStats";
import WeeklyLeaderboard from "@/components/pinball/WeeklyLeaderboard";
import WeeklyChart from "@/components/pinball/WeeklyChart";

async function getData() {
  try {
    const response = await fetch(`${process.env.VPC_API_URL}`, {
      next: { revalidate: 300 },
    });
    const data = await response.json();

    const { positionWeeksData } = LeaderboardStats(data);

    return { props: { weeksData: positionWeeksData } };
  } catch (error) {
    console.error(error);
    return { props: { message: "Server Error" } };
  }
}

export default async function WeeklyDashboard() {
  const { props } = await getData();
  const { weeksData } = props;
  return (
    <div className="grid grid-cols-12 mb-14 gap-4 w-full">
      <div className="col-span-12 sm:col-span-8 md:col-span-6 lg:col-span-4 xl:col-span-3">
        <WeeklyLeaderboard weekData={weeksData[0]} />
      </div>
      <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-8 xl:col-span-9">
        <WeeklyChart
          weeksData={weeksData}
          topPlayers={_.take(_.map(weeksData[0].scores, "username"), 3)}
        />
      </div>
    </div>
  );
}
