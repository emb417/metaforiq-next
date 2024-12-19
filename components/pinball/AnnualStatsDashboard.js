import PlayerStats from "@/lib/pinball/AnnualStats";
import StatsTable from "@/components/pinball/AnnualStatsTable";

async function getData() {
  try {
    const response = await fetch(`${process.env.VPC_API_URL}`, {
      next: { revalidate: 1800 },
    });
    const data = await response.json();

    const playerStats = PlayerStats(data);

    return { props: { playerStats } };
  } catch (error) {
    console.error(error);
    return { props: { message: "Server Error" } };
  }
}

export default async function StatsDashboard() {
  const { props } = await getData();
  const { playerStats } = props;
  return <StatsTable playerStats={playerStats} />;
}
