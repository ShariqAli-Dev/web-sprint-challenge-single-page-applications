export default function Toppings() {
  const toppings = ["Pepperoni", "Sausage", "Canadian Bacon", "Spicy Italian Sausage", "Grilled Chicken", "Onions", "Green Pepper", "Diced Tomatoes", "Black Olives", "Roasted Garlic", "Artichoke Hears", "Three Cheese", "Pineapple", "Extra Cheese"];

  return (
    <>
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
    </>
  );
}
