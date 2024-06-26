export default function PageTitle({ children }) {
  return (
    <h1 className="flex text-2xl text-white m-4 min-w-[max-content]">
      {children}
    </h1>
  );
}
