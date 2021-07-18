import { useHistory } from "react-router-dom";
import styled from "styled-components";

import DeliveryExamples from "./DeliveryExamples";

const StyledHome = styled.div`
  .website-hook {
    background-image: url("https://www.agrodolce.it/app/uploads/2016/02/pizza-napoletana-980x400.jpg");
  }
`;

export default function Home() {
  let history = useHistory();

  return (
    <StyledHome class="home container">
      <section class="website-hook">
        {/* Make the background of div to url(). THen setting it to the pizza image */}
        <h2>Your favorite food, while coding</h2>
        <button onClick={() => history.push("/shop")}>Pizza?</button>
      </section>

      <DeliveryExamples />
    </StyledHome>
  );
}
