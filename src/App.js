import React from "react";
import { Link, Route, Switch } from "react-router-dom";
const App = () => {
  return (
    <>
      <header class="store-header">
        <h1>Lambda Eats</h1>
        <div class="nav-links">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
        </div>
      </header>
    </>
  );
};
export default App;
