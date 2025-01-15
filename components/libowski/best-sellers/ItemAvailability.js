import { Tooltip } from "antd";

export default function Availability({ itemId, availability }) {
  const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    const days = Math.floor(hours / 24);
    const remainingHours = hours % 24;
    const formattedDays = days > 0 ? `${days}d ` : "";
    const formattedHours = remainingHours > 0 ? `${remainingHours}h ` : "";
    const formattedMinutes = remainingMinutes < 60 ? `${remainingMinutes}m ` : "";
    return formattedDays + formattedHours + formattedMinutes;
  };

  return (
    <div className="grid grid-rows-4 gap-1">
      {Object.keys(availability || {}).map((availId) => {
        const avail = availability[availId];
        const location =
          avail.location.substring(0, 3).toUpperCase() === "BEA"
            ? avail.location.match(/\b\w/g).join("")
            : avail.location.substring(0, 3);
        const notifyDate = avail.notifyDate
          ? new Date(avail.notifyDate * 1000)
          : "";
        const timeSinceNotifyDate = notifyDate
          ? Math.floor((Date.now() - notifyDate) / (1000 * 60))
          : "";
        return (
          <Tooltip
            title={`${avail.location} as of ${notifyDate.toLocaleString()}`}
            placement="bottom"
            key={availId}
          >
            <div
              className="flex px-1 min-w-[max-content] items-center justify-center rounded-lg border border-teal-900 text-white text-sm uppercase hover:bg-slate-700 hover:text-teal-300 hover:border-teal-300 duration-300"
            >
              {location} {formatTime(timeSinceNotifyDate)}
            </div>
          </Tooltip>
        );
      })}
    </div>
  );
}
