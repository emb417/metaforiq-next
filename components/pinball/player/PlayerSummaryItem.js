export default function PlayerSummaryItem({ children, title }) {
  return (
    <div className="flex flex-col items-center bg-slate-900 rounded-lg px-2 py-1 w-full">
      <div className="text-sm text-white text-center">{title}</div>
      <div className="text-xl text-teal-300 text-center">{children}</div>
    </div>
  );
}
