export default function PlayerHistory({ weeksData }) {
  return (
    <div className="flex flex-col text-white items-start gap-2">
      <div className="flex text-xl pl-1">Player History</div>
      {weeksData.slice(1).map((weekData, index) => (
        <div
          key={index}
          className={`flex flex-col w-full border-2 rounded-xl border-teal-950 px-2 ${
            index % 2 === 0 ? "bg-slate-900" : ""
          }`}
        >
          <div className="flex gap-2">
            <div className="truncate">
              {weekData.weekNumber}. {weekData.table}
            </div>
            <div className="ml-auto min-w-[max-content]">
              {weekData.score ? (
                <span className="text-teal-300">
                  {weekData.score.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span>
              ) : (
                <span className="text-gray-500">No Score</span>
              )}
            </div>
          </div>
          <div className="flex gap-4 items-end">
            <div className="">
              {weekData.position ? (
                <span className="text-teal-300">
                  P{weekData.position} of {weekData.numberOfParticipants}
                </span>
              ) : (
                <span className="text-gray-500">No Position</span>
              )}
            </div>
            <div className="flex ml-auto">
              {weekData.points ? `${weekData.points} ${weekData.points > 1 ? "Points" : "Point"}` : "0 Points"}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

