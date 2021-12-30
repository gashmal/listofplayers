import React from "react";
import Navigator from "./src/navigation/Navigator";
import { QueryClient, QueryClientProvider } from "react-query";
import { ChampionshipProvider } from "./src/context/ChampionshipContext";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChampionshipProvider>
        <Navigator />
      </ChampionshipProvider>
    </QueryClientProvider>
  );
};

export default App;
