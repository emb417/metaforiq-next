export default function PageTitle({ children }) {
  return (
    <h1 className="flex p-2 min-w-[max-content] items-center text-2xl text-teal-300">
      {children}
    </h1>
  );
}
