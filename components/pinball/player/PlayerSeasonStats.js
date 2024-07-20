export default function PlayerSeasonStats({ userSeasonDetails }) {
  return (
    <div className="border-l-2 border-teal-950 px-4 py-2 text-white items-start">
      <div className="flex text-xl">Season 5</div>
      <div className="flex text-2xl text-teal-300">
        P{userSeasonDetails.position} of {userSeasonDetails.numberOfPlayers}
      </div>
      <div className="flex text-xl">
        {userSeasonDetails.cumulativePoints} Points
      </div>
    </div>
  );
}
