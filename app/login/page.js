import LoginForm from "@/components/auth/LoginForm";

const metadata = {
    title: "Login",
};

export default function LoginPage() {
    return (
        <div>
            <h1 className="flex text-2xl text-white font-bold m-4 min-w-[max-content]">
                {metadata.title}
            </h1>
            <LoginForm />
        </div>
    );
}
