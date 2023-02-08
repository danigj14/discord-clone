import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function AuthScreen() {
  const [register, setRegister] = useState(false);

  return (
    <div className="h-full w-full bg-indigo-900 flex justify-center items-center">
      <div className="bg-zinc-800 w-1/6 p-6 flex flex-col rounded-lg shadow-lg">
        <h1 className="text-xl font-bold mb-6 mx-auto">
          {register ? "Create New Account" : "Login To Clone Discord"}
        </h1>
        {register ? <RegisterForm/> : <LoginForm/>}
        <button
          className="mr-auto text-xs mt-2 underline"
          type="button"
          onClick={() => setRegister(!register)}
        >
          {register ? "Login with existing account" : "Register new account"}
        </button>
      </div>
    </div>
  );
}
