export default function Form() {
  return (
    <div id="form-container">
      <section ckass="form-header">
        <h3>Build Your Own Pizza</h3>
        <img src="https://www.agrodolce.it/app/uploads/2016/02/pizza-napoletana-980x400.jpg" alt="pizzaImage" />
        <h4>Build Your Own Pizza</h4>
      </section>

      <form action="">
        {/* PIZZA SIZE DROPBOX DROPDOWN*/}
        <div class="size">
          <div class="choice-header">
            <h5 class="choice-title">Choice of Size</h5>
            <p class="choice-requirement">Required</p>
          </div>

          <div class="choice-inputs">
            <label>
              Size
              <select name="size">
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
            <label>
              Original Red
              <input type="radio" name="sauce" value="original-red" />
            </label>

            <label>
              Garlic Ranch
              <input type="radio" name="sauce" value="garlic-ranch" />
            </label>

            <label>
              BBQ Sauce
              <input type="radio" name="sauce" value="bbq-sauce" />
            </label>

            <label>
              Spinach Alfredo
              <input type="radio" name="sauce" value="spinach-alfredo" />
            </label>
          </div>
        </div>

        {/* CHOICE OF TOPPINGS CHECKBOX*/}
        <div class="toppings">
          <div class="choice-header">
            <h5 class="choice-title">Add Toppings</h5>
            <p class="choice-requirement">Choose up to 10</p>
          </div>

          <div class="choice-inputs">
            <label>
              Pepperoni
              <input type="checkbox" name="pepperoni" />
            </label>
          </div>
        </div>

        {/* CHOICE OF SUBSTITUE SLIDER BUTTON */}
        <div class="">
          <div class="choice-header">
            <h5 class="choice-title"></h5>
            <p class="choice-requirement"></p>
          </div>

          <div class="choice-inputs">
            <label></label>
          </div>
        </div>
      </form>
    </div>
  );
}
