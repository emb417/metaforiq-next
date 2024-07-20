import _ from "lodash";
import PlayerBio from "@/components/pinball/player/PlayerBio";
import PlayerSeasonStats from "@/components/pinball/player/PlayerSeasonStats";
import PlayerWeekStats from "@/components/pinball/player/PlayerWeekStats";
import LeaderboardStats from "@/lib/pinball/PlayerStats";

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

    return {
      props: { user, userPositionDetails, userSeasonDetails },
    };
  } catch (error) {
    console.error(error);
    return { props: { message: "Server Error" } };
  }
}

export default async function PlayerProfile({ username }) {
  const { props } = await getData(username);
  const { user, userPositionDetails, userSeasonDetails } = props;

  // TODO: show table history
  // TODO: show participation streak
  // TODO: show participation rate over past 52 weeks
  return (
    <div className="flex flex-wrap w-full gap-8 p-4 items-start">
      <PlayerBio user={user} />
      <div className="flex flex-wrap pl-16 md:pl-4 gap-8 items-start">
        <PlayerSeasonStats userSeasonDetails={userSeasonDetails} />
        <PlayerWeekStats userPositionDetails={userPositionDetails} />
      </div>
    </div>
  );
}
