const deliveryStores = [
  {
    store: "Mcdonald's",
    tags: ["American", "Fast Food", "Burgers"],
    time: "20-30",
    price: 5.99,
  },
  {
    store: "sweetgreen",
    tags: ["Healthy", "Salads"],
    time: "30-45",
    price: 4.99,
  },
  {
    store: "Starbucks",
    tags: ["Cafe", "Coffee & Tea", "Breakfast and Brunch"],
    time: "10-30",
    price: 3.99,
  },
  {
    store: "Tommy's Pizza",
    tags: ["Pizza", "Salsa", "Breakfast, Lunch & dinner"],
    time: "10-15",
    price: 2.99,
  },
  {
    store: "Burger King",
    tags: ["American", "Fast Food", "Burgers"],
    time: "15-20",
    price: 6.99,
  },
  {
    store: "iHop",
    tags: ["Da Best", "Cafe", "Breakfast"],
    time: "30-45",
    price: 9.99,
  },
];
export default function DeliveryExamples() {
  return (
    <section class="store-delivery-examples">
      <h3>Food Delivery In New York</h3>
      {deliveryStores.map((store, index) => {
        if (index === 2) {
          return <hr id="store-seperator" />;
        }
        return (
          <div key={store.store} class="store">
            {/* ADD AN IMAGE FOR EACH STORE AND STYLE IT */}
            <h4>{store.store}</h4>
            <p class="store-tag">
              ${" "}
              {store.tags.map((tag) => {
                return <span> - {tag}</span>;
              })}
            </p>
            <div class="store-tag-border-div">
              <p class="store-tag-border"></p>
              <p class="store-tag-border"></p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
