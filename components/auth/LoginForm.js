import { headers } from "next/headers";
import { authenticate } from "@/actions/actions";

export default function LoginForm() {
  const referer = headers().headers.referer;
  return (
    <div className="flex flex-col items-center justify-center w-full m-4 text-white">
      {referer && referer.includes('/login') && (
        <p className="text-red-500 text-center font-bold mb-4">Invalid credentials.</p>
      )}
      <form className="flex flex-col gap-4 max-w-lg mx-auto" action={authenticate}>
        <div className="flex flex-col gap-2">
          <label htmlFor="username" className="text-center">
            Username
          </label>
          <input
            required
            type="text"
            id="username"
            name="username"
            placeholder="username"
            className="w-full bg-slate-950 p-1 rounded-lg border-2 border-teal-950 text-center"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-center">
            Password
          </label>
          <input
            required
            type="password"
            id="password"
            name="password"
            placeholder="password"
            className="w-full bg-slate-950 p-1 rounded-lg border-2 border-teal-950 text-center"
          />
        </div>
        <div className="w-full">
          <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

