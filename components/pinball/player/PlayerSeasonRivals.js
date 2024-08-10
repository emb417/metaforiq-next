import PlayerPane from "@/components/pinball/player/PlayerPane";
import PlayerSummaryItem from "@/components/pinball/player/PlayerSummaryItem";
import SeasonLeaderboardItem from "@/components/pinball/SeasonLeaderboardItem";

export default function PlayerSeasonRivals({
  userSeasonRivalsByWinPercentage,
  userSeasonRivalsByPoints,
}) {
  const sortedRivalsByWinPercentage =
    userSeasonRivalsByWinPercentage.scores.map((user) => user.username);
  const sortedRivalsByPoints = userSeasonRivalsByPoints.scores.map(
    (user) => user.username
  );

  return (
    <div className="">
      <PlayerPane title="Season 5 Rivals">
        <PlayerSummaryItem title="Points Rivals">
          {sortedRivalsByPoints.map((username, index) => (
            <SeasonLeaderboardItem
              key={username}
              username={username}
              data={userSeasonRivalsByPoints}
              index={index}
            />
          ))}
        </PlayerSummaryItem>
        <PlayerSummaryItem title="Win Percentage Rivals">
          {sortedRivalsByWinPercentage.map((username, index) => (
            <SeasonLeaderboardItem
              key={username}
              username={username}
              data={userSeasonRivalsByWinPercentage}
              index={index}
            />
          ))}
        </PlayerSummaryItem>
      </PlayerPane>
    </div>
  );
}
