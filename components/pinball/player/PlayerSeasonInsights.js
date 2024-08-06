import PlayerPane from "@/components/pinball/player/PlayerPane";
import PlayerSummaryItem from "@/components/pinball/player/PlayerSummaryItem";

export default function PlayerSeasonInsights({ user }) {
  return (
    <div className="flex flex-col w-full text-white">
      <PlayerPane
        title="Season 5 Insights"
        className="flex flex-row items-center"
      >
        <PlayerSummaryItem title="Best Game to Average" className="p-2">
          <span className="text-sm">
            P{user.seasonBestPerformancePosition} of{" "}
            {user.seasonBestPerformancePlayers}
            <span className="text-white"> | </span>
            {user.seasonBestPerformanceTable}
          </span>
        </PlayerSummaryItem>
        <PlayerSummaryItem title="Worst Game to Average" className="p-2">
          <span className="text-sm">
            P{user.seasonWorstPerformancePosition} of{" "}
            {user.seasonWorstPerformancePlayers}
            <span className="text-white"> | </span>
            {user.seasonWorstPerformanceTable}
          </span>
        </PlayerSummaryItem>
      </PlayerPane>
    </div>
  );
}
