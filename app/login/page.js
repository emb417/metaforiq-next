import PageTitle from "@/components/nav/PageTitle";
import LoginForm from "@/components/auth/LoginForm";
import { GiKeyLock } from "react-icons/gi";

const metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <div>
      <PageTitle><GiKeyLock className="text-3xl mr-2" />{metadata.title}</PageTitle>
      <LoginForm />
    </div>
  );
}
