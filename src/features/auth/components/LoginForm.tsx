import { useId, useState } from "react";
import useAuth from "../hooks/useAuth";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const emailInputId = useId();
  const passwordInputId = useId();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login(email, password);
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={onSubmit}>
      <label
        className="flex flex-col gap-2 items-start text-xs font-bold"
        htmlFor={emailInputId}
      >
        EMAIL
        <input
          className="bg-zinc-900 rounded-sm w-full text-md p-2 font-normal outline-none"
          type="email"
          value={email}
          required
          onChange={({ target }) => setEmail(target.value)}
          id={emailInputId}
        />
      </label>
      <label
        className="flex flex-col gap-2 items-start text-xs font-bold"
        htmlFor={passwordInputId}
      >
        PASSWORD
        <input
          className="bg-zinc-900 rounded-sm w-full text-md p-2 font-normal outline-none"
          type="password"
          value={password}
          required
          onChange={({ target }) => setPassword(target.value)}
          id={passwordInputId}
        />
      </label>
      <button className="bg-indigo-700 rounded-sm p-1" type="submit">
        Log In
      </button>
    </form>
  );
}
