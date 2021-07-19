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
  const toppings = ["Pepperoni", "Sausage", "Canadian Bacon", "Green Pepper", "Pineapple", "Extra Cheese"];

  return (
    <StyledToppings>
      {toppings.map((topping) => {
        return (
          <label key={topping.split(" ")[0].toLocaleLowerCase()}>
            {topping}
            <input type="checkbox" name={topping.split(" ")[0].toLocaleLowerCase()} />
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
