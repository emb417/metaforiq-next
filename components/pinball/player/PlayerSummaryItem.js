export default function PlayerSummaryItem({ children, title }) {
  return (
    <div className="flex flex-col items-center bg-slate-900 rounded-lg px-2 py-1">
      <div className="text-sm text-white">{title}</div>
      <div className="text-xl text-teal-300">{children}</div>
    </div>
  );
}
