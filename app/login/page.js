import PageTitle from "@/components/PageTitle";
import LoginForm from "@/components/auth/LoginForm";

const metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <div>
      <PageTitle>{metadata.title}</PageTitle>
      <LoginForm />
    </div>
  );
}
