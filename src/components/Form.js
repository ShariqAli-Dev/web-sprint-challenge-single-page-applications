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

  #instructions,
  #customer {
    width: 90%;
    margin: auto;
    padding: 2%;
    font-size: 1.2rem;
  }
`;

export default function Form() {
  return (
    <StyledForm id="form-container">
      <section class="form-header">
        <h3 id="form-title">Build Your Own Pizza</h3>
        <img src="https://www.agrodolce.it/app/uploads/2016/02/pizza-napoletana-980x400.jpg" alt="pizzaImage" />
        {/* <h4>Build Your Own Pizza</h4> */}
      </section>

      <form id="pizza">
        {/* PIZZA SIZE DROPBOX DROPDOWN*/}
        <div class="size">
          <div class="choice-header">
            <h5 class="choice-title">Choice of Size</h5>
            <p class="choice-requirement">Required</p>
          </div>

          <div class="choice-inputs">
            <label>
              <select id="size-dropdown" name="size">
                <option value="">Select an option</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </label>
          </div>
        </div>

        {/* CHOICE OF SAUCE RADIO BUTTON*/}
        <div class="sauce">
          <div class="choice-header">
            <h5 class="choice-title">Choice of Sauce</h5>
            <p class="choice-requirement">Required</p>
          </div>

          <div class="choice-inputs">
            <Sauces />
          </div>
        </div>

        {/* CHOICE OF TOPPINGS CHECKBOX*/}
        <div class="toppings">
          <div class="choice-header">
            <h5 class="choice-title">Add Toppings</h5>
            <p class="choice-requirement">Choose up to 10</p>
          </div>

          <div class="choice-inputs">
            <Toppings />
          </div>
        </div>

        {/* SPECIAL INSTRUCTIONS TEXT INPUT */}
        <div class="special-instructions">
          <div class="choice-header">
            <h5 class="choice-title">Special Instructions</h5>
          </div>

          <div class="choice-inputs">
            <label>
              <input id="instructions" type="text" name="special instructions" placeholder="Anything else you'd like to add" />
            </label>
          </div>
        </div>

        {/* USER'S NAME TEXT INPUT*/}
        <div class="name">
          <div class="choice-header">
            <h5 class="choice-title">Name</h5>
            <p class="choice-requirement">First and last name</p>
          </div>

          <div class="choice-inputs">
            <label>
              <input id="customer" type="text" name="name" />
            </label>
          </div>
        </div>

        <div class="choice-inputs">
          <button>Add To Order</button>
        </div>
      </form>
    </StyledForm>
  );
}
