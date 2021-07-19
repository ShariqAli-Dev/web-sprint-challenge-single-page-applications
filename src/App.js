import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
import * as yup from "yup";
import styled from "styled-components";
import axios from "axios";

import schema from "./validation/formSchema";
import Form from "./components/Form";
import Home from "./components/Home";
import OrderCompleted from "./components/OrderCompleted";

const StyledApp = styled.div`
  height: 100vh;
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

const initialFormValues = {
  // text inputs
  special: "",
  name: "",

  // dropdown
  size: "",

  // radio buttons
  sauce: "",

  // checkboxes
  pepperoni: false,
  sausage: false,
  canadian: false,
  green: false,
  pineapple: false,
  extra: false,
};

const initialFormErrors = {
  special: "",
  name: "",
  size: "",
  sauce: "",
};

const initialDisabled = true;

const App = () => {
  const [orders, setOrders] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
  };

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  const postOrder = (newOrder) => {
    axios
      .post("https://reqres.in/api/orders", newOrder)
      .then((res) => {
        setOrders(orders.concat(res.data));
        console.log(res.data);
      })
      .catch((err) => {
        debugger;
      })
      .finally(setFormValues(initialFormValues));
  };

  const formSubmit = () => {
    const newOrder = {
      special: formValues.special.trim(),
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      sauce: formValues.sauce.trim(),
      pepperoni: formValues.pepperoni,
      sausage: formValues.sausage,
      canadian: formValues.canadian,
      green: formValues.green,
      pineapple: formValues.pineapple,
      extra: formValues.extra,
    };
    postOrder(newOrder);
  };

  return (
    <StyledApp>
      <header className="store-header">
        <h1>LAMBDA EATS</h1>
        <div className="nav-links">
          <Link className="react-link" to="/">
            Home
          </Link>
          <Link className="react-link" id="order-pizza" to="/pizza">
            Shop
          </Link>
        </div>
      </header>

      <Switch>
        <Route path="/pizza/completed">
          <OrderCompleted />
        </Route>

        <Route path="/pizza">
          <Form values={formValues} change={inputChange} submit={formSubmit} disabled={disabled} errors={formErrors} />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </StyledApp>
  );
};
export default App;
