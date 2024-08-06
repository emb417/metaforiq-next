import PlayerPane from "@/components/pinball/player/PlayerPane";
import PlayerSummaryItem from "@/components/pinball/player/PlayerSummaryItem";

export default function PlayerSummary({ user }) {
  return (
    <div className="flex flex-col w-full text-white gap-4">
      <PlayerPane
        title="Annual Insights"
        className="flex flex-col md:flex-row items-center md:items-start"
      >
        <PlayerSummaryItem title="Best Game to Average" className="p-2 md:mr-2">
          <span className="text-sm">
            P{user.annualBestPerformancePosition} of {user.annualBestPerformancePlayers}
            <span className="text-white"> | </span>
            {user.annualBestPerformanceTable}
          </span>
        </PlayerSummaryItem>
        <PlayerSummaryItem title="Worst Game to Average" className="p-2">
          <span className="text-sm">
            P{user.annualWorstPerformancePosition} of{" "}
            {user.annualWorstPerformancePlayers}
            <span className="text-white"> | </span>
            {user.annualWorstPerformanceTable}
          </span>
        </PlayerSummaryItem>
      </PlayerPane>
    </div>
  );
}
