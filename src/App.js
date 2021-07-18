import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import Form from "./components/Form";
import Home from "./components/Home";
import OrderCompleted from "./components/OrderCompleted";

const StyledApp = styled.div`
  height: 100%;
  width: 100%;

  h1 {
    font-size: 2rem;
  }

  .store-header {
    display: flex;
    justify-content: space-between;
    padding: 1% 5%;
    align-items: center;
  }

  .nav-links {
    margin-right: 5%;
  }

  .react-link {
    font-size: 1.25rem;
    padding: 10%;
    text-decoration: none;
    color: black;
    font-weight: bold;
    background-color: white;
    border: solid black 2px;
  }
`;

const App = () => {
  return (
    <StyledApp>
      <header class="store-header">
        <h1>LAMBDA EATS</h1>
        <div class="nav-links">
          <Link class="react-link" to="/">
            Home
          </Link>
          <Link class="react-link" to="/shop">
            Shop
          </Link>
        </div>
      </header>

      <Switch>
        <Route path="/shop/order-completed">
          <OrderCompleted />
        </Route>

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
