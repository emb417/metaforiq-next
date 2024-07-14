
import PageTitle from "@/components/nav/PageTitle";
import NavItems from "@/components/libowski/NavItems";
import {
  GiBlackball,
  GiBowlingPin,
} from "react-icons/gi";

export const metadata = {
  title: "Libowski",
};

export default function LibowskiPage() {

  return (
    <div className="w-full">
      <PageTitle>
        <GiBlackball className="text-3xl mr-2" />
        Libowski
        <GiBowlingPin className="text-3xl mx-1" />
        The Library Dude
      </PageTitle>
      <NavItems />
    </div>
  );
};
