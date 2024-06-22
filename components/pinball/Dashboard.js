import PinballChart from "@/components/pinball/Chart";

async function getData() {
  try {
    const response = await fetch(
      `${process.env.VPC_API_URL}`,
      { next: { revalidate: 300 } }
    );
    const data = await response.json();
    const sortedWeeks = data
      .find((obj) => obj.channelName === "competition-corner")
      .weeks.map((week) => ({ ...week, weekNumber: parseInt(week.weekNumber) }))
      .sort((a, b) => b.weekNumber - a.weekNumber);
    return { props: { weeks: sortedWeeks } };
  } catch (error) {
    console.error(error);
    return { props: { message: "Server Error" } };
  }
}

export default async function PinballDashboard() {
  const { props } = await getData();
  const { weeks } = props;
  return <PinballChart weeks={weeks} />;
}
