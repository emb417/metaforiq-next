import _ from "lodash";
import Link from "next/link";
import { MdLeaderboard } from "react-icons/md";
import { GiPositionMarker } from "react-icons/gi";
import PositionLeaderboard from "@/components/pinball/PositionLeaderboard";
import SeasonLeaderboard from "@/components/pinball/SeasonLeaderboard";

async function getData() {
  try {
    const response = await fetch(`${process.env.VPC_API_URL}`, {
      next: { revalidate: 300 },
    });
    const data = await response.json();

    // filter for competition corner data and order by week number
    const positionSortedWeeks = _.chain(
      data.find((obj) => obj.channelName === "competition-corner").weeks
    )
      .filter((week) => !isNaN(parseInt(week.weekNumber)))
      .orderBy(["weekNumber"], ["desc"])
      .take(2)
      .value()
      .map((week) => ({ ...week, weekNumber: parseInt(week.weekNumber) }));

    // fill in position values
    let positionWeeksData = positionSortedWeeks.map((week, weekIndex) => {
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

    // filter for competition corner data for season 5 and order by week number
    const seasonSortedWeeks = _.chain(
      data.find((obj) => obj.channelName === "competition-corner").weeks
    )
      .filter((week) => week.season === 5)
      .orderBy(["currentSeasonWeekNumber"], ["desc"])
      .value()
      .map((week) => ({
        ...week,
        currentSeasonWeekNumber: parseInt(week.currentSeasonWeekNumber),
      }));

    const allUsernames = new Set(
      seasonSortedWeeks.flatMap((week) =>
        week.scores.map((score) => score.username)
      )
    );

    const seasonWeeksData = seasonSortedWeeks.map((week, index) => {
      // add a score of 0 for any username in allUsernames but not in the scores
      allUsernames.forEach((username) => {
        if (!week.scores.find((s) => s.username === username)) {
          week.scores.push({ username, points: 0 });
        }
      });
      const scores = week.scores.map((score) => {
        let cumulativePoints = 0;
        for (let i = index; i < seasonSortedWeeks.length; i++) {
          const weekScores = seasonSortedWeeks[i].scores;
          const scoreObj = weekScores.find(
            (s) => s.username === score.username
          );
          if (scoreObj) {
            cumulativePoints += scoreObj.points;
          }
        }
        return { ...score, cumulativePoints };
      });
      return { ...week, scores };
    });

    return { props: { positionWeeksData, seasonWeeksData } };
  } catch (error) {
    console.error(error);
    return { props: { message: "Server Error" } };
  }
}

export default async function Leaderboards() {
  const { props } = await getData();
  const { positionWeeksData, seasonWeeksData } = props;
  return (
    <div className="grid grid-cols-10 gap-8 mb-14 max-w-3xl">
      <div className="col-span-10 sm:col-span-4">
        <SeasonLeaderboard weeksData={seasonWeeksData} />
      </div>
      <div className="col-span-10 sm:col-span-6">
        <PositionLeaderboard weekData={positionWeeksData[0]} />
      </div>
    </div>
  );
}
