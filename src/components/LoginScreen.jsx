import { useState } from "react";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
  }

  return <div className="h-full w-full bg-indigo-900 flex justify-center items-center">
    <div className="container bg-zinc-800 p-8 rounded-lg shadow-lg">
      <h1>Login To Discord</h1>
      <form className="flex flex-col" onSubmit={onSubmit}>
        <div>Username</div>
        <input type="text" value={username} onChange={({target}) => setUsername(target.value)} />
        <div>Password</div>
        <input type="password" value={password} onChange={({target}) => setPassword(target.value)} />
      </form>
    </div>
  </div>;
}
