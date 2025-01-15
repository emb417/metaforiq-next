import Link from "next/link";
import Image from "next/image";
import ItemAvailability from "@/components/libowski/best-sellers/ItemAvailability";
import { Tooltip } from "antd";

export default function Item({ item }) {
  const yearFormatEdition = `${item.publicationYear.substring(0, 4)} ${
    item.format || ""
  } ${item.edition || ""}`;

  return (
    <Link
      href={item.url}
      target="_blank"
      rel="noreferrer"
      className="group w-full p-2 rounded-lg border-2 border-teal-950 hover:border-teal-300 bg-slate-950 hover:bg-slate-900 duration-300"
    >
      <div className="flex flex-row items-center justify-center gap-2 w-full h-full">
        <Tooltip
          title={item.description}
          color="rgba(41, 37, 36, 0.8)"
          placement="bottom"
        >
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
        </Tooltip>
        <div className="flex flex-row w-full h-full">
          <div className="flex flex-col w-full justify-end pb-2">
            <Tooltip
              title={item.description}
              color="rgba(41, 37, 36, 0.8)"
              placement="bottom"
            >
              <div className="text-white">{item.title}</div>
            </Tooltip>
            {item.subtitle ? (
              <div className="text-white text-sm">{item.subtitle}</div>
            ) : null}
            <div className="text-teal-300 text-xs">{yearFormatEdition}</div>
            {item.updateDate && item.type !== "on order" ? (
              <div className="text-gray-400 text-xs">
                {new Date(item.updateDate * 1000)
                  .toLocaleString()
                  .replace(/:\d{2}\s/, " ")}
              </div>
            ) : null}
            {item.notifyDate ? (
              <div className="text-gray-400 text-xs">
                {new Date(item.updateDate * 1000)
                  .toLocaleString()
                  .replace(/:\d{2}\s/, " ")}
              </div>
            ) : null}
          </div>
          <div className="flex flex-row justify-end">
            {item.availability && (
              <ItemAvailability
                itemId={item.id}
                availability={item.availability}
              />
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
