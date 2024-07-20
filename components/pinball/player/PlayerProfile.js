import _ from "lodash";
import PlayerAvatar from "@/components/pinball/player/PlayerAvatar";
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
      props: { userPositionDetails, userSeasonDetails, user },
    };
  } catch (error) {
    console.error(error);
    return { props: { message: "Server Error" } };
  }
}

export default async function PlayerProfile({ username }) {
  const { props } = await getData(username);
  const { userPositionDetails, userSeasonDetails, user } = props;

  // TODO: show table history
  // TODO: show participation streak
  // TODO: show participation rate over past 52 weeks
  return (
    <div className="flex flex-col w-[max-content] gap-4 p-4 text-white">
      <div className="flex justify-center">
        <PlayerAvatar user={user} />
      </div>
      {userPositionDetails.rollingAveragePosition && (
        <div className="flex justify-center text-2xl">
          P{userPositionDetails.rollingAveragePosition} Average
        </div>
      )}
      <div className="border-t-2 border-teal-950 p-2 mt-4">
        <div className="flex justify-center text-xl">Season 5</div>
        <div className="flex justify-center text-2xl">
          P{userSeasonDetails.position} of {userSeasonDetails.numberOfPlayers}
        </div>
        <div className="flex justify-center text-xl">
          {userSeasonDetails.cumulativePoints} Points
        </div>
      </div>
      <div className="border-t-2 border-teal-950 p-2 mt-4">
        <div className="flex justify-center">
          Week #{userPositionDetails.weekNumber}
        </div>
        {userPositionDetails.position && (
          <div className="flex justify-center text-2xl">
            P{userPositionDetails.position} of{" "}
            {userPositionDetails.numberOfParticipants}
          </div>
        )}
        <div className="flex justify-center">{userPositionDetails.table}</div>
        <div className="flex justify-center text-2xl">
          {userPositionDetails.score &&
            userPositionDetails.score.toLocaleString("en-US")}
        </div>
        <div className="flex justify-center text-xl">
          {userPositionDetails.points || 0} Points
        </div>
      </div>
    </div>
  );
}
