import { CgChevronUpO, CgSoftwareUpload } from "react-icons/cg";
import { GiRibbonMedal } from "react-icons/gi";
import Link from "next/link";

export default function PlayerHistory({ weeksData }) {
  return (
    <div className="flex flex-col w-full text-white items-start gap-1 border-2 border-teal-950 rounded-xl px-2 py-1">
      <div className="flex w-full">
        <div className="flex items-center text-sm pl-1">
          <Link href="/pinball/weekly">Competition History</Link>
        </div>
        {!weeksData[0].score && (
          <div className="flex items-center ml-auto text-xs">Post a Score</div>
        )}
        {weeksData[0].score && weeksData[0].nextScore && (
          <Link
            href={`/pinball/player/${weeksData[0].nextPlayer}`}
            className="flex items-center ml-auto"
          >
            <div className="flex flex-col items-center text-xs">
              <div className="flex items-center">
                P{weeksData[0].nextPosition}. {weeksData[0].nextPlayer}
              </div>
              <div className="text-teal-300">
                {weeksData[0].nextScore.toLocaleString()}
              </div>
            </div>
          </Link>
        )}
        {weeksData[0].score && !weeksData[0].nextScore && (
          <div className="flex flex-row items-center ml-auto text-xs">
            <div className="flex items-center">{weeksData[0].nextPlayer}</div>
            <div className="flex items-center pl-1 text-xl">
              <GiRibbonMedal className="text-blue-500" />
            </div>
          </div>
        )}
        {!weeksData[0].score && (
          <div className="flex items-center pl-1 text-xl">
            <CgSoftwareUpload className="text-red-500" />
          </div>
        )}
        {weeksData[0].score && weeksData[0].nextScore && (
          <div className="flex items-center pl-1 text-xl">
            <CgChevronUpO className="text-green-500" />
          </div>
        )}
      </div>
      <hr className="w-full pb-1 border-1 border-teal-950" />
      <div
        id="scrollableDiv"
        className="flex flex-col w-full h-[336px] overflow-auto gap-1"
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
