export default function PlayerSummaryPane({ children, title }) {
    return (
        <div className="flex flex-col border-2 border-teal-950 rounded-xl px-2 pt-1 pb-2">
        <div className="text-lg pl-1 pb-1">{title}</div>
        <div className="flex flex-col sm:flex-row md:flex-col gap-2">
          {children}
        </div>
      </div>
    )
}