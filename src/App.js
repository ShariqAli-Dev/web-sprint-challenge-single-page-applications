import React from "react";
import { Link, Route, Switch } from "react-router-dom";
// import Axios from "axios";

import Form from "./components/Form";
import Home from "./components/Home";

const App = () => {
  // Axios.get("https://reqres.in/api/orders")
  //   .then((res) => console.log(res))
  //   .catch((err) => {
  //     debugger;
  //   });

  return (
    <div class="container">
      <header class="store-header">
        <h1>LAMBDA EATS</h1>
        <div class="nav-links">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
        </div>
      </header>

      <Switch>
        <Route path="/shop">
          <Form />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
