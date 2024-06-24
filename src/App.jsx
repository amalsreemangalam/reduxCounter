import React from "react";
import Count from "./Components/Count";
import Counter from "./Components/Counter";

export const UseContext = React.createContext();

function App() {
  return (
    <>
   <Count/>
  <Counter/>
    </>
  );
}

export default App;
