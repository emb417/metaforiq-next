import _ from "lodash";
import PositionChart from "@/components/pinball/PositionChart";
import PositionLeaderboard from "@/components/pinball/PositionLeaderboard";
import LeaderboardStats from "@/lib/pinball/PlayerStats";

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

export default async function PinballDashboard() {
  const { props } = await getData();
  const { weeksData } = props;
  return (
    <div className="grid grid-cols-12 mb-14 gap-4 w-full">
      <div className="col-span-12 sm:col-span-7 md:col-span-8 lg:col-span-9 xl:col-span-9">
        <PositionChart weeksData={weeksData} topPlayers={_.take(_.map(weeksData[0].scores, 'username'), 3)} />
      </div>
      <div className="col-span-12 sm:col-span-5 md:col-span-4 lg:col-span-3 xl:col-span-3">
        <PositionLeaderboard weekData={weeksData[0]} />
      </div>
    </div>
  );
}
