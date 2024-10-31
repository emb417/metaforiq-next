import { CgPlayList } from "react-icons/cg";
import {
  GiBlackball,
  GiBowlingPin,
  GiPayMoney,
  GiSmallFire,
} from "react-icons/gi";
import PageTitle from "@/components/nav/PageTitle";
import SubNav from "@/components/nav/SubNav";
import LoginForm from "@/components/auth/LoginForm";

export const metadata = {
  title: "Libowski",
  description: "The Library Dude",
  subTitle: "The Library Dude",
  alternates: {
    canonical: "/libowski",
  }
};

const navItems = [
  {
    id: 1,
    icon: <GiPayMoney />,
    href: "/libowski/on-order",
    text: "Recent On Orders",
  },
  {
    id: 2,
    icon: <GiSmallFire />,
    href: "/libowski/best-sellers",
    text: "Recent Best Sellers",
  },
];

export default function LibowskiPage() {
  return (
    <div className="flex flex-wrap w-full px-4">
      <div className="flex flex-wrap w-full mb-4 items-center">
        <PageTitle>
          <GiBlackball />
          {metadata.title}
          <GiBowlingPin />
          {metadata.subTitle}
        </PageTitle>
        <SubNav navItems={navItems} />
      </div>
      <LoginForm />
    </div>
  );
}
