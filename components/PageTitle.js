export default function PageTitle({ children }) {
  return (
    <h1 className="flex text-2xl text-white m-4 w-full">
      {children}
    </h1>
  );
}
