import { useState, useMemo } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import MainNav from "@/components/MainNav";
import AuthContext from "@/contexts/AuthContext";
import AuthScreen from "@/features/auth/components/AuthScreen";
import DirectMessages from "./features/direct-messages/components/DirectMessages";

const queryClient = new QueryClient();

function App() {
  const [loggedUserToken, setLoggedUserToken] = useState();

  const [mainSelection, setMainSelection] = useState({
    type: "DIRECT_MESSAGES",
  });

  const authContextMemo = useMemo(
    () => [loggedUserToken, setLoggedUserToken],
    [loggedUserToken, setLoggedUserToken]
  );

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContext.Provider value={authContextMemo}>
        <div className="h-screen w-screen flex text-zinc-100">
          {loggedUserToken ? (
            <>
              <MainNav
                servers={[]}
                onSelection={setMainSelection}
                selection={mainSelection}
              />
              {mainSelection.type === "DIRECT_MESSAGES" ? (
                <DirectMessages />
              ) : (
                <div className="flex-grow bg-zinc-800" />
              )}
            </>
          ) : (
            <AuthScreen />
          )}
        </div>
      </AuthContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
