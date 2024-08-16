export default function PlayerSummaryItem({ children, title }) {
  return (
    <div className="flex flex-col items-center rounded-lg px-2 pb-1 w-full">
      <div className="text-sm text-white text-center pb-1">{title}</div>
      <div className="text-teal-300 text-center w-full leading-3">{children}</div>
    </div>
  );
}
