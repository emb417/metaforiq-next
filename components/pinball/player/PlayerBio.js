import Image from "next/image";
import PlayerSeasonStats from "@/components/pinball/player/PlayerSeasonStats";
import PlayerWeekStats from "@/components/pinball/player/PlayerWeekStats";

export default function PlayerBio({
  user,
  userPositionDetails,
  userSeasonDetails,
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:grid sm:grid-cols-4 md:grid-cols-1 md:flex-col w-full text-white text-xl gap-4">
      <div className="flex items-center gap-2 pl-2">
        <Image
          src={user.userAvatarUrl}
          width={58}
          height={58}
          alt={user.username}
          className="rounded-full"
        />
        <div className="flex flex-col">
          <div className="flex">{user.username}</div>
          <div className="flex text-teal-300 gap-1">
            {user.rollingAveragePosition && `P${user.rollingAveragePosition}`}
            {user.rollingAveragePosition && <div className="text-sm">Avg.</div>}
          </div>
        </div>
      </div>
      <PlayerSeasonStats userSeasonDetails={userSeasonDetails} />
      <div className="col-span-1 sm:col-span-2 md:col-span-1">
        <PlayerWeekStats userPositionDetails={userPositionDetails} />
      </div>
    </div>
  );
}
