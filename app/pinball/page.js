import React from "react";
import PinballChart from "@/components/PinballChart";
import { GiPinballFlipper } from "react-icons/gi";

export const metadata = {
  title: "Pinball",
};

async function getData() {
  try {
    const response = await fetch(
      `${process.env.VPC_API_URL}`
      // { next: { revalidate: 0 } }
    );
    const data = await response.json();
    const sortedWeeks = data
      .find((obj) => obj.channelName === "competition-corner")
      .weeks.sort((a, b) => new Date(b.periodStart) - new Date(a.periodStart));
    return { props: { weeks: sortedWeeks } };
  } catch (error) {
    console.error(error);
    return { props: { message: "Server Error" } };
  }
}

export default async function PinballPage() {
  const { props } = await getData();
  const { weeks } = props;
  return (
    <div>
      <h1 className="flex text-xl font-bold my-4 ml-4 justify-center text-white uppercase">
        <GiPinballFlipper className="text-2xl mr-1" /> {metadata.title}
      </h1>
      <PinballChart weeks={weeks} />
    </div>
  );
}
