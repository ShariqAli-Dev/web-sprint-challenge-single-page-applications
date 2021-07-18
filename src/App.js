import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import styled from "styled-components";
// import Axios from "axios";

import Form from "./components/Form";
import Home from "./components/Home";

const StyledApp = styled.div`
  height: 100%;
  width: 100%;
  border: solid 2px black;
  margin: auto;
`;

const App = () => {
  // Axios.get("https://reqres.in/api/orders")
  //   .then((res) => console.log(res))
  //   .catch((err) => {
  //     debugger;
  //   });

  return (
    <StyledApp>
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
    </StyledApp>
  );
};
export default App;
