import PageTitle from "@/components/nav/PageTitle";
import LoginForm from "@/components/auth/LoginForm";
import { GiKeyLock } from "react-icons/gi";

const metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <div className="flex flex-wrap w-full px-4">
      <PageTitle><GiKeyLock />{metadata.title}</PageTitle>
      <LoginForm />
    </div>
  );
}
