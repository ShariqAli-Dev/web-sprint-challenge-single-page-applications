import { useHistory } from "react-router-dom";

import Toppings from "./Toppings";
import Sauces from "./Sauces";
import styled from "styled-components";

const StyledForm = styled.div`
  height: 100%;
  width: 60%;
  margin: auto;

  button {
    width: 50%;
    margin: auto 25%;
    padding: 3%;
    border-radius: 25px;
  }

  .choice-title {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .choice-requirement {
    font-size: 1.15rem;
  }

  .form-header img {
    width: 100%;
    display: block;
    height: auto;
    margin: auto;
  }

  .choice-header {
    background-color: #d6d6d6;
    padding: 2%;
  }

  .choice-inputs {
    padding: 4%;
  }

  #size-dropdown {
    padding: 1%;
    font-size: 1.05rem;
    width: 40%;
  }

  #form-title {
    font-size: 1.5rem;
    text-align: center;
    padding: 1%;
    margin: 1%;
  }

  #special-text,
  #name-input {
    width: 90%;
    margin: auto;
    padding: 2%;
    font-size: 1.2rem;
  }
`;

// values={formValues} change={inputChange} submit={formSubmit} disabled={disabled} erros={formErrors}

export default function Form({ values, change, submit, disabled, errors }) {
  const history = useHistory();

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
    history.push("/pizza/orders");
  };
  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <StyledForm id="form-container">
      <section className="form-header">
        <h3 id="form-title">Build Your Own Pizza</h3>
        <img src="https://www.agrodolce.it/app/uploads/2016/02/pizza-napoletana-980x400.jpg" alt="pizzaImage" />
      </section>

      <form onSubmit={onSubmit} id="pizza-form">
        {/* PIZZA SIZE DROPBOX DROPDOWN*/}
        <div className="size">
          <div className="choice-header">
            <h5 className="choice-title">Choice of Size</h5>
            <p className="choice-requirement">Required</p>
          </div>

          <div className="choice-inputs">
            <label>
              <select onChange={onChange} id="size-dropdown" name="size">
                <option value="">Select an option</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </label>
          </div>
        </div>

        {/* CHOICE OF SAUCE RADIO BUTTON*/}
        <div className="sauce">
          <div className="choice-header">
            <h5 className="choice-title">Choice of Sauce</h5>
            <p className="choice-requirement">Required</p>
          </div>

          <div className="choice-inputs">
            <Sauces onChange={onChange} />
          </div>
        </div>

        {/* CHOICE OF TOPPINGS CHECKBOX*/}
        <div className="toppings">
          <div className="choice-header">
            <h5 className="choice-title">Add Toppings</h5>
            <p className="choice-requirement">Choose up to 6</p>
          </div>

          <div className="choice-inputs">
            <Toppings values={values} onChange={onChange} />
          </div>
        </div>

        {/* SPECIAL INSTRUCTIONS TEXT INPUT */}
        <div className="special-instructions">
          <div className="choice-header">
            <h5 className="choice-title">Special Instructions</h5>
          </div>

          <div className="choice-inputs">
            <label>
              <input id="special-text" type="text" name="special" placeholder="Anything else you'd like to add" value={values.special} onChange={onChange} />
            </label>
          </div>
        </div>

        {/* USER'S NAME TEXT INPUT*/}
        <div className="name">
          <div className="choice-header">
            <h5 className="choice-title">Name</h5>
            <p className="choice-requirement">First and last name</p>
          </div>

          <div className="choice-inputs">
            <label>
              <input id="name-input" type="text" name="name" value={values.name} onChange={onChange} />
            </label>
          </div>
        </div>

        <div className="choice-inputs">
          <button disabled={disabled} id="order-button">
            Add To Order
          </button>
        </div>
      </form>

      <div className="errors">
        <div>{errors.special}</div>
        <div>{errors.name}</div>
        <div>{errors.size}</div>
        <div>{errors.sauce}</div>
        <div>{errors.pepperoni}</div>
        <div>{errors.sausage}</div>
        <div>{errors.canadian}</div>
        <div>{errors.green}</div>
        <div>{errors.pineapple}</div>
        <div>{errors.extra}</div>
        <div>{errors.special}</div>
      </div>
    </StyledForm>
  );
}
