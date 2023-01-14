import { useId, useState } from "react";

const user1 = {
  id: 0,
  name: "User 1",
};

const user2 = {
  id: 0,
  name: "User 2",
};

export default function LoginScreen({ onUserLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [incorrectCredentials, setIncorrectCredentials] = useState(false);

  const usernameInputId = useId();
  const passwordInputId = useId();

  const onSubmit = (event) => {
    event.preventDefault();

    if (username === "user1" && password === "password1") onUserLogin(user1);
    else if (username === "user2" && password === "password2")
      onUserLogin(user2);
    else setIncorrectCredentials(true);
  };

  return (
    <div className="h-full w-full bg-indigo-900 flex justify-center items-center">
      <div className="bg-zinc-800 p-6 text-center rounded-lg shadow-lg">
        <h1 className="text-xl font-bold mb-6">Login To Clone Discord</h1>
        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
          <label
            className="flex flex-col gap-2 items-start text-xs font-bold"
            htmlFor={usernameInputId}
          >
            USERNAME
            <input
              className="bg-zinc-900 rounded-sm w-full text-md p-2 font-normal outline-none"
              type="text"
              value={username}
              onChange={({ target }) => setUsername(target.value)}
              id={usernameInputId}
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
              onChange={({ target }) => setPassword(target.value)}
              id={passwordInputId}
            />
          </label>
          {incorrectCredentials && (
            <span className="text-red-600 text-left text-sm">
              - Incorrect Login
            </span>
          )}
          <button className="bg-indigo-700 rounded-sm p-1" type="submit">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
