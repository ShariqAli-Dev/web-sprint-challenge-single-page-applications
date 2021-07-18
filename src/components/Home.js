import { useHistory } from "react-router-dom";

import DeliveryExamples from "./DeliveryExamples";

export default function Home() {
  let history = useHistory();

  return (
    <div class="home container">
      <section class="image-title">
        {/* Make the background of div to url(). THen setting it to the pizza image */}
        <h2>Your favorite food, while coding</h2>
        <button onClick={() => history.push("/shop")}>Pizza?</button>
      </section>

      <DeliveryExamples />
    </div>
  );
}
