import _ from "lodash";
import SeasonChart from "@/components/pinball/SeasonChart";
import SeasonLeaderboard from "@/components/pinball/SeasonLeaderboard";

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

    const allUsernames = new Set(
      sortedWeeks.flatMap((week) => week.scores.map((score) => score.username))
    );

    // console.log(sortedWeeks[0]);
    const weeksData = sortedWeeks.map((week, index) => {
      // add a score of 0 for any username in allUsernames but not in the scores
      allUsernames.forEach((username) => {
        if (!week.scores.find((s) => s.username === username)) {
          week.scores.push({ username, points: 0 });
        }
      });
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
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1 mb-14">
        <SeasonLeaderboard weeksData={weeksData} />
      </div>
      <div className="col-span-4">
        <SeasonChart weeksData={weeksData} />
      </div>
    </div>
  );
}