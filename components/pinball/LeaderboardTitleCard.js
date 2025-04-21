import Image from "next/image";

export default function LeaderboardTitleCard({
  imageUrl,
  table,
  highlighted = false,
  children,
}) {
  return (
    <div className={`relative mb-2 ${!highlighted || "text-teal-300"} text-center`}>
      <Image
        src={
          imageUrl ??
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAAA3CAYAAABAW2dtAAAAYUlEQVR42u3QIQEAMAgAsJPgkg707wcNcLgtwuJn9WMVkiRJkiRJkiRJSJIkSZIkSZKQJEmSJEmSJEnSIEmSJEmSJElCkiRJkiRJkoQkSZIkSZIkSRKSJEmSJEmSJCRJOjAlaUgxksvLMgAAAABJRU5ErkJggg=="
        }
        width={imageUrl ? 292 : 292}
        height={imageUrl ? 292 : 220}
        alt={table}
        priority={true}
        className="border-2 border-teal-950 rounded-xl opacity-50"
      />
      <div className="absolute bottom-0 rounded-xl m-1 w-[284px]">
        {children}
      </div>
    </div>
  );
}
