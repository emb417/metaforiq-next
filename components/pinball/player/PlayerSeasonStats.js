export default function PlayerSeasonStats({ userSeasonDetails }) {
  return (
    <div className="border-2 rounded-xl border-teal-950 px-3 py-1 text-white bg-slate-900">
      <div className="text-lg text-center">Season 5</div>
      <div className="text-xl text-teal-300 text-center">
        P{userSeasonDetails.position}{" "}
        <span className="text-sm">of {userSeasonDetails.numberOfPlayers}</span>
      </div>
      <div className="text-lg text-center">
        {userSeasonDetails.cumulativePoints} Points
      </div>
    </div>
  );
}
