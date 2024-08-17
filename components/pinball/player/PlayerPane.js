export default function PlayerSummaryPane({ children, title }) {
  return (
    <div className="flex flex-col border-2 border-teal-950 rounded-xl px-2 pt-1 pb-2 gap-1">
      <div className="text-white text-sm pl-1">{title}</div>
      <hr className="w-full border-1 border-teal-950 pb-1" />
      <div className="flex flex-col sm:flex-row gap-2">{children}</div>
    </div>
  );
}
