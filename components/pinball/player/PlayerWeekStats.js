export default function PlayerWeekStats({ userPositionDetails }) {
  return (
    <div className="border-l-2 border-teal-950 pl-3 py-2 items-start text-white">
      <div className="text-sm">
        Week #{userPositionDetails.weekNumber}
      </div>
      {userPositionDetails.position && (
        <div className="text-xl text-teal-300">
          P{userPositionDetails.position} of{" "}
          {userPositionDetails.numberOfParticipants}
        </div>
      )}
      <div className="text-sm truncate">{userPositionDetails.table}</div>
      <div className="text-xl text-teal-300">
        {userPositionDetails.score &&
          userPositionDetails.score.toLocaleString("en-US")}
      </div>
      <div className="text-lg">
        {userPositionDetails.points || 0} Points
      </div>
    </div>
  );
}
