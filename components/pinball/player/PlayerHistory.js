export default function PlayerHistory({ weeksData }) {
  return (
    <div className="flex flex-col w-full text-white items-start gap-2 border-2 border-teal-950 rounded-xl px-2 py-2">
      <div className="flex text-xl pl-1">Competition History</div>
      <hr className="w-full border-1 border-teal-950" />
      <div
        id="scrollableDiv"
        className="flex flex-col w-full h-[474px] overflow-auto gap-1"
      >
          {weeksData.map((weekData, index) => (
            <div
              key={index}
              className={`flex flex-col w-full border-2 rounded-xl border-teal-950 px-2 ${
                index % 2 === 0 ? "bg-slate-900" : "bg-slate-800"
              }`}
            >
              <div className="flex gap-2">
                <div className="truncate">
                  {weekData.weekNumber}. {weekData.table}
                </div>
                <div className="ml-auto min-w-[max-content]">
                  {weekData.score ? (
                    <span className="text-teal-300">
                      {weekData.score
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </span>
                  ) : (
                    <span className="text-gray-500">No Score</span>
                  )}
                </div>
              </div>
              <div className="flex gap-2 items-end">
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
                  {weekData.points
                    ? `${weekData.points} ${
                        weekData.points > 1 ? "Points" : "Point"
                      }`
                    : "0 Points"}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
