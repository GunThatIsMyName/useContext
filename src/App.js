import React from "react";
import LangProvider from "./Context";
import Screen from "./Screen";
import translation from "./translate";
function App() {
  return (
    <LangProvider defaultLang="en" translate={translation} >
      <Screen />   
    </LangProvider>
  );
}

export default App;
