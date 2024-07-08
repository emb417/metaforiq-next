import _ from "lodash";
import SeasonChart from "@/components/pinball/SeasonChart";

async function getData() {
  try {
    const response = await fetch(`${process.env.VPC_API_URL}`, {
      next: { revalidate: 300 },
    });
    const data = await response.json();

    // filter for competition corner data and order by week number
    const sortedWeeks = _.chain(
      data.find((obj) => obj.channelName === "competition-corner").weeks
    )
      .filter((week) => week.season === 5)
      .orderBy(["currentSeasonWeekNumber"], ["desc"])
      .value()
      .map((week) => ({ ...week, currentSeasonWeekNumber: parseInt(week.currentSeasonWeekNumber) }));

    // console.log(sortedWeeks[0]);
    const weeksData = sortedWeeks.map((week, index) => {
      const nextWeek = sortedWeeks[index + 1];
      const scores = week.scores.map((score) => {
        let cumulativePoints = 0;
        for (let i = index; i < sortedWeeks.length; i++) {
          const weekScores = sortedWeeks[i].scores;
          const scoreObj = weekScores.find((s) => s.username === score.username);
          if (scoreObj) {
            cumulativePoints += scoreObj.points;
          }
        }
        return { ...score, cumulativePoints };
      });
      return { ...week, scores };
    });

    return { props: { weeksData } };
  } catch (error) {
    console.error(error);
    return { props: { message: "Server Error" } };
  }
}

export default async function SeasonDashboard() {
  const { props } = await getData();
  const { weeksData } = props;
  return <SeasonChart weeksData={weeksData} />;
}
