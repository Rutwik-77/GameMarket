/** @format */
import React, { useContext, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Page from "./Components/Pages/Page";

export const AppContext = React.createContext();

function App() {
  const [library, setLibrary] = useState([]);
  const [bag, setBag] = useState([]);

  return (
    <>
      <AppContext.Provider value={{library,setLibrary,bag,setBag}}>
        <Page></Page>
      </AppContext.Provider>
    </>
  );
}

export default App;
