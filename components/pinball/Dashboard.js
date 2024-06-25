import _ from "lodash";
import PinballChart from "@/components/pinball/ComboChart";

async function getData() {
  try {
    const response = await fetch(`${process.env.VPC_API_URL}`, {
      next: { revalidate: 300 },
    });
    const data = await response.json();
    const sortedWeeks = _.chain(
      data
        .find((obj) => obj.channelName === "competition-corner")
        .weeks
    )
      .filter((week) => !isNaN(parseInt(week.weekNumber)))
      .orderBy(["weekNumber"], ["desc"])
      .take(52)
      .value()
      .map((week) => ({ ...week, weekNumber: parseInt(week.weekNumber) }));
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
