import _ from "lodash";
import LeaderboardStats from "@/lib/pinball/PlayerStats";
import PlayerBio from "@/components/pinball/player/PlayerBio";
import PlayerTableHistory from "@/components/pinball/player/PlayerTableHistory";
import PlayerSeasonChart from "@/components/pinball/player/PlayerSeasonChart";
import PlayerPositionChart from "@/components/pinball/player/PlayerPositionChart";

async function getData(username) {
  try {
    const response = await fetch(`${process.env.VPC_API_URL}`, {
      next: { revalidate: 300 },
    });
    const data = await response.json();

    const { positionWeeksData, seasonWeeksData } = LeaderboardStats(data);

    const user = positionWeeksData
      .flatMap((week) => week.scores)
      .map((score) => ({
        username: score.username,
        userAvatarUrl: score.userAvatarUrl,
        posted: score.posted,
        rollingAveragePosition: score.rollingAveragePosition,
      }))
      .find((user) => user.username === username);

    const [firstWeek] = positionWeeksData;
    const userPositionDetails = {
      table: firstWeek.table,
      weekNumber: firstWeek.weekNumber,
      numberOfParticipants: firstWeek.scores.length,
      ...firstWeek.scores.find((score) => score.username === username),
    };

    const sortedUsernames = seasonWeeksData[0].scores
      .sort((a, b) => b.cumulativePoints - a.cumulativePoints)
      .map((user) => user.username);

    const userSeasonDetails = seasonWeeksData[0].scores.find(
      (score) => score.username === username
    );
    userSeasonDetails.numberOfPlayers = seasonWeeksData[0].scores.length;
    userSeasonDetails.position = sortedUsernames.indexOf(username) + 1;

    const userSeasonData = seasonWeeksData.map((week) => ({
      ...week,
      scores: week.scores.filter((score) => score.username === username),
    }));

    const userPositionData = positionWeeksData.map((week) => ({
      ...week,
      score: week.scores.find((score) => score.username === username)?.score,
      points: week.scores.find((score) => score.username === username)?.points,
      position: week.scores.find((score) => score.username === username)
        ?.position,
      numberOfParticipants: week.scores.length,
    }));

    return {
      props: {
        user,
        userPositionDetails,
        userPositionData,
        userSeasonDetails,
        userSeasonData,
      },
    };
  } catch (error) {
    console.error(error);
    return { props: { message: "Server Error" } };
  }
}

export default async function PlayerProfile({ username }) {
  const { props } = await getData(username);
  const {
    user,
    userPositionDetails,
    userPositionData,
    userSeasonDetails,
    userSeasonData,
  } = props;

  // TODO: show participation streak
  // TODO: show participation rate over past 52 weeks
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 xl:grid-cols-10 w-full gap-4">
      <div className="flex flex-col xl:col-span-2">
        <PlayerBio
          user={user}
          userPositionDetails={userPositionDetails}
          userSeasonDetails={userSeasonDetails}
        />
      </div>
      <div className="md:col-span-2 xl:col-span-3">
        <PlayerTableHistory weeksData={userPositionData} />
      </div>
      <div className="flex flex-col md:col-span-2 xl:col-span-5 items-center gap-2">
        <PlayerSeasonChart weeksData={userSeasonData} />
        <PlayerPositionChart
          weeksData={userPositionData}
          username={user.username}
        />
      </div>
    </div>
  );
}
