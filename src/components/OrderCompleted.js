import styled from "styled-components";

const StyledCompletion = styled.div`
  width: 70%;
  margin: auto;

  ul {
    list-style-type: circle;
  }

  h4 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  h3 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1.25rem;
  }

  iframe {
    width: 500px;
    height: 400px;
    margin: auto;
  }

  .celebration-div {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: auto;
    text-align: center;

    .orders {
      display: flex;
      width: 100%;
    }

    .order {
      padding: 10px;
      margin: 20px;
    }
  }
`;

export default function OrderCompleted({ orders }) {
  console.log(orders);
  return (
    <StyledCompletion>
      <div className="celebration-div">
        <h4>Congrats! Pizza is on its way!</h4>
        <iframe title="dog with pizza" src="https://giphy.com/embed/9fuvOqZ8tbZOU" alt="pizza-dog" />
        <p>Enjoy This Dog With Pizza</p>
      </div>

      <div>
        <h3>Order History</h3>
        {!orders || orders.length === 0 ? <p>Fetching History...</p> : null}
        <div className="orders">
          {orders.map((order, index) => {
            return (
              <div className="order" key={order.name}>
                <ul>
                  <br />
                  <p>Order # {index}</p>
                  <li>Special Information: {order.special}</li>
                  <li>Name: {order.name}</li>
                  <li>Size: {order.size}</li>
                  <li>Sauce: {order.sauce}</li>
                  <li>Pepperoni: {order.pepperoni ? "True" : "False"}</li>
                  <li>Sausage: {order.sausage ? "True" : "False"}</li>
                  <li>Canadian Bacon: {order.canadian ? "True" : "False"}</li>
                  <li>Green Pepper: {order.green ? "True" : "False"}</li>
                  <li>Pineapple: {order.pineapple ? "True" : "False"}</li>
                  <li>Extra Cheese: {order.extra ? "True" : "False"}</li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </StyledCompletion>
  );
}
