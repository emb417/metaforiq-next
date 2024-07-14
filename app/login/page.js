import PageTitle from "@/components/nav/PageTitle";
import LoginForm from "@/components/auth/LoginForm";
import { GiKeyLock } from "react-icons/gi";

const metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <div>
      <PageTitle><GiKeyLock />{metadata.title}</PageTitle>
      <LoginForm />
    </div>
  );
}
