export default function PlayerWeekStats({ userPositionDetails }) {
  return (
    <div className="border-l-2 border-teal-950 px-4 py-2 items-start text-white">
      <div className="flex">
        Week #{userPositionDetails.weekNumber}
      </div>
      {userPositionDetails.position && (
        <div className="flex text-2xl text-teal-300">
          P{userPositionDetails.position} of{" "}
          {userPositionDetails.numberOfParticipants}
        </div>
      )}
      <div className="flex">{userPositionDetails.table}</div>
      <div className="flex text-2xl text-teal-300">
        {userPositionDetails.score &&
          userPositionDetails.score.toLocaleString("en-US")}
      </div>
      <div className="flex text-xl">
        {userPositionDetails.points || 0} Points
      </div>
    </div>
  );
}
