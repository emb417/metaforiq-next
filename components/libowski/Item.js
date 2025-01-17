import Link from "next/link";
import Image from "next/image";
import ItemAvailability from "@/components/libowski/best-sellers/ItemAvailability";
import { Tooltip } from "antd";
import { MdOutlineDescription } from "react-icons/md";

export default function Item({ item }) {
  return (
    <div className="group w-full p-2 rounded-lg border-2 border-teal-950 hover:border-teal-300 bg-slate-950 hover:bg-slate-900 duration-300">
      <div className="flex flex-row items-center justify-center gap-2 w-full h-full">
        <Link href={item.url} target="_blank" rel="noreferrer">
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
        </Link>
        <div className="flex flex-row w-full h-full">
          <div className="flex flex-col w-full justify-end pb-2">
            <div className="text-white">
              <Link href={item.url} target="_blank" rel="noreferrer">
                {item.title}
              </Link>
            </div>
            {item.subtitle ? (
              <div className="text-white text-sm">
                <Link href={item.url} target="_blank" rel="noreferrer">
                  {item.subtitle}
                </Link>
              </div>
            ) : null}
            <div className="flex flex-row gap-1 text-teal-300 text-xs items-center">
              {item.publicationYear.substring(0, 4)} {item.format || ""}{" "}
              {item.description && (
                <Tooltip
                  title={item.description}
                  color="rgba(41, 37, 36, 0.8)"
                  placement="bottom"
                >
                  <MdOutlineDescription className="text-lg" />
                </Tooltip>
              )}
            </div>
            {item.edition && (
              <div className="text-white text-xs">{item.edition}</div>
            )}
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
    </div>
  );
}
