import PageTitle from "@/components/PageTitle";
import { GiPinballFlipper } from "react-icons/gi";
import NavItems from "@/components/pinball/NavItems";

export const metadata = {
  title: "Pinball Dashboards",
};

export default function PinballPage() {
  return (
    <div>
      <PageTitle>
        <GiPinballFlipper className="text-2xl mr-1 mt-1" /> {metadata.title}
      </PageTitle>
      <NavItems />
    </div>
  );
}
