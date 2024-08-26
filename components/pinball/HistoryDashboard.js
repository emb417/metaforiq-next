import LeaderboardStats from "@/lib/pinball/LeaderboardStats";
import HistoryLeaderboards from "@/components/pinball/HistoryLeaderboards";

async function getData() {
  try {
    const response = await fetch(`${process.env.VPC_API_URL}`, {
      next: { revalidate: 0 },
    });
    const data = await response.json();

    const { positionWeeksData } = LeaderboardStats(data);

    return { props: { weeksData: positionWeeksData } };
  } catch (error) {
    console.error(error);
    return { props: { message: "Server Error" } };
  }
}

export default async function HistoryDashboard() {
  const { props } = await getData();
  const { weeksData } = props;
  return <HistoryLeaderboards weeksData={weeksData} />;
}
