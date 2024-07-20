import Image from "next/image";
export default function PlayerAvatar({ user }) {
  return (
    <div className="flex items-center text-white text-2xl gap-2">
      <Image
        src={user.userAvatarUrl}
        width={64}
        height={64}
        alt={user.username}
        className="rounded-full"
      />
      {user.username}
    </div>
  );
}
