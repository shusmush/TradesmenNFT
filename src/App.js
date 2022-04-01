import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import FAQ from "./pages/faq";
import { Heading, Text } from "@chakra-ui/react";
import { Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";

function App() {
  const [accounts, setAccounts] = useState([]);
  return (
    <div className="App">
      <Header accounts={accounts} setAccounts={setAccounts} />
      <Switch>
        <Route path="/" exact>
          <Home accounts={accounts} setAccounts={setAccounts} />
        </Route>
      </Switch>
      <Switch>
        <Route path="/faq" exact>
          <FAQ />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
