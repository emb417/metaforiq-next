import SeasonChart from "@/components/pinball/SeasonChart";
import SeasonLeaderboard from "@/components/pinball/SeasonLeaderboard";
import LeaderboardStats from "@/lib/pinball/LeaderboardStats";

async function getData() {
  try {
    const response = await fetch(`${process.env.VPC_API_URL}`, {
      next: { revalidate: 300 },
    });
    const data = await response.json();

    const { seasonWeeksData } = LeaderboardStats(data);

    return {
      props: {
        weeksData: seasonWeeksData,
      },
    };
  } catch (error) {
    console.error(error);
    return { props: { message: "Server Error" } };
  }
}

export default async function SeasonDashboard() {
  const { props } = await getData();
  const { weeksData } = props;
  return (
    <div className="grid grid-cols-12 mb-14 gap-4 w-full">
      <div className="col-span-12 sm:col-span-8 md:col-span-6 lg:col-span-4 xl:col-span-3">
        <SeasonLeaderboard weeksData={weeksData} />
      </div>
      <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-8 xl:col-span-9">
        <SeasonChart weeksData={weeksData} />
      </div>
    </div>
  );
}
