import PlayerPane from "@/components/pinball/player/PlayerPane";
import PlayerSummaryItem from "@/components/pinball/player/PlayerSummaryItem";

export default function PlayerSummary({ user, userSeasonSummary }) {
  return (
    <div className="flex flex-col w-full text-white">
      <PlayerPane title="Season 5 Summary">
        <PlayerSummaryItem title="Current">
          P{userSeasonSummary.position}{" "}
          <span className="text-sm">
            of {userSeasonSummary.numberOfPlayers}
          </span>
        </PlayerSummaryItem>
        <PlayerSummaryItem title="Points">
          {userSeasonSummary.cumulativePoints}
        </PlayerSummaryItem>
        <PlayerSummaryItem title="Win Percentage">
          {user.seasonWinPercentage}%
        </PlayerSummaryItem>
      </PlayerPane>
    </div>
  );
}
