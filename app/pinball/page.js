import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { GiPinballFlipper } from "react-icons/gi";
import PageTitle from "@/components/nav/PageTitle";
import Leaderboards from "@/components/pinball/Leaderboards";

export const metadata = {
  title: "Pinball Leaderboards",
  description: "VPC Pinball Leaderboards",
  alternates: {
    canonical: "/pinball",
  }
};

export default function PinballPage() {
  return (
    <div className="flex flex-wrap w-full px-4">
      <div className="flex flex-wrap w-full mb-4 items-center">
        <PageTitle>
          <GiPinballFlipper /> {metadata.title}
        </PageTitle>
        <Link
          href="https://virtualpinballchat.com:8443"
          target="_blank"
          className="flex gap-1 ml-auto p-2 min-w-[max-content] text-lg text-white items-center hover:text-teal-300 duration-300 cursor-pointer"
        >
          <Image src="/vpc.png" width={48} height={48} alt="Virtual Pinball Chat" />
          Virtual Pinball Chat
        </Link>
      </div>
      <div className="flex w-full justify-center items-start">
        <Suspense
          fallback={
            <div className="w-full text-2xl text-white text-center flex justify-center items-center animate-pulse">
              Loading {metadata.title}...
            </div>
          }
        >
          <Leaderboards />
        </Suspense>
      </div>
    </div>
  );
}
