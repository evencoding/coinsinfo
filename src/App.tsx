import React from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import Router from "./Router";

function App() {
  return (
    <>
      <Router />
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}

export default App;
