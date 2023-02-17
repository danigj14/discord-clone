import { useState, useMemo } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthContext from "@/contexts/AuthContext";
import AuthScreen from "@/features/auth/components/AuthScreen";
import DirectMessages from "@/features/direct-messages/components/DirectMessages";
import MainNav from "@/components/MainNav";

const queryClient = new QueryClient();

function App() {
  const [authToken, setAuthToken] = useState();

  const [mainSelection, setMainSelection] = useState({
    type: "DIRECT_MESSAGES",
  });

  const authContextMemo = useMemo(
    () => ({authToken, setAuthToken}),
    [authToken, setAuthToken]
  );

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContext.Provider value={authContextMemo}>
        <div className="h-screen w-screen flex text-zinc-100">
          {authToken ? (
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
