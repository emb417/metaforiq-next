import Link from "next/link";

export default function SubNav({ navItems }) {
  return (
    <div className="flex ml-auto">
      {navItems.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className="flex ml-2 p-2 min-w-[max-content] text-sm text-white border-l-2 border-teal-950 hover:text-teal-300 duration-300 cursor-pointer"
        >
          {item.icon} {item.text}
        </Link>
      ))}
    </div>
  );
}

