import Image from "next/image";

export default function PlayerBio({ user }) {
  return (
    <div className="flex flex-col text-white text-2xl">
      <div className="flex items-center gap-2">
        <Image
          src={user.userAvatarUrl}
          width={64}
          height={64}
          alt={user.username}
          className="rounded-full"
        />
        <div className="flex flex-col">
          <div className="flex">{user.username}</div>
          <div className="flex text-teal-300 gap-1">
            {user.rollingAveragePosition &&
              `P${user.rollingAveragePosition}`}
              {user.rollingAveragePosition && <div className="text-sm">Avg.</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
