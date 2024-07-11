import _ from "lodash";
import PositionChart from "@/components/pinball/PositionChart";
import PositionLeaderboard from "@/components/pinball/PositionLeaderboard";

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
      .filter((week) => !isNaN(parseInt(week.weekNumber)))
      .orderBy(["weekNumber"], ["desc"])
      .take(52)
      .value()
      .map((week) => ({ ...week, weekNumber: parseInt(week.weekNumber) }));

    // fill in position values
    let weeksData = sortedWeeks.map((week, weekIndex) => {
      const scoresData = week.scores.map((score, scoreIndex) => ({
        ...score,
        position: scoreIndex + 1,
      }));
      return {
        ...week,
        scores: scoresData,
        position: weekIndex + 1,
      };
    });

    // calculate the rolling averages over a 24-week period for each username
    weeksData.forEach((week, weekIndex) => {
      week.scores.forEach((score) => {
        const startIndex = weekIndex;
        const endIndex = Math.min(weeksData.length, weekIndex + 13);
        const scores = weeksData
          .slice(startIndex, endIndex)
          .flatMap((w) => w.scores.filter((s) => s.username === score.username))
          .reverse();
        const validScores = scores.filter((s) => s.position !== null);
        score.rollingAveragePosition =
          validScores.length > 0
            ? Math.round(
                (validScores.reduce((sum, s) => sum + s.position, 0) /
                  validScores.length) *
                  1000
              ) / 1000
            : null;
      });
    });

    return { props: { weeksData } };
  } catch (error) {
    console.error(error);
    return { props: { message: "Server Error" } };
  }
}

export default async function PinballDashboard() {
  const { props } = await getData();
  const { weeksData } = props;
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-5 sm:col-span-3 lg:col-span-4">
        <PositionChart weeksData={weeksData} />
      </div>
      <div className="col-span-5 sm:col-span-2 lg:col-span-1 mb-14 ml-4 sm:ml-0">
        <PositionLeaderboard weekData={weeksData[0]} />
      </div>
    </div>
  );
}
