import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/Header";
import HomePage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/Shop";
import SignInUp from "./pages/signInUp/SignInUp";

const HatsPage = props => (
  <div>
    {console.log(props)}
    <h1>HATS PAGE </h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/shop" component={Shop} />
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
        <Route path="/sign" component={SignInUp} />
      </Switch>
    </div>
  );
}

export default App;
