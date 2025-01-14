import Link from "next/link";
import Image from "next/image";
import ItemAvailability from "@/components/libowski/best-sellers/ItemAvailability";

export default function Item({ item }) {
  return (
    <Link
      href={item.url}
      target="_blank"
      rel="noreferrer"
      className="group w-full p-2 rounded-lg border-2 border-teal-950 hover:border-teal-300 bg-slate-950 hover:bg-slate-900 duration-300"
    >
      <div className="flex flex-row items-center justify-center gap-2 w-full h-full">
        <Image
          src={
            item.image ??
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAVCAQAAADlN6ZZAAAAE0lEQVR42mNkIAAYRxWMKhhkCgAgfAAWcEsCMwAAAABJRU5ErkJggg=="
          }
          alt={item.title}
          width={64}
          height={84}
          priority
          className="w-[64px] h-[84px] bg-slate-900 rounded group-hover:bg-slate-800 duration-300"
        />
        <div className="flex flex-col gap-1 w-full">
          <div className="flex flex-col">
            <p className="text-white">{item.title}</p>
            {item.subtitle ? (
              <p className="text-white text-sm">{item.subtitle}</p>
            ) : null}
            <p className="text-teal-300 text-sm">
              {item.publicationYear.substring(0, 4) ?? ""} {item.format ?? ""}{" "}
              {item.edition ?? ""}
            </p>
            {item.updateDate && item.type !== "on order" ? (
              <p className="text-gray-400 text-xs">
                Updated: {new Date(item.updateDate * 1000).toLocaleString().replace(/:\d{2}\s/,' ')}
              </p>
            ) : null}
            {item.notifyDate ? (
              <p className="text-gray-400 text-xs">
                Notified: {new Date(item.updateDate * 1000).toLocaleString().replace(/:\d{2}\s/,' ')}
              </p>
            ) : null}
          </div>
        </div>
        {item.availability && (
          <ItemAvailability itemId={item.id} availability={item.availability} />
        )}
      </div>
    </Link>
  );
}
