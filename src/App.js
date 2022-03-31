import "./App.css";
import Home from "./pages/Home";
import FAQ from "./pages/faq";
import { Heading, Text } from "@chakra-ui/react";
import { Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home />
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
