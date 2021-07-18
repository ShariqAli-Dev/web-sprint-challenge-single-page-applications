import { useHistory } from "react-router-dom";
import styled from "styled-components";

import DeliveryExamples from "./DeliveryExamples";

const StyledHome = styled.div`
  .main-pizza-div {
    background-image: url("https://www.agrodolce.it/app/uploads/2016/02/pizza-napoletana-980x400.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin: auto;
    height: 300px;
  }

  .pizza-div-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default function Home() {
  let history = useHistory();

  return (
    <StyledHome>
      <section class="main-pizza-div">
        <div class="pizza-div-content">
          <h2>Your favorite food, while coding</h2>
          <div id="pizza-button-div">
            <button onClick={() => history.push("/shop")}>Pizza?</button>
          </div>
        </div>
      </section>

      <DeliveryExamples />
    </StyledHome>
  );
}
