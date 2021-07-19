import styled from "styled-components";

const StyledToppings = styled.div`
  display: flex;
  flex-flow: column wrap;

  label {
    padding: 1%;
    font-size: 1.1rem;
  }
`;

export default function Toppings() {
  const toppings = ["Pepperoni", "Sausage", "Canadian Bacon", "Spicy Italian Sausage", "Grilled Chicken", "Onions", "Green Pepper", "Diced Tomatoes", "Black Olives", "Roasted Garlic", "Artichoke Hears", "Three Cheese", "Pineapple", "Extra Cheese"];

  return (
    <StyledToppings>
      {toppings.map((topping) => {
        return (
          <label>
            {topping}
            <input type="checkbox" name={topping.toLocaleLowerCase()} />
          </label>
        );
      })}
      <label>
        Pepperoni
        <input type="checkbox" name="pepperoni" />
      </label>
    </StyledToppings>
  );
}
