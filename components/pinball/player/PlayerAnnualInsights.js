import Link from "next/link";
import PlayerPane from "@/components/pinball/player/PlayerPane";
import PlayerSummaryItem from "@/components/pinball/player/PlayerSummaryItem";

export default function PlayerSummary({ user }) {
  return (
    <div className="flex flex-col w-full text-white gap-4">
      <PlayerPane
        title="Annual Insights"
        className="flex flex-col md:flex-row items-center md:items-start"
      >
        <PlayerSummaryItem title="Best Game to Average">
          {user.annualBestPerformanceWeek !== 0 && (
            <Link
              href={`/pinball/history?week=${user.annualBestPerformanceWeek}`}
            >
              <span className="text-sm">
                P{user.annualBestPerformancePosition} of{" "}
                {user.annualBestPerformancePlayers}
                <span className="text-white"> | </span>
                {user.annualBestPerformanceTable}
              </span>
            </Link>
          )}
          {user.annualBestPerformanceWeek === 0 && (
            <span className="text-sm">
              P{user.annualBestPerformancePosition} of{" "}
              {user.annualBestPerformancePlayers}
              <span className="text-white"> | </span>
              {user.annualBestPerformanceTable}
            </span>
          )}
        </PlayerSummaryItem>
        <PlayerSummaryItem title="Worst Game to Average">
          {user.annualWorstPerformanceWeek !== 0 && (
            <Link
              href={`/pinball/history?week=${user.annualWorstPerformanceWeek}`}
            >
              <span className="text-sm">
                P{user.annualWorstPerformancePosition} of{" "}
                {user.annualWorstPerformancePlayers}
                <span className="text-white"> | </span>
                {user.annualWorstPerformanceTable}
              </span>
            </Link>
          )}
          {user.annualWorstPerformanceWeek === 0 && (
            <span className="text-sm">
              P{user.annualWorstPerformancePosition} of{" "}
              {user.annualWorstPerformancePlayers}
              <span className="text-white"> | </span>
              {user.annualWorstPerformanceTable}
            </span>
          )}
        </PlayerSummaryItem>
      </PlayerPane>
    </div>
  );
}
