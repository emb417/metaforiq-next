import PlayerStats from "@/lib/pinball/Stats";
import StatsTable from "@/components/pinball/StatsTable";

async function getData() {
  try {
    const response = await fetch(`${process.env.VPC_API_URL}`, {
      next: { revalidate: 0 },
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
