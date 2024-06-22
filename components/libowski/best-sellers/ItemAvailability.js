"use client";

export default function Availability({ availability }) {
  const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    const days = Math.floor(hours / 24);
    const remainingHours = hours % 24;
    const formattedDays = days > 0 ? `${days}d ` : "";
    const formattedHours = remainingHours > 0 ? `${remainingHours}h ` : "";
    const formattedMinutes = minutes < 100 ? `${minutes}m ` : "";
    return formattedDays + formattedHours + formattedMinutes;
  };

  return (
    <div className="grid grid-cols-3 gap-x-2 mt-2 center">
      {Object.keys(availability || {}).map((availId) => {
        const avail = availability[availId];
        const location = avail.location ? avail.location.substring(0, 3) : "";
        const notifyDate = avail.notifyDate
          ? new Date(avail.notifyDate * 1000)
          : "";
        const timeSinceNotifyDate = notifyDate
          ? Math.floor((Date.now() - notifyDate) / (1000 * 60))
          : "";
        return (
          <div
            className="flex items-center border-2 border-teal-950 rounded-lg p-1 text-white uppercase hover:bg-black justify-center w-full"
            key={availId}
            onMouseEnter={() => {
              document.getElementById(`avail${availId}`).style.display = "flex";
            }}
            onMouseLeave={() => {
              document.getElementById(`avail${availId}`).style.display = "none";
            }}
          >
            {location} {formatTime(timeSinceNotifyDate)}
            <div
              id={`avail${availId}`}
              className="absolute left-2 ml-4 w-[max-content] hidden bg-slate-950 p-2 border-2 border-teal-950 rounded-lg shadow-md shadow-teal-950"
            >
              {avail.location}
              <br />
              {notifyDate.toLocaleString()}
            </div>
          </div>
        );
      })}
    </div>
  );
}
