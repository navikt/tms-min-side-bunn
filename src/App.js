import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Personalia from "./components/Personalia";
import "./App.less";

const App = (props) => {
  props.emitter.on("level", (level) => console.log(`min-side-bunn: ${level}`));

  return (
    <main className="main-bunn">
      <div className="app">
        <QueryClientProvider client={new QueryClient()}>
          <Personalia />
        </QueryClientProvider>
      </div>
    </main>
  );
};

export default App;
