export default function PlayerWeekStats({ userPositionDetails }) {
  return (
    <div className="border-2 rounded-xl border-teal-950 px-3 py-1 text-white">
      <div className="text-sm text-center">Week #{userPositionDetails.weekNumber}</div>
      {userPositionDetails.position && (
        <div className="text-xl text-teal-300 text-center">
          P{userPositionDetails.position} of{" "}
          {userPositionDetails.numberOfParticipants}
        </div>
      )}
      {!userPositionDetails.position && (
        <div className="text-sm text-gray-500 text-center">No Position</div>
      )}
      <div className="text-sm truncate text-center">{userPositionDetails.table}</div>

      {userPositionDetails.score && (
        <div className="text-xl text-teal-300 text-center">
          {userPositionDetails.score.toLocaleString("en-US")}
        </div>
      )}
      {!userPositionDetails.score && (
        <div className="text-sm text-gray-500 text-center">No Score</div>
      )}
      <div className="text-lg text-center">{userPositionDetails.points || 0} Points</div>
    </div>
  );
}
