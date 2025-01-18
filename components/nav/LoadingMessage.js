import Image from "next/image";

export default function LoadingMessage({ message = "Loading..." }) {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-start pt-4 gap-4">
      <Image
        src="/icon.png"
        width={128}
        height={128}
        alt={`${message}`}
        className="animate-pulse"
      />
      <div className="text-center text-4xl text-white animate-pulse">
        {message}
      </div>
      <div className="text-center text-sm text-teal-300">
        metaforiq-next v{process.env.npm_package_version}
      </div>
    </div>
  );
}
