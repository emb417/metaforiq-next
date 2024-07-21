export default function PlayerSeasonStats({ userSeasonDetails }) {
  return (
    <div className="border-l-2 border-teal-950 pl-3 py-2 text-white items-start">
      <div className="text-lg">Season 5</div>
      <div className="text-xl text-teal-300">
        P{userSeasonDetails.position} of {userSeasonDetails.numberOfPlayers}
      </div>
      <div className="text-lg">
        {userSeasonDetails.cumulativePoints} Points
      </div>
    </div>
  );
}
