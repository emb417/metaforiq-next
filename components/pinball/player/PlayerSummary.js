import PlayerSummaryPane from "@/components/pinball/player/PlayerSummaryPane";
import PlayerSummaryItem from "@/components/pinball/player/PlayerSummaryItem";

export default function PlayerSummary({ user }) {
  return (
    <div className="flex flex-col w-full text-white gap-4">
      <PlayerSummaryPane title="Season Summary">
        <PlayerSummaryItem title="Best Result">
          P{user.seasonBestResult}{" "}
          <span className="text-sm">
            of {user.seasonBestResultNumberOfPlayers}
          </span>
        </PlayerSummaryItem>
        <PlayerSummaryItem title="Games Played">
          {user.seasonGamesPlayed}
        </PlayerSummaryItem>
        <PlayerSummaryItem title="Win Percentage">
          {user.seasonWinPercentage}%
        </PlayerSummaryItem>
        <PlayerSummaryItem title="Over-Performed">
          <span className="text-sm">{user.seasonOverPerformedTable}</span>
        </PlayerSummaryItem>
        <PlayerSummaryItem title="Under-Performed">
          <span className="text-sm">{user.seasonUnderPerformedTable}</span>
        </PlayerSummaryItem>
      </PlayerSummaryPane>
      <PlayerSummaryPane title="Annual Summary">
        <PlayerSummaryItem title="Best Result">
          P{user.annualBestResult}{" "}
          <span className="text-sm">
            of {user.annualBestResultNumberOfPlayers}
          </span>
        </PlayerSummaryItem>
        <PlayerSummaryItem title="Games Played">
          {user.annualGamesPlayed}
        </PlayerSummaryItem>
        <PlayerSummaryItem title="Win Percentage">
          {user.annualWinPercentage}%
        </PlayerSummaryItem>
        <PlayerSummaryItem title="Over-Performed">
          <span className="text-sm">{user.annualOverPerformedTable}</span>
        </PlayerSummaryItem>
        <PlayerSummaryItem title="Under-Performed">
          <span className="text-sm">{user.annualUnderPerformedTable}</span>
        </PlayerSummaryItem>
      </PlayerSummaryPane>
    </div>
  );
}
